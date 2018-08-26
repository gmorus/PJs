"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var pARCE = function pARCE(a, e, c, o) {
  if (a) {
    e.addEventListener("click", c, o ? { once: true } : false);e.addEventListener("dblclick", pDA);
  } else e.removeEventListener("click", c);
};
exports.default = pARCE;