var expect = require('chai').expect;

var swap = function(arr, first, second) {
  
  var temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
  
};

var partition = function(arr, left, right) {
  var pivot = arr[right];

  var lower = greater = left;
  //array[p..r]
  
  for(var i = left; i < right; i++) {
      
      if (arr[i] > pivot) {
        //do nothing
        //just increment i
      }
      if (arr[i] < pivot) {
        swap(arr, i, greater);
        greater++;
      }
  }
  if (i === right) {
    swap(arr, right, i);
    
  }

  return left;
};

var quicksort = function(arr, left, right) {

  var index = partition(arr, left, right);
  
//  if (arr.length > 1) {
  if (left < right) {
      
    if (left < index -1) {
      quicksort(arr, left, index-1);
    }
    
    if (right > index) {
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