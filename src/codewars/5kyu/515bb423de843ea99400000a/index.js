function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection
  this.itemsPerPage = itemsPerPage
  this.totalPageNumber = Math.ceil(this.collection.length / this.itemsPerPage)
  this.pages = []

  this.divideItemsInPages(this.collection)
}

PaginationHelper.prototype.itemCount = function () {
  return this.collection.length
}

PaginationHelper.prototype.pageCount = function () {
  return this.totalPageNumber
}

PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  return this.pages[pageIndex] ? this.pages[pageIndex].length : -1
}

PaginationHelper.prototype.pageIndex = function (itemIndex) {
  for (let i = 0; i < this.pages.length; i++) {
    if (this.pages[i].includes(this.collection[itemIndex])) return i
  }
  return -1
}

PaginationHelper.prototype.divideItemsInPages = function (shallowCollection) {
  const restItems = shallowCollection.slice(this.itemsPerPage)
  const fitInPageItems = shallowCollection.slice(0, this.itemsPerPage)

  this.pages.push(fitInPageItems)

  return restItems.length > 0 ? this.divideItemsInPages(restItems) : -1
}

module.exports = { PaginationHelper }
