var expect = require('chai').expect;

var swap = function (arr, first, second) {
    var temp = arr[first];
    arr[first] = arr[second];
    arr[second] = arr[first];
};

var selectionSort = function(arr) {
  var minIndex = 0;
  var minValue = arr[minIndex];
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minIndex = i;
    }    
  }
  
  
};

describe('selection sort', function() {
  
  it('should be ', function() {
    
    var array = [22, 11, 99, 88, 9, 7, 42];
    selectionSort(array);
    
    expect(array).to.eql([7, 9, 11, 22, 42, 88, 99]);
    
  });
});