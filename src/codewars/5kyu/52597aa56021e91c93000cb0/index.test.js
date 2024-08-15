const { moveZeros } = require('.')

test('should move all of the zeros to the end', () => {
  expect(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a'])).toEqual([
    false,
    1,
    1,
    2,
    1,
    3,
    'a',
    0,
    0,
  ])
})
