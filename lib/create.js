var JZ = this.JZ || {};

(function () {
  function F() {}
  
  JZ.create = function (o) {
    F.prototype = o;
    return new F();
  };
}());