function solution(S) {
  let result = ''

  for (let i = 0; i < S.length; i++) {
    if (i < S.length - 1 && S[i] === S[i + 1]) i++
    else result += S[i]
  }

  if (result === S) return result
  return solution(result)
}

module.exports = { solution }
