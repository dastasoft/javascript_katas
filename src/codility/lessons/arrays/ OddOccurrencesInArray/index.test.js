const { solution } = require('.')

test('finds the unpaired element in the array', () => {
  expect(solution([9, 3, 9, 3, 9, 7, 9])).toBe(7)
  expect(solution([1, 1, 2, 2, 3])).toBe(3)
  expect(solution([2, 3, 5, 3, 2])).toBe(5)
})
