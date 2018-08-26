"use strict";

Object.defineProperty(exports, "__esModule", {
				value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var pCMO = function pCMO(cO, cPF) {
				var cmo = {
								PFS: Symbol(),
								CO: typeof cO == "function" ? cO : function () {
												return {};
								},
								CPF: typeof cPF == "function" ? cPF : false,
								P: function P() {
												var x = cmo.CO();
												if (cmo.CPF) x[cmo.PFS] = cmo.CPF;
												return new Proxy(x, cmo.H);
								},
								H: {
												get: function get(o, p) {
																if ((typeof p === "undefined" ? "undefined" : _typeof(p)) == 'symbol') {
																				if (p == Symbol.toPrimitive && typeof o[cmo.PFS] == "function") return o[cmo.PFS];
																} else if (!(p in o)) o[p] = cmo.P();return o[p];
												},
												set: function set(o, p, n) {
																delete o[cmo.PFS];o[p] = n;return true;
												}
								}
				};
				return cmo.P();
};
exports.default = pCMO;