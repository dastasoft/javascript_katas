function solution(N) {
  const binary = N.toString(2)
  return binary.split('1').reduce((max, current, index, arr) => {
    if (index === arr.length - 1) return max
    return Math.max(max, current.length)
  }, 0)
}

module.exports = { solution }
