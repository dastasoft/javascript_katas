const { solution } = require('.')

test('Test case 1', () => {
  const input = 'ACCAABBC'
  const output = solution(input)
  expect(output).toBe('AC')
})

test('Test case 2', () => {
  const input = 'ABCBBCBA'
  const output = solution(input)
  expect(output).toBe('')
})

test('Test case 3', () => {
  const input = 'BABABA'
  const output = solution(input)
  expect(output).toBe('BABABA')
})
