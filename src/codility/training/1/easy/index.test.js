const { solution } = require('./')

test('N = 1041', () => {
  expect(solution(1041)).toBe(5)
})

test('N = 32', () => {
  expect(solution(32)).toBe(0)
})

test('N = 15', () => {
  expect(solution(15)).toBe(0)
})

test('N = 529', () => {
  expect(solution(529)).toBe(4)
})

test('N = 20', () => {
  expect(solution(20)).toBe(1)
})

test('N = 9', () => {
  expect(solution(9)).toBe(2)
})
