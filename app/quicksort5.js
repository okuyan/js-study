var expect = require('chai').expect;

var swap = function(arr, first, second) {

  var temp = arr[first];
  arr[first] = arr[second];
  arr[second] = arr[first];
  
};

var quicksort = function(arr) {
  
};


describe('quicksort', function() {
  
  it('should be sorted as [1, 2, 3, 4, 5, 6, 7, 8]', function() {
    var arr = [8, 4, 3, 7, 6, 5, 2, 1];
    //0, 1, 2, 3, 4, 5, 6, 7
    //0 + 7 = 7/2 = 4
    //1 + 6 = 7/2 = 4
    //2+ 5 = 7/2 = 4 
    
    var result = quicksort(arr);
    
    expect(result).to.eql([1, 2, 3, 4, 5, 6, 7, 8]);
    
  });
});