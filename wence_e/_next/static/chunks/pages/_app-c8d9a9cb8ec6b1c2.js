(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[2888], {
		1780: function(e, t, r) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
				return r(1271)
			}])
		},
		1271: function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, {
				default: function() {
					return j
				}
			});
			var n = r(5893),
				s = r(7294),
				o = r(9008),
				i = r(4298),
				c = function() {
					return s.useEffect((function() {}), []), (0, n.jsxs)(n.Fragment, {
						children: [(0, n.jsx)("div", {
							className: "mouse-cursor cursor-outer"
						}), (0, n.jsx)("div", {
							className: "mouse-cursor cursor-inner"
						})]
					})
				},
				a = function() {
					var e = document.querySelector(".progress-wrap path"),
						t = e.getTotalLength();
					e.style.transition = e.style.WebkitTransition = "none", e.style.strokeDasharray = t + " " + t, e.style.strokeDashoffset = t, e.getBoundingClientRect(), e.style.transition = e.style.WebkitTransition = "stroke-dashoffset 10ms linear";
					var r = function() {
						var r = window.pageYOffset,
							n = document.documentElement.scrollHeight - window.innerHeight,
							s = t - r * t / n;
						e.style.strokeDashoffset = s
					};
					r(), window.addEventListener("scroll", r);
					var n = document.querySelector(".progress-wrap");
					window.addEventListener("scroll", (function() {
						window.pageYOffset > 150 ? n.classList.add("active-progress") : document.querySelector(".progress-wrap").classList.remove("active-progress")
					})), n.addEventListener("click", (function(e) {
						return e.preventDefault(), window.scrollTo({
							top: 0,
							behavior: "smooth"
						}), !1
					}))
				},
				u = function() {
					return s.useEffect((function() {
						a()
					}), []), (0, n.jsx)("div", {
						className: "progress-wrap cursor-pointer",
						children: (0, n.jsx)("svg", {
							className: "progress-circle svg-content",
							width: "100%",
							height: "100%",
							viewBox: "-1 -1 102 102",
							children: (0, n.jsx)("path", {
								d: "M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
							})
						})
					})
				},
				l = function() {
					Pace.on("start", (function() {
						document.querySelector("#preloader").classList.remove("isdone")
					}))
				},
				d = r(2806),
				f = function() {
					return s.useEffect((function() {
						var e = document.querySelector("body");
						d.QP ? (l(), e.classList.contains("hideX") && e.classList.remove("hideX")) : e.classList.add("hideX")
					})), (0, n.jsxs)(n.Fragment, {
						children: [(0, n.jsx)("div", {
							className: "".concat((d.QP, "showX")),
							children: (0, n.jsx)("div", {
								id: "preloader"
							})
						}), d.QP ? (0, n.jsx)(i.default, {
							id: "pace",
							strategy: "beforeInteractive",
							src: "js/pace.min.js"
						}) : ""]
					})
				};
			r(472);

			function p(e, t, r) {
				return t in e ? Object.defineProperty(e, t, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = r, e
			}

			function g(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {},
						n = Object.keys(r);
					"function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
						return Object.getOwnPropertyDescriptor(r, e).enumerable
					})))), n.forEach((function(t) {
						p(e, t, r[t])
					}))
				}
				return e
			}
			var j = function(e) {
				var t = e.Component,
					r = e.pageProps;
				return (0, n.jsxs)(n.Fragment, {
					children: [(0, n.jsx)(o.default, {
						children: (0, n.jsx)("link", {
							rel: "icon",
							href: "img/wence-logo-white.png"
						})
					}), (0, n.jsx)(c, {}), (0, n.jsx)(f, {}), (0, n.jsx)(u, {}), (0, n.jsx)(t, g({}, r)), (0, n.jsx)(i.default, {
						strategy: "beforeInteractive",
						id: "wow",
						src: "js/wow.min.js"
					}), (0, n.jsx)(i.default, {
						strategy: "beforeInteractive",
						id: "splitting",
						src: "js/splitting.min.js"
					}), (0, n.jsx)(i.default, {
						id: "simpleParallax",
						src: "js/simpleParallax.min.js"
					}), (0, n.jsx)(i.default, {
						strategy: "beforeInteractive",
						id: "isotope",
						src: "js/isotope.pkgd.min.js"
					}), (0, n.jsx)(i.default, {
						strategy: "lazyOnload",
						id: "initWow",
						src: "js/initWow.js"
					})]
				})
			}
		},
		472: function() {},
		9008: function(e, t, r) {
			e.exports = r(5443)
		},
		4298: function(e, t, r) {
			e.exports = r(699)
		},
		2806: function(e) {
			"use strict";
			e.exports = JSON.parse('{"E8":"img/wence-logo-white.png","Q1":"img/logo-dark.png","QP":true}')
		}
	},
	function(e) {
		var t = function(t) {
			return e(e.s = t)
		};
		e.O(0, [9774, 179], (function() {
			return t(1780), t(387)
		}));
		var r = e.O();
		_N_E = r
	}
]);