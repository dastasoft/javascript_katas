const STATUS = {
  unFinished: -1,
  Xwon: 1,
  Owon: 2,
  draw: 0,
}

function checkWinConditions({ currentElement, store, row, col }) {
  const elementStore = currentElement === 1 ? store.x : store.o
  const isHorizontalWin = Array(3)
    .fill()
    .every((_el, i) =>
      elementStore.find(coordinate => coordinate === `${row}-${i}`),
    )

  if (row < 2) return isHorizontalWin

  const isVerticalWin = Array(3)
    .fill()
    .every((_el, i) =>
      elementStore.find(coordinate => coordinate === `${i}-${col}`),
    )

  const isDiagonalWin =
    Array(3)
      .fill()
      .every((_el, i) =>
        elementStore.find(coordinate => coordinate === `${i}-${i}`),
      ) ||
    ['0-2', '1-1', '2-0'].every(el =>
      elementStore.find(coordinate => coordinate === el),
    )

  return isHorizontalWin || isVerticalWin || isDiagonalWin
}

function isSolved(board) {
  let status = null
  const store = { x: [], o: [] }
  let hasEmptySpots = false

  for (let i = 0; i < board.length && !status; i++) {
    const row = board[i]
    for (let j = 0; j < row.length && !status; j++) {
      const col = row[j]
      const isLastRowOrLastCol = i === 2 || j === 2

      if (col === 0) hasEmptySpots = true
      else store[col === 1 ? 'x' : 'o'].push(`${i}-${j}`)

      if (
        isLastRowOrLastCol &&
        checkWinConditions({ currentElement: col, store, row: i, col: j })
      ) {
        status = col === 1 ? STATUS.Xwon : STATUS.Owon
      }
    }
  }

  if (!status) status = hasEmptySpots ? STATUS.unFinished : STATUS.draw

  return status
}

module.exports = { isSolved, STATUS }
