const { isSolved, STATUS } = require('.')

describe('check finished condition', () => {
  test('board is not yet finished AND no one has won yet (there are empty spots)', () => {
    expect(
      isSolved([
        [0, 0, 1],
        [0, 1, 2],
        [2, 1, 0],
      ]),
    ).toBe(STATUS.unFinished)
  })

  test(`it's a cat's game (i.e. a draw)`, () => {
    expect(
      isSolved([
        [2, 1, 1],
        [1, 1, 2],
        [2, 2, 1],
      ]),
    ).toBe(0)
  })
})

describe('X won', () => {
  test('horizontal win', () => {
    expect(
      isSolved([
        [1, 1, 1],
        [2, 0, 0],
        [2, 2, 0],
      ]),
    ).toBe(STATUS.Xwon)
    expect(
      isSolved([
        [2, 0, 0],
        [1, 1, 1],
        [2, 2, 0],
      ]),
    ).toBe(STATUS.Xwon)
    expect(
      isSolved([
        [2, 0, 0],
        [2, 2, 0],
        [1, 1, 1],
      ]),
    ).toBe(STATUS.Xwon)
  })

  test('vertical win', () => {
    expect(
      isSolved([
        [1, 2, 0],
        [1, 0, 0],
        [1, 2, 0],
      ]),
    ).toBe(STATUS.Xwon)
    expect(
      isSolved([
        [2, 1, 0],
        [0, 1, 2],
        [0, 1, 0],
      ]),
    ).toBe(STATUS.Xwon)
    expect(
      isSolved([
        [2, 0, 1],
        [2, 0, 1],
        [0, 0, 1],
      ]),
    ).toBe(STATUS.Xwon)
  })

  test('diagonal win', () => {
    expect(
      isSolved([
        [1, 2, 0],
        [0, 1, 2],
        [0, 1, 1],
      ]),
    ).toBe(STATUS.Xwon)
    expect(
      isSolved([
        [0, 2, 1],
        [0, 1, 2],
        [1, 1, 0],
      ]),
    ).toBe(STATUS.Xwon)
  })
})

describe('O won', () => {
  test('horizontal win', () => {
    expect(
      isSolved([
        [2, 2, 2],
        [1, 0, 0],
        [1, 1, 0],
      ]),
    ).toBe(STATUS.Owon)
    expect(
      isSolved([
        [1, 0, 0],
        [2, 2, 2],
        [1, 1, 0],
      ]),
    ).toBe(STATUS.Owon)
    expect(
      isSolved([
        [1, 0, 0],
        [1, 1, 0],
        [2, 2, 2],
      ]),
    ).toBe(STATUS.Owon)
  })

  test('vertical win', () => {
    expect(
      isSolved([
        [2, 1, 0],
        [2, 0, 0],
        [2, 1, 0],
      ]),
    ).toBe(STATUS.Owon)
    expect(
      isSolved([
        [1, 2, 0],
        [0, 2, 1],
        [0, 2, 0],
      ]),
    ).toBe(STATUS.Owon)
    expect(
      isSolved([
        [1, 0, 2],
        [1, 0, 2],
        [0, 0, 2],
      ]),
    ).toBe(STATUS.Owon)
  })

  test('diagonal win', () => {
    expect(
      isSolved([
        [2, 1, 0],
        [0, 2, 1],
        [0, 2, 2],
      ]),
    ).toBe(STATUS.Owon)
    expect(
      isSolved([
        [0, 1, 2],
        [0, 2, 1],
        [2, 2, 0],
      ]),
    ).toBe(STATUS.Owon)
  })
})
