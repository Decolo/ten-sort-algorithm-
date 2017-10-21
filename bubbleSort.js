function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for(let j = 0; j < arr.length - 1 - i; j++) {
       if (arr[j] > arr[j + 1]) {
         exchange(arr, j, j + 1)
       }
    }
  }
  return arr
}

function exchange(arr, a, b) {
  let temp = 0
  temp = arr[a] 
  arr[a] = arr[b]
  arr[b] = temp
}
