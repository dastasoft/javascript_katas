const list = names => {
  return names.reduce((accumulator, { name }, index) => {
    if (index === 0) return accumulator + name
    if (index === names.length - 1) return `${accumulator} & ${name}`
    return `${accumulator}, ${name}`
  }, '')
}

module.exports = list
