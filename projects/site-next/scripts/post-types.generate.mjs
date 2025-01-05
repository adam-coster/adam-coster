import { compileFromFile } from 'json-schema-to-typescript';
import fsp from 'node:fs/promises';

// compile from file
const asTypes = await compileFromFile('static/schemas/post.schema.json');

await fsp.writeFile('src/lib/post.d.ts', asTypes);
