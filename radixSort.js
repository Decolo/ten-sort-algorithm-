// Radix Sort
function radixSort(arr) {
  let maxDigit = 1,
    tempArr = []
  maxDigit = findMaxDigit(arr)
  // divide arr into buckets
  divide(arr, maxDigit, tempArr)
  return arr
}

function divide(arr, maxDigit, tempArr) {
  let dev = 1
  for (let digit = 1; digit <= maxDigit; digit++) {
    for (let j = 0; j < arr.length; j++) {
      if (digit === 1) {
        // first time
        tempDigit = arr[j] % 10
      } else {
        tempDigit = Math.floor(arr[j] / dev)
      }

      if (!tempArr[tempDigit]) {
        tempArr[tempDigit] = [arr[j]]
      } else {
        tempIndex = tempArr[tempDigit].length
        tempArr[tempDigit][tempIndex] = arr[j]
      }
    }

    // merge buckets to get an arr
    merge(arr, tempArr)
    dev *= 10
    tempArr.length = 0
  }
}

function merge(arr, tempArr) {
  let tempIndex = 0
  for (let k = 0; k < tempArr.length; k++) {
    if (tempArr[k]) {
      for (let m = 0; m < tempArr[k].length; m++) {
        arr[tempIndex] = tempArr[k][m]
        tempIndex++
      }
    }
  }
  return tempArr
}

function findMaxDigit(arr) {
  // Determine the max in arr
  let maxItem = arr[0], 
    digitNumber = 1, 
    dev = 10
  for (let i = 0; i < arr.length; i++) {
    if (maxItem <= arr[i]) maxItem = arr[i]
  }

  // Determine the number of digits
  while (Math.floor(maxItem / dev) !== 0) {
    digitNumber++
    dev = dev * 10
  }
  return digitNumber
}