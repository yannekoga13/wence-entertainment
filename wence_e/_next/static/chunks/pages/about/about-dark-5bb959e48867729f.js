(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[6002], {
		1412: function(e, s, n) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/about/about-dark", function() {
				return n(8558)
			}])
		},
		9812: function(e, s, n) {
			"use strict";
			var i = n(5893),
				t = (n(7294), n(8636)),
				a = n(8222);
			s.Z = function(e) {
				var s = e.withBG,
					n = e.withPadding,
					c = e.halfBG,
					r = e.withOutTitle;
				return (0, i.jsxs)("section", {
					className: "services ".concat(n ? "section-padding" : "", " ").concat(s ? "sub-bg" : ""),
					children: [(0, i.jsxs)("div", {
						className: "container",
						children: [!r && (0, i.jsxs)("div", {
							className: "sec-head custom-font text-center",
							children: [(0, i.jsx)("h6", {
								className: "wow fadeIn",
								"data-wow-delay": ".5s",
								children: "Musique"
							}), (0, i.jsx)(t.Z, {
								children: (0, i.jsx)("h3", {
									className: "wow words chars splitting",
									"data-splitting": !0,
									children: "Services."
								})
							}), (0, i.jsx)("span", {
								className: "tbg",
								children: "Services"
							})]
						}), (0, i.jsx)("div", {
							className: "row",
							children: a.map((function(e, s) {
								return (0, i.jsx)("div", {
									className: "col-lg-4 mb-4",
									children: (0, i.jsxs)("div", {
										className: "item ".concat(s != a.length - 1 ? "md-mb50" : "", " wow fadeInUp"),
										"data-wow-delay": 1 == e.id ? ".5s" : 2 == e.id ? ".3s" : ".8s",
										children: [(0, i.jsx)("span", {
											className: "icon ".concat(e.icon)
										}), (0, i.jsx)("h6", {
											children: e.title
										}), (0, i.jsx)("p", {
											children: e.content
										})]
									})
								}, e.id)
							}))
						})]
					}), c && (0, i.jsx)("div", {
						className: "half-bg bottom"
					})]
				})
			}
		},
		8558: function(e, s, n) {
			"use strict";
			n.r(s), n.d(s, {
				default: function() {
					return j
				}
			});
			var i = n(5893),
				t = n(7294),
				a = function() {
					return (0, i.jsx)("header", {
						className: "pages-header bg-img valign parallaxie",
						style: {
							backgroundImage: "url(img/slid/white-mode.jpg)"
						},
						"data-overlay-dark": "5",
						children: (0, i.jsx)("div", {
							className: "container",
							children: (0, i.jsx)("div", {
								className: "row",
								children: (0, i.jsx)("div", {
									className: "col-lg-12",
									children: (0, i.jsxs)("div", {
										className: "cont text-center",
										children: [(0, i.jsx)("h1", {
											children: "Mode"
										}), (0, i.jsxs)("div", {
											className: "path",
											children: [(0, i.jsx)("a", {
												href: "#0",
												children: "Accueil"
											}), (0, i.jsx)("span", {
												children: "/"
											}), (0, i.jsx)("a", {
												href: "#0",
												className: "active",
												children: "Mode"
											})]
										})]
									})
								})
							})
						})
					})
				},
				c = n(2802),
				r = n(621),
				o = n(6224),
				l = n(1690),
				d = n(9132),
				u = n(4848),
				h = n(9812),
				m = n(5222),
				x = n(5410),
				p = n(3205),
				v = n(2532),
				j = function() {
					var e = t.useRef(null);
					return t.useEffect((function() {
						var s = e.current;
						window.pageYOffset > 300 ? s.classList.add("nav-scroll") : s.classList.remove("nav-scroll"), window.addEventListener("scroll", (function() {
							window.pageYOffset > 300 ? s.classList.add("nav-scroll") : s.classList.remove("nav-scroll")
						}))
					}), [e]), (0, i.jsxs)(v.Z, {
						children: [(0, i.jsx)(u.Z, {
							nr: e
						}), (0, i.jsx)(a, {}), (0, i.jsx)(c.Z, {}), (0, i.jsx)(h.Z, {
							withPadding: !0,
							withOutTitle: !0
						}), (0, i.jsx)(p.Z, {}), (0, i.jsx)(m.Z, {
							subBG: !0,
							theme: "dark"
						}), (0, i.jsx)(x.Z, {}), (0, i.jsx)(d.Z, {}), (0, i.jsx)(o.Z, {
							theme: "dark"
						}), (0, i.jsx)(r.Z, {
							subBG: !0
						}), (0, i.jsx)(l.Z, {})]
					})
				}
		},
		8222: function(e) {
			"use strict";
			e.exports = JSON.parse('[{"id":1,"title":"Direction Artistique","icon":"pe-7s-musiclist","content":"Des experts au service des artistes : chaque talent peut trouver son public, avec le bon accompagnement et en suivant la bonne direction."},{"id":2,"title":"Acc\xe8s Studios","icon":"pe-7s-music","content":"Un ensemble de studios aux saveurs acoustiques diff\xe9rentes, et au mat\xe9riel choisi avec soin."},{"id":3,"title":"Enregistrement","icon":"pe-7s-micro","content":"Des ing\xe9nieurs du son passionn\xe9s, \xe0 la technique pointue. Un savoir-faire directement import\xe9 des Etats-Unis."},{"id":4,"title":"Mixage","icon":"pe-7s-edit","content":"Des techniques de mixage vari\xe9es, inspir\xe9es directement par les plus grands. L\'\xe9quipe est internationale et \xe7a s\'entend : nos productions ne sont pas modernes. Elles sont intemporelles."},{"id":5,"title":"Mastering","icon":"pe-7s-edit","content":"Une harmonisation sonore optimale gr\xe2ce \xe0 une technologie de pointe et des oreilles alertes. Possible en dolby atmos."},{"id":6,"title":"S\xe9minaire","icon":"pe-7s-culture","content":"Nous organisons des s\xe9jours cr\xe9atifs dans des lieux d\'exception."}]')
		}
	},
	function(e) {
		e.O(0, [6468, 7842, 4104, 4016, 3599, 7701, 9774, 2888, 179], (function() {
			return s = 1412, e(e.s = s);
			var s
		}));
		var s = e.O();
		_N_E = s
	}
]);