HTTP (Hyper Text Transfer Protocol) is the main way you get information from other people's computers (a.k.a. "the cloud", a.k.a. "the Internet"). It's how browsers fetch web pages, and how automated systems talk to web services.

Here we'll be talking about HTTP in a practical way, under the assumption that you don't care about the technical details and need to know just enough to be empowered to make use of HTTP in your automation toolkit.

There are lots of good sources out there for [more technical details](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages) if you want to dig deeper, but this should be a solid start.

## Client & Server

There's no way around some of the HTTP jargon since you'll see them out in the wild and need to know what they mean. Two of the biggies are "Client" and "Server" and their near-synonyms.

- **Client**: An entity that wants to talk to some other entity (the Server), and thus initiates "requests" to it. The word "request" is perfect since Clients don't get to make *demands*. They ask politely, and the Server decides what happens. "Client-side" is an oft-used adjective to describe things happening on the Client. Examples of clients: browsers, games, desktop apps that use a web service, apps on your phone, etc.
- **Server**: The entity that a Client makes requests to, and that might send responses back (if it feels like it). HTTP servers are software applications that know how to listen for, parse, and respond to HTTP requests from clients. "Server-side" is an oft-used adjective to describe things happening on the server.
- **Local**: You'll sometimes see "local" or "locally" used as a synonym for "client". Seen in phrases like, "the server doesn't process everything for you, you'll have to finish up *locally.*"
- **Remote**: You'll sometimes see "remote" (meaning "distant", as in "remote control") used as a synonym for "server". This creates symmetry with "local" referring to the client, and makes sense since *usually* the servers we care about are *over there somewhere* (remote) while the clients we care about are *right here in front of us* (local).

The directionality here is important: HTTP requests *are initiated by the client* and the server *sends responses* back. Servers do not send requests to Clients (by definition). Not over HTTP, anyway.

> ⚠ These terms are overloaded so it can get confusing. People often use "the client" to refer to the *computer* or even the *person* initiating the HTTP request, even though the real client is the *application* running on that computer. Similarly, you'll often see "the server" used to refer to the *computer* instead of the *server application* running on that computer. To add even more confusion, you can run client and server applications *on the same machine* -- in that case the terms "local" and "remote" can still be used but now make less obvious sense.

> ⚠ Client-Server relationships exist for all kinds of other "protocols" (ways of sending and receiving data over the Internet, one of which being HTTP), but here we're just talking about HTTP.

## Requests & Responses

HTTP is all about "Client Requests" and subsequent "Server Responses". Skipping the technical bits, the flow of an HTTP loop looks like this:

1. Client composes a request for some particular goal
2. Client sends that request to a Server
3. Server receives that request and parses its contents (if it wants to)
4. Server composes a response based on the contents of the request (if it feels so inclined)
5. Server sends the Response to the Client. (Server may instead choose to not respond at all!)
6. Client receives the Response and parses its contents
7. Client performs some task based on the Response contents


For example, let's take an imagined Weather App (the Client) and its Server:

1. App gets launched by the user and uses the device's GPS to find the user's location, clock to get the time, and file system to load the last retrieved forecast. It sees that it's been a while since App fetched updated weather info for this location, so it creates a request to get the updated forecast (the request includes the user's location, and any other info it wants to send to the server)
2. App sends the request to the Weather server
3. Server receives the request and parses its contents
4. Server checks the request for information about the user and sees that they have purchased the $9.99/month "In-Depth-Weather Plan". So it fetches to-the-minute forecast data for the provided location and creates a response that includes this data in the body. (Maybe it also stores all the device and user information sent to it, so that the company selling the app can sell that data later... but that's a different topic!)
5. Server sends the response to App
6. App receives the response and parses it.
7. App sees that the data is the In-Depth type, so it runs local code to render a per-minute graph on the user's screen.

### Anatomy

What does it mean to "compose" a request or response? What do these things look like?

While there are nuances and technical details, you can think of both HTTP requests and responses as boring old text files with three main sections:

1. **Start Line** (for requests) or **Status Line** (for responses). This line provides enough information to indicate that the rest of the content consists of an HTTP request/response, plus some summary info.
2. **Headers**. These are `Key: Value` pairs the contain metadata about the request/client or response/server. Request headers often include things like what filetypes the client can understand, the preferred human languages of the client user, and credentials for a logged-in user. Both Request and Response headers will contain information about the Body section (if there is one), such as its type, size, and encoding.
3. **Body** (Optional). Some sort of data being sent to (requests) or received from (responses) the server. For example, the content of a PNG you're uploading or an HTML document you're downloading. Many of the Headers are used to provide information about this data.

The biggest difference between requests and responses is that first line, the rest is minor details. So let's see how those first lines compare!

- **Request "Start Line"**: Consists of an HTTP method ([more on that shortly](#http-methods), a URL, and the protocol type and version: `METHOD URL HTTP/VERSION`. For example, if I'm uploading an image to `myimagehost.example.com/images`, my Start Line might look like this: `POST /images HTTP/1.1`.
- **Response "Status Line"**: Consists of the protocol type and version, the status code ([more on that shortly](#http-status-codes)), and a message about the status: `HTTP/VERSION CODE MESSAGE`. This line is used to summarize the outcome of the request in a generic way. For example, a successful image upload might result in a response with status line `HTTP/1.1 201 Created`. Failing the upload because I'm not allowed might result in the status line `HTTP/1.1 403 Access Denied`.

### HTTP Methods

An "HTTP Method" is one of a handful of keywords (like `POST` or `GET`) that tell the server what kind of action you are trying to take. When describing a request, people often include the method. So they'll say things like "Send a GET Request to `example.com/rad-webpage`".

While there are [standards and best-practices](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) for which Method to use for any given purpose, in the real world it's sorta all over the place. There is no Internet Police to enforce how HTTP Methods are used, and there are all kinds of reasons why any given website might use them in a bespoke way. (And not always *good* reasons!)

I've summarized the most common Methods below, including what they're *supposed* to be for versus how they're *actually used*.

- `GET` is for, well, *getting* things. It's the method your browser uses when you click a link or type a URL into the address bar. GET requests are not *supposed to* include a Body (but the Internet is a silly place). If you want to fetch a webpage, download an image, or "get" anything from the web, you'll probably use a GET request. In practice, you'll sometimes find GET requests used to *change* things on the server as well — in those cases the content of the URL should give you a hint about what will happen when you send the request.
- `POST` is for *posting* (uploading) things. When you fill out a form on a website and hit that submit button your browser sends a POST request to the server with all the form data. POSTs are supposed to be for *adding new things* to a server. In other words, if you sent a POST to upload an image twice in a row, there should be two copies of that image uploaded to the server now. Historically, GET and POST were the only HTTP methods supported out of the box by browsers, so POST tends to get used for all kinds of purposes. It's pretty common to find services that *only* use GET and POST requests.
- `DELETE` is for, you guessed it, deleting things. DELETE requests are not supposed to contain a body — the URL is supposed to point to the thing you want to delete.
- `PATCH` is for modifying a subset of something. For example, if you want to update the author of a blog post, you might need to send a PATCH request indicating that fact. In practice, people often use `PUT` or `POST` for this purpose instead.
- `PUT` is for *completely replacing* something that already exists. It's like `PATCH`, except you replace the whole thing instead of modifying part of it. Since that's a subtle distinction, and because the world is chaos, you'll often find `PATCH` or `POST` used instead.

### HTTP Status Codes

An "HTTP Status Code" is intended to give a rough idea of why a request succeeded or failed, and therefore hint at what might be found in the body (if anything).

As with HTTP Methods, there are [standards and best-practices](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) for which Status Codes to use under any given scenario. But, also as with Methods, in the real world it's a lot more chaotic than that. I've summarized the most common status codes below, and what you might see out in the wild:

- `200` OK. This is the server giving you a thumbs-up and saying that it understood what you were trying to do. So if you got a 200 then you got what you wanted, right? NOPE! There's nuance here, on top of the fact that the person who wrote the server logic might have just chosen to send a confusing status code. Some servers *only* reply with 200 codes and provide details in the body! An example of the nuance is: what if your request was a search, and there were no results? The server could send back a 200 with an empty list of results, to indicate that the search ran without error but found nothing. But it could also send a 404 status without any results to indicate the same thing.
- `201` Created. This is supposed to mean that you uploaded something new (like an image) and that thing now exists. You'll often see 200 used instead.
- `204` No Comment. A 204 indicates that the server did what you asked, but doesn't have anything to send you back (no response body). You'll often see 200 used instead, and even see 204s that *do* include a body!
- `2XX` There are other 200-level codes that mean various things, but they aren't very common. You can usually assume that things happened as intended if you get a 200-299 status code.
- `3XX` Are various forms of "Go look over there instead!" (a.k.a. "redirects"). You'll get these if something's URL changed but the server knows about the old URL, or if the client already has the thing it's trying to get and that thing hasn't changed on the server.
- `400` Whoopsy! All `4XX` status are some form of "You messed something up, you silly client!" 400 is the most generic one. It's often used as a catch-all for every kind of client error, so you'll typically need to look for an explanation in the response body or headers.
- `401` Bad Credentials. You should only get this if your request included access credentials (like a password) but they are somehow invalid (expired or malformed, typically), or if you are trying to connect to a password-protected server without a server password.
- `403` Access Denied. This is the server flipping you the bird and saying, "Nope, not today, Satan!" You'll get this for protected actions if you have insufficient permission. It's similar to 401, and sometimes used instead, but is supposed to mean "There's nothing wrong with your credentials (or lack thereof) but *you* are not allowed to do this thing you're trying to do."
- `404` Not Found. The old classic. You've probably heard of it. It's supposed to mean that the action you wanted to take on a thing is impossible because the thing doesn't exist. It is also used for the more subtle, "That thing doesn't exist *as far as you're concerned*". For example, if I request something that *does* exist, but my user isn't allowed to access that thing, then I could either get a 403 ("you aren't allowed to see that") or a 404 ("as far as you're concerned, that thing doesn't exist").

### Bringing it all together

In practice, you *will not be sending or receiving raw requests*. You'll be using tools that end up doing that for you, and that abstract away the details and make it easier for you to add all the information required for sending a request or processing a response. Still, it's useful to see what the raw stuff looks like because it's simpler than you'd expect and it will help you understand what your tools are doing.

Let's look at some (fake) examples of raw requests and responses that make use of all the stuff we talked about above. We'll use the Weather App and its Server from before:

- The user boots up the App, which checks to see if the user has purchased any IAPs by requesting that info from the App's Server (via the URL `http://fake-weather-app.example.com/purchases`). The **request** might look like this:
    
  ```
  GET /purchases HTTP/1.1
  Host: fake-weather-app.example.com
  Accept: application/json
  Authentication: Basic SomeCredentialsProvingUserIdentity
  Agent: Fake Weather App/v11.0.23 Android/Google Play
  ```
- The Server receives the request, checks the Authentication to make sure it's legit, adds info to its logs, and then finally checks its database for purchases made by this user. It doesn't find any! It then sends a **response** that might look like this ([learn about JSON](./json-guide)):
    
  ```
  HTTP/1.1 200 OK
  Content-Type: application/json; utf-8
  
  {"purchases":[]}
  ```
- Thus ends the first request-response cycle! The App sees that the user hasn't made any purchases, and then prompts them to visit the in-app store to see the options. The users does this, and is intrigued 🤔
- The App user purchases the "In-Depth Forecast" IAP bundle, which eventually results in that purchase's info being POSTed to the App's Server with the following **request**:
    
  ```
  POST /purchases HTTP/1.1
  Host: fake-weather-app.example.com
  Content-Type: application/json: utf-8
  Accept: application/json
  Authentication: Basic SomeCredentialsProvingUserIdentity
  Agent: Fake Weather App/v11.0.23 Android/Google Play
  
  {
    "new_purchases": [
      {
        "iap_id": "blahblahblah",
        "paid_amount": 29.99,
        "receipt": "RandomLookingStuffProvingThePurchaseHappened"
      }
    ]
  }
  ```
- The App's Server receives this, checks the token, adds this purchase to the database, and **responds**:
    
  ```
  HTTP/1.1 201 OK
  Content-Type: application/json; utf-8
  
  {
    "purchases":[
      {
        "iap_id": "blahblahblah"
      }
    ]
  }
  ```
- The App receives this, parses it, and since it *trusts its Server* it flips a switch for that bundle so that now every time it checks to see if the user owns that bundle, the answer is *yes*.

In real life, you'll be using tools with varying complexity and features, like libraries in your favorite programming language or applications built specifically for sending raw requests and receiving raw responses.

Tools like these will let you separately handle bodies and headers, automatically parse out status codes from responses, and automatically parse response bodies. All the parts will be there, and you'll need to know what to do with all the parts, but you'll get lots of help from your tool-friends.

If you want to dig deeper, I recommend using [Postman](https://www.postman.com/) to send requests to real websites and see what they send back, and using your browser's developer tools to see what your browser sends and receives when you visit websites.