function selectionSort(arr) {
  let minIndex
  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }  
    }
    if (minIndex !== i) exchange(arr, i, minIndex)
  }
  return arr
}

function exchange(arr, a, b) {
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}