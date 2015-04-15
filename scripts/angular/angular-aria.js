﻿/*
 AngularJS v1.3.5
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (h, k, p) {
	'use strict'; h = ["$aria", function (c) { return function (e, f, a) { c.config("tabindex") && !f.attr("tabindex") && f.attr("tabindex", 0) } }]; k.module("ngAria", ["ng"]).provider("$aria", function () {
		function c(a) { return a.replace(/-./g, function (b, a) { return b[1].toUpperCase() }) } function e(a, b, g) { var d = c(b); return function (c, e, l) { f[d] && !l[d] && c.$watch(l[a], function (a) { g && (a = !a); e.attr(b, a) }) } } var f = {
			ariaHidden: !0, ariaChecked: !0, ariaDisabled: !0, ariaRequired: !0, ariaInvalid: !0, ariaMultiline: !0, ariaValue: !0,
			tabindex: !0
		}; this.config = function (a) { f = k.extend(f, a) }; this.$get = function () { return { config: function (a) { return f[c(a)] }, $$watchExpr: e } }
	}).directive("ngShow", ["$aria", function (c) { return c.$$watchExpr("ngShow", "aria-hidden", !0) }]).directive("ngHide", ["$aria", function (c) { return c.$$watchExpr("ngHide", "aria-hidden", !1) }]).directive("ngModel", ["$aria", function (c) {
		function e(a, b) { return c.config(a) && !b.attr(a) } function f(a, b) {
			var c = a.type, d = a.role; return "checkbox" === (c || d) || "menuitemcheckbox" === d ? "checkbox" :
			"radio" === (c || d) || "menuitemradio" === d ? "radio" : "range" === c || "progressbar" === d || "slider" === d ? "range" : "textbox" === (c || d) || "TEXTAREA" === b[0].nodeName ? "multiline" : ""
		} return {
			restrict: "A", require: "?ngModel", link: function (a, b, g, d) {
				function h() { return d.$modelValue } function k() { return m ? (m = !1, function (a) { a = a === g.value; b.attr("aria-checked", a); b.attr("tabindex", 0 - !a) }) : function (a) { b.attr("aria-checked", a === g.value) } } function l(a) { b.attr("aria-checked", !!a) } var n = f(g, b), m = e("tabindex", b); switch (n) {
					case "radio": case "checkbox": e("aria-checked",
					b) && a.$watch(h, "radio" === n ? k() : l); break; case "range": c.config("ariaValue") && (g.min && !b.attr("aria-valuemin") && b.attr("aria-valuemin", g.min), g.max && !b.attr("aria-valuemax") && b.attr("aria-valuemax", g.max), b.attr("aria-valuenow") || a.$watch(h, function (a) { b.attr("aria-valuenow", a) })); break; case "multiline": e("aria-multiline", b) && b.attr("aria-multiline", !0)
				} m && b.attr("tabindex", 0); d.$validators.required && e("aria-required", b) && a.$watch(function () { return d.$error.required }, function (a) {
					b.attr("aria-required",
					!!a)
				}); e("aria-invalid", b) && a.$watch(function () { return d.$invalid }, function (a) { b.attr("aria-invalid", !!a) })
			}
		}
	}]).directive("ngDisabled", ["$aria", function (c) { return c.$$watchExpr("ngDisabled", "aria-disabled") }]).directive("ngMessages", function () { return { restrict: "A", require: "?ngMessages", link: function (c, e, f, a) { e.attr("aria-live") || e.attr("aria-live", "assertive") } } }).directive("ngClick", h).directive("ngDblclick", h)
})(window, window.angular);
//# sourceMappingURL=angular-aria.min.js.map