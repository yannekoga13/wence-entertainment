(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[9335], {
		5474: function(n, e, s) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/about/contact-34be70bd7c116d2d.js", function() {
				return s(3531)
			}])
		},
		2532: function(n, e, s) {
			"use strict";
			var r = s(5893),
				t = (s(7294), s(9008));
			e.Z = function(n) {
				var e = n.children;
				return (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)(t.default, {
						children: (0, r.jsx)("link", {
							rel: "stylesheet",
							href: "css/dark.css"
						})
					}), e]
				})
			}
		},
		3531: function(n, e, s) {
			"use strict";
			s.r(e);
			var r = s(5893),
				t = s(7294),
				c = s(2209),
				l = s(4637),
				i = s(4848),
				u = s(2532);
			e.default = function() {
				var n = t.useRef(null),
					e = t.useRef(null),
					s = t.useRef(null);
				return t.useEffect((function() {
					setInterval((function() {
						if (n.current) var s = n.current.offsetHeight;
						e.current && (e.current.style.marginTop = s + "px")
					}), 1e3);
					var r = s.current;
					window.pageYOffset > 300 ? r.classList.add("nav-scroll") : r.classList.remove("nav-scroll"), window.addEventListener("scroll", (function() {
						window.pageYOffset > 300 ? r.classList.add("nav-scroll") : r.classList.remove("nav-scroll")
					}))
				}), []), (0, r.jsxs)(u.Z, {
					children: [(0, r.jsx)(i.Z, {
						nr: s
					}), (0, r.jsx)(c.Z, {
						sliderRef: n
					}), (0, r.jsx)("div", {
						className: "main-content",
						ref: e,
						children: (0, r.jsx)(l.Z, {})
					})]
				})
			}
		}
	},
	function(n) {
		n.O(0, [6468, 9669, 1141, 9774, 2888, 179], (function() {
			return e = 5474, n(n.s = e);
			var e
		}));
		var e = n.O();
		_N_E = e
	}
]);