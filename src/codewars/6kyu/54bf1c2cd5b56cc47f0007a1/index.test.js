const { duplicateCount } = require('.')

test('Empty', () => {
  expect(duplicateCount('')).toBe(0)
})

test('No repetitions', () => {
  expect(duplicateCount('abcde')).toBe(0)
})

test('Two repetitions', () => {
  expect(duplicateCount('aabbcde')).toBe(2)
})

test('Should ignore case', () => {
  expect(duplicateCount('aabBcde')).toBe(2)
})

test('Indivisibility', () => {
  expect(duplicateCount('Indivisibility')).toBe(1)
})

test('Indivisibilities', () => {
  expect(duplicateCount('Indivisibilities')).toBe(2)
})

test('Only numbers', () => {
  expect(duplicateCount(11)).toBe(1)
})
