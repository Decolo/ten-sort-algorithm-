function insertionSort(arr) {
  let temp, j
  for (let i = 0; i < arr.length - 1; i++) {
    j = i + 1
    temp = arr[j] 
    while (j > 0 && temp < arr[j - 1]) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = temp
  }
  return arr
}