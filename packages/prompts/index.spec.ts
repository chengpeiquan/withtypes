import { describe, expect, test } from 'vitest'
import prompts from '.'

describe('prompts', () => {
  test('Enter slogan by default', async () => {
    prompts.inject(['Hello World'])
    const res = await prompts({
      type: 'text',
      name: 'slogan',
      message: 'Enter you slogan:',
      initial: 'Hello World',
      onState: (state) => state.value.trim(),
    })
    expect(res.slogan).toBe('Hello World')
  })
})

describe('prompts', () => {
  test('Enter slogan', async () => {
    prompts.inject(['My Slogan'])
    const res = await prompts({
      type: 'text',
      name: 'slogan',
      message: 'Enter you slogan:',
      onState: (state) => state.value.trim(),
    })
    expect(res.slogan).toBe('My Slogan')
  })
})

describe('prompts', () => {
  test('Select colors', async () => {
    prompts.inject([['#ff0000', '#0000ff']])
    const res = await prompts({
      type: 'multiselect',
      name: 'colors',
      message: 'Pick colors:',
      choices: [
        { title: 'Red', value: '#ff0000' },
        { title: 'Green', value: '#00ff00' },
        { title: 'Blue', value: '#0000ff' },
      ],
    })
    expect(res.colors).toStrictEqual(['#ff0000', '#0000ff'])
  })
})
