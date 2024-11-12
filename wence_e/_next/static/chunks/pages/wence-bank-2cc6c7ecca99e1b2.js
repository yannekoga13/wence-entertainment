(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[7526], {
		7010: function(e, t, n) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/wence-bank", function() {
				return n(2485)
			}])
		},
		2485: function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, {
				default: function() {
					return b
				}
			});
			var r = n(5893),
				s = n(9008),
				i = n(7294),
				c = (n(1699), n(2397), n(4765), n(621)),
				o = n(6224),
				a = n(1690),
				u = (n(4579), n(4848)),
				l = (n(5909), n(4606), n(6774), n(6598), n(1827), n(7633), n(5149), n(5964), n(1396), n(5410), n(5106)),
				f = function() {
					return (0, r.jsx)(l.Z, {
						title: "Wence Bank",
						imageUrl: "img/slid/bank.jpg"
					})
				},
				p = JSON.parse('[{"id":1,"title":"JE SUIS UN CREATORE","icon":"pe-7s-star","button":"D\xe9poser ma candidature","href":"https://wencebank.typeform.com/to/XqhEocIa","isBlank":true},{"id":2,"title":"JE VEUX INVESTIR","icon":"pe-7s-cash","button":"En savoir plus","href":"https://wencebank.typeform.com/to/Xzug6D8T","isBlank":true}]'),
				d = n(8566);

			function m(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var g = function(e) {
					return (0, r.jsx)(d.Z, function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = null != arguments[t] ? arguments[t] : {},
								r = Object.keys(n);
							"function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
								return Object.getOwnPropertyDescriptor(n, e).enumerable
							})))), r.forEach((function(t) {
								m(e, t, n[t])
							}))
						}
						return e
					}({
						titleDescription: "La Wence Bank, la premi\xe8re plateforme de dating entre investisseurs et creatores.",
						title: "J'OUVRE UN COMPTE",
						services: p
					}, e))
				},
				v = n(2532),
				b = function() {
					var e = i.useRef(null);
					return i.useEffect((function() {
						var t = e.current;
						window.pageYOffset > 300 ? t.classList.add("nav-scroll") : t.classList.remove("nav-scroll"), window.addEventListener("scroll", (function() {
							window.pageYOffset > 300 ? t.classList.add("nav-scroll") : t.classList.remove("nav-scroll")
						}))
					}), [e]), (0, r.jsxs)(v.Z, {
						children: [(0, r.jsxs)(s.default, {
							children: [(0, r.jsx)("title", {
								children: "Wence Entertainment - Wence Bank"
							}), (0, r.jsx)("meta", {
								name: "description",
								content: "Notre agence de management musical vous propose une offre des services complets : enregistrement, acc\xe8s studio musique, direction artistique, publishing, et encore plus."
							}, "desc"), (0, r.jsx)("meta", {
								property: "og:title",
								content: "Wence Entertainment - Wence Bank"
							}), (0, r.jsx)("meta", {
								property: "og:description",
								content: "Notre agence de management musical vous propose une offre des services complets : enregistrement, acc\xe8s studio musique, direction artistique, publishing, et encore plus."
							})]
						}), (0, r.jsx)(u.Z, {
							nr: e
						}), (0, r.jsx)(f, {}), (0, r.jsx)(g, {
							withPadding: !0
						}), (0, r.jsx)(o.Z, {
							theme: "dark"
						}), (0, r.jsx)(c.Z, {
							subBG: !0
						}), (0, r.jsx)(a.Z, {})]
					})
				}
		}
	},
	function(e) {
		e.O(0, [6468, 7842, 4016, 5685, 4966, 9774, 2888, 179], (function() {
			return t = 7010, e(e.s = t);
			var t
		}));
		var t = e.O();
		_N_E = t
	}
]);