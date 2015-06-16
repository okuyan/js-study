var expect = require('expect.js');
var _ = require('lodash');

var switchProto = {
  isOn: function isOn() {
    return this.state;
  },
  
  toggle: function toggle() {
    this.state = !this.state;
    return this;
  },
  
  meta: {
    name: 'Light switch'
  },
  
  state : false
};

var switch1 = _.extend({}, switchProto);
var switch2 = _.extend({}, switchProto);

describe('cloning prototype', function() {
  
  switch1.isOn.isShared = true;
  
  it('should be undefined. Methods are copied for each instances', function() {
    expect(switch2.isShared).to.be(undefined);
  });
    
  it('should be true.', function() {    
    expect(switch1.toggle().isOn()).to.be(true);
  });
  
  it('should be false', function() {
    expect(switch2.isOn()).to.be(false);
  });
  
});