import { readFileSync, writeFileSync } from 'fs-extra'
import { resolve } from 'path'
import type { BuildOptions } from './types'

/**
 * Output declaration file of library
 */
export async function buildTypes({ name, rootPath }: BuildOptions) {
  // Read content from the declaration file of `@types/${name}`
  const entryFile = resolve(
    rootPath,
    `./node_modules/@types/${name}/index.d.ts`
  )
  const entry = readFileSync(entryFile, 'utf-8')

  // Use an existing declaration file as a package declaration
  const output = resolve(rootPath, `./packages/${name}/lib/index.d.ts`)
  writeFileSync(output, entry)
}
