var expect = require('chai').expect;

var swap = function (arr, first, second) {
    var temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
};

var indexOfMin = function(arr, start) {

    var minValue = arr[start];
    var minIndex = start;
    
    for (var i = minIndex + 1; i < arr.length; i++) {
      if (arr[i] < minValue) {
        minIndex = i;
        minValue = arr[i];
      }
    }
    return minIndex;
};

var selectionSort = function(arr) {
  var minIndex = 0;
  
  for (var i = 0; i < arr.length; i++) {
    
    minIndex = indexOfMin(arr, i);
    swap(arr, minIndex, i);
    
  }    
};

describe('selection sort', function() {
  
  it('should be ', function() {
    
    var arr = [22, 11, 99, 88, 9, 7, 42];
    selectionSort(arr);
    
    expect(arr).to.eql([7, 9, 11, 22, 42, 88, 99]);
  });
  
  it('should be ', function() {
    var arr = [98, 25, 30, 39, 55, 100, 300, 1];
    selectionSort(arr);

    expect(arr).to.eql([1, 25, 30, 39, 55, 98, 100, 300]);    
  });
});