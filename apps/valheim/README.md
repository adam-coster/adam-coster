# Valheim Dedicate Server (via AWS CDK)

[Valheim](https://www.valheimgame.com/) is a blast to play with friends, but coordinating schedules around the host is a pain. Dedicated servers solve this problem, and there are a jillion services out that will spin up a Valheim server for you.

For those who like more of a self-service route, you can always roll your own server. You'll need to make sure that your server:

- Stays up without your intervention, so you don't have to reboot it to let people in.
- Updates itself automatically to the latest Valheim version.
- Backs up the world files so that they can't evaporate forever.

And while not necessary, you may want to make room for:

- Mods, like [ValheimPlus](https://valheim.plus/).
- Discord integration based on in-game events.
- Easy to access server status and logs.
- The ability to launch *another* dedicated server.

That all really starts to add up!

## Saved by the community!

Members of the Valheim community have developed and continue to maintain [a Docker image for running a Valheim dedicated server](https://github.com/lloesche/valheim-server-docker). It comes with *all* the bells and whistles listed above, plus a lot of other things.

This project aims to make deployment of that image via AWS easy, by using the [AWS CDK](https://aws.amazon.com/cdk/) toolkit to deploy into [Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/).

(Note that there is [already a CDK solution](https://github.com/rileydakota/valheim-ecs-fargate-cdk) making use of ECS Fargate, but I'm much more familiar with Elastic Beanstalk and also want to add S3 backups.)

