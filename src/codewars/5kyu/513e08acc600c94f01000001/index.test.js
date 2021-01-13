const rgb = require('.')

test('All max', () => {
  expect(rgb(255, 255, 255)).toBe('FFFFFF')
})

test('Beyond permited', () => {
  expect(rgb(255, 255, 300)).toBe('FFFFFF')
})

test('All zeros', () => {
  expect(rgb(0, 0, 0)).toBe('000000')
})

test('Random hex', () => {
  expect(rgb(148, 0, 211)).toBe('9400D3')
})

test('Maintain zeroes to the left', () => {
  expect(rgb(2, 232, 35)).toBe('02E823')
})

test('Negative values', () => {
  expect(rgb(-2, -232, -35)).toBe('000000')
})
