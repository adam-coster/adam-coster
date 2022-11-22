_Note: This post is fairly technical and written for web developers. It assumes a basic understanding of web and authentication terminology. The conclusion is a bit more high-level, so you can skip right down to that if you don't need details!_

One of our core goals as a video game studio is to make our games as cross-platform as possible, so that players can pick up right where they left off no matter what device they're using. It's all about _data portability_. To make our players' data portable and accessible we have to implement a _lot_ of login methods (email, Steam, Nintendo, Xbox Live, etc etc), both in-game and on our website, in order to centralize everything around individual player accounts. The more login methods we provide, the easier life is for our users and the more portable their data becomes.

This past summer Apple announced their new "Sign in with Apple" feature (**SIWA** from here on out), and thus finally joined the infinite pool of login providers on the web. As with any single-sign-on method, this is great for users since they can use their Apple accounts to sign into apps and websites using SIWA instead of having to create yet another set of new account credentials. In principle it's also great for developers, since we can leverage someone else's security features and user pool while streamlining onboarding into our own services.

Unfortunately things aren't so streamlined for developers who want to provide SIWA for their users on websites, as Apple has deviated enough from existing standards to require custom implementation (i.e. you can't use your generic OAuth2 code). There are [tutorials](https://developer.okta.com/blog/2019/06/04/what-the-heck-is-sign-in-with-apple) out there for the initial steps to get up and running with SIWA so I won't re-invent the wheel here (though I'll note that it is quite convoluted compared to other OAuth providers, largely because it is app-centric). Instead I want to focus on the technical hurdles and security implications of SIWA implementation and how I dealt with them, as well as whether or not implementing SIWA for your own websites is a wise or even possible move.

## POSTs, Cookies, and CORS, OH MY!

SIWA is _almost_, but not quite, OAuth2. It's deviations are minor but have important implementation and security implications.

In standard OAuth2 you send your user to the auth provider's website, the user does some authentication stuff over there, and then the auth provider sends the user back to a "callback URL" on your site. In standard OAuth this is done with a GET request, but SIWA uses a POST instead. Presumably Apple made this change as a privacy mechanism, since POSTing keeps the parameters out of the URL and thus safe(r) from prying eyes.

In many ways a POST redirect is no different than the GET redirect -- you just have to have some Apple-specific server logic that looks for a POST version of your standard OAuth2 callback, and then parse parameters out of the body instead of the URL. No biggie, right?

Unfortunately there are two security features of the modern web that, ironically, interact poorly with Apple's approach: "SameSite Cookies" and Cross-Origin Resource Sharing (CORS). Let's hit those one at a time.

### SameSite Cookies

Let's say you're using cookies for some important purpose, like session management. When Apple redirects the user back to your site to complete the authentication loop, you're going to want your user's cookies to come along for the ride so that you can match up session data (or whatever is stored in those cookies) to the login results. This means you need "cross-origin" cookies.

(This "cross-origin" terminology is a bit confusing, since the cookies are always _for_ your site. It's the _request_ that is cross-origin.)

Cookies have an optional parameter called ["SameSite"](https://www.owasp.org/index.php/SameSite) that can be set to "lax" or "strict". "Strict" cookies don't travel with cross-origin requests at all, which would prevent you from getting cookie values via _any_ OAuth2 redirect, no matter the provider. This is where "lax" cookies come in: they can still carry your cookies cross-origin. However, the browser only sends lax cookies along with GET requests: while lax cookies can be used for standard OAuth redirects they cannot be used with Apple's POST-based approach.

So what's a dev to do? You could simply skip the "SameSite" field for any cookies required for the login process, thus allowing cross-origin cookies for all requests (whether by GET or by POST), but that would generally reduce your site's security.

My approach was to add an additional, SameSite-free, path-scoped (just to the callback URL), short-lived cookie only during Apple login that gets "consumed" on completion of the login loop by being unset. That cookie contains a single payload with everything I need to complete user login.

This can get unwieldy if you have a more complex case with a myriad of cookies, however. In that scenario You could take the same approach for each required cookie by appending a post-fix to their names (e.g. `-insecure` or `-anysite`), so that your server-side logic can iterate over both the insecure and secure versions of your whitelisted cookie names where appropriate.

### Cross-Origin Resource Sharing (CORS)

As with cross-origin cookies, cross-origin requests are also a problem. Modern web security wisely dictates that you block all cross-origin requests by default, and then whitelist allowed origins or public resources on a case-by-case basis.

During a standard OAuth callack (which, again, uses a GET) the request is _not_ treated by the browser as cross-origin. It behaves as if you simply changed the URL in your browser's address bar.

Because "Sign in with Apple" uses a POST, however, the browser _does_ treat it as a cross-origin request. You'll need to update your CORS rules to allow the `https://appleid.apple.com` origin, ideally just for POSTs to your SIWA redirect URL.

## Domain Verification

So you've got SIWA up and running and your users are logging in. All's well, right? Wrong! You'll find that when you try to send emails to your users those emails will be bouncing all over the place.

This is because of Apple's "private relay" email service. When a user first signs into your service with SIWA, they'll be able to choose whether to share their real address with your service or a "private relay" address provided by Apple. This is a nifty feature that (in theory) provides some great benefits for Apple account holders. In particular:

- Users can worry less about the potentially-bad security practices of the services they sign into, since exposure of their private relay address can't come back to harm them (much).
- Users can worry less about the service selling their email address to spammers or other third parties, because Apple whitelists who is allowed to send emails to the private relay address.

To make that latter benefit work, we as developers must provide Apple with the list of email addresses that we'll be using to send messages to our private-email-using users, and we have to prove to Apple that we own the domain responsible for those email addresses. Until you've done so, all of your email messages sent to your private-relay-using users will bounce.

The only method that Apple provides for verifying domain ownership is to upload a unique file to a specific `/.well-known/` URL hosted on your domain. That in itself isn't a problem, as this is a pretty standard approach to domain verification. The problem is that this site verification is needed for _email_ whitelisting, and so it must be at the _domain level_ (e.g. `bscotch.net` instead of `www.bscotch.net`).

To create an understandable user experience and prevent splitting SEO on your site, it is best practice to always use _either_ your naked domain _or_ the primary `www` (or whatever) subdomain for all of your URLs. Because naked domains aren't even real URLs (according to specs), best practice (or common practice, anyway) is to redirect subdomain-free requests to your `www` subdomain. Even Apple does this for `apple.com`, which redirects to `www.apple.com`.

And thus, the rub: you must verify a naked domain but Apple does not allow you to do so with a redirect (e.g. 301, 302, etc) to a non-naked one. In other words, you cannot verify your domain _unless_ you host your site on your naked domain. It is likely that in any complex hosting case you cannot easily make this change without breaking a lot of things, and even if you can it's a bad move for SEO unless you can specifically only skip the redirect for this one URL.

Given that Apple needs us to verify `domain` ownership (not `subdomain` ownership) in order to properly whitelist email addresses, the appropriate way to do this is not to use the hosted-file approach (though that could be an option for sites using naked domains, or if Apple allowed redirects) but to instead use the standard approach of asking for a specific CNAME DNS record to be created.

Until Apple provides more appropriate domain validation methods, many developers will not be able to add SIWA to their websites. That's where I got stuck: after all the work of implementing SIWA I can't even provide it to my users!

And an additional note: it's possible that even if you are able to verify your domain, you may not be able to send emails to private-relay users if you are using a third party service to send your emails. While I haven't been able to get to the point of testing this myself, there are many posts in the Apple Developer Forums indicating that this is a problem.

## Conclusions

The interesting thing about Apple's approach to Single Sign-On is that their deviations from the norm are clearly meant to improve privacy and security but, ironically, are likely to _decrease_ privacy and security instead. For websites, anyway.

It's definitely true that using a POST instead of a GET adds a layer of privacy to the OAuth process. In order to get that new security, however, developers have to poke holes into their cross-origin policies. While developers and businesses who strongly value security are likely to do the work to minimize the size of these holes, the fact that they have to make _any_ changes to their code and cross-origin policies increases the probability of new security holes being created. Even worse, developers and businesses who aren't as security minded, are less experienced, or are just stretched thin for time, may simply turn off CORS protections to get SIWA working.

Further, developers will not be able to use tried-and-true, well-tested, off-the-shelf solutions like they could with standard OAuth2. That means introducing new, necessarily less-tested and less-secure code in order to handle SIWA, and making changes to server logic to accomodate that code. And any change to existing code is a security risk.

Finally, the primary reason that we provide 3rd party authentication options (like SIWA) in our own services is the same as why anyone else would do it: to simplify account creation and access for our users on our own sites, with the end goal of having an email address stored on our own servers so that we can _contact our users_. We need to be able to contact our users for all kinds of reasons, in particular for account management and support. While SIWA's private relay option is a commendable step towards improving user privacy while also allowing non-Apple services like ours to contact our users, its current implementation is too strongly opiniated and as a consequence may simply not work depending on your use case. For example, since you must whitelist each address you use to send emails you may have trouble if you have a support service that uses a different sending address for every ticket.

By deviating from standard OAuth2 and making it difficult to email private-relay users, Apple has made implementation of SIWA costly and risky to developers and businesses, which means that fewer businesses will end up using it. In the same way that the inconveniences of security cause people to find insecure work-arounds (e.g. bad passwords), the cost of implementing SIWA will cause developers and businesses to have to stick to "less secure" (in Apple's view, presumably) login methods.

So, if you are considering implementing "Sign in with Apple" into your site/app, first evaluate the following:

- Do you need to be able to email users who log into your website? If so:
  - Can you whitelist every email address that will be sending emails to your users?
  - Is your email-sending setup compatible with Apple's "private relay" service?
  - Can you host a file at a specific address on your naked domain, with HTTPS?
- Can you add/change server logic to allow the authentication callback to come in by POST?
- Are you allowed and able to make changes to CORS policies on your server? Can you do so without introducing new vulnerabilties to your site?
- Do you need to associate any user cookies with the login callback? If so, are you allowed and able to change the `SameSite` properties of those cookies, or able to add new cookies to make that work? Can you do all of that without introducing new vulnerabilties to your site?

If that evaluation doesn't look good for your use case, I suppose all that's left is for you to join me in waiting for Apple to make SIWA a more broadly viable option for websites and thus a more broadly available feature for Apple users. To do so, SIWA would have to:

- [Required] Allow for domain validation methods that are more appropriate for the goal of email whitelisting.
- [Required] Stop the requirement that all sender addresses must be whitelisted, and make sure that sending emails using 3rd party services (like SparkPost or Mailchimp) is possible.
- [Optional] Just use regular old OAuth2.

Outside of being able to send emails to private relay users, I've got "Sign in with Apple" fully implemented and ready to go in Rumpus. I'm excited to be able to open it up to our players -- hopefully that day comes soon!
