import { readFileSync } from 'fs-extra'
import { resolve } from 'path'

/**
 * Get argv from Command Line
 */
export function getArgv() {
  const argv = process.argv
  if (argv.length < 3) {
    throw new Error(
      `Missing package name to generate declaration files.\ne.g. pnpm build:types md5\n\n`
    )
  }
  const [, , name, code] = argv
  return { name, code }
}

/**
 * Capitalize the first letter
 */
export function capitalize([first, ...rest]: string) {
  return first?.toUpperCase() + rest.join('')
}

/**
 * Parse package.json
 * @param path - The path where the `package.json` file is located
 */
export function parsePackage(path: string): { [key: string]: any } {
  try {
    const pkgPath = path.endsWith('package.json')
      ? resolve(path)
      : resolve(path, 'package.json')
    const pkgStringify = readFileSync(pkgPath, 'utf-8')
    const pkg = JSON.parse(pkgStringify)
    return pkg
  } catch (e) {
    return {}
  }
}
