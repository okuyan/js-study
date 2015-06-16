var expect = require('expect.js');

var enemyPrototype = {
  name: 'Wolf',
  
  position: {
    x: 0,
    y: 0
  },
  
  setPosition: function(x, y) {
    this.position = {
      x: x,
      y: y
    };
    
    return this;
  },
  
  health: 20,
  
  bite: function() {},
  
  evade: function() {}
};

var spawnEnemy = function() {
  return Object.create(enemyPrototype);
};

describe('Flyweight pettern', function() {
  
  var wolf1 = spawnEnemy();
  var wolf2 = spawnEnemy();
  
  wolf1.health = 5;
  wolf2.setPosition(20, 20);
  wolf1.setPosition(10, 10);
  
  var wolf3 = spawnEnemy();
  
  console.log(wolf1.health);
  
  it('should be 20. Primitives overrides automatically.', function() {
    expect(wolf2.health).to.be(20);    
  });
    
  it('should be 10. Position override works.', function() {
    expect(wolf1.position.x).to.be(10);
  });
  
  it('should be 20.', function() {
    expect(wolf2.position.y).to.be(20);
  });
  
  it('should remain 10.', function() {
    expect(wolf1.position.y).to.be(10);
  });
  
  it('should be 0. prototype should remain unchanged.', function() {
    expect(wolf3.position.x).to.be(0);
  });
  
  it('should be 20 since it\'s default value', function() {
    expect(wolf3.health).to.be(20);
  })
  
});