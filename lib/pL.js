"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var pLS = [true, "appNameVersion", true];
var pL = function pL(m, o) {
  if (pLS[0]) {
    console.log(pLS[1] + " " + (pLS[2] ? "(" + new Date().toLocaleString() + ")" : "") + " > " + m);if (o) console.log(o);
  }
};
exports.default = pL;