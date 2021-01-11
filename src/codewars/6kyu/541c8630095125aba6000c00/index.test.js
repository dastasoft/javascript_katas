const { digitalRoot } = require('.')

test('One digit', () => {
  expect(digitalRoot(3)).toBe(3)
})

test('Two digit', () => {
  expect(digitalRoot(16)).toBe(7)
})

test('Three digit', () => {
  expect(digitalRoot(942)).toBe(6)
})

test('Six digit', () => {
  expect(digitalRoot(132189)).toBe(6)
})
