var expect = require('expect.js');

/*
http://javascriptissexy.com/understand-javascript-closures-with-ease/
A closure is an inner function that has access to the outer (enclosing) function’s variables. 
The closure has three scope chains: 
it has access to its own scope (variables defined between its curly brackets), 
it has access to the outer function’s variables, 
and it has access to the global variables.

The inner function has access not only to the outer function’s variables, 
but also to the outer function’s parameters. 
Note that the inner function cannot call the outer function’s arguments object, 
however, even though it can call the outer function’s parameters directly.
*/

function init() {
  var name = 'Mozzila';
  
  function displayName() {
    return name;
  }
  displayName();
}

var name1 = init();


function makeFunc() {
  var name = 'Mozzila';
  
  function displayName() {
    return name;
  }
  return displayName;
}

var myFunc = makeFunc();
var name2 = myFunc();


function makeAdder(x) {
  var x1 = x;  // it keeps x value when being called.
  return function(y) {
    return x1+y;
  }
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
var add20 = makeAdder(20);

var add5Result = add5(2);
var add10Result = add10(2);
var add20Result = add20(3);

var second_add5Result = add5(10);

describe('Closure test', function() {
  
  it('should be undefined.', function() {
    expect(name1).to.be(undefined);    
  });
  
  it('should be Mozzila.', function() {
    expect(name2).to.be('Mozzila');        
  });
  
  it('should be 7', function() {
    expect(add5Result).to.be(7);
  })
  
  it('should be 12', function() {
    expect(add10Result).to.be(12);
  });
  
  it('should be 23', function() {
    expect(add20Result).to.be(23);
  });
  
  it('should be 15', function() {
    expect(second_add5Result).to.be(15);
  });
  
});
