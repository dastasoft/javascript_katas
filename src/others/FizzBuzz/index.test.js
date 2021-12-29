const { fizzBuzz, KEYWORDS } = require('.')

describe('Fizzbuzz should', () => {
  test('return itself number', () => {
    expect(fizzBuzz(1)).toBe(1)
    expect(fizzBuzz(22)).toBe(22)
    expect(fizzBuzz(89)).toBe(89)
  })

  test(`return ${KEYWORDS.FIZZ} when divisible by 3`, () => {
    expect(fizzBuzz(3)).toBe(KEYWORDS.FIZZ)
    expect(fizzBuzz(6)).toBe(KEYWORDS.FIZZ)
    expect(fizzBuzz(9)).toBe(KEYWORDS.FIZZ)
  })

  test(`return ${KEYWORDS.BUZZ} when divisible by 5`, () => {
    expect(fizzBuzz(5)).toBe(KEYWORDS.BUZZ)
    expect(fizzBuzz(10)).toBe(KEYWORDS.BUZZ)
    expect(fizzBuzz(50)).toBe(KEYWORDS.BUZZ)
  })

  test(`return ${KEYWORDS.FIZZBUZZ} when divisible by 3 and 5`, () => {
    expect(fizzBuzz(15)).toBe(KEYWORDS.FIZZBUZZ)
    expect(fizzBuzz(30)).toBe(KEYWORDS.FIZZBUZZ)
    expect(fizzBuzz(45)).toBe(KEYWORDS.FIZZBUZZ)
  })
})
