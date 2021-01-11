function digitalRoot(n) {
  let result = n

  do {
    result = Array.from(String(result), Number).reduce(
      (acc, curr) => acc + curr,
      0
    )
  } while (result > 9)

  return result
}

module.exports = { digitalRoot }
