function mergeSort(arr) {
  return divide(arr)
}

function divide(arr) {
  if (arr.length < 2) return arr

  let middleIndex = Math.floor(arr.length / 2)
  let leftArr = slice(arr, 0, middleIndex)
  let rightArr = slice(arr, middleIndex)
  
  return merge(divide(leftArr), divide(rightArr))
}

function merge(left, right) {
  let newArr = [], tempIndex

  while (left.length !== 0 && right.length !== 0) {
    tempIndex = newArr.length
    if (left[0] < right[0]) {
      newArr[tempIndex] = shift(left)
    } else {
      newArr[tempIndex] = shift(right)
    }
  }

  if (left.length !== 0) newArr = concat(newArr, left)
  if (right.length !== 0) newArr = concat(newArr, right)
  
  return newArr
}

function slice(arr, start, end) {
  let newArr = []
    start = start || 0
    end = end || arr.length
  let length = end - start
  for (let i = 0; i < length; i++) {
    newArr[i] = arr[start]
    start++
  }
  return newArr
}

function shift(arr) {
  let temp = arr[0]
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1]
  }
  arr.length -= 1
  return temp
}

function concat(arr1, arr2) {
  let newArr = [], tempIndex
  for (let i = 0; i < arr1.length; i++) {
    newArr[i] = arr1[i]
  }
  for (let i = 0; i < arr2.length; i++) {
    tempIndex = newArr.length
    newArr[tempIndex] = arr2[i]
  }
  return newArr
}