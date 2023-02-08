const { solution } = require('.')

test('Finds first unique number', () => {
  expect(solution([4, 10, 5, 4, 2, 10])).toBe(5)
  expect(solution([1, 4, 3, 3, 1, 2])).toBe(4)
  expect(solution([6, 4, 4, 6])).toBe(-1)
  expect(solution([1])).toBe(1)
})
