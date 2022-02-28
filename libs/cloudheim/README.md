# Cloudheim: Valheim Dedicated Servers on AWS

**💀⚠ This is a work in progress and is not ready to be used by others. Even when it _is_ ready, you probably shouldn't use it anyway. Use at your own risk. ⚠💀**

## Why use a dedicated server?

[Valheim](https://www.valheimgame.com/) is a blast to play with friends, but coordinating schedules around the host is a pain. Dedicated servers solve this problem, since the game keeps running as long as the server software does. People can pop in and out whenever they please!

## What does Cloudheim do?

This project ("Cloudheim") aims to make it easy to create and run any number of remote dedicated Valheim servers on Amazon Web Services (AWS), in a cost-effective and low-maintenance way. Does it _succeed_ at doing that? Only time will tell.

Cloudheim makes use of the community-maintained [Valheim Server in a Docker Container](https://github.com/lloesche/valheim-server-docker) project and the AWS [Cloud Development Kit](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html) (CDK) to generate and deploy a "Cloud Formation Template" to AWS. That's all AWS-speak for "describing a bunch of servers and stuff and thereby causing them to exist."

## Who should use Cloudheim?

**⚠️ Literally NO ONE ⚠️**

It's not even a good idea for _me_ to be using this! (It's mostly for fun.)

You'll very likely save a lot of time (and therefore money), headache, and heartache, by paying for a service that will run your Valheim server for you (a [Valheim-as-a-Service](#valheim-as-a-service-vaas) provider).

Okay, so you _could_ consider using this project if:

- 🎓 You are familiar with AWS already, and comfortable reasoning about and managing AWS resources. (Or, alternatively, if you want to use this project _to_ learn about AWS.)
- 🤑 You are prepared to spend an uncertain amount of money on AWS resources. (This project keeps things pretty cheap, but AWS costs can blow up in a few scenarios.)
- ⌛ You are prepared to spend an uncertain amount of time debugging the process. (I'm making this as painless as I can for myself, but there's a lot of little nuances involved.)
- 😭 You are prepared to be the person responsible for a Valheim world file to disappear forever, tossing into the void everyone's hard work exploring and changing that world. (This project is meant to prevent that via offsite and frequent backups, but there are no guarantees that it's working properly!)

