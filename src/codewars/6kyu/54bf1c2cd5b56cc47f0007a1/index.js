function duplicateCount(text) {
  const arrayText = String(text).toLowerCase().split('')
  const duplicatedElements = []

  for (let i = 0; i < arrayText.length; i++) {
    const character = arrayText[i]
    if (duplicatedElements.includes(character)) continue

    const subText = arrayText.slice(i + 1)
    if (subText.includes(character)) duplicatedElements.push(character)
  }

  return duplicatedElements.length
}

module.exports = { duplicateCount }
