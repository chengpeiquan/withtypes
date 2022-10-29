import { readFileSync } from 'fs-extra'
import { resolve } from 'path'

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
