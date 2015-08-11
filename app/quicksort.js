var expect = require('chai').expect;

var swap = function (items, firstIndex, secondIndex){
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
};

var partition = function partition(items, left, right) {

  var pivot   = items[Math.floor((right + left) / 2)],
      i       = left,
      j       = right;

  while (i <= j) {

      while (items[i] < pivot) {
          i++;
      }

      while (items[j] > pivot) {
          j--;
      }

      if (i <= j) {
          swap(items, i, j);
          i++;
          j--;
      }
  }

  return i;
}

var partition2 = function(items, left, right) {

  var pivot   = items[Math.floor((right + left) / 2)];

  while (left <= right) {

      while (items[left] < pivot) {
          left++;
      }

      while (items[right] > pivot) {
          right--;
      }

      if (left <= right) {
          swap(items, left, right);
          left++;
          right--;
      }
  }

  return left;
}

var quicksort =  function(arr, left, right) {

  var index;

  if (arr.length > 1) {
//    index = partition(arr, left, right);
    index = partition2(arr, left, right);

    if (left < index - 1) {
      quicksort(arr, left, index -1);
    }
    
    if (index < right) {
      quicksort(arr, index, right);
    }

  }
  return arr;
};



describe('quicksort', function() {
  
  it('should be sorted as [1, 2, 3, 4, 5, 6, 7, 8]', function() {
    var arr = [8, 4, 3, 7, 6, 5, 2, 1];
    //0, 1, 2, 3, 4, 5, 6, 7
    //0 + 7 = 7/2 = 4
    //1 + 6 = 7/2 = 4
    //2+ 5 = 7/2 = 4 
    
    var result = quicksort(arr, 0, arr.length-1);
    
    expect(result).to.eql([1, 2, 3, 4, 5, 6, 7, 8]);
    
  });
});