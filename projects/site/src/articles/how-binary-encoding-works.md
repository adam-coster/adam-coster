---
slug: how-binary-encoding-works
title: Learn how binary encoding works
description: >
  "Binary encoding" sounds complicated. It's more approachable
  than you think, and understanding it unlocks a wealth of knowledge and tools.
editedAt: 2021-01-23T23:59:16.323Z
publishedAt: 2020-12-28T15:54:00.402Z
canonical: https://www.bscotch.net/post/learn-how-binary-encoding-works
tags:
  - computer-science
  - encoding
  - serialization
  - communication
  - binary
  - beginners
  - programming
  - learn
  - data
crossPosts:
  - https://dev.to/adamcoster/learn-how-binary-encoding-works-it-s-more-fun-and-useful-than-you-think-lbd
  - https://adamcoster.medium.com/learn-how-binary-encoding-works-its-more-fun-and-useful-than-you-think-c387f9e2d033
---

Data requires context to create meaning.

Let's say I sent you a text message containing just `<3`. Perhaps you had first asked me how many of something I had. In that case you'd interpret `<3` as something like, "I don't know exactly, but less than three". Or perhaps your prior message was also `<3`, in which case mine probably means, "I love you, too." The data (`<3`) remained the same, but its meaning changed with context.

Why does this matter for us, as programmers or data analysts? Because computers only understand one form of data: _binary_. That presents us with a problem: how do we represent all the kinds of data we have to deal with, when we only have zeroes and ones? In other words, how does a computer know _what we mean_? Where does meaning come from?

This is where "encoding" comes in.

At root, an encoding is basically a dictionary. It tells us how to map one set of things onto another set of things. For computers, an encodings map data onto zeroes and ones.

## Human language encodes ideas

Encoding isn't just for computers. Any mapping of data from one form to another is an encoding.

Human language is a spectacular example of this. I can encode an _idea_ into _vibrations of the air_ by speaking words aloud. I can encode those spoken words into symbols that I write onto a piece of paper. You can then work back the other direction, by starting with the written symbols, converting those back into the sounds they make when reading them aloud, and finally into the ideas they represent.

Human language is a _lossy_ encoding. We all struggle to accurately represent our ideas when we speak or put them to paper. No two professional translators will produce the exact same output given the same input. When someone else hears or reads our words, they don't end up with the same meaning that we started with. And yet we can still share ideas with each other with a fair amount of accuracy, because we use _redundancy_ and _context_ to make interpretation of our meaning more accurate.

## Computer encodings map data onto binary

When we're dealing with computers and data, we don't have the luxury of using redundancy to help the computer understand what we're trying to do. There is no "close enough", because the computer cannot _think_. It can only follow our instructions. For computers it's all about providing context.

The goal of a data encoding is to make an _unambiguous_, and _unchanging_ mapping between a piece of data and a binary value. That mapping is the computer's context.

### What's binary?

Computers are electronic devices that store data using tiny physical things that can be in one of two states: "on" or "off". For convenience, we map these onto `1` and `0` (an encoding!) so that we can treat these states like binary numbers.

A binary value then is a sequence of zeros and ones. No more, no less. Just some zeros and ones stuck together in a particular order. We call each position a "bit", and the bits are where all the magic happens. If you've got four bits stuck together, that's called a "nibble". If you've got eight bits stuck together, that's a "byte". (The classic grouping of bits into bytes is historical and technical, not inherent to the idea of binary encoding.)

So we've got ourselves a bunch of bits, now what? It's all about _combinations_. How many ways can we "flip" the bits (convert them from `0` to `1`, or vice versa) to end up with a _unique sequence_?

One bit only generates two unique outcomes, `0` and `1`.

Two bits can give us `00`, `01`, `10`, and `11` for a total of 4 unique sequences.

Three bits can give us `000`, `001`, `010`, `011`, `100`, `101`, `110`, and `111`, for a total of 8 unique sequences.

You may notice the pattern here: the total _possible unique sequences_ for a collection of bits is 2 to the power of the number of bits. So with a nibble (4 bits) we have 16 possible sequences, and with a byte (8 bits) we have 256 unique sequences. Every bit we add doubles how many sequences we get.

To encode something in binary, then, you need the following:

- A tally of how many unique data values you're going to encode.
- Enough bits to have _at least_ that many unique binary sequences.
- For each unique data value, a way to reliably find a unique binary sequence to map it to.

And that's it! All of binary encoding is exactly this.

## Example encodings

Let's go through some example binary encodings.

### Booleans

"Boolean" values can only be `true` or `false`. That makes for only two unique values, so we only need _one bit_ to get a matching number of unique sequences in binary. We could assign `0` to `false` and `1` to `true`. We could just as fairly assign `1` to `false` and `0` to `true`. After all, the `0` and `1` bit values _don't mean anything_. They are just unique sequences we're mapping onto our data.

You'll probably only ever see boolean `false` encoded using zero. Doing it this way makes some other things more convenient. But it doesn't strictly _have_ to be this way.

For technical reasons, the smallest collection of bits you'll usually be able to work with is the 8-bit byte. So you typically won't use a single bit to represent boolean values, instead you'll have `00000000` for `false` and `00000001` for `true`.

Systems almost always work in _bytes_, and so pretty much every encoding will have binary values that don't map to any data value. In the case of booleans, fully 99.2% (254/256) of the possible binary sequences aren't used at all! Wasteful? Yep! But simple, with some useful side effects, and modern computers can usually afford a lot of waste.

### Integers

At root, counting is a mechanical process. In base ten, I cycle through the numbers in a specified order (0-9) and, when I hit the highest one, I increment the number to the left and set the current one back to 0 (so `09` becomes `10` and `19` becomes `20`). This works the same way for any base, including base two (binary).

This lets us create a straight-forward ruleset for encoding decimal (base 10) values in binary. Just run the mechanical process on both at the same time, and match the resulting values together! So `Dec 0` (Decimal 0) is `Bin 0` (Binary 0), `Dec 1` is `Bin 1`, `Dec 2` is `Bin 10`, `Dec 3` is `Bin 11`, and so on.

(Again, we could create any arbitrary mapping that we want. We don't _have_ to map decimal and binary values by counting. I could decide that I want `Bin 0101` to mean `Dec 99`, if I wanted to. Particular encodings are chosen because they make it somehow more convenient to do the things we're trying to do.)

We can encode _countable_ (positive integer) numbers in binary this way. What about negative integers? One approach is to _reserve one of the bits_ to represent positive or negative (though many languages use the less-intuitive "[two's complement](https://en.wikipedia.org/wiki/Two%27s_complement)" encoding).

For example, let's say we're going to store a number in a nibble. We could declare that if the left-most bit in that nibble is `0` then the number is positive, and if it's `1` then the number is negative. Why can we do this? Because bits don't mean anything! We choose their meaning.

Now we can represent positive and negative integers. Let's say someone gives us the nibble `1000`; how do we interpret it? We have to know _ahead of time_ whether the encoding for this value uses the left-most bit to indicate sign.

This is where the concepts of "signed" (allows negative) and "unsigned" (only positive) integers comes from. If we treat `1000` as an unsigned integer then we'd say it means "decimal 8", and the nibble's values could range from `0` through `15`. If we treat it was a signed integer then we'd say it means "negative 0", since the left-most value is `1` (indicating negative sign), and the nibble could encode `-7` to `7`.

(Side note: yes, negative zero can be a real thing for signed binary integers.)

The takeaway is this: encodings can be simple, but if you don't know what encoding was used to generate a given binary value then you can be _dead wrong_ in how you interpret the data!

### Bitfields

Earlier I talked about booleans, and how wasteful they are when encoded using full bytes. Fortunately, for typical applications this waste doesn't matter very much. But when every extra byte matters (like with high-throughput networking traffic, or costly database storage) these wasted bits can add up.

This is where "bitfields" come in.

With a bitfield you store a collection of boolean values as single bits, where their _positions within the byte_ are used to infer which boolean value you're talking about.

For example, let's say you've got a permissions system where a user can have any combination (including none) of the following permissions (showing only 3 bits):

- Can read posts (`Bin 001`, `Dec 1`)
- Can edit posts (`Bin 010`, `Dec 2`)
- Can create posts (`Bin 100`, `Dec 4`)

In this case, we're using the zero-eth (indexing from 0) position to represent whether or not the user can read posts (we typically index starting from the right side of bytes). If the bit at index `0` (right-most position) has value `0`, the user does not have this permission. If the bit is `1` then they do. Taken together, we could use the number `Bin 101` (`Dec 5`) to mean that the user can read and create posts, but not edit them.

Having each bit position represent a different, independent boolean value allows us to store binary data with maximum efficiency, but there's a huge caveat: we have to _already know_ which position represents which value. This again is encoding!

But how do you operate on specific bits? You use "[bitwise operators](https://en.wikipedia.org/wiki/Bitwise_operation)".

The two key operators for dealing with bit fields are the "bitwise AND" (typically `&` in programming languages) and the "bitwise OR (`|`). A bitwise OR returns `1` if _either_ value is `1`, and `0` otherwise. A bitwise AND returns `1` if _both_ values are `1`, and `0` otherwise. For example, `101 | 010 -> 111`, and `101 & 010 -> 000`.

When _setting_ a bit field, you'll use bitwise OR. For determining if a given bit is `1`, you'll use bitwise AND. The values we're putting together are the sequences that are all zeroes except one position, which we call the "bitmasks". You can represent bitmasks in decimal as powers of 2, where the power you take is the index of the bit you're interested in. For example, the rightmost bit is at the zero index, so it's `2^0` (which is `1`). The next bit is at index one, so it's `2^1` (which is `2`). And so on.

For our permissions example, we'd make a bitfield with _all_ permissions by OR-ing each "bitmask": `Bin 001|010|100 -> 111` (`Dec 1|2|4 -> 7`).

To find out if the user had the "Can edit posts" permission, we'd AND the permissions bit field against that permission's bitmask: `Bin 111&010 -> 010` (`Dec 7&2 -> 2`), and we'd know the user had the permission if the result _is not zero_.

In some programming languages bitfields are used frequently to set function options, though they're typically obfuscated by using constants to store the bitmasks. For example, you might see something like `someFunction(argumentOne, OPTION_ONE | OPTION_TWO | OPTION_THREE)`. Behind the scenes, each of those OPTION constants is a bitmask!

If you've ever dealt with Linux file permissions, you might have noticed that `7` means "full permissions". Why? Because file permissions are a bitfield! The three possible permissions are: "can read", "can write", "can execute". As in the example above, you can represent that with a 3-bit bitfield, and when all three bits are `1` (full permissions) the decimal representation of that value is `7`!

### Text

We've now talked about booleans and integers, but what about text? Text is just another kind of data, after all.

Let's start with ASCII. You can google "ascii table" to pull up the standard ASCII encoding. It's easiest to understand the mapping from decimal numbers onto text characters, just remember that under the hood it's all binary.

ASCII only uses one byte per character, so it can only encode up to 256 possible characters. Those values include things like newlines and spaces, as well as some weird legacy stuff like vertical tabs and "bells".

What if you need characters that aren't in ASCII? If you just need a _different_ set of up to 256 characters, you could write your own entirely separate encoding that contains exactly the symbols you need.

But what if you need _more_ than 255 characters? Or what if you need characters for a whole bunch of languages, all at once? If I need "A" and "♥" in the same string, I'd have to either switch encodings partway through (and somehow _know_ that), or use an entirely different encoding that has both characters.

