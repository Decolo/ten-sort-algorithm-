function quickSort(arr) {
  if (arr.length < 2) return arr
  let middle = Math.floor(arr.length / 2)
  let pivot = arr.splice(middle, 1)
  let left = []
  let right = []
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  return quickSort(left).concat(pivot, quickSort(right))
}
