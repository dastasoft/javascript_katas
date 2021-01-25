function validParentheses(parens) {
  let openParens = 0
  let closeParens = 0
  const match = Array.from(parens).find(singleParens => {
    if (singleParens === '(') openParens++
    else closeParens++

    return closeParens > openParens
  })

  return !match && openParens === closeParens
}

module.exports = { validParentheses }
