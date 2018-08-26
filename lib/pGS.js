"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var pGS = function pGS(n, p) {
  var x = p ? n.previousSibling : n.nextSibling;while (x && x.nodeType != 1) {
    x = p ? x.previousSibling : x.nextSibling;
  }if (x && x.nodeType == 1) return x;else return false;
};
exports.default = pGS;