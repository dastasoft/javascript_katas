const numberFunctions = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
].reduce((accumulator, name, index) => {
  accumulator[name] = operation => (operation ? operation(index) : index)
  return accumulator
}, {})

function plus(rightOperand) {
  return leftOperand => leftOperand + rightOperand
}
function minus(rightOperand) {
  return leftOperand => leftOperand - rightOperand
}
function times(rightOperand) {
  return leftOperand => leftOperand * rightOperand
}
function dividedBy(rightOperand) {
  return leftOperand => Math.trunc(leftOperand / rightOperand)
}

module.exports = {
  ...numberFunctions,
  plus,
  minus,
  times,
  dividedBy,
}
