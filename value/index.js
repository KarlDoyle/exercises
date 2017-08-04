module.exports = function(value) {


  function _returnValue(value) {
    // check if value is a function
    if (typeof value === 'function') {
      // if value is a function, pass that value rescursively
      return _returnValue(value())
    } else {
      return value;
    }
  }



  return _returnValue(value)
}