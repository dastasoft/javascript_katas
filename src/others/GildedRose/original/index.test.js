const { Shop, Item } = require('./index_original')

describe('Gilded Rose', function () {
  it('Should be a potion', function () {
    const shop = new Shop([new Item('potion', 0, 10)])
    const items = shop.updateQuality()
    expect(items[0].name).toBe('potion')
  })
})
