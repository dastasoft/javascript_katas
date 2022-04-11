class Item {
  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
    this.MIN_QUALITY = 0
    this.MAX_QUALITY = 50
    this.QUALITY_INCREASE_STEP = 1
    this.QUALITY_DECREASE_STEP = 1
  }

  increaseQuality() {
    const newQuality = this.quality + this.QUALITY_INCREASE_STEP
    this.quality = newQuality > this.MAX_QUALITY ? this.MAX_QUALITY : newQuality
  }

  decreaseQuality() {
    const newQuality = this.quality - this.QUALITY_DECREASE_STEP
    this.quality = newQuality < this.MIN_QUALITY ? this.MIN_QUALITY : newQuality
  }

  decreaseSellIn() {
    this.sellIn -= this.QUALITY_DECREASE_STEP
  }

  update() {
    if (this.quality > this.MIN_QUALITY) {
      this.decreaseQuality()
    }

    this.decreaseSellIn()

    if (this.sellIn < 0 && this.quality > this.MIN_QUALITY) {
      this.decreaseQuality()
    }
  }
}

module.exports = Item