This is a super thorny problem, and has many solutions. The one that dominates is an encoding called [UTF-8](https://en.wikipedia.org/wiki/UTF-8). It can use a _different number of bytes_ to represent different characters. In UTF8, each character can be made up of a different number of bytes.

But how does your computer know to, for example, read the three bytes that make up the ☃ (snowman) symbol as a single character, instead of reading it as three separate characters?

UTF-8 uses the same idea as the negative numbers in the discussion above: bits are reserved to indicate whether or not each byte is part of a multi-byte character! The computer program checks those bits to find out if it needs to keep reading bytes before looking up the corresponding character to display.

This "variable-length encoding" has some interesting consequences. For ASCII, if you know how many bytes your text has you also know how many characters it has (and vice versa). For UTF-8, you have to first read every single byte to _count_ how many distinct characters there are, and you cannot infer byte-length from character-length (or vice versa).

## Displaying binary: Hexadecimal and Base64

Displaying binary data is a problem: we need to be able to map each possible byte onto a "printable" character, or sequence of printable characters. ASCII doesn't do this for us, since many of its characters are unprintable.

You'll most often use a hexadecimal encoding to view raw binary. Hexadecimal uses the characters `A-F` and `0-9`, for a total of 16 characters. As you may recall from above, a "nibble" (4 bits) can represent up to 16 unique values, and a byte is two nibbles stuck together. So a hexadecimal character can represent a nibble, and two such characters can represent a byte. For example, `FF` is `11111111`, `00` is `00000000`, and `0F` is `00001111`.

Hexadecimal, then, requires two symbols to represent one byte. But our symbols are ASCII characters, and we need one byte for each of those. So in order to encode raw binary as hexadecimal, we need twice as many bytes!

Sometimes this wastefulness matters, like with high-throughput network data or large binary blobs (a "blob" is just a nickname for a bunch of binary data). In such cases, and where the raw binary cannot be sent as-is, you might use Base64 encoding to streamline things.

The logic of Base64 encoding is the same as for hexadecimal (a.k.a. Base16), but in this case we're using 64 printable characters instead of only 16. This allows us to use one Base64 character to represent 6 bits (versus the 4 bits of Base16), so that we can represent 3/4 of a byte with a single character instead of 1/2 of a byte.

## "Types" inform encoding

In programming, we're constantly dealing with "types", meaning whether or not a given value is a string, an integer. The computer has to know what we're trying to represent with our data so that it can perform the right tasks on that data. A "type" is just an encoding!
When we specify type, what we're really doing is providing metadata to inform the programming language how our data is encoded.

## Truthiness, falsiness, and fuzzy types

In many languages we have both boolean `false` values and the more general concept of `falsey`. That is, values that are not boolean `false` but that we interpret as such for convenience.

These sorts of fuzzy type behaviors work using "type casting", which is when we convert a value from one type into another.

Depending on how we're representing our values, typecasting might just require a change in interpretation. For example, the integer `0` is going to be represented by a bunch of `0` bits. The boolean `false` is also a bunch of `0` bits. Finally, an empty string `""` is typically represented by a bunch of `0` bits as well. So under the hood all of these things look exactly the same: they're all just zeroes. We can freely typecast between them without having to change anything except our interpretation of these values. Since they all look like boolean `false`, we can refer to the whole collection as `falsey`! We can then defined "truthy" as "not falsey", and thus if _any_ bit isn't a zero then the data is truthy.

In other cases typecasting is more than just leaving the data as-is while applying a different encoding. For example, what does it mean to cast the integer `5` into a boolean? One way would be to not change the underlying data at all, and just use "truthiness" when evaluating the value. Another would be to convert it into an actual boolean `true` (`00000001`). And there's nothing stopping you from doing something totally different, like saying "anything below 10 becomes a boolean `false`"!

Typecasting is changing how we interpret a piece of data, which always means _changing its encoding_. Sometimes that just means looking at the data differently, other times it means changing the data because the encoding doesn't support that data. In all cases the choice of how to handle it is _up to you_ (or, more likely, up to the people who made your programming language).

This is why you can never assume that the types and typecasting used in one language will work exactly the same way in another. They're usually pretty dang similar, but there are almost always differences that can trip you up.

Here are some fun examples:

- In PHP, an empty array `[]` is falsey.
- In GameMaker Studio 2 (GMS2, a program for making video games) any number less than `0.5` is falsey.
- In JavaScript, `NaN==false` yields `false` (NaN means "Not a Number"), but casting it to a boolean _does_ yield false, and it's also treated as `false` in `if` statements. So `NaN` is both falsey and not falsey, depending on context.
- In JavaScript, using a bitwise operator on a number (which is likely a 64-bit float) first converts it into a 32-bit integer.
- In JavaScript, `10+"10"` is `"1010"`, while `10*"10"` is `100`.
- In Python 2.X, `3/2=1` but `3.0/2=1.5`, while in Python 3.X both are `1.5`.

## Metadata and inference

Two of the recurring themes above were:

1. Data encodings are inventions, and you can encode things however you want to.
2. You _must_ know how something was encoded to be able to interpret it.

This leaves us with a problem: since data can be encoded any old way, how do we know its encoding? Where do we get the context?

There are two key approaches: metadata that describes the encoding, or inferring encoding by searching for signatures ("content sniffing") or trying reasonable defaults.

Examples of metadata include file extensions, the HTTP "Content-Type" header, and type declarations. This information isn't part of the actual data, but is used to infer the encoding of the data.

Content sniffing is frequently used on the web (though it has security risks and should probably be disabled on your site), wherein the browser reads the first handful of bytes of the content to see if it matches a known encoding pattern. For example, a PNG file always starts with the 8 bytes (printed as hexadecimal): `89 50 4E 47 0D 0A 1A 0A`.

## Bespoke encodings

You may someday find yourself needing to store a whole bunch of data in a compact way. If your use case is specific enough, that might mean coming up with your own custom encoding.

For example, my company makes video games. Our most recent game, [Levelhead](https://www.bscotch.net/games/levelhead), lets players create their own levels and share them with other players. To make those levels available to those other players, we needed to store them in the cloud and send them over HTTP. And so we wanted those files to be as small as possible, so that they'd be very fast to download (great for the player experience), and very cheap to store and send (great for us).

To make our own encoding, we had to decide how to represent all of the components in the game with as few bits as possible. We gave each item a unique index, which we could store as 16-bit or 32-bit integers, depending on how many items we needed to represent. We could do the same with `(x,y)` coordinates. For items that had customizable, boolean properties (like checkboxes), we used bitfields to store their settings. And a whole lot more.

In the end our custom encoding was pretty elaborate, but the outcome was worth it: the average level comes in under a kilobyte!

## Encoding is worth thinking about

Thinking of data problems as encoding problems can make it easier to learn programming languages, do data analysis, and solve data storage problems.
