const { solution } = require('./')

describe('Given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A', () => {
  it('should return 5 for [1, 3, 6, 4, 1, 2]', () => {
    const A = [1, 3, 6, 4, 1, 2]

    expect(solution(A)).toBe(5)
  })

  it('should return 4 for [1, 2, 3]', () => {
    const A = [1, 2, 3]

    expect(solution(A)).toBe(4)
  })

  it('should return 1 for [-1, -3]', () => {
    const A = [-1, -3]

    expect(solution(A)).toBe(1)
  })
})
