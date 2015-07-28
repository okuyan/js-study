var expect = require('expect.js');

var reverseInteger = function(x) {
  
  var isNegative = false;

  if (x < 0) {
    isNegative = true;
    x = x * -1;
  }
  
  var str = String(x);  
  
  var reversed = str.split('').reverse().join('');
  reversed = Number(reversed);

  if (isNegative) {
    reversed = reversed * -1;
  }

  return reversed;
};

describe('reverse integer', function() {
  
  it('should be 4321', function() {
    
    var result = reverseInteger(1234);
    expect(result).to.be.equal(4321);
    
  });
  
  it('should be -543', function() {

    var result = reverseInteger(-345);
    expect(result).to.be.equal(-543);
    
  });
});