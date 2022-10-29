import fs, { writeFileSync } from 'fs-extra'
import { resolve } from 'path'
import type { BuildOptions } from './types'

export const specialPackages = ['fs-extra']

export const apiBlacklist = {
  'fs-extra': [
    'FileReadStream',
    'FileWriteStream',
    '_toUnixTimestamp',
    'F_OK',
    'R_OK',
    'W_OK',
    'X_OK',
    'gracefulify',
  ],
}

function getMembers(name: string) {
  switch (name) {
    case 'fs-extra':
      return Object.keys(fs)
    default:
      return []
  }
}

export async function rewriteEntryFile({ name, rootPath }: BuildOptions) {
  const members = getMembers(name)
  const backlist = apiBlacklist[name]
  const whitelist = members.filter((m) => !backlist.includes(m))
  const syntaxs = whitelist.map((w) => `const ${w} = m.${w}`)
  const contents = [
    `import m from '${name}'`,
    `export default m`,
    ``,
    `${syntaxs.join('\n')}`,
    ``,
    `export {\n\t${whitelist.join(',\n\t')},\n}`,
    ``,
  ]
  const content = contents.join('\n')
  const entryFile = resolve(rootPath, `./packages/${name}/index.ts`)
  writeFileSync(entryFile, content)
}
