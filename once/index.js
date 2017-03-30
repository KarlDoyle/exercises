let once = function(func) {
  let logger = [], result;
  return function() {
    if (logger.indexOf(func) === -1) {
      logger.push(func);
      return result = func.apply(this, arguments)
    } else {
      return result
    }
  }
}

module.exports = once;