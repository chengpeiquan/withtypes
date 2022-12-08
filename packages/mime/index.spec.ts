import { describe, expect, test } from 'vitest'
import mime from '.'

// Common MIME types
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types

describe('mime', () => {
  test('Get .txt', () => {
    expect(mime.getType('foo.txt')).toBe('text/plain')
  })
})

describe('mime', () => {
  test('Get .jpg', () => {
    expect(mime.getType('foo.jpg')).toBe('image/jpeg')
  })
})

describe('mime', () => {
  test('Get .jpeg', () => {
    expect(mime.getType('foo.jpeg')).toBe('image/jpeg')
  })
})

describe('mime', () => {
  test('Get .png', () => {
    expect(mime.getType('foo.png')).toBe('image/png')
  })
})

describe('mime', () => {
  test('Get .xlsx', () => {
    expect(mime.getType('foo.xlsx')).toBe(
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    )
  })
})

describe('mime', () => {
  test('Get text/plain', () => {
    expect(mime.getExtension('text/plain')).toBe('txt')
  })
})
