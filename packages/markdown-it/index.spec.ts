import { describe, expect, test } from 'vitest'
import MarkdownIt from '.'

const md = new MarkdownIt()

describe('MarkdownIt', () => {
  test('Render h1', () => {
    expect(md.render('# Hello World')).toBe('<h1>Hello World</h1>\n')
  })
})

describe('MarkdownIt', () => {
  test('Render p', () => {
    expect(md.render('Hello World')).toBe('<p>Hello World</p>\n')
  })
})

describe('MarkdownIt', () => {
  test('Render img', () => {
    expect(md.render('![Example Image](https://example.com/example.jpg)')).toBe(
      '<p><img src="https://example.com/example.jpg" alt="Example Image"></p>\n'
    )
  })
})

describe('MarkdownIt', () => {
  test('Render a', () => {
    expect(md.render('[Example Link](https://example.com)')).toBe(
      '<p><a href="https://example.com">Example Link</a></p>\n'
    )
  })
})
