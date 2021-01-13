function rgb(r, g, b) {
  const RADIX = 16
  const clamp = (number, min = 0, max = 255) =>
    Math.min(Math.max(number, min), max)

  const toHex = number => {
    if (number === 0) return '00'
    const value = parseInt(number, 10).toString(RADIX).toUpperCase()
    return number < RADIX ? '0' + value : value
  }

  return `${toHex(clamp(r))}${toHex(clamp(g))}${toHex(clamp(b))}`
}

module.exports = rgb
