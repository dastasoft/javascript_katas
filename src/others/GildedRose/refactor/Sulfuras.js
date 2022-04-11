const Item = require('./Item')

class Sulfuras extends Item {
  constructor(name = 'Sulfuras, Hand of Ragnaros', sellIn, quality) {
    super(name, sellIn, quality)
  }

  update() {}
}

module.exports = Sulfuras
