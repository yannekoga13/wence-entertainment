(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[8361], {
		6622: function(e, t, n) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/media", function() {
				return n(6938)
			}])
		},
		2397: function(e, t, n) {
			"use strict";
			var r = n(5893),
				o = n(7294),
				i = n(8636),
				s = (n(6066), n(8322), n(2739), n(6188)),
				c = n(6516);

			function a(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}

			function l(e) {
				return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
					return e.__proto__ || Object.getPrototypeOf(e)
				})(e)
			}

			function u(e, t) {
				return !t || "object" !== d(t) && "function" !== typeof t ? function(e) {
					if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return e
				}(e) : t
			}

			function f(e, t) {
				return (f = Object.setPrototypeOf || function(e, t) {
					return e.__proto__ = t, e
				})(e, t)
			}
			var d = function(e) {
				return e && "undefined" !== typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
			};

			function p(e) {
				var t = function() {
					if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" === typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
					} catch (e) {
						return !1
					}
				}();
				return function() {
					var n, r = l(e);
					if (t) {
						var o = l(this).constructor;
						n = Reflect.construct(r, arguments, o)
					} else n = r.apply(this, arguments);
					return u(this, n)
				}
			}
			var m = function(e) {
				! function(e, t) {
					if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && f(e, t)
				}(u, e);
				var t, n, o, l = p(u);

				function u(e) {
					return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, u), l.call(this, e)
				}
				return t = u, (n = [{
					key: "componentDidMount",
					value: function() {
						(0, s.Z)(), (0, c.Z)(".testimonials.bg-img.parallaxie")
					}
				}, {
					key: "render",
					value: function() {
						return (0, r.jsx)("section", {
							className: "testimonials section-padding ".concat(this.props.subBgLftstl ? "sub-bg lftstl" : "", " ").concat(this.props.withBG ? "bg-img" : "", " ").concat(this.props.parallaxie ? "parallaxie" : "", " ").concat(this.props.overlay ? "" : "noOverlay"),
							style: {
								backgroundImage: "url(".concat(this.props.imgSrc, ")")
							},
							"data-overlay-dark": "".concat(this.props.overlay ? "9" : "0"),
							children: (0, r.jsx)("div", {
								className: "container position-re",
								children: (0, r.jsxs)("div", {
									className: "sec-head custom-font text-center",
									children: [(0, r.jsx)("h6", {
										className: "wow fadeIn",
										"data-wow-delay": ".5s",
										children: this.props.title
									}), (0, r.jsx)(i.Z, {
										children: (0, r.jsx)("h3", {
											className: "wow words chars splitting",
											"data-splitting": !0,
											children: this.props.description
										})
									})]
								})
							})
						})
					}
				}]) && a(t.prototype, n), o && a(t, o), u
			}(o.Component);
			t.Z = m
		},
		5007: function(e, t, n) {
			"use strict";
			var r = n(5893),
				o = (n(7294), n(1664));
			t.Z = function(e) {
				var t = e.subBG,
					n = (e.newHome, e.medias);
				return (0, r.jsx)("section", {
					className: "blog-grid section-padding ".concat(t ? "sub-bg" : ""),
					children: (0, r.jsx)("div", {
						className: "container",
						children: (0, r.jsx)("div", {
							className: "row",
							children: n.map((function(e, t) {
								return (0, r.jsx)("div", {
									className: "col-lg-6 wow fadeInUp d-flex pt-30",
									"data-wow-delay": ".3s",
									children: (0, r.jsx)("div", {
										className: "item active bg-img",
										style: {
											backgroundImage: "url(".concat(e.imgUrl, ")")
										},
										children: (0, r.jsxs)("div", {
											className: "cont",
											children: [(0, r.jsx)("div", {
												className: "info custom-font text-center",
												children: (0, r.jsx)(o.default, {
													href: "/blog/blog-dark",
													children: (0, r.jsx)("a", {
														className: "tag",
														children: (0, r.jsx)("span", {
															children: e.name
														})
													})
												})
											}), (0, r.jsx)("h6", {
												className: "text-center mt-40",
												children: (0, r.jsx)(o.default, {
													href: e.link,
													children: (0, r.jsx)("a", {
														children: (0, r.jsx)("div", {
															dangerouslySetInnerHTML: {
																__html: e.description
															}
														})
													})
												})
											})]
										})
									})
								}, t)
							}))
						})
					})
				})
			}
		},
		6938: function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, {
				default: function() {
					return U
				}
			});
			var r = n(5893),
				o = n(9008),
				i = n(7294),
				s = (n(1699), n(2397)),
				c = (n(8636), n(6066));
			n(8322), n(2739);

			function a(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}

			function l(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function u(e) {
				return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
					return e.__proto__ || Object.getPrototypeOf(e)
				})(e)
			}

			function f(e, t) {
				return !t || "object" !== p(t) && "function" !== typeof t ? function(e) {
					if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return e
				}(e) : t
			}

			function d(e, t) {
				return (d = Object.setPrototypeOf || function(e, t) {
					return e.__proto__ = t, e
				})(e, t)
			}
			var p = function(e) {
				return e && "undefined" !== typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
			};

			function m(e) {
				var t = function() {
					if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" === typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
					} catch (e) {
						return !1
					}
				}();
				return function() {
					var n, r = u(e);
					if (t) {
						var o = u(this).constructor;
						n = Reflect.construct(r, arguments, o)
					} else n = r.apply(this, arguments);
					return f(this, n)
				}
			}
			var h = function(e) {
					! function(e, t) {
						if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								writable: !0,
								configurable: !0
							}
						}), t && d(e, t)
					}(c, e);
					var t, n, o, i = m(c);

					function c(e) {
						return function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, c), i.call(this, e)
					}
					return t = c, (n = [{
						key: "render",
						value: function() {
							return (0, r.jsx)(s.Z, function(e) {
								for (var t = 1; t < arguments.length; t++) {
									var n = null != arguments[t] ? arguments[t] : {},
										r = Object.keys(n);
									"function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
										return Object.getOwnPropertyDescriptor(n, e).enumerable
									})))), r.forEach((function(t) {
										l(e, t, n[t])
									}))
								}
								return e
							}({
								description: "LANCEMENT DE 12 NOUVEAUX MEDIA COURANT 2023.",
								title: "Wence Entertainment"
							}, this.props))
						}
					}]) && a(t.prototype, n), o && a(t, o), c
				}(i.Component),
				g = n(621),
				b = (n(6224), n(1690)),
				y = n(5106),
				v = function() {
					return (0, r.jsx)(y.Z, {
						title: "M\xe9dia",
						imageUrl: "img/slid/media3.jpg"
					})
				},
				j = JSON.parse('[{"id":1,"image":"img/media/fashionzer1.jpeg","name":"","title":""},{"id":2,"image":"img/media/fashionzer2.jpeg","name":"","title":""},{"id":3,"image":"img/media/fashionzer3.jpeg","name":"","title":""},{"id":4,"image":"img/media/fashionzer4.jpeg","name":"","title":""},{"id":5,"image":"img/media/fashionzer5.jpeg","name":"","title":""}]'),
				w = n(6010);

			function x(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function N(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}

			function O(e) {
				return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
					return e.__proto__ || Object.getPrototypeOf(e)
				})(e)
			}

			function E(e, t) {
				return !t || "object" !== S(t) && "function" !== typeof t ? x(e) : t
			}

			function _(e, t) {
				return (_ = Object.setPrototypeOf || function(e, t) {
					return e.__proto__ = t, e
				})(e, t)
			}
			var S = function(e) {
				return e && "undefined" !== typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
			};

			function T(e) {
				var t = function() {
					if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" === typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
					} catch (e) {
						return !1
					}
				}();
				return function() {
					var n, r = O(e);
					if (t) {
						var o = O(this).constructor;
						n = Reflect.construct(r, arguments, o)
					} else n = r.apply(this, arguments);
					return E(this, n)
				}
			}
			var R = function(e) {
					! function(e, t) {
						if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								writable: !0,
								configurable: !0
							}
						}), t && _(e, t)
					}(s, e);
					var t, n, o, i = T(s);

					function s(e) {
						var t, n, o, c;
						return function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, s), t = i.call(this, e), n = x(t), c = function() {
							return (0, r.jsxs)("div", {
								className: "navs mt-30 wow fadeInUp",
								"data-wow-delay": ".3s",
								children: [(0, r.jsx)("span", {
									className: "prev cursor-pointer",
									onClick: function() {
										return t.slider.slickPrev()
									},
									children: (0, r.jsx)("i", {
										className: "fas fa-chevron-left"
									})
								}), (0, r.jsx)("span", {
									className: "next cursor-pointer",
									onClick: function() {
										return t.slider.slickNext()
									},
									children: (0, r.jsx)("i", {
										className: "fas fa-chevron-right"
									})
								})]
							})
						}, (o = "renderArrows") in n ? Object.defineProperty(n, o, {
							value: c,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : n[o] = c, t
					}
					return t = s, (n = [{
						key: "render",
						value: function() {
							var e = this;
							return (0, r.jsx)("section", {
								className: "team section-padding",
								children: (0, r.jsx)("div", {
									className: "container",
									children: (0, r.jsxs)("div", {
										className: "row",
										children: [(0, r.jsx)("div", {
											className: "col-lg-4 valign",
											children: (0, r.jsxs)("div", {
												className: "full-width slider",
												children: [(0, r.jsxs)("div", {
													className: "sec-head custom-font mb-0",
													children: [(0, r.jsx)("h6", {
														children: "Fashionzer"
													}), (0, r.jsx)("h3", {
														children: "FASHION. DISRUPTIF. EVENT."
													})]
												}), this.renderArrows()]
											})
										}), (0, r.jsx)("div", {
											className: "col-lg-8",
											children: (0, r.jsx)(c.Z, {
												className: (0, w.Z)("team-container", "slide-active"),
												ref: function(t) {
													return e.slider = t
												},
												dots: !1,
												infinite: !0,
												arrows: !0,
												autoplay: !0,
												slidesToScroll: 1,
												slidesToShow: 4,
												responsive: [{
													breakpoint: 1024,
													settings: {
														slidesToShow: 4
													}
												}, {
													breakpoint: 767,
													settings: {
														slidesToShow: 2
													}
												}, {
													breakpoint: 480,
													settings: {
														slidesToShow: 1
													}
												}],
												children: j.map((function(e) {
													return (0, r.jsx)("div", {
														className: "item wow fadeInUp",
														"data-wow-delay": ".3s",
														children: (0, r.jsx)("div", {
															className: "img wow imago",
															children: (0, r.jsx)("img", {
																src: e.image,
																alt: ""
															})
														})
													}, e.id)
												}))
											})
										})]
									})
								})
							})
						}
					}]) && N(t.prototype, n), o && N(t, o), s
				}(i.Component),
				P = n(5007),
				I = n(4848),
				k = (n(4606), n(6598), n(5410), n(2233), n(2532)),
				A = [{
					name: "Fashionzer",
					description: "M\xc9DIA ONLINE ET PAPIER QUI MET EN AVANT LA DIVERSIT\xc9 \xc0 TRAVERS DES \xc9V\xc9NEMENTS MODE DISRUPTIFS.",
					link: "/blog-details/blog-details-dark",
					imgUrl: "img/blog/fashionzer.jpeg"
				}, {
					name: "1MINUTE2RAP",
					description: "M\xc9DIA URBAIN \xc0 LA VISIBILIT\xc9 RECONNUE : CONCOURS, D\xc9COUVERTE DE TALENTS, MISE EN AVANT DE TALENTS CONFIRM\xc9S. <br /> - 2 MILLIONS D&apos;ABONN\xc9S -",
					link: "/blog-details/blog-details-dark",
					imgUrl: "img/blog/1minute2rap.jpeg"
				}],
				U = function() {
					var e = i.useRef(null);
					return i.useEffect((function() {
						var t = e.current;
						window.pageYOffset > 300 ? t.classList.add("nav-scroll") : t.classList.remove("nav-scroll"), window.addEventListener("scroll", (function() {
							window.pageYOffset > 300 ? t.classList.add("nav-scroll") : t.classList.remove("nav-scroll")
						}))
					}), [e]), (0, r.jsxs)(k.Z, {
						children: [(0, r.jsxs)(o.default, {
							children: [(0, r.jsx)("title", {
								children: "Wence Entertainment - M\xe9dia"
							}), (0, r.jsx)("meta", {
								name: "description",
								content: "Notre agence de management musical vous propose une offre des services complets : enregistrement, acc\xe8s studio musique, direction artistique, publishing, et encore plus."
							}, "desc"), (0, r.jsx)("meta", {
								property: "og:title",
								content: "Wence Entertainment - M\xe9dia"
							}), (0, r.jsx)("meta", {
								property: "og:description",
								content: "Notre agence de management musical vous propose une offre des services complets : enregistrement, acc\xe8s studio musique, direction artistique, publishing, et encore plus."
							})]
						}), (0, r.jsx)(I.Z, {
							nr: e
						}), (0, r.jsx)(v, {}), (0, r.jsx)(P.Z, {
							subBG: !0,
							medias: A
						}), (0, r.jsx)(R, {}), (0, r.jsx)(h, {
							subBgLftstl: !0,
							parallaxie: !0,
							withBG: !0,
							overlay: !0,
							imgSrc: "img/media/coming-soon.jpg"
						}), (0, r.jsx)(g.Z, {
							subBG: !0
						}), (0, r.jsx)(b.Z, {})]
					})
				}
		}
	},
	function(e) {
		e.O(0, [6468, 7842, 4016, 2233, 5685, 9774, 2888, 179], (function() {
			return t = 6622, e(e.s = t);
			var t
		}));
		var t = e.O();
		_N_E = t
	}
]);