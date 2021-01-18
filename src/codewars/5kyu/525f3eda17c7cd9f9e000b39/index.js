function makeIt(operation, num) {
  return operation ? operation(num) : num
}

function zero(operation) {
  return makeIt(operation, 0)
}
function one(operation) {
  return makeIt(operation, 1)
}
function two(operation) {
  return makeIt(operation, 2)
}
function three(operation) {
  return makeIt(operation, 3)
}
function four(operation) {
  return makeIt(operation, 4)
}
function five(operation) {
  return makeIt(operation, 5)
}
function six(operation) {
  return makeIt(operation, 6)
}
function seven(operation) {
  return makeIt(operation, 7)
}
function eight(operation) {
  return makeIt(operation, 8)
}
function nine(operation) {
  return makeIt(operation, 9)
}

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
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  times,
  dividedBy,
}