The later sections about the [Valheim Server Software](##background-and-options-for-valehim-dedicated-servers) and [hosting options](#dedicated-server-hosting-options) provide a lot more info to help you decide what path to take.

## Table of Contents

- [Why use a dedicated server?](#why-use-a-dedicated-server)
- [What does Cloudheim do?](#what-does-cloudheim-do)
- [Who should use Cloudheim?](#who-should-use-cloudheim)
- [Table of Contents](#table-of-contents)
- [Setup](#setup)
  - [Prereqs](#prereqs)
  - [Install Node.js](#install-nodejs)
  - [Install Cloudheim](#install-cloudheim)
  - [Get some AWS credentials](#get-some-aws-credentials)
  - [Install the AWS CLI](#install-the-aws-cli)
  - [Install and bootstrap the AWS CDK](#install-and-bootstrap-the-aws-cdk)
  - [](#)
- [Background and options for Valehim dedicated servers](#background-and-options-for-valehim-dedicated-servers)
  - [Vanilla server limitations](#vanilla-server-limitations)
  - [FancyServer: A crowd-sourced alternative](#fancyserver-a-crowd-sourced-alternative)
- [Dedicated server hosting options](#dedicated-server-hosting-options)
  - [Locally](#locally)
  - [Valheim-as-a-Service (VaaS)](#valheim-as-a-service-vaas)
  - [Using a generic cloud provider](#using-a-generic-cloud-provider)

## Setup

Getting Cloudheim up is a technical process. I'll try to include all the stuff you need in the rest of this section, but it'll undoubtedly be incomplete and you'll need to prepare yourself for some serious debugging!

### Prereqs

- An [Amazon Web Services account](https://aws.amazon.com/). Accounts are free, but the resources you use might not be!
- Basic knowledge about using terminals and terminal commands. (If you know what `cd` (Linux) or `dir` (Windows) do, you're probably in a good spot.)

### Install Node.js

Cloudheim runs using [Node.js](https://nodejs.org/en/). You'll need to have an appropriate version of Node.js installed on your machine. Using v16+ is your best bet, though it might also work in v14.

Make sure that Node is working correctly by opening a terminal and running `node -v`. If you get an error or an older version of Node, you've got some debugging to do.

> 💡 I highly recommend using [Volta.sh](https://volta.sh/) or [nvm](https://github.com/nvm-sh/nvm/blob/master/README.md). Both of these allow you to run _multiple versions_ of Node, choosing whichever one is most appropriate for any given project. Volta is easier to set up and works a bit more transparently, so that's probably the best option.

### Install Cloudheim

- [ ] _TODO: Package up Cloudheim as an npm package for easy distribution_

### Get some AWS credentials

The AWS Identity and Access Management (IAM) system is pretty complicated, since it's designed to allow extremely fine-grained control over access. In short, you can create "users" under your top-level AWS account, and those users can have different access rules. You'll need credentials for a user that has sufficient access to create Cloudheim in your AWS account.

The [AWS CLI setup instructions](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-prereqs.html) include step-by-step info for creating an admin user with tons of access to your account. That isn't the most secure approach, but it'll definitely give you the permissions you need!

- [ ] _TODO: Track down specific permissions needed to deploy Cloudheim._

### Install the AWS CLI

The AWS Command Line Interface lets you puppet your AWS account and resources from a terminal. It is incredibly powerful, but also incredibly opaque. Follow their [official installation instructions](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) for your platform.

Once installed, you'll need to [run `aws configure`](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html) and follow the prompts to add the credentials you created previously.

### Install and bootstrap the AWS CDK

The AWS "Cloud Development Kit" (CDK) lets you create and deploy AWS resources by _describing_ them. Unfortunately you have to know a lot of things about AWS to do all of that describing, which is where Cloudheim comes in: its whole purpose is to do all of the work describing your Valheim deployments, via the CDK.

To install it, run `npm install --global aws-cdk-lib` in your terminal.

The CDK requires [a "bootstrapping" process](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html#getting_started_bootstrap), which is where it gets everything set up properly for using the CDK with your account.

Run `cdk bootstrap aws://ACCOUNT-NUMBER/REGION` to bootstrap it, plugging in your own Account ID (copyable from the top-right account dropdown menu in the AWS web UI) and the region in which you'll be deploying resources (e.g. `us-east-1`).

> 💰 Note that the cost of AWS resources varies dramatically by region. And so does your _latency_ (since a server far away from you has to send data a lot farther)). If you're in Central or Eastern US, `us-east-2` is a great choice -- it's as low-cost as `us-east-1` but less popular, so you can [Spot Instances](https://aws.amazon.com/ec2/spot/) even more cheaply.

_See the [official AWS CDK docs](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html) for more information._

- [ ] _TODO: When deploying Cloudheim as a package, include the CDK as a peer dependency. Or, even better, supply a built-in CLI command that uses it._

###

## Background and options for Valehim dedicated servers

Valheim provides standalone server software, available in your Steam library if you've bought Valheim. You can get the standalone server through Steam without an account with a little extra work (the server is provided for free, since players need to have bought Valheim to join the server anyway).

While you could use the regular game as your dedicated server, using the standalone server gives you far more hosting options (since you can run it on Linux) and much better performance (since it doesn't need to render anything).

### Vanilla server limitations

The standalone Valheim server provided through Steam is super bare-bones, and the official documentation is sparse to match. You can set a handful of config options for the server to read on bootup, but you'll have to sort out any other features yourself.

**Core Missing Features**

- Auto update. The server won't update itself when new Valheim versions are released.
- Auto backup. The server will periodically save the world to disk by overwriting the last save, so if you want to go back to a prior game state you're out of luck!
- Auto restart. If the server crashes, or gets shut down because of the operating system shut down, it won't restart itself.

**Bonus Missing Features**

- Event handlers. The game streams event data to STDOUT, but doesn't provide a way for you to _use_ that data. For example, you can't trigger a Discord message when someone joins the server.
- Mod management. You'll have to figure out how to install and manage mods yourself.

Basically, if you run the vanilla Valheim server software you'll either have a lot of work to do to make it reliably run, or you'll be doing a lot of manual reboots and updating.

### FancyServer: A crowd-sourced alternative

Members of the Valheim community have developed a [Valheim Server in a Docker Container](https://github.com/lloesche/valheim-server-docker). It doesn't have a name, so I'll just be calling it "FancyServer". It comes with _all_ the bells and whistles listed above, plus a lot of other things.

The FancyServer is basically another piece of software that runs the vanilla Valheim server for you and then adds extra features on top.

This project makes use of the FancyServer, which brings us to the next problem: how do we host it?

## Dedicated server hosting options

So you can get the vanilla or fancy Valheim server software. Where do you run it? You've basically got three options for hosting your dedicated server:

1. Locally
2. Using a Valheim-servers-as-a-Service (VaaS) provider
3. Using a generic cloud provider

These all have various pros and cons, and varying levels of difficulty.

### Locally

Running a Valheim server on your own computer, or a spare one you've got laying around, is the easiest and cheapest approach. You can download the server via Steam and boot it up right there, no extra work needed (aside from any configuration you want to do)!

**Pros**

- Easiest to run
- Easiest to reconfigure, since the files are right on your machine
- Easiest to see that something stopped working, since you're already looking at it
- Easiest to debug, since all the logs and software is right at your fingertips

**Cons**

- If you're going the FancyServer route, you'll need to be able to set up and use Docker, which gets pretty technical.
- Competes for system resources, so you'll likely need to shut it down while doing other things
- Requires letting people directly connect to your own computer from the Internet, which is a safety and security concern
- Requires setting up port forwarding, which can be difficult and can also create security problems
- Things like Windows Update might periodically turn your server off. You'll either need to configure things to prevent that, or to ensure everything reboots after the operating system does, or otherwise be ready to turn it back on when someone lets you know they can't get in.
- Doesn't scale well -- if you want to spin up another world running at the same time, your world servers will be competing for computer resources

### Valheim-as-a-Service (VaaS)

One of those modern webtech buzzwords is "[thing]-as-a-Service", basically where someone has solved a whole bunch of stuff about [thing] for you so that you can skip ahead to the part you care about.

Valheim is no different. There are _tons_ of services that will host Valheim for you, typically in the range of $10-$20 USD/month depending on the service and how beefy of a machine you rent.

Choosing the service that gets you what you want will be the biggest challenge. The best services give you a super slick experience, so for the Pros/Cons section I'll assume you're going with one of those.

**Pros**

- Nearly instant deployment
- Many of them are either directly using the FancyServer, or have added their own subset of similar features, so you get all of those without any work at all.
- Easy to upgrade to add more RAM or CPU, if you start having performance issues
- Easy upload/download of your Valheim world files
- Easy configuration management, so you don't have to go track down text files and figure out how to change them
- You aren't using your own hardware, so you're keeping it free for other purposes
- You aren't letting people right into your home network
- Customer support staff to help you troubleshoot

**Cons**

- It's not free, and can even be expensive relative to your budget
- Actual computing resources available are likely not exactly as advertised, since you'll be sharing resources with other games
- There are a million services to choose from, and probably some scammy ones, so finding a good host is difficult
- If you do run into problems, you're stuck with whatever solutions the host provides
- If you want to do anything that isn't already available in the service, you might not be able to
- It might not be clear what happens to your world saves if you stop paying for your server
- Adding additional Valheim servers is easy, but the cost scales linearly with the number of servers.
- You may not have a stable IP address to use, so that you end up needing to track down a different IP address each time you want to play.

While that list of cons seems long, those are minor gripes that most people will be just fine with.

> 💡 Spending your time to manage a Valheim server is _never_ free: it costs _your time_! Don't forget to take that into account when deciding whether paying for a service is worth it. A service will save you _hours_, potentially _many_ hours. In the long run it's probably cheaper to use an existing VaaS.

### Using a generic cloud provider

The final case is to use someone else's machine out on the Internet (i.e. "the Cloud") to run your Valheim server. This is definitely the most difficult route. It solves all of your privacy and resource problems, but makes everything else harder.

Using "the cloud" (i.e. "someone else's computer") to run your Valheim server helps a lot with the security concerns about opening up your home network. Unfortunately it comes with its own set of complications, depending on the route you take.

**Pros**

- You have _tons_ of choices available, so you can go with whatever best matches your knowledge and budget
- You'll very likely be paying for it, though there are ways to get the cost pretty low if you're familiar with cloud services
- Likely cheaper in direct hosting costs than using VaaS
- You're using someone else's resources
- You aren't opening up your local network
- It might be easier to set up a FancyServer than doing so on your own machine, depending on the cloud service

**Cons**

- You'll be spending a lot more of your _time_ getting things set up and keeping it running
- Unless you use FancyServer and know how to set it up on a remote machine, you'll be stuck with all of the same stability problems as running locally (getting it to auto-update, reboot itself, etc)
- Debugging stuff that goes wrong can be incredibly difficult, even if you're knowledgeable about cloud services
- You'll still have to solve all of the problems around making sure the server stays up and alive
- You'll have to find a cloud provider that matches your knowledge and budget
- You may need to know about a lot of little nuanced technical things around networks, firewalls, and access mechanisms to be able to get anything working at all
- Saving your money by letting the server shut down for certain portions of the day or making it boot upon an external trigger is something you'll have to figure out. And without doing that, it's likely you won't even save any money compared to using VaaS!

Long story short: your better off paying for VaaS!
