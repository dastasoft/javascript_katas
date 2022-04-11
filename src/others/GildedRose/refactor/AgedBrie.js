const Item = require('./Item')

class AgedBrie extends Item {
  constructor(name = 'Aged Brie', sellIn, quality) {
    super(name, sellIn, quality)
  }

  update() {
    if (this.quality < this.MAX_QUALITY) {
      this.increaseQuality()

      if (this.sellIn < 0) this.increaseQuality()
    }

    this.decreaseSellIn()
  }
}

module.exports = AgedBrie
