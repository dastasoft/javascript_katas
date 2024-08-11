const Item = require('./Item')

class BackstagePases extends Item {
  constructor(
    name = 'Backstage passes to a TAFKAL80ETC concert',
    sellIn,
    quality,
  ) {
    super(name, sellIn, quality)
    this.BACKSTAGE_PASES_DAYS_TO_INCREASE_BY_2 = 10
    this.BACKSTAGE_PASES_DAYS_TO_INCREASE_BY_3 = 5
  }

  update() {
    if (this.quality < this.MAX_QUALITY) {
      this.increaseQuality()

      if (this.sellIn <= this.BACKSTAGE_PASES_DAYS_TO_INCREASE_BY_2) {
        this.increaseQuality()
      }

      if (this.sellIn <= this.BACKSTAGE_PASES_DAYS_TO_INCREASE_BY_3) {
        this.increaseQuality()
      }
    }

    this.decreaseSellIn()

    if (this.sellIn < 0) {
      this.quality = 0
    }
  }
}

module.exports = BackstagePases
