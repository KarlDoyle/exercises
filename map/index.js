let map = function(array, func, callback) {
  let newArray = array.slice(0)
  for (let i = 0; i < array.length; i++) {
    newArray[i] = func.apply(callback, [array[i], i, array])
  }
  return newArray;
}

module.exports = map;