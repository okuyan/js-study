var expect = require('expect.js');

var flatten = function(input) {
  
  var output = [];
  var idx = output.length;
  var length = input.length;
  
  for(var i = 0; i < length;  i++) {
    var value = input[i];
    
    if (Array.isArray(value)) {
      output = output.concat(flatten(value, output));
    } else {
      output.push(value);
    }    
  }
    
  return output;
};

describe('flatten function', function(){
  
  it('should be [1, 7, 9, 1]', function() {
    var arr = [1, [7, 9], [1]];
    var result = flatten(arr);

    console.log(result);    
    expect(result).to.be.an('array');
    expect(result).to.have.length(4);
  });

  it('should be [1, 7, 9, 1]', function() {
    var arr = [1, [7, 9], [1, [2, 3, [4]]]];
    var result = flatten(arr);

    console.log(result);    
    expect(result).to.be.an('array');
    expect(result).to.have.length(7);
  });
});

