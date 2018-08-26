"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var pDA = function pDA(e, p) {
  if (document.selection) document.selection.empty();else if (window.getSelection) window.getSelection().removeAllRanges();if (p && e) e.stopPropagation();
};
exports.default = pDA;