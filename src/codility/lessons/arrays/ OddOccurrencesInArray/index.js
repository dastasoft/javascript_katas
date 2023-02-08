function solution(A) {
  return A.reduce((result, num) => result ^ num, 0)
}

module.exports = { solution }
