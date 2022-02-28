import { assert } from '@adam-coster/utility';
import { default as Ajv, JSONSchemaType } from 'ajv';
import { paramCase } from 'change-case';
import DiscordWebhook from 'discord-webhook-ts';

export interface ValheimWorldInfo {
  /**
   * The name of the server, exactly as it will be used
   * in server lists and as the name of the save files
   * (should not use special characters, but )
   */
  name: string;

  /**
   * The server admins, as a Steam UserIds. Admins can add other admins
   */
  admins: string[];
  /**
   * The Discord webhook to send connection information to.
   *
   * This is required so that you don't have to go digging in
   * AWS for passwords and IP addresses. Use a webhook for a
   * private channel that only people who you want to know the
   * password can see!
   */
  discordWebhook: string;

  /**
   * Type of EC2 instance to use. This will dictate
   * your costs and how powerful your server is.
   *
   * You *might* be able to get away with something as small
   * as a "t3.small". A "t3.medium" should work for a small group.
   * You may need a "t3.large", or a different type entirely heavier
   * loads, like using a lot of mods.
   *
   * See the types: https://aws.amazon.com/ec2/instance-types/
   *
   * And their pricing:
   *    - Spot: https://aws.amazon.com/ec2/spot/pricing/
   *    - On-Demand: https://aws.amazon.com/ec2/pricing/on-demand/
   *
   * @default "t3.medium"
   */
  instanceType?: string;

  /**
   * AWS EC2 instances can be used "on-demand" at a premium
   * rate, or as "spot instances" for a steep discount.
   *
   * On-demand gives you the lowest likelihood of your server
   * being randomly terminated, but that seems to be a rare
   * event anyway.
   *
   * You likely want to use spot instances.
   *
   * @default false
   */
  useOnDemandInstance?: boolean;
}

export const valheimWorldSchema: JSONSchemaType<ValheimWorldInfo> = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 1,
      maxLength: 32,
    },
    admins: {
      type: 'array',
      items: {
        type: 'string',
        pattern: '^[0-9]{12,64}$',
      },
      minItems: 1,
    },
    discordWebhook: {
      type: 'string',
      pattern: '^https://discord\\.com/api/webhooks/.*',
    },
    instanceType: {
      type: 'string',
      pattern: '^[a-z0-9]{2,}\\.[a-z0-9]{4,}$',
      default: 't3.medium',
      nullable: true,
    },
    useOnDemandInstance: {
      type: 'boolean',
      default: false,
      nullable: true,
    },
  },
  required: ['name', 'admins', 'discordWebhook'],
};

export class ValheimWorld {
  static infoValidator = new Ajv().compile(valheimWorldSchema);
  readonly name: string;
  readonly admins: string[];
  readonly discordWebhook: DiscordWebhook;
  readonly instanceType: string;
  readonly useOnDemandInstance: boolean;

  constructor(info: ValheimWorldInfo) {
    const isValid = ValheimWorld.infoValidator(info);
    assert(
      isValid,
      ValheimWorld.infoValidator.errors?.map((e) => e.message).join('\n'),
    );
    this.name = info.name;
    this.admins = info.admins;
    this.discordWebhook = new DiscordWebhook(info.discordWebhook);
    this.instanceType = info.instanceType || 't3.medium';
    this.useOnDemandInstance = info.useOnDemandInstance || false;
  }

  get safeName() {
    return paramCase(this.name);
  }
}
