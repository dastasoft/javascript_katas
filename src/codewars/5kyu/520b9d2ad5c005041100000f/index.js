function pigIt(str) {
  return str
    .split(' ')
    .map(newWord => {
      const firstLetter = newWord.charAt(0)
      const isLetter = firstLetter.match(/[a-zA-Z]/i)
      return newWord.slice(1) + firstLetter + (isLetter ? 'ay' : '')
    })
    .join(' ')
}

module.exports = { pigIt }
