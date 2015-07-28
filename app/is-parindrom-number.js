var expect = require('expect.js');

var isParindrome = function(num) {

  var str = String(num);
  return str === str.split('').reverse().join('');
  
};

describe('check if number is parindrome', function() {
  it('should be parindrome', function() {
    
    var test = 1223221;
    var result = isParindrome(test);
    
    expect(result).to.be.ok();
    
  });
  
  it('should not be parindrome', function() {
    
    var test = 3496849648;
    var result = isParindrome(test);
    
    expect(result).to.not.be.ok();
    
  });
  
});