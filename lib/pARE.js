"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var pARE = function pARE(a, e, t, c, o) {
  if (a) e.addEventListener(t, c, o ? { once: true } : false);else e.removeEventListener(t, c);
};
exports.default = pARE;