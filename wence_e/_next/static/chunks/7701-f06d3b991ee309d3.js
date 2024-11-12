"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[7701], {
		6010: function(e, n, s) {
			function t(e) {
				var n, s, i = "";
				if ("string" == typeof e || "number" == typeof e) i += e;
				else if ("object" == typeof e)
					if (Array.isArray(e))
						for (n = 0; n < e.length; n++) e[n] && (s = t(e[n])) && (i && (i += " "), i += s);
					else
						for (n in e) e[n] && (i && (i += " "), i += n);
				return i
			}
			n.Z = function() {
				for (var e, n, s = 0, i = ""; s < arguments.length;)(e = arguments[s++]) && (n = t(e)) && (i && (i += " "), i += n);
				return i
			}
		},
		4140: function(e, n, s) {
			var t = s(2455);
			n.Z = function() {
				var e = document.querySelectorAll(".feat .items");
				e && e.forEach((function(e) {
					e.onmouseover = function(n) {
						e.classList.add("active");
						(0, t.m7)(e).map((function(e) {
							return e.classList.remove("active")
						}))
					}
				}))
			}
		},
		4076: function(e, n, s) {
			s.d(n, {
				D: function() {
					return t
				}
			});
			var t = function() {
				document.getElementsByClassName("thumparallax-down")
			}
		},
		4029: function(e, n, s) {
			var t = s(5893),
				i = s(6010),
				r = (s(7294), s(8636));
			n.Z = function(e) {
				var n = e.title,
					s = e.children,
					a = e.paddingBottom;
				return (0, t.jsx)("section", {
					className: (0, i.Z)("intro-section", "section-padding", !a && "pb-0"),
					children: (0, t.jsx)("div", {
						className: "container",
						children: (0, t.jsxs)("div", {
							className: "row",
							children: [(0, t.jsx)("div", {
								className: "col-lg-3 col-md-4",
								children: (0, t.jsx)("div", {
									className: "htit sm-mb30",
									children: (0, t.jsx)("h4", {
										children: n
									})
								})
							}), (0, t.jsx)("div", {
								className: "col-lg-8 offset-lg-1 col-md-8",
								children: (0, t.jsx)("div", {
									className: "text",
									children: (0, t.jsx)(r.Z, {
										children: (0, t.jsx)("p", {
											className: "wow txt words chars splitting",
											"data-splitting": !0,
											children: s
										})
									})
								})
							})]
						})
					})
				})
			}
		},
		2802: function(e, n, s) {
			var t = s(5893),
				i = (s(7294), s(4029));
			n.Z = function() {
				return (0, t.jsxs)(i.Z, {
					title: "Qui sommes-nous ?",
					children: ["Wence Entertainement est une agence unique en son genre dans le domaine du management et de la cr\xe9ation artistique. Avec plus de 10 ans d\u2019activit\xe9, notre agence a su se construire un r\xe9seau de partenaires solide et diversifi\xe9 dans le monde de la musique et de la mode, ce qui lui permet de proposer aux artistes l\u2019accompagnement le plus complet qui existe aujourd\u2019hui sur le march\xe9. Wence se veut \xeatre un partenaire de confiance et un booster de carri\xe8re pour ses artistes, leur permettant ainsi de se concentrer sur l\u2019essentiel : cr\xe9er.", (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), "Wence, c'est la fusion des talents. Une ambition d\xe9bordante qui a men\xe9 \xe0 un building de 5000m2 \xe0 Ch\xe2tillon : la Wence Tower. La vision du fondateur, Matthieu Wence, est sans limite. Ce g\xe9nie de l'entertainment a ainsi r\xe9uni ceux qu'il appelle Creatores. Des porteurs de projet, des sp\xe9cialistes, des b\xe2tisseurs, des artistes : Wence apporte une expertise hors du commun, et une french touch aux valeurs am\xe9ricaines - ici, l'\xe9chec est une le\xe7on et l'effort est collectif. Les diff\xe9rents p\xf4les deviennent \xe0 eux seuls des g\xe9ants du milieu, et permettent un 360 unique en France."]
				})
			}
		},
		9132: function(e, n, s) {
			var t = s(5893),
				i = s(7294),
				r = s(4140),
				a = s(4076),
				c = s(8636);
			n.Z = function() {
				return i.useEffect((function() {
					(0, r.Z)(), setTimeout((function() {
						(0, a.D)()
					}), 1e3)
				}), []), (0, t.jsx)("section", {
					className: "min-area sub-bg",
					children: (0, t.jsx)("div", {
						className: "container",
						children: (0, t.jsxs)("div", {
							className: "row",
							children: [(0, t.jsx)("div", {
								className: "col-lg-6",
								children: (0, t.jsx)("div", {
									className: "img",
									children: (0, t.jsx)("img", {
										className: "thumparallax-down",
										src: "img/girl-sofa.jpg",
										alt: ""
									})
								})
							}), (0, t.jsx)("div", {
								className: "col-lg-6 valign",
								children: (0, t.jsxs)("div", {
									className: "content",
									children: [(0, t.jsx)(c.Z, {
										children: (0, t.jsx)("h4", {
											className: "wow custom-font words chars splitting",
											"data-splitting": !0,
											children: "Publishing."
										})
									}), (0, t.jsx)(c.Z, {
										children: (0, t.jsx)("p", {
											className: "wow txt words chars splitting",
											"data-splitting": !0,
											children: "Notre r\xe9seau de partenaires internationaux nous permet de vous offrir un service exclusif de diffusion de vos cr\xe9ations musicales et artistiques."
										})
									}), (0, t.jsxs)("ul", {
										className: "feat",
										children: [(0, t.jsxs)("li", {
											className: "wow fadeInUp",
											"data-wow-delay": ".2s",
											children: [(0, t.jsxs)("h6", {
												children: [(0, t.jsx)("span", {
													children: "1"
												}), " Une \xe9quipe internationale"]
											}), (0, t.jsx)("p", {
												children: "Nos \xe9quipes de production musicale sont pr\xe9sentes dans de nombreux pays, y compris les Etats-Unis."
											})]
										}), (0, t.jsxs)("li", {
											className: "wow fadeInUp",
											"data-wow-delay": ".4s",
											children: [(0, t.jsxs)("h6", {
												children: [(0, t.jsx)("span", {
													children: "2"
												}), " Des producteurs partenaires"]
											}), (0, t.jsx)("p", {
												children: "Nos producteurs musiquaux vous accompagnent dans la concr\xe9tisation de votre projet artistique."
											})]
										}), (0, t.jsxs)("li", {
											className: "wow fadeInUp",
											"data-wow-delay": ".6s",
											children: [(0, t.jsxs)("h6", {
												children: [(0, t.jsx)("span", {
													children: "3"
												}), " Des r\xe9f\xe9rences impressionnantes"]
											}), (0, t.jsx)("p", {
												children: "Les r\xe9f\xe9rences musicales de nos producteurs ont une renomm\xe9e internationale. Nos \xe9quipes ont collabor\xe9 avec des artistes de renom."
											})]
										})]
									})]
								})
							})]
						})
					})
				})
			}
		},
		5410: function(e, n, s) {
			s.d(n, {
				Z: function() {
					return p
				}
			});
			var t = s(5893),
				i = s(7294),
				r = s(6066),
				a = (s(8322), s(2739), JSON.parse('[{"id":1,"image":"img/team/waybery.jpg","name":"Waybery","title":"Chanson fran\xe7aise"},{"id":2,"image":"img/team/enda.jpg","name":"Enda","title":"Pop Soul"},{"id":3,"image":"img/team/farah-nella.jpg","name":"Farah Nella","title":"Pop urbaine"},{"id":4,"image":"img/team/windiane.jpg","name":"Windiane","title":"Pop carib\xe9enne"}]')),
				c = s(6010);

			function o(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function l(e, n) {
				for (var s = 0; s < n.length; s++) {
					var t = n[s];
					t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
				}
			}

			function u(e) {
				return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
					return e.__proto__ || Object.getPrototypeOf(e)
				})(e)
			}

			function d(e, n) {
				return !n || "object" !== m(n) && "function" !== typeof n ? o(e) : n
			}

			function f(e, n) {
				return (f = Object.setPrototypeOf || function(e, n) {
					return e.__proto__ = n, e
				})(e, n)
			}
			var m = function(e) {
				return e && "undefined" !== typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
			};

			function h(e) {
				var n = function() {
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
					var s, t = u(e);
					if (n) {
						var i = u(this).constructor;
						s = Reflect.construct(t, arguments, i)
					} else s = t.apply(this, arguments);
					return d(this, s)
				}
			}
			var p = function(e) {
				! function(e, n) {
					if ("function" !== typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(n && n.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), n && f(e, n)
				}(d, e);
				var n, s, i, u = h(d);

				function d(e) {
					var n, s, i, r;
					return function(e, n) {
						if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
					}(this, d), n = u.call(this, e), s = o(n), r = function() {
						return (0, t.jsxs)("div", {
							className: "navs mt-30 wow fadeInUp",
							"data-wow-delay": ".3s",
							children: [(0, t.jsx)("span", {
								className: "prev cursor-pointer",
								onClick: function() {
									return n.slider.slickPrev()
								},
								children: (0, t.jsx)("i", {
									className: "fas fa-chevron-left"
								})
							}), (0, t.jsx)("span", {
								className: "next cursor-pointer",
								onClick: function() {
									return n.slider.slickNext()
								},
								children: (0, t.jsx)("i", {
									className: "fas fa-chevron-right"
								})
							})]
						})
					}, (i = "renderArrows") in s ? Object.defineProperty(s, i, {
						value: r,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : s[i] = r, n
				}
				return n = d, (s = [{
					key: "render",
					value: function() {
						var e = this;
						return (0, t.jsx)("section", {
							className: "team section-padding",
							children: (0, t.jsx)("div", {
								className: "container",
								children: (0, t.jsxs)("div", {
									className: "row",
									children: [(0, t.jsx)("div", {
										className: "col-lg-4 valign",
										children: (0, t.jsxs)("div", {
											className: "full-width",
											children: [(0, t.jsxs)("div", {
												className: "sec-head custom-font mb-0",
												children: [(0, t.jsx)("h6", {
													children: "Recording"
												}), (0, t.jsx)("h3", {
													children: "NOS ARTISTES"
												})]
											}), this.renderArrows()]
										})
									}), (0, t.jsx)("div", {
										className: "col-lg-8",
										children: (0, t.jsx)(r.Z, {
											className: (0, c.Z)("team-container", "slide-active"),
											ref: function(n) {
												return e.slider = n
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
											children: a.map((function(e) {
												return (0, t.jsxs)("div", {
													className: "item wow fadeInUp",
													"data-wow-delay": ".3s",
													children: [(0, t.jsx)("div", {
														className: "img wow imago",
														children: (0, t.jsx)("img", {
															src: e.image,
															alt: ""
														})
													}), (0, t.jsxs)("div", {
														className: "info",
														children: [(0, t.jsx)("h5", {
															children: e.name
														}), (0, t.jsx)("span", {
															children: e.title
														}), (0, t.jsxs)("div", {
															className: "social",
															children: [(0, t.jsx)("a", {
																href: "#0",
																children: (0, t.jsx)("i", {
																	className: "fab fa-facebook-f"
																})
															}), (0, t.jsx)("a", {
																href: "#0",
																children: (0, t.jsx)("i", {
																	className: "fab fa-twitter"
																})
															}), (0, t.jsx)("a", {
																href: "#0",
																children: (0, t.jsx)("i", {
																	className: "fab fa-behance"
																})
															}), (0, t.jsx)("a", {
																href: "#0",
																children: (0, t.jsx)("i", {
																	className: "fab fa-linkedin-in"
																})
															})]
														})]
													})]
												}, e.id)
											}))
										})
									})]
								})
							})
						})
					}
				}]) && l(n.prototype, s), i && l(n, i), d
			}(i.Component)
		},
		2532: function(e, n, s) {
			var t = s(5893),
				i = (s(7294), s(9008));
			n.Z = function(e) {
				var n = e.children;
				return (0, t.jsxs)(t.Fragment, {
					children: [(0, t.jsx)(i.default, {
						children: (0, t.jsx)("link", {
							rel: "stylesheet",
							href: "css/dark.css"
						})
					}), n]
				})
			}
		}
	}
]);