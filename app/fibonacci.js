var expect = require('expect.js');

var fibonacci = function(num) {
  var fibo = [1, 1];
      
  for (var i = 2; i < num; i++) {
    fibo.push(fibo[i-1] + fibo[i-2]);
  }
  return fibo;
};

var fibonacci_recursive = function(n, result) {
  result = result | [];
  
  if(n <= 1)
    return n;
  else
    //return fibonacci_recursive(n-1) + fibonacci_recursive(n-2);
    if (result[n]) {
        return result[n];
    } 
    return fibonacci_recursive(n-1, result) + fibonacci_recursive(n-2, result);
}

describe('fibonacci', function() {
  
  it('should be [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]', function() {
    var arr = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
    var result = fibonacci(10);
    expect(result).to.be.an('array');
    expect(result).to.have.length(10);
    expect(result[10-1]).to.be.equal(55);
  });
  
});

describe('fibonacci recursively', function() {
  it('should be 55', function() {
    var result = fibonacci_recursive(10);
    expect(result).to.be.equal(55);
  });
  
  it('should be 17711', function() {
    var result = fibonacci_recursive(22);
    expect(result).to.be.equal(17711);
  });

  it('should be 832040', function() {
    var result = fibonacci_recursive(30);
    expect(result).to.be.equal(832040);
  });
  
});