function heapSort(arr) {
  let middle = Math.floor(arr.length / 2) - 1
  let length = arr.length
  
  // build the heap (parentNode is always bigger than childNodes)
  for (let i = middle; i >= 0; i--) {
    heapify(arr, length, i)
  }
  
  // adjust the unsorted part of arr, and sort the arr for times (length - 1).
  return sort(arr, length)
}

function heapify(arr, length, parent) {
  let largest = parent
  let leftChild = 2 * parent + 1
  let rightChild = 2 * parent + 2
  if (leftChild <= length - 1 && arr[leftChild] > arr[largest]) {
    largest = leftChild
  }
  if (rightChild <= length - 1 && arr[rightChild] > arr[largest]) {
    largest = rightChild
  }

  if (largest !== parent) {
    temp = arr[parent]
    arr[parent] = arr[largest]
    arr[largest] = temp
    heapify(arr, length, largest)
  }
}

function sort(arr, length) {
  let temp
  
  for (let i = arr.length - 1; i > 0; i--) {
    exchange(i, 0)
    // always start adjusting from the root node. (Due to the last exchange happened on the first item of arr 
    // which is the root node of new unsorted array)
    heapify(arr, i, 0)
  }
  return arr
}

function exchange(arr, a, b) {
  let temp
  temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

