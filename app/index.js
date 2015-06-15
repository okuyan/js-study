var expect = require('expect.js');

var switchProto = {
  
  isOn: function isOn() {
    return this.state;
  },
  
  toggle: function() {
    this.state = !this.state;
    return this;
  },
  
  meta: {
    name: 'hoge'
  },
  
  state: false,
},


switch1 = Object.create(switchProto);
console.log(switch1.meta);


describe('Object.create', function() {
  it('should return true at the 1st time', function() {
    expect(switch1.toggle().isOn()).to.be.ok();
  });
  
});


switch2 = Object.create(switchProto);


describe('Object.create', function() {
  
  it('should return false at the 2nd time', function() {
    expect(switch1.toggle().isOn()).to.not.be.ok();
  });
  
  it('should return false', function() {
    expect(switch2.isOn()).to.not.be.ok();
  });
  
});

switch2.meta.name = 'fuga';

describe('delegate prototype', function() {  
  it('should equal to fuga. Object and array mutations are shared', function() {
    expect(switch1.meta.name).to.be('fuga');
  });
    
});
