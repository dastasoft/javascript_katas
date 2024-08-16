const DIRECTIONS = {
  N: 'NORTH',
  S: 'SOUTH',
  W: 'WEST',
  E: 'EAST',
}

const OPPOSITE_DIRECTIONS = {
  [DIRECTIONS.N]: DIRECTIONS.S,
  [DIRECTIONS.S]: DIRECTIONS.N,
  [DIRECTIONS.W]: DIRECTIONS.E,
  [DIRECTIONS.E]: DIRECTIONS.W,
}

function dirReduc(array) {
  return array.reduce((route, element) => {
    const el = element.toUpperCase()

    const lastElement = route[route.length - 1]
    OPPOSITE_DIRECTIONS[el] === lastElement ? route.pop() : route.push(el)

    return route
  }, [])
}

module.exports = { dirReduc }
