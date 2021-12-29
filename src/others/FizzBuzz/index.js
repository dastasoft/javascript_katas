const KEYWORDS = {
  FIZZ: 'Fizz',
  BUZZ: 'Buzz',
  FIZZBUZZ: 'FizzBuzz',
}

function fizzBuzz(number) {
  if (number % 15 === 0) return KEYWORDS.FIZZBUZZ
  if (number % 3 === 0) return KEYWORDS.FIZZ
  if (number % 5 === 0) return KEYWORDS.BUZZ
  return number
}

module.exports = { fizzBuzz, KEYWORDS }
