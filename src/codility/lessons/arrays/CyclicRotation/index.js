function solution(A, K) {
  if (A.length === 0) return A
  for (let i = 0; i < K; i++) {
    A.unshift(A.pop())
  }
  return A
}

module.exports = { solution }
