import { describe, expect, test } from 'vitest'
import minimist from '.'

describe('minimist', () => {
  test('Get default argv', () => {
    const argv = minimist(process.argv.slice(2), { string: ['_'] })
    expect(argv).toStrictEqual({ _: [] })
  })
})

// https://github.com/minimistjs/minimist/blob/main/test/num.js
describe('minimist', () => {
  test('Get number argv', () => {
    const argv = minimist([
      '-x',
      '1234',
      '-y',
      '5.67',
      '-z',
      '1e7',
      '-w',
      '10f',
      '--hex',
      '0xdeadbeef',
      '789',
    ])

    expect(argv).toStrictEqual({
      x: 1234,
      y: 5.67,
      z: 1e7,
      w: '10f',
      hex: 0xdeadbeef,
      _: [789],
    })
  })
})

// https://github.com/minimistjs/minimist/blob/main/test/bool.js
describe('minimist', () => {
  test('Get boolean argv', () => {
    const argv = minimist(['-x', '-z', 'one', 'two', 'three'], {
      boolean: ['x', 'y', 'z'],
    })

    expect(argv).toStrictEqual({
      x: true,
      y: false,
      z: true,
      _: ['one', 'two', 'three'],
    })
  })
})
