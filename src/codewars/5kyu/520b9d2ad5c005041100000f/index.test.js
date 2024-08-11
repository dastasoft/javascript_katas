const { pigIt } = require('.')

test('Pig latin is cool', () => {
  expect(pigIt('Pig latin is cool')).toBe('igPay atinlay siay oolcay')
})

test('One element', () => {
  expect(pigIt('There is a single element')).toBe(
    'hereTay siay aay inglesay lementeay',
  )
})

test('Punctuaion mark', () => {
  expect(pigIt('Hello World !')).toBe('elloHay orldWay !')
})
