const Shop = require('./Shop')
const Item = require('./Item')
const AgedBrie = require('./AgedBrie')
const Sulfuras = require('./Sulfuras')
const BackstagePases = require('./BackstagePases')
const Conjured = require('./Conjured')

describe('Gilded Rose', function () {
  let shop

  beforeEach(() => {
    shop = new Shop([
      new Item('+5 Dexterity Vest', 10, 20),
      new AgedBrie('Aged Brie', 2, 0),
      new Item('Elixir of the Mongoose', 5, 7),
      new Sulfuras('Sulfuras, Hand of Ragnaros', 0, 80),
      new BackstagePases('Backstage passes to a TAFKAL80ETC concert', 15, 20),
      new Conjured('Mana Cake', 3, 6),
    ])
  })

  it('Should be a +5 Dexterity Vest', function () {
    const items = shop.updateQuality()
    expect(items[0].name).toBe('+5 Dexterity Vest')
  })

  it('Should have sellIn property', () => {
    const items = shop.updateQuality()
    expect(
      items.every(item => Object.prototype.hasOwnProperty.call(item, 'sellIn')),
    ).toBe(true)
  })

  it('Should have quality property', () => {
    const items = shop.updateQuality()
    expect(
      items.every(item =>
        Object.prototype.hasOwnProperty.call(item, 'quality'),
      ),
    ).toBe(true)
  })

  it('Should decrease the sellIn and quality', () => {
    const items = shop.updateQuality()
    expect(items[0].sellIn).toBe(9)
    expect(items[0].quality).toBe(19)
  })

  it('Once the sell by date has passed, quality should degrade twice as fast', () => {
    const ether = new Item('ether', 0, 10)
    shop = new Shop([ether])
    const items = shop.updateQuality()
    expect(items[0].quality).toBe(8)
  })

  it('The quality of an item should be never negative', () => {
    const ether = new Item('ether', 0, 0)
    shop = new Shop([ether])
    const items = shop.updateQuality()
    expect(items[0].quality).toBe(0)
  })

  describe('Aged Brie', () => {
    let agedBrie

    beforeEach(() => {
      agedBrie = new AgedBrie('Aged Brie', 10, 49)
      shop = new Shop([agedBrie])
    })

    it('Aged Brie should increases in quality the older it gets', () => {
      const items = shop.updateQuality()
      expect(items[0].sellIn).toBe(9)
      expect(items[0].quality).toBe(50)
    })

    it('The quality of an item should be never more than 50', () => {
      shop.updateQuality()
      const items = shop.updateQuality()
      expect(items[0].quality).toBe(50)
    })
  })

  it('Sulfuras, Hand of Ragnaros, should never has to be sold or decreases in quality', () => {
    const sulfuras = new Sulfuras('Sulfuras, Hand of Ragnaros', 10, 10)
    shop = new Shop([sulfuras])
    const items = shop.updateQuality()
    expect(items[0].sellIn).toBe(10)
    expect(items[0].quality).toBe(10)
  })

  describe('Backstage passes to a TAFKAL80ETC concert, should increase in quality as its sellIn value approaches', () => {
    it('Should increase quality', () => {
      const backStagePases = new BackstagePases(
        'Backstage passes to a TAFKAL80ETC concert',
        50,
        1,
      )
      shop = new Shop([backStagePases])
      const items = shop.updateQuality()
      expect(items[0].quality).toBe(2)
    })

    it('Should increases quality by 2 when there are 10 days or less', () => {
      const backStagePases = new BackstagePases(
        'Backstage passes to a TAFKAL80ETC concert',
        10,
        1,
      )
      shop = new Shop([backStagePases])
      const items = shop.updateQuality()
      expect(items[0].quality).toBe(3)
    })

    it('Should increases quality by 3 when there are 5 days or less', () => {
      const backStagePases = new BackstagePases(
        'Backstage passes to a TAFKAL80ETC concert',
        5,
        1,
      )
      shop = new Shop([backStagePases])
      const items = shop.updateQuality()
      expect(items[0].quality).toBe(4)
    })

    it('Should drop quality to 0 after the concert', () => {
      const backStagePases = new BackstagePases(
        'Backstage passes to a TAFKAL80ETC concert',
        0,
        50,
      )
      shop = new Shop([backStagePases])
      const items = shop.updateQuality()
      expect(items[0].quality).toBe(0)
    })
  })

  it('Conjured items should degrade in quality twice as fast as normal items', () => {
    const conjuredItem = new Conjured('Potion', 10, 10)
    shop = new Shop([conjuredItem])
    const items = shop.updateQuality()
    expect(items[0].quality).toBe(8)
  })
})
