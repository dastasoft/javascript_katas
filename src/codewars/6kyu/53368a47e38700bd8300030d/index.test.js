const list = require('.')

test('Must work with many more names', () => {
  expect(
    list([
      { name: 'Homer' },
      { name: 'Marge' },
      { name: 'Bart' },
      { name: 'Lisa' },
      { name: 'Maggie' },
    ])
  ).toBe('Homer, Marge, Bart, Lisa & Maggie')
})

test('Must work with many names', () => {
  expect(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }])).toBe(
    'Bart, Lisa & Maggie'
  )
})

test('Must work with two names', () => {
  expect(list([{ name: 'Bart' }, { name: 'Lisa' }])).toBe('Bart & Lisa')
})

test('Must work with one name', () => {
  expect(list([{ name: 'Bart' }])).toBe('Bart')
})

test('Must work with no names', () => {
  expect(list([])).toBe('')
})
