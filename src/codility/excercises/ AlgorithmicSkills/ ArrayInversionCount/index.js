function solution(A) {
  let inversions = 0

  function mergeSort(arr) {
    if (arr.length < 2) return arr
    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
  }

  function merge(left, right) {
    const result = []
    let i = 0
    let j = 0

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        result.push(left[i])
        i++
      } else {
        result.push(right[j])
        j++
        inversions += left.length - i
      }
    }

    while (i < left.length) {
      result.push(left[i])
      i++
    }

    while (j < right.length) {
      result.push(right[j])
      j++
    }

    return result
  }

  mergeSort(A)
  return inversions > 1000000000 ? -1 : inversions
}

module.exports = { solution }
