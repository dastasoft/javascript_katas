const MAX_ARRAY_LENGTH = 100000

function solution(A) {
  const withoutDuplicates = Array.from(new Set(A))
  const withoutNegatives = withoutDuplicates.filter(num => num > 0)

  if (withoutNegatives.length === 0) return 1

  for (let i = 1; i < MAX_ARRAY_LENGTH; i++) {
    if (!withoutNegatives.includes(i)) return i
  }
}

module.exports = { solution }
