const { solution } = require('.')

describe('solution', () => {
  test('returns correct number of inversions', () => {
    const A = [-1, 6, 3, 4, 7, 4]
    expect(solution(A)).toBe(4)
  })

  test('returns -1 for arrays with too many inversions', () => {
    const A = [...Array(100000).keys()].reverse()
    expect(solution(A)).toBe(-1)
  })

  test('returns 0 for arrays with no inversions', () => {
    const A = [...Array(100000).keys()]
    expect(solution(A)).toBe(0)
  })
})
