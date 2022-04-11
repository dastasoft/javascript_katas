const Item = require('./Item')

class Conjured extends Item {
  constructor(name, sellIn, quality) {
    super(`Conjured ${name}`, sellIn, quality)
    this.QUALITY_DECREASE_STEP = 2
  }

  update() {
    if (this.quality > this.MIN_QUALITY) this.decreaseQuality()
    this.decreaseSellIn()
  }
}

module.exports = Conjured
