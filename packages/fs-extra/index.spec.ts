import { describe, expect, test } from 'vitest'
import { resolve } from 'path'
import { readFileSync, readJSONSync } from '.'

const pkg = resolve('./package.json')

describe('fs-extra', () => {
  test('Package name', () => {
    const str = readFileSync(pkg, 'utf-8')
    const { name } = JSON.parse(str)
    expect(name).toBe('@withtypes/monorepo')
  })
})

describe('fs-extra', () => {
  test('Package version', () => {
    const { version } = readJSONSync(pkg, 'utf-8')
    expect(version).toBe('0.0.0')
  })
})
