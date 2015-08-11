var expect = require('chai').expect;

var insert = function(arr, rightIndex, value) {
  
  for (var i = rightIndex; i >= 0 && arr[i] > value; i--) {
    arr[i + 1] = arr[i]; 
  }
  arr[i + 1] = value;
  
};

var insertionSort = function(arr) {
  
  var length = arr.length;
  
  for (var i = 1; i < length; i++) {
    insert(arr, i-1, arr[i]);
  }
  
};

describe('Insertion sort', function() {
  
  it('should be sorted', function() {
    
    var array = [22, 11, 99, 88, 9, 7, 42];
    insertionSort(array);
    
    expect(array).to.eql([7, 9, 11, 22, 42, 88, 99]);
    
  });
  

  it('should be sorted', function() {
    
    var array = [11, 200, -1, 0, 55, 35];
    insertionSort(array);
    
    expect(array).to.eql([-1, 0, 11, 35, 55, 200]);
    
  });
  
});