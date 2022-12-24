import { describe, expect, test } from 'vitest'
import mime from '.'
import mimelite from './lite'

// Common MIME types
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types

describe('mime', () => {
  test('Get .txt', () => {
    expect(mime.getType('foo.txt')).toBe('text/plain')
  })

  test('Get .jpg', () => {
    expect(mime.getType('foo.jpg')).toBe('image/jpeg')
  })

  test('Get .jpeg', () => {
    expect(mime.getType('foo.jpeg')).toBe('image/jpeg')
  })

  test('Get .png', () => {
    expect(mime.getType('foo.png')).toBe('image/png')
  })

  test('Get .xlsx', () => {
    expect(mime.getType('foo.xlsx')).toBe(
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    )
  })

  test('Get text/plain', () => {
    expect(mime.getExtension('text/plain')).toBe('txt')
  })
})

describe('mimelite', () => {
  test('Get .txt', () => {
    expect(mimelite.getType('foo.txt')).toBe('text/plain')
  })

  test('Get .jpg', () => {
    expect(mimelite.getType('foo.jpg')).toBe('image/jpeg')
  })

  test('Get .jpeg', () => {
    expect(mimelite.getType('foo.jpeg')).toBe('image/jpeg')
  })

  test('Get .png', () => {
    expect(mimelite.getType('foo.png')).toBe('image/png')
  })

  test('Get .xlsx', () => {
    expect(mimelite.getType('foo.xlsx')).toBeNull()
  })

  test('Get text/plain', () => {
    expect(mimelite.getExtension('text/plain')).toBe('txt')
  })
})
