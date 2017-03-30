module.exports = function(array, value, referenceArray) {
  let sourceArray = (referenceArray) ? referenceArray : array;

  if (array.length < 1) return -1;
  // get index of value;
  let target = array.indexOf(value);
  // get length of existing array
  let arrLength = (array.length - 1);

  // get half of that array
  let pointer = arrLength > 1 ? Math.floor(arrLength / 2) : arrLength;

  if (pointer < 0) return -1;
  // check if value exists at that array or is index -1, if either return index
  if ( target < pointer ) {
    return binarySearch(array.slice(0, pointer), value, sourceArray)
  } else if ( target > pointer ) {
    return binarySearch(array.slice(pointer), value, sourceArray)
  }

  if ( array[pointer] == value || pointer === -1 ) {
    return sourceArray.indexOf(value) || target;
  }
}