const { solution } = require('.')

describe('Rotation of Array', () => {
  it('should rotate the array 3 times', () => {
    const A = [3, 8, 9, 7, 6]
    const K = 3
    const expected = [9, 7, 6, 3, 8]
    expect(solution(A, K)).toEqual(expected)
  })

  it('should return the same array for K equal to the length of the array', () => {
    const A = [1, 2, 3, 4]
    const K = 4
    const expected = [1, 2, 3, 4]
    expect(solution(A, K)).toEqual(expected)
  })

  it('should return the same array for an array of zeros', () => {
    const A = [0, 0, 0]
    const K = 1
    const expected = [0, 0, 0]
    expect(solution(A, K)).toEqual(expected)
  })

  it('should return an empty array for an empty input array', () => {
    const A = []
    const K = 5
    const expected = []
    expect(solution(A, K)).toEqual(expected)
  })
})
