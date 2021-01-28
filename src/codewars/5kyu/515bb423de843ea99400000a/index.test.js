const { PaginationHelper } = require('.')

const helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4)

test('Simple page count', () => {
  expect(helper.pageCount()).toBe(2)
})

test('Simple item count', () => {
  expect(helper.itemCount()).toBe(6)
})

test('Items in first page', () => {
  expect(helper.pageItemCount(0)).toBe(4)
})

test('Items in last page', () => {
  expect(helper.pageItemCount(1)).toBe(2)
})

test('Items in invalid page', () => {
  expect(helper.pageItemCount(2)).toBe(-1)
})

test('Find page by item', () => {
  expect(helper.pageIndex(5)).toBe(1)
})

test('Find page by item 2', () => {
  expect(helper.pageIndex(2)).toBe(0)
})

test('Find invalid page by item', () => {
  expect(helper.pageIndex(20)).toBe(-1)
})

test('Find invalid page by item 2', () => {
  expect(helper.pageIndex(-10)).toBe(-1)
})
