import { describe, expect, it } from 'vitest'
import figlet from '.'

function showResultOnConsole(callback: any) {
  typeof callback === 'function' && callback()
  return 'done'
}

describe('figlet', () => {
  it('default', () => {
    expect(
      showResultOnConsole(
        figlet('Hello World!!', function (err, data) {
          if (err) {
            console.log('Something went wrong...')
            console.dir(err)
            return
          }
          console.log(data)
        })
      )
    ).toBe('done')
  })
})
