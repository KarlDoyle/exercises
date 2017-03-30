module.exports = function(array) {
  let cloned = array.slice(), newArray = [];
  for (let index = 0; index < array.length; index++) {
    let value = cloned.reduce((a,b) => (a > b) ? a : b)
    cloned.splice( cloned.indexOf(value), 1)
    newArray.unshift(value)
  }
  return newArray;
}