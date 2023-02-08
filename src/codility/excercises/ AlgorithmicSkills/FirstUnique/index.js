function solution(A) {
  const map = new Map()

  for (let i = 0; i < A.length; i++) {
    if (map.has(A[i])) {
      map.set(A[i], map.get(A[i]) + 1)
    } else {
      map.set(A[i], 1)
    }
  }

  for (let i = 0; i < A.length; i++) {
    if (map.get(A[i]) === 1) {
      return A[i]
    }
  }

  return -1
}

module.exports = { solution }
