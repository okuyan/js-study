var expect = require('chai').expect;

var binarySearch = function(arr, target) {
  
  var min = 0;
  var max = arr.length - 1;
  var guess = Math.round((min+max)/2);
  
  while(min <= max) {
    guess = Math.floor((min+max)/2);    

    if (arr[guess] === target) {
      return guess;
      
    } else if (arr[guess] < target) {      
      min = guess + 1;
      
    } else {
      max = guess - 1;
    }
  }
};

describe('binary search test', function() {
  
  it('should be 20', function() {
    var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

    var result = binarySearch(primes, 73);
    expect(result).to.be.equal(20);
    
  });
  
});