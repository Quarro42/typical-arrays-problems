
exports.min = function min (array) {
  if (array && array.length) {
    const result = array.sort( (a, b) => a - b );
    return result[0];
  } else {
    return 0;
  }
}

exports.max = function max (array) {
  if (array && array.length) {
    const result = array.sort( (a, b) => a - b );
    return result[result.length - 1];
  } else {
    return 0;
  }
}

exports.avg = function avg (array) {
  if (array && array.length) {
    const result = array.reduce( (sum, currentItem) => sum + currentItem);
    return result / array.length;
  } else {
    return 0;
  }
}