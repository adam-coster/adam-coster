import {pathy} from '@bscotch/pathy';
import {themeSelectorDefinitionsSchema} from '../dist/lib/types.js';

const themeDefinitionsHtmlPath = pathy('tmp/theme-definitions.html');
const themeDefinitionsJsonPath = pathy('tmp/theme-definitions.json', {validator: themeSelectorDefinitionsSchema});
const themeDefinitionsTypescriptPath = pathy('src/lib/themeSelectorDefinitions.ts');

const themeDefinitionsUrl = `https://code.visualstudio.com/api/references/theme-color`;

const themeDefinitionsHtml = await fetch(themeDefinitionsUrl).then((res) => res.text());
await themeDefinitionsHtmlPath.write(themeDefinitionsHtml);

const themeDefinitions = [...themeDefinitionsHtml.matchAll(/<li><code>(?<selector>[a-zA-Z0-9.-]+)<\/code>:\s*(?<description>.*?)<\/li>/gms)].map(d=>d.groups);

await themeDefinitionsJsonPath.write(themeDefinitions);

const themeDefinitionsTypescript = themeDefinitions.map(d=>{
  return `  /**
   * ${d.description}
   */
  '${d.selector}': ${JSON.stringify(d)}`;
});

await themeDefinitionsTypescriptPath.write(`export const themeSelectorDefinitions = \n{${themeDefinitionsTypescript.join(',\n')}\n};\n`);
