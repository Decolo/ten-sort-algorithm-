function countingSort(arr){
  let dictArr, newArr = []

  // divide arr into buckets
  dictArr = divide(arr)
  // merge buckets to obtain a sorted arr(not a new array).
  return merge(dictArr)
}

function divide(arr) {
  let dictArr = []
  for (let i = 0; i < arr.length; i++) {
    if (!dictArr[arr[i]]) {
      dictArr[arr[i]] = 1
    } else {
      dictArr[arr[i]]++
    }
  }
  return dictArr
}

function merge(dictArr) {
  let newArr = []
  for (let i = 0; i < dictArr.length; i++){
    if (dictArr[i]) {
      let count = dictArr[i], start
      while (count >= 1) {
        start = newArr.length
        newArr[start] = i
        count--
      }
    }
  }
  return  newArr
}
