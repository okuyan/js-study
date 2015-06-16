var expect = require('expect.js');

function Test() {
  
}

Test.prototype.a = 10;

var func = new Test();

Test.prototype.b = 20;

describe('Understand prototype', function() {
  
  it('should be 10', function() {
    expect(func.a).to.be(10);
  });
  
  it('should be 20. you can add property in prototype after defined.', function() {
    expect(func.b).to.be(20);
  });
});