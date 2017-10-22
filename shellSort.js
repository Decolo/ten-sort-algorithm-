function shellSort(arr) {
  for (var d = arr.length / 2; d >= 1; d = Math.floor(d / 2)) { //d：增量
    for (var i = d; i < arr.length; i++){ 
      //i:代表即将插入的元素角标，作为每一组比较数据的最后一个元素角标 
      //j:代表与i同一组的数组元素角标
      for (var j = i- d; j >= 0; j -= d){ //在此处-d 为了避免下面数组角标越界
          if (arr[j] > arr[j + d]) {// j+d 代表即将插入的元素所在的角标
              //符合条件，插入元素（交换位置）
              var temp = arr[j]
              arr[j] = arr[j + d]
              arr[j + d] = temp
          }
      }
    } 
  }
  return arr
}