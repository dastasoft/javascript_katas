const {
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  times,
  dividedBy,
} = require('.')

test('Seven times five', () => {
  expect(seven(times(five()))).toBe(35)
})

test('Four plus nine', () => {
  expect(four(plus(nine()))).toBe(13)
})

test('Eight minus three', () => {
  expect(eight(minus(three()))).toBe(5)
})

test('Six divide by two', () => {
  expect(six(dividedBy(two()))).toBe(3)
})
