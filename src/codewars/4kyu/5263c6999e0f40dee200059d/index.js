const KEYPAD = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['', '0', ''],
]

function findIndexInKeypad(digit) {
  for (let i = 0; i < KEYPAD.length; i++) {
    const index = KEYPAD[i].findIndex(element => element === digit)
    if (index >= 0) return [i, index]
  }
}

function checkMovement(row, column) {
  return KEYPAD[row] && KEYPAD[row][column] !== ''
}

function checkNeighbors([row, column]) {
  const neighbors = [KEYPAD[row][column]]
  const movements = {
    up: row - 1,
    down: row + 1,
    left: column - 1,
    right: column + 1,
  }

  if (movements.up >= 0 && checkMovement(movements.up, column)) {
    neighbors.push(KEYPAD[movements.up][column])
  }

  if (movements.down < KEYPAD.length && checkMovement(movements.down, column)) {
    neighbors.push(KEYPAD[movements.down][column])
  }

  if (movements.left >= 0 && checkMovement(row, movements.left)) {
    neighbors.push(KEYPAD[row][movements.left])
  }

  if (
    movements.right < KEYPAD[row].length &&
    checkMovement(row, movements.right)
  ) {
    neighbors.push(KEYPAD[row][movements.right])
  }

  return neighbors
}

function generateAllPossibleCombinations(keypadList) {
  if (keypadList.length === 1) {
    return keypadList[0]
  }

  const innerCombinations = generateAllPossibleCombinations(keypadList.slice(1))

  return innerCombinations.reduce((accumulator, combination, index) => {
    return [
      ...accumulator,
      ...keypadList[0].map(
        (digit, outerIndex) =>
          `${keypadList[0][outerIndex]}${innerCombinations[index]}`,
      ),
    ]
  }, [])
}

function getPINs(observed) {
  const keypadPotentialNumbers = observed.split('').map(digit => {
    return checkNeighbors(findIndexInKeypad(digit))
  }, [])

  return generateAllPossibleCombinations(keypadPotentialNumbers)
}

module.exports = getPINs
