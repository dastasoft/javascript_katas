const { dirReduc } = require('./')

test('should first', () => {
  expect(
    dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']),
  ).toEqual(['WEST'])
})

test('should first', () => {
  expect(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST'])).toEqual([
    'NORTH',
    'WEST',
    'SOUTH',
    'EAST',
  ])
})

test('should first', () => {
  expect(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST'])).toEqual(
    [],
  )
})

test('should first', () => {
  expect(dirReduc(['NORTH', 'EAST', 'WEST', 'SOUTH', 'WEST', 'WEST'])).toEqual([
    'WEST',
    'WEST',
  ])
})
