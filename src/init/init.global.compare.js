function empty(v) {
  let result = false;
  if (typeof v === 'undefined' || v === null) {
    result = true;
  } else if (typeof v === 'string') {
    result = v === '';
  } else if (typeof v === 'object') {
    if (Array.isArray(v)) {
      result = v.length === 0;
    } else if (!(v instanceof Date)) {
      result = Object.entries(v).length === 0;
    }
  }
  return result;
}

window.empty = empty;
window.notEmpty = (v) => !empty(v);
