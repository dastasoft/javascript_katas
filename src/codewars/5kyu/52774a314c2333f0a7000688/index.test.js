const { validParentheses } = require('.')

test('Simple valid parentheses', () => {
  expect(validParentheses('()')).toBe(true)
})

test('Simple wrong parentheses', () => {
  expect(validParentheses('())')).toBe(false)
})

test('Start wrong', () => {
  expect(validParentheses(')())')).toBe(false)
})

test('One element', () => {
  expect(validParentheses('(')).toBe(false)
})

test('Long string', () => {
  expect(validParentheses('(())((()())())')).toBe(true)
})
