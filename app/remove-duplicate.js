var expect = require('expect.js');
var _ = require('underscore');

var removeDuplicate = function(arr) {
  var length = arr.length;
  var result = [];
  
  for (var i = 0; i < length; i++) {
    if (result.indexOf(arr[i]) < 0) {
      result.push(arr[i]);
    }
  }
  return result;
};

describe('remove duplicate', function() {
  
  it('duplicated value should be removed', function() {

    var temp = [1,3,3,3,1,5,6,7,8,1];
    var result = removeDuplicate(temp);

    //expect [1,3,5,6,7,8]
    expect(result).to.be.an('array');
    expect(result).to.have.length(6);
    expect(result[2]).to.be.equal(5);
  });
});


var _removeDuplicate = function(arr) {
  return _.uniq(arr);
};

describe('testing underscore version', function() {
  
  it('should be unique', function() {
    var temp = [1,3,3,3,1,5,6,7,8,1];
    var result = _removeDuplicate(temp);

    //expect [1,3,5,6,7,8]
    expect(result).to.be.an('array');
    expect(result).to.have.length(6);
    expect(result[3]).to.be.equal(6);
    
  });  
});