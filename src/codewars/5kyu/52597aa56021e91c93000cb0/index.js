function moveZeros(array) {
  let zeroCount = 0
  const response = array
    .filter(element => {
      if (element === 0) {
        zeroCount++
        return false
      }

      return true
    })
    .concat(Array(zeroCount).fill(0))

  return response
}

module.exports = { moveZeros }
