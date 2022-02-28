import { assert } from '@adam-coster/utility';
import { default as Ajv, JSONSchemaType } from 'ajv';

export interface ValheimWorldInfo {
  /**
   * The name of the server, exactly as it will be used
   * in server lists and as the name of the save files
   * (should not use special characters, but )
   */
  name: string;
  /**
   * The server admins, as a Steam UserIds.
   */
  admins: string[];
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
  },
  required: ['name', 'admins'],
};

export class ValheimWorld {
  static infoValidator = new Ajv().compile(valheimWorldSchema);
  readonly name: string;
  readonly admins: string[];

  constructor(info: ValheimWorldInfo) {
    const isValid = ValheimWorld.infoValidator(info);
    assert(
      isValid,
      ValheimWorld.infoValidator.errors?.map((e) => e.message).join('\n'),
    );
    this.name = info.name;
    this.admins = info.admins;
  }
}
