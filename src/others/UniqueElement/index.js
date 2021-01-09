const findUniqueElement = a => {
  const copy = [...a]
  copy.sort()

  for (let i = 0; i < copy.length; i += 2) {
    if (copy[i] !== copy[i + 1]) return copy[i]
  }

  return null
}

const improvedFindUniqueElement = a => a.reduce((acc, curr) => (acc ^= curr))

module.exports = { findUniqueElement, improvedFindUniqueElement }
