---
slug: super-charge-email-google-workspace
title: 🚀 Super-charge your email with your own domain, routing, aliases, and
  catch-alls via Google Workspace
description: >
  Using an email address with your own custom domain signals
  professionalism. But that's not the only benefit!
editedAt: 2021-05-17T18:18:23.632Z
publishedAt: 2021-05-16T23:32:58.825Z
tags:
  - productivity
  - email
  - tutorial
  - google
  - business
crossPosts:
  - https://dev.to/adamcoster/super-charge-your-email-with-your-own-domain-routing-aliases-and-catch-alls-via-google-workspace-44i
---

There's a good chance you're still using an email address you set up in college, or even in high school. Or a personal email address that you wish was more professional.

Changing your email address, like changing your phone number, is a _pain_. You've probably done it as rarely as possible. Maybe you just accumulated new ones, and find yourself constantly juggling accounts.

But what if you could change your email address at _any moment_ with the slightest effort? Or have different addresses for work and play? Plus another for your side hustle? Or one for each of your 10 side hustles? Even separate addresses for every single service you sign up for, to make your services harder to hack into and let you see _exactly_ who is selling your information?

What about making addresses for family members, collaborators, or employees? What if you could create email accounts for _other people_ with your own domain, all addresses that you still own and control so that no important data will ever be lost no matter who comes and goes?

And what if that was all centralized, and easily changeable at your whim without any stress?

This article is about how you can do all of that in Gmail, through Google Workspace. Whether it's for yourself, your family, or your business, having full control over your email is a powerful thing.

Unfortunately, there's no way around having one last migration ([Google has documentation for that](https://support.google.com/a/answer/6251069)). But _only this one last time_! And, also unfortunately, you can't do it for free. But given how central email is to our lives, I think you'll find the low cost worth it.

💡 Tip: If you don't want to deal with migration (much data cannot even be migrated!), you could still use all the tricks here and just reroute mail to your existing inbox!

_Note: To make this long post more readable, I've collapsed some content into expandable sections. The little triangles that toggle them open can be easy to miss!_

<details><summary>🤑 What'll it cost you? </summary>

- **Personal domain(s):** You'd probably own these anyway for your portfolio/personal site. Either way, per domain they'll cost you $8 USD to... well, the sky's the limit! It all depends on your registrar, which TLD (top-level domain, like `.com` or `.dev`), whether you have to buy it from a squatter, and so on.
- **Google Workspace:** They of course have multiple tiers here, but the lowest tier ("Starter") is $6 USD/mo per user and has all the stuff you'd be getting with a free Gmail account plus a million other things. That's all I've needed to run my business!

For example, for my _personal_ use I have a Google Workspace subscription with one user (me) at $6 USD/mo that centralizes three domains I own (each at $12/yr through Google Domains). So it comes out to $9/mo for me to own three domains and have super-powered email.

</details>

<details><summary>What about non-Google alternatives?</summary>

Presumably the features I described above are also available in non-Gmail email services. I'm not specifically advocating that you use Google; it's what I know.

This article will help you understand how all these features would work for other services, so if you don't want to use Google then use this article as something to skim for an overview of what to look for in other services.

</details>

## 🔨 Getting and setting up Google Workspace

To use Google Workspace, you're going to need a custom domain. (Or domains, plural!) Finding ones you like is definitely the hardest part of this process. The nice thing is that you can always add another domain to your Workspace and immediately start using it as if it had been your favorite domain all along (all without having to tell people to contact you at a different address or migrate all your mail), so you won't get permanently locked into a choice your past self made.

I use [Google Domains](https://domains.google) as my registrar. (Registrars are entities that sell web domains.) It's not the cheapest option, nor the most fully-featured, but for me the convenience of having everything under one roof is worth that. Plus I rarely need fancy features from my registrar: as long as I get free privacy and security features and easy DNS (Domain Name System) management I'm happy.

If your domains are registered via Google Domains (or you transfer them to it) then adding Workspace is dead simple. Just go to your domain in the Google Domains site, and then:

`Domain Overview > Get a custom email with Workspace`

And follow the prompts. Google will even set up your DNS records for you. Magic!

If you're using a non-Google registrar then... uh... hopefully the main [Google Workspace site](https://workspace.google.com/) has good onboarding and your registrar has a nice UI.

I'm sure you'll be fine...

## 🔑 Log into your new Workspace Gmail account

Part of the Google Workspace setup included you creating your first account, which also results in an email address.

Let's say your domain is `my-amazing-domain.tld` and your name is... uh... Flux. So your email address would be `flux@my-amazing-domain.tld`.

Anywhere you would see a Google login page (including websites that use Google sign-in) you can plug in your new email address and password, just like you would with a plain Gmail account.

## 🧭 Finding and navigating the Admin console

<details><summary>💡 Tip: Don't use the Admin mobile app </summary>

It does have a mobile app. Technically. But the mobile app has super limited features and the general consensus seems to be: don't use it.

Use a non-mobile browser for all the stuff we talk about here.

</details>

When you create a Workspace account, you get access to a new "Admin" console for managing it. You can get to the Admin console in your browser, either directly via [admin.google.com](https://admin.google.com) or via your Gmail inbox using that incomprehensible 3x3 dot-grid icon in the top right:

![Screenshot showing the grid icon in Gmail that displays all Google apps, including the Admin app](https://i.imgur.com/sJCMPSI.jpg)

The Admin portal is where most of the power of Workspace comes in. I encourage you to poke around and explore all the things you can do.

The UI has some... I guess we'll say, "design issues." If you get confused or stuck, trust me when I say it's not your fault. If you think there should be an option somewhere but can't find it, try hovering over or clicking things. There are secrets everywhere.

<details><summary>Example of the console's confusing UI </summary>

At [`Admin > Apps > Google Workspace`](https://admin.google.com/ac/appslist/core) you may see something like this:

![Screenshot of the Workspace Services listing in Google Workspace admin console](https://i.imgur.com/U4nMLVz.png)

Once you get there you'll probably try to click the checkbox to select Gmail, only to find that this just lets you turn services on or off. Then you might notice that if you hover over the Gmail row one of those three-vertical-dot icons appears on the right! But all that lets you do is turn the service on/off, too. So then you'll think you must be in the wrong place... You're not! Turns out that the whole Gmail table-row is a button/link that takes you to the Gmail Admin settings.

</details>

## 👤 Aside: User Profiles

While this article is about the Gmail Admin part of Google Workspace, there's a related point of frustration you'll immediately hit: if you try to add a picture to your profile, you'll see that you _don't have permission to do that_.

That's a super weird default, especially for the _admin user_ (you).

To fix it, go to [`Admin > Directory > Directory Settings > Profile Editing`](https://admin.google.com/ac/directory/profileediting).

## 👥📧 Users, "recognized", and "unrecognized" addresses

You're probably used to thinking about email addresses as being synonymous with a user account. An email address is something that goes to an email inbox, right?

While an email address _can_ point to an inbox, it doesn't have to. An email address is just like a URL: _the server that controls the address/URL can decide what it means_.

Any time you send an email, a server (i.e. "someone else's computer") somewhere catches that request and decides what to do with it. And it could do anything! Re-route it, modify it, block it, auto-send something back to the sender, add logs, evaluate spamminess, flag the sender as a spammer, convert the email into Pig Latin, send a copy to an archive, parse it with a robot to do cool weird stuff that has nothing to do with email, and on and on.

Literally anything!

So let's clarify and create some terms so you don't get lost:

- **User:** An account _within_ your Workspace, identified by a unique email address _as a username_, that has its own Gmail inbox, Google Docs, and so on. It's probably assigned to a single person, though it doesn't have to be. It's the same concept as any other Google account, just managed by your Workspace.
- **Envelope:** A term used by email services that is basically synonymous with "email address".
- **Address:** A unique email address for one of the domains attached to your Workspace. E.g. `me@my-rad-domain.tld`. While a User has an Address, an Address _doesn't have to belong to any user_. A user could have multiple addresses that all point to the same inbox. Addresses can be used for lots of things, including identifying a User, identifying a Group, and setting up routing rules.
  - **Recognized Address:** An address that is assigned to a known resource within your workspace (e.g. a User, Group, or other kind of entity).
  - **Unrecognized Address:** An address that doesn't point to any known resource.

💡 Tip: While you may end up with many aliases, you only have _one username_. Every time you sign into your account, or use Google Sign-in somewhere else, you'll need to use your account's _primary_ address as the username.

## ♾ Create infinite addresses and aliases

There are three main approaches to bending email addresses to your will in Workspace:

1. Use "mapping" to set up one-to-one mappings of one address to another: [`Admin > Apps > Google Workspace > Gmail > Advanced Settings`](https://admin.google.com/AdminHome?hl=en#ServiceSettings/service=email&subtab=filters) `> Recipient address map`
2. Use "routing" rules to set up more complex mappings: [`Admin > Apps > Google Workspace > Gmail > Advanced Settings`](https://admin.google.com/AdminHome?hl=en#ServiceSettings/service=email&subtab=filters) `> Routing`
3. Use "aliased" domains so that `me@professional-af.tld` and `me@everything-is-a-joke.tld` all work synonymously with `me@main-domain.tld`: [`Admin > Account > Domains > Manage Domains`](https://admin.google.com/ac/domains/manage)

In all cases, the re-routed addresses basically work as aliases. Mail sent to them gets routed right into the inbox (or other target) you want them to go into.

### ⚠ Important! ⚠

Before you do any custom routing, there are two things you need to know:

1. You could accidentally create routing that prevents you from getting emails you expect to get. Do experiments by sending emails from _other_ accounts to see if they appear where they're supposed to. If you mess something up, don't worry. As long as you can log into your Workspace Admin console you can fix it.
2. **You must disable the default "Default Routing" entry** or else nothing else will work!

To disable the default "Default Routing" setting, go to [`Admin > Apps > Google Workspace > Gmail > Default Routing`](https://admin.google.com/ac/apps/gmail/defaultrouting?hl=en).

You'll see an entry in a table, with a button that says "Disable". Disable it! You can always turn it back on later (unless you delete it).

![Screenshot showing the default entry of the Default Routing table in Google Workspace](https://i.imgur.com/x6LsoLL.png)

I can't figure out what that default entry is doing. It wasn't there the first time I set up G Suite, years ago. All I know is that it prevented any other routing rules I added from working.

### 🗺 Recipient Address Mapping

[`Admin > Apps > Google Workspace > Gmail > Advanced Settings`](https://admin.google.com/AdminHome?hl=en#ServiceSettings/service=email&subtab=filters) `> Recipient address map`

Now for the simplest option: 1-to-1 mapping. This approach is particularly useful if you want to take an _allowlist_ approach to addresses at your domain, so that people have to know one of your explicitly-defined addresses to be able to send you anything. This is great for reducing unsolicited mail.

<details><summary>Sample use cases </summary>

- Map `sales@mydomain` to `your-name@mydomain` to create a role-specific address that can be changed to point to a different user at any time.
- Map `very-important-stuff@mydomain` to both your and an assistant's addresses.
- Map `for-robots@mydomain` to a 3rd party email-based service that will do cool stuff with emails that get sent to it.
- Map `past-employee@mydomain` to `new-employee@mydomain` for seamless employee onboarding.
- Map `old-address@secondary-domain.tld` to `new-address@primary-domain.tld`
- Map `temporary-address@mydomain` to `permanent@mydomain`, so that you can sign up for things that might end up selling your address and then later re-route messages coming into `temporary-address` right into spam (or cause them to bounce).

And so on and so forth.

</details>

Google has [pretty clear instructions](https://support.google.com/a/answer/4524505) for setting these up, and the interface isn't too complicated.

### 🚦 Routing

[`Admin > Apps > Google Workspace > Gmail > Advanced Settings`](https://admin.google.com/AdminHome?hl=en#ServiceSettings/service=email&subtab=filters) `> Routing`

Workspace's "Recipient Address Mapping" rules (described above) are just stripped down and simplified routing rules. You can do all that stuff and more with the fancy, full-featured Routing options.

<details><summary>Sample use cases </summary>

- Do all the stuff listed in the prior section.
- Create a catch-all address, so that any Unrecognized Address will route to you. This is great if you want to use a different address for every service you sign up for, for example.
- Route mail from _specific_ senders (or groups of senders) to a different address. Maybe you want most of your mail to go to an assistant or to an automated service, but certain mail to _always_ go right into your inbox.
- For a service that requires a _public_ email address, create a route for that address that only allows emails _from that service_ through. That way you can use the service without getting spammed! (Looking at you, npm...)
- Use a regex pattern to apply rules to a _collection_ of addresses. This can provide a nice middle ground between the 1-to-1 mapping and catch-all approaches.
- Add a prefix to messages from certain senders.
- Create spam traps that dump messages right into spam before they even hit your inbox.
- Prevent a range of addresses from ever going to spam.
- Add custom headers, for auditing purposes or for use by robots.
- Re-write the recipient address while keeping the domain or username parts constant.
- Strip attachments from certain emails.

And more!

(While I've mostly been talking about routing email sent _to_ your domain, you can do all that same stuff with email sent _from_ your domain!)

</details>

[Google's docs for routing](https://support.google.com/a/answer/6297084) are accurate and in-depth, though it gets a bit complicated. I encourage you to read through the details for all the options there, but the key concepts are:

- Inbound vs. Outbound: You can apply a routing rule to messages coming in, going out, or both!
- Envelope filter: "envelope" just means "address". You can filter (limit) which addresses are affected by a rule.
- Envelope recipient: The main way you re-route email is by modifying the recipient!

<details><summary>Sample options for a catch-all address </summary>

- `✅ Inbound` (applies to email being sent to you)
- `Headers > ✅ Add X-Gm-Original-To`
- `Subject > Prepend Custom Subject`, with something like "[rerouted]". I use this so that I can tell which emails in my inbox came from the catch-all route.
- `Envelope Recipient > ✅ Change envelope recipient`. This is how you make it so that the fake address gets changed to a real one. You've got some options. You'll probably want to set it to `recipient-address@existing-domain` or fully custom `recipient-address@some-other-domain`. Whichever address goes to the _actual inbox_ you want to receive this stuff.
- `Show Options > Account Types > ✅ Unrecognized/Catch-all` (this is at the very bottom of the form) to only apply this rule to Unrecognized Addresses.

</details>

### 🔗 Aliased Domains

[`Admin > Account > Domains > Manage Domains`](https://admin.google.com/ac/domains/manage)

Finally, the simplest kind of routing in Workspace is to alias an _entire domain_ to your primary domain, causing all emails sent to any of those domains to route to the primary one. So `this-username@onedomain.tld` will get routed as if it's `this-username@someotherdomain.tld`.

This feature is what allows you to centralize any number of domains under one Workspace, giving you tons of flexibility and address future-proofing. If you buy a new domain tomorrow and want to start using it to replace your old address, you just can! And you can route all messages sent to it right to your existing inbox. Your old addresses will keep on working, so you don't have to worry about lost connections.

Plus, you can do all that same routing stuff we talked about earlier, but can apply different rules per domain!

A big functional difference compared to using mapping/routing is that the addressee ("envelope recipient") is not rewritten. If you look at the "to" field for incoming, aliased addresses, you'll see that the originally-targeted domain is still there. Even if your inbox uses a different domain!

This is a huge benefit over the other forms of routing, since the others lose information about the original intended recipient address (you can use the `Add Subject Prefix` and/or `Add X-Gm-Original-To header` options to mitigate that).

Note that Workspace gives you [two ways to centralize domains](https://support.google.com/a/answer/7502379):

1. As Aliases (as described in this section).
2. As Secondary Domains, which do _not_ work out of the box as aliases. You can still use custom routes to map addresses from one domain onto another, but they won't be true aliases (the envelope recipient will get rewritten). This option is intended for use cases where you have different sets of _users_ for each domain.

To [add your other domains](https://admin.google.com/ac/domains/manage) you'll have to first prove ownership with a DNS Text record, and then allow email routing with a DNS MX record. This is also very easy if you're using Google Domains. In any case, you'll see help links and prompts that should get you all squared away.

💡 Tip: The "Manage Domains" Workspace UI is another confusing one: try hovering over the rows to have the things you can do pop up as buttons.

## 🎉 Other fun things you can do with Google Workspace

This article is all about Gmail, but I'd be remiss if I didn't point out some other cool things you can do, ever so briefly:

- Replace the Google logo with a custom one: [`Admin > Account > Account Settings > Personalization`](https://admin.google.com/ac/companyprofile/personalization)
- Get the newest Workspace features quickly: [`Admin > Account > Account Settings > Preferences > New Features > Rapid Release`](https://admin.google.com/ac/accountsettings/preferences)
- Customize Google Apps URLs: [`Admin > Account > Account Settings > Custom URLs`](https://admin.google.com/ac/accountsettings/customurl)
