var expect = require('expect.js');

var sumFinder = function(arr, sum) {
  
  var diff = 0;
  
  for (var i = 0; i < arr.length; i++) {
      
      diff = sum - arr[i];
console.log(diff);      
      if (arr.indexOf(diff) > -1) {
        return true;
      }    
  }
  return false;
};

describe('sum finder', function() {
/*
  it('should be true', function() {
    
    var arr = [2, 3, 4, 5];
    var result = sumFinder(arr, 5);
    
    expect(result).to.be.ok();
  });

  it('should be true', function() {
    
    var arr = [2, 3, 4, 5, 1, 2, 4, 6];
    var result = sumFinder(arr, 10);
    
    expect(result).to.be.ok();
  });
*/
  it('should be false', function() {
    
    var arr = [2, 3, 4, 5, 1, 2, 4, 6];
    var result = sumFinder(arr, 12);
    
    expect(result).to.not.be.ok();
  });
  
});