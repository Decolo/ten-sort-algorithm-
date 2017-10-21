// Bucket Sort
/**
 * @param {Number}  num   Number of buckets
 */
function bucketSort(arr, num) {
  let max = arr[0], min = arr[0], space
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= max) max = arr[i]
    if (arr[i] <= min) min = arr[i]
  }
  // obtain a quotient 
  space = (max - min + 1) / num
  // divide arr into buckets
  let bucket =  divide(arr, space)
  // merge buckets to obtain an new array
  return merge(bucket)
}

function divide(arr, space) {
  let bucket = []
  for (let i = 0; i < arr.length; i++) {
    let index = Math.floor(arr[i] / space)
    if (!bucket[index]) {
      bucket[index] = [arr[i]]
    } else {
      // make use of insertSort
      let j = bucket[index].length - 1
      while(j >= 0 && bucket[index][j] > arr[i]) {
          bucket[index][j + 1] = bucket[index][j]
          j--
      }
      bucket[index][j + 1] = arr[i]
    }
  }
  return bucket
}

function merge(bucket) {
  let newArr = [],
    start = 0
  for (let k = 0; k < bucket.length; k++) {
    if (bucket[k]) {
      for (let x = 0; x < bucket[k].length; x++) {
        start = newArr.length
        newArr[start] = bucket[k][x]
      }
    }
  }
  return newArr
}