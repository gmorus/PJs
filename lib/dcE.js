"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var dcE = function dcE(t, a, d, c, e) {
  var l = a ? a.length ? a.length : 0 : 0,
      k = d ? d.length ? d.length : 0 : 0,
      y = c ? c.length ? c.length : 0 : 0,
      p = e ? e.length ? e.length : 0 : 0,
      m = document.createElement(t);while (l--) {
    m.setAttribute(a[l][0], a[l][1]);
  }while (k--) {
    m[d[k][0]] = d[k][1];
  }while (y--) {
    m.appendChild(c[y]);
  }while (p--) {
    m.addEventListener(e[p][0], e[p][1]);
  }return m;
};
exports.default = dcE;