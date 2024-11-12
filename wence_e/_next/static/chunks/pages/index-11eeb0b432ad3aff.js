(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[5405], {
		3685: function(e, n, r) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
				return r(7167)
			}])
		},
		2532: function(e, n, r) {
			"use strict";
			var t = r(5893),
				s = (r(7294), r(9008));
			n.Z = function(e) {
				var n = e.children;
				return (0, t.jsxs)(t.Fragment, {
					children: [(0, t.jsx)(s.default, {
						children: (0, t.jsx)("link", {
							rel: "stylesheet",
							href: "css/dark.css"
						})
					}), n]
				})
			}
		},
		7167: function(e, n, r) {
			"use strict";
			r.r(n), r.d(n, {
				default: function() {
					return E
				}
			});
			var t = r(5893),
				s = r(9008),
				a = r(7294),
				i = r(6719),
				l = r(621),
				c = r(6224),
				o = r(1690),
				u = (r(6469), r(3526)),
				d = r(2873),
				p = r(1664),
				f = r(8116),
				m = (r(933), r(8770), r(92), r(8636)),
				v = r(6802),
				x = r(5850);

			function h(e, n) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, n) {
					var r = [],
						t = !0,
						s = !1,
						a = void 0;
					try {
						for (var i, l = e[Symbol.iterator](); !(t = (i = l.next()).done) && (r.push(i.value), !n || r.length !== n); t = !0);
					} catch (c) {
						s = !0, a = c
					} finally {
						try {
							t || null == l.return || l.return()
						} finally {
							if (s) throw a
						}
					}
					return r
				}(e, n) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance")
				}()
			}
			f.ZP.use([f.W_, f.tl, f.VS, f.pt]);
			var j = function() {
					var e = h(a.useState(!0), 2),
						n = e[0],
						r = e[1];
					a.useEffect((function() {
						(0, v.Z)(), setTimeout((function() {
							r(!1), (0, x.Z)()
						}), 1e3)
					}), []);
					var s = a.useRef(null),
						i = a.useRef(null),
						l = a.useRef(null);
					return (0, t.jsx)("header", {
						className: "slider slider-prlx",
						children: (0, t.jsxs)("div", {
							className: "swiper-container parallax-slider",
							children: [n ? null : (0, t.jsx)(d.t, {
								speed: 1e3,
								autoplay: !0,
								parallax: !0,
								navigation: {
									prevEl: s.current,
									nextEl: i.current
								},
								pagination: {
									type: "fraction",
									clickable: !0,
									el: l.current
								},
								onBeforeInit: function(e) {
									e.params.navigation.prevEl = s.current, e.params.navigation.nextEl = i.current, e.params.pagination.el = l.current
								},
								onSwiper: function(e) {
									setTimeout((function() {
										for (var n = 0; n < e.slides.length; n++) e.slides[n].childNodes[0].setAttribute("data-swiper-parallax", .75 * e.width);
										e.params.navigation.prevEl = s.current, e.params.navigation.nextEl = i.current, e.params.pagination.el = l.current, e.navigation.destroy(), e.navigation.init(), e.navigation.update(), e.pagination.destroy(), e.pagination.init(), e.pagination.update()
									}))
								},
								className: "swiper-wrapper",
								slidesPerView: 1,
								children: u.map((function(e) {
									return (0, t.jsx)(d.o, {
										className: "swiper-slide",
										children: (0, t.jsx)("div", {
											className: "bg-img valign",
											style: {
												backgroundImage: "url(".concat(e.image, ")")
											},
											"data-overlay-dark": "6",
											children: (0, t.jsx)("div", {
												className: "container",
												children: (0, t.jsx)("div", {
													className: "row",
													children: (0, t.jsx)("div", {
														className: "col-lg-12",
														children: (0, t.jsxs)("div", {
															className: "caption dig",
															children: [(0, t.jsx)(m.Z, {
																children: (0, t.jsx)("h1", {
																	className: "words chars splitting",
																	children: "object" === typeof e.title ? (0, t.jsxs)(t.Fragment, {
																		children: [e.title.first, (0, t.jsx)("div", {
																			className: "tline",
																			children: e.title.second
																		})]
																	}) : e.title
																})
															}), (0, t.jsx)(p.default, {
																href: e.link.href,
																children: (0, t.jsx)("a", {
																	className: "simple-btn mt-50",
																	children: (0, t.jsx)("span", {
																		children: e.link.title
																	})
																})
															})]
														})
													})
												})
											})
										})
									}, e.id)
								}))
							}), (0, t.jsxs)("div", {
								className: "setone setwo",
								children: [(0, t.jsx)("div", {
									ref: i,
									className: "swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",
									children: (0, t.jsx)("i", {
										className: "fas fa-chevron-right"
									})
								}), (0, t.jsx)("div", {
									ref: s,
									className: "swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",
									children: (0, t.jsx)("i", {
										className: "fas fa-chevron-left"
									})
								})]
							}), (0, t.jsx)("div", {
								ref: l,
								className: "swiper-pagination top botm custom-font"
							}), (0, t.jsx)("div", {
								className: "social-icon",
								children: (0, t.jsx)("a", {
									href: "https://maps.google.com/maps?q=2%20Rue%20B%C3%A9ranger,%2092320%20Ch%C3%A2tillon&t=&z=13&ie=UTF8&iwloc=&output=embed",
									children: (0, t.jsx)("i", {
										className: "fab fa-instagram"
									})
								})
							})]
						})
					})
				},
				g = r(4848),
				w = r(7743),
				N = r(6156),
				b = (r(5222), r(3205)),
				y = r(2532),
				E = function() {
					var e = a.useRef(null),
						n = a.useRef(null);
					return a.useEffect((function() {
						var n = e.current;
						window.pageYOffset > 300 ? n.classList.add("nav-scroll") : n.classList.remove("nav-scroll"), window.addEventListener("scroll", (function() {
							window.pageYOffset > 300 ? n.classList.add("nav-scroll") : n.classList.remove("nav-scroll")
						}))
					}), [e]), (0, t.jsxs)(y.Z, {
						children: [(0, t.jsxs)(s.default, {
							children: [(0, t.jsx)("title", {
								children: "Wence Entertainment"
							}), (0, t.jsx)("meta", {
								name: "description",
								content: "Notre agence de management artistique et musicale accompagne de nombreux artistes pour concr\xe9tiser leur r\xeave et rencontrer leur publique."
							}, "desc"), (0, t.jsx)("meta", {
								property: "og:title",
								content: "Wence Entertainment"
							}), (0, t.jsx)("meta", {
								property: "og:description",
								content: "Notre agence de management artistique et musicale accompagne de nombreux artistes pour concr\xe9tiser leur r\xeave et rencontrer leur publique."
							})]
						}), (0, t.jsx)(g.Z, {
							nr: e,
							lr: n
						}), (0, t.jsx)(j, {}), (0, t.jsx)(i.Z, {}), (0, t.jsx)(N.Z, {}), (0, t.jsx)(b.Z, {}), (0, t.jsx)(w.Z, {
							column: 3,
							filterPosition: "center"
						}), (0, t.jsx)(c.Z, {
							theme: "dark",
							subBG: !0
						}), (0, t.jsx)(l.Z, {}), (0, t.jsx)(o.Z, {})]
					})
				}
		}
	},
	function(e) {
		e.O(0, [6468, 9121, 7842, 4104, 8271, 4016, 3599, 2367, 9774, 2888, 179], (function() {
			return n = 3685, e(e.s = n);
			var n
		}));
		var n = e.O();
		_N_E = n
	}
]);