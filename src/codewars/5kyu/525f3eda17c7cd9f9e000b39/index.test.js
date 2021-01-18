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

test('Seven plus seven', () => {
  expect(seven(plus(seven()))).toBe(14)
})

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

test('Four divided by six', () => {
  expect(four(dividedBy(six()))).toBe(0)
})

test('Eight divided by seven', () => {
  expect(eight(dividedBy(seven()))).toBe(1)
})
