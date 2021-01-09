const { findUniqueElement, improvedFindUniqueElement } = require('.')

const DATA_TEST = [1, 2, 3, 3, 2, 1, 4]

test('Unique Element', () => {
  expect(findUniqueElement(DATA_TEST)).toBe(4)
})

test('Unique Element Improved', () => {
  expect(improvedFindUniqueElement(DATA_TEST)).toBe(4)
})
