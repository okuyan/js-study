var expect = require('chai').expect;

var swap = function (items, firstIndex, secondIndex){
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
};
/*
var swap = function(arr, left, right) {
  var temp = arr[left];
  arr[left] = arr[right];
  arr[right] = arr[left];
};
*/
var partition = function(arr, left, right) {
  
  var index = Math.floor((left+right)/2);
  var pivot = arr[index];

  while(left <= right) {

    while(arr[left] < pivot) {
        left++;
    }
    
    while(pivot < arr[right]){
        right--;
    }
    
    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
    
  }
  return left;
};


var quicksort = function(arr, left, right) {

console.log(arr);
 
  var index;
  
  if (arr.length > 1) {
  
    index = partition(arr, left, right);
    
    if (left < index - 1) {
      quicksort(arr, left, index -1);
    }
    
    if (index < right) {
      quicksort(arr, index, right);
    }
  }
  return arr;  
};

describe('quicksort', function() {
  
  it('should be sorted as [1, 2, 3, 4, 5, 6, 7, 8]', function() {
    var arr = [8, 4, 3, 7, 6, 5, 2, 1];
    //0, 1, 2, 3, 4, 5, 6, 7
    //0 + 7 = 7/2 = 4
    //1 + 6 = 7/2 = 4
    //2+ 5 = 7/2 = 4 
    
    var result = quicksort(arr, 0, arr.length-1);
    
    expect(result).to.eql([1, 2, 3, 4, 5, 6, 7, 8]);
    
  });
});