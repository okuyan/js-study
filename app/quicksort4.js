var expect = require('chai').expect;


var quicksort = function(arr) {
console.log("arr: " + arr);

  if (arr.length < 1) {
    return [];
  }

  var left = [],
      right = [],
      pivot = arr[arr.length-1];
//      pivot = arr[0];
      
//console.log('pivot; ' + pivot);
      
  for (var i = arr.length - 2; i >= 0; --i) {

//console.log('item: ' + arr[i]);
  
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
    
//console.log("left: " + left);
//console.log("right: " + right);

  }
  
  return quicksort(left).concat(pivot, quicksort(right));    
  
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