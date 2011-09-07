buster.assert.hasPrototype = function (obj, proto) {
  if (!proto.isPrototypeOf(obj)) {
    buster.assert.fail("expected proto to be prototype of object");
  } else {
    buster.assert(true);
  }
};

buster.assert.typeError = function (func) {
  buster.assert.exception(func, "TypeError");
};
