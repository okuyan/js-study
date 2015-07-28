var expect = require('expect.js');

var isParindrome = function(str) {
  
  if (str.length < 2) {
    return true;
  }
  
  var first = str.charAt(0);
  var last = str.slice(-1);
  
  if (first !== last) {
      return false;
  } else {
    str = str.substr(1, str.length -2);    
    return isParindrome(str);
  }
};

var isParindrome2 = function(str) {
  
  return str === str.split('').reverse().join('');

};

describe('parindrome testing', function() {
  it ('should be parindrome', function() {

    var str = 'okuyamayuko';
    var result = isParindrome(str);
    
    expect(result).to.be.ok();
    
  }); 
  
  it('should be parindrome2', function() {

    var str = 'okuyamayuko';
    var result = isParindrome2(str);
    
    expect(result).to.be.ok();
    
  });  
});