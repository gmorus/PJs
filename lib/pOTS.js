"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var pOTS = function pOTS(o) {
    if (!o) return null;
    var str = "",
        na = 0,
        k = void 0,
        p = void 0;
    if ((typeof o === "undefined" ? "undefined" : _typeof(o)) == "object") {
        if (!pOTS.check) pOTS.check = new Array();
        for (k = pOTS.check.length; na < k; na++) {
            if (pOTS.check[na] == o) return '{}';
        }pOTS.check.push(o);
    }
    k = "", na = typeof o.length == "undefined" ? 1 : 0;
    for (p in o) {
        if (na) k = "'" + p + "':";
        if (typeof o[p] == "string") str += k + "'" + o[p] + "',";else if (_typeof(o[p]) == "object") str += k + pOTS(o[p]) + ",";else str += k + o[p] + ",";
    }
    if ((typeof o === "undefined" ? "undefined" : _typeof(o)) == "object") pOTS.check.pop();
    if (na) return "{" + str.slice(0, -1) + "}";else return "[" + str.slice(0, -1) + "]";
};
exports.default = pOTS;