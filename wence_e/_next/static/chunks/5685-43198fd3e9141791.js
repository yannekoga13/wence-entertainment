"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[5685], {
		6010: function(e, s, n) {
			function i(e) {
				var s, n, a = "";
				if ("string" == typeof e || "number" == typeof e) a += e;
				else if ("object" == typeof e)
					if (Array.isArray(e))
						for (s = 0; s < e.length; s++) e[s] && (n = i(e[s])) && (a && (a += " "), a += n);
					else
						for (s in e) e[s] && (a && (a += " "), a += s);
				return a
			}
			s.Z = function() {
				for (var e, s, n = 0, a = ""; n < arguments.length;)(e = arguments[n++]) && (s = i(e)) && (a && (a += " "), a += s);
				return a
			}
		},
		4140: function(e, s, n) {
			var i = n(2455);
			s.Z = function() {
				var e = document.querySelectorAll(".feat .items");
				e && e.forEach((function(e) {
					e.onmouseover = function(s) {
						e.classList.add("active");
						(0, i.m7)(e).map((function(e) {
							return e.classList.remove("active")
						}))
					}
				}))
			}
		},
		4076: function(e, s, n) {
			n.d(s, {
				D: function() {
					return i
				}
			});
			var i = function() {
				document.getElementsByClassName("thumparallax-down")
			}
		},
		4029: function(e, s, n) {
			var i = n(5893),
				a = n(6010),
				t = (n(7294), n(8636));
			s.Z = function(e) {
				var s = e.title,
					n = e.children,
					r = e.paddingBottom;
				return (0, i.jsx)("section", {
					className: (0, a.Z)("intro-section", "section-padding", !r && "pb-0"),
					children: (0, i.jsx)("div", {
						className: "container",
						children: (0, i.jsxs)("div", {
							className: "row",
							children: [(0, i.jsx)("div", {
								className: "col-lg-3 col-md-4",
								children: (0, i.jsx)("div", {
									className: "htit sm-mb30",
									children: (0, i.jsx)("h4", {
										children: s
									})
								})
							}), (0, i.jsx)("div", {
								className: "col-lg-8 offset-lg-1 col-md-8",
								children: (0, i.jsx)("div", {
									className: "text",
									children: (0, i.jsx)(t.Z, {
										children: (0, i.jsx)("p", {
											className: "wow txt words chars splitting",
											"data-splitting": !0,
											children: n
										})
									})
								})
							})]
						})
					})
				})
			}
		},
		5106: function(e, s, n) {
			var i = n(5893),
				a = n(1664);
			n(7294);
			s.Z = function(e) {
				var s = e.title,
					n = e.imageUrl;
				return (0, i.jsx)("header", {
					className: "pages-header bg-img valign",
					style: {
						backgroundImage: "url(".concat(n, ")")
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
										children: s
									}), (0, i.jsxs)("div", {
										className: "path",
										children: [(0, i.jsx)(a.default, {
											href: "/",
											children: (0, i.jsx)("a", {
												children: "Accueil"
											})
										}), (0, i.jsx)("span", {
											children: "/"
										}), (0, i.jsx)("a", {
											href: "#0",
											className: "active",
											children: s
										})]
									})]
								})
							})
						})
					})
				})
			}
		},
		1699: function(e, s, n) {
			var i = n(5893),
				a = (n(7294), n(4029));
			s.Z = function() {
				return (0, i.jsx)(a.Z, {
					title: "Notre expertise musicale",
					children: "Notre agence est pionni\xe8re depuis plus de 10 ans dans la cr\xe9ation musicale et artistique. Notre \xe9quipe pluridisciplinaire vous propose un accompagnement sur-mesure pour mener \xe0 bien votre projet musical, de la cr\xe9ation, en passant par l\u2019enregistrement et jusqu\u2019\xe0 la publication et la diffusion sur les diff\xe9rentes plateformes d\u2019\xe9coute."
				})
			}
		},
		621: function(e, s, n) {
			var i = n(5893),
				a = (n(7294), n(8636)),
				t = n(1664);
			s.Z = function(e) {
				var s = e.img,
					n = e.theme,
					r = e.subBG;
				return (0, i.jsx)("section", {
					className: "call-action section-padding ".concat(r ? "sub-bg" : "", " bg-img"),
					style: {
						backgroundImage: "url(".concat(s || "img/pattern.png", ")")
					},
					children: (0, i.jsx)("div", {
						className: "container",
						children: (0, i.jsxs)("div", {
							className: "row",
							children: [(0, i.jsx)("div", {
								className: "col-md-8 col-lg-9",
								children: (0, i.jsx)("div", {
									className: "content sm-mb30",
									children: (0, i.jsxs)(a.Z, {
										children: [(0, i.jsx)("h6", {
											className: "wow words chars splitting",
											"data-splitting": !0,
											children: "Rencontrons-nous"
										}), (0, i.jsxs)("h2", {
											className: "wow words custom-font chars splitting",
											"data-splitting": !0,
											children: ["parlons de ", (0, i.jsx)("b", {
												children: "vous"
											}), "."]
										})]
									})
								})
							}), (0, i.jsx)("div", {
								className: "col-md-4 col-lg-3 valign",
								children: (0, i.jsx)(t.default, {
									href: "/contact",
									children: (0, i.jsx)("a", {
										className: "btn-curve ".concat("light" == n ? "btn-blc" : "btn-lit", " wow fadeInUp"),
										"data-wow-delay": ".5s",
										children: (0, i.jsx)("span", {
											children: "Nous contacter"
										})
									})
								})
							})]
						})
					})
				})
			}
		},
		6224: function(e, s, n) {
			n.d(s, {
				Z: function() {
					return r
				}
			});
			var i = n(5893),
				a = (n(7294), JSON.parse('[{"id":1,"lightImage":"img/clients/brands/light/1.png","darkImage":"img/clients/brands/dark/because-music.png","url":"https://www.because.tv","title":"Because Music"},{"id":2,"lightImage":"img/clients/brands/light/2.png","darkImage":"img/clients/brands/dark/play-two.png","url":"https://playtwo.fr","title":"Play Two"},{"id":3,"lightImage":"img/clients/brands/light/3.png","darkImage":"img/clients/brands/dark/believe.png","url":"https://www.believe.com","title":"Believe"},{"id":4,"lightImage":"img/clients/brands/light/4.png","darkImage":"img/clients/brands/dark/universal.png","url":"https://www.universalmusic.fr","title":"Universal Music"},{"id":5,"lightImage":"img/clients/brands/light/5.png","darkImage":"img/clients/brands/dark/warner.png","url":"https://www.warnermusic.fr","title":"Warner Music"},{"id":6,"lightImage":"img/clients/brands/light/6.png","darkImage":"img/clients/brands/dark/tf1.png","url":"https://www.tf1.fr/","title":"TF1"},{"id":7,"lightImage":"img/clients/brands/light/7.png","darkImage":"img/clients/brands/dark/fantomatx.png","url":"#fantomatx","title":"Fant\xf4matX"},{"id":8,"lightImage":"img/clients/brands/light/8.png","darkImage":"img/clients/brands/dark/nouvelle-ecole-music.png","url":"https://www.facebook.com/NouvelleEcoleLabel/","title":"Nouvelle \xc9cole"}]')),
				t = n(8636),
				r = function(e) {
					var s = e.theme,
						n = e.subBG,
						r = a.slice(0, a.length / 2),
						c = a.slice(4, a.length);
					return (0, i.jsx)("section", {
						className: "clients section-padding ".concat(n ? "sub-bg" : ""),
						children: (0, i.jsx)("div", {
							className: "container",
							children: (0, i.jsxs)("div", {
								className: "row",
								children: [(0, i.jsx)("div", {
									className: "col-lg-4 valign",
									children: (0, i.jsx)("div", {
										className: "sec-head custom-font mb-0",
										children: (0, i.jsx)("h3", {
											children: "Ils nous font confiance"
										})
									})
								}), (0, i.jsx)("div", {
									className: "col-lg-8",
									children: (0, i.jsxs)("div", {
										children: [(0, i.jsx)("div", {
											className: "row bord",
											children: r.map((function(e) {
												return (0, i.jsx)("div", {
													className: "col-md-3 col-6 brands",
													children: (0, i.jsx)("div", {
														className: "item wow fadeIn",
														"data-wow-delay": "".concat(1 == e.id ? ".3" : 2 == e.id ? ".6" : 3 == e.id ? ".8" : 4 == e.id ? ".3" : "", "s"),
														children: (0, i.jsxs)("div", {
															className: "img",
															children: ["light" === s ? (0, i.jsx)("img", {
																src: e.lightImage,
																alt: ""
															}) : (0, i.jsx)("img", {
																src: e.darkImage,
																alt: ""
															}), (0, i.jsx)(t.Z, {
																children: (0, i.jsx)("a", {
																	href: e.url,
																	className: "link words chars splitting",
																	"data-splitting": !0,
																	children: e.title
																})
															})]
														})
													})
												}, e.id)
											}))
										}), (0, i.jsx)("div", {
											className: "row",
											children: c.map((function(e) {
												return (0, i.jsx)("div", {
													className: "".concat(5 == e.id || 6 == e.id ? "col-md-3 col-6 brands sm-mb30" : 7 == e.id || 8 == e.id ? "col-md-3 col-6 brands" : ""),
													children: (0, i.jsx)("div", {
														className: "item wow fadeIn",
														"data-wow-delay": "".concat(1 == e.id ? ".4" : 2 == e.id ? ".7" : 3 == e.id ? ".5" : 4 == e.id ? ".3" : "", "s"),
														children: (0, i.jsxs)("div", {
															className: "img",
															children: ["light" === s ? (0, i.jsx)("img", {
																src: e.lightImage,
																alt: ""
															}) : (0, i.jsx)("img", {
																src: e.darkImage,
																alt: ""
															}), (0, i.jsx)(t.Z, {
																children: (0, i.jsx)("a", {
																	href: e.url,
																	className: "link words chars splitting",
																	"data-splitting": !0,
																	children: e.title
																})
															})]
														})
													})
												}, e.id)
											}))
										})]
									})
								})]
							})
						})
					})
				}
		},
		4606: function(e, s, n) {
			var i = n(5893),
				a = n(7294),
				t = n(4140),
				r = n(4076),
				c = n(8636);
			s.Z = function() {
				return a.useEffect((function() {
					(0, t.Z)(), setTimeout((function() {
						(0, r.D)()
					}), 1e3)
				}), []), (0, i.jsx)("section", {
					className: "min-area sub-bg",
					children: (0, i.jsx)("div", {
						className: "container",
						children: (0, i.jsxs)("div", {
							className: "row",
							children: [(0, i.jsx)("div", {
								className: "col-lg-6",
								children: (0, i.jsx)("div", {
									className: "img",
									children: (0, i.jsx)("img", {
										className: "thumparallax-down",
										src: "img/girl-sofa.jpg",
										alt: ""
									})
								})
							}), (0, i.jsx)("div", {
								className: "col-lg-6 valign",
								children: (0, i.jsxs)("div", {
									className: "content",
									children: [(0, i.jsx)(c.Z, {
										children: (0, i.jsx)("h4", {
											className: "wow custom-font words chars splitting",
											"data-splitting": !0,
											children: "Publishing."
										})
									}), (0, i.jsx)(c.Z, {
										children: (0, i.jsx)("p", {
											className: "wow txt words chars splitting",
											"data-splitting": !0,
											children: "Notre r\xe9seau de partenaires internationaux nous permet de vous offrir un service exclusif de diffusion de vos cr\xe9ations musicales et artistiques."
										})
									}), (0, i.jsxs)("ul", {
										className: "feat",
										children: [(0, i.jsxs)("li", {
											className: "wow fadeInUp",
											"data-wow-delay": ".2s",
											children: [(0, i.jsxs)("h6", {
												children: [(0, i.jsx)("span", {
													children: "1"
												}), " Une \xe9quipe internationale"]
											}), (0, i.jsx)("p", {
												children: "Nos \xe9quipes de production musicale sont pr\xe9sentes dans de nombreux pays, y compris les Etats-Unis."
											})]
										}), (0, i.jsxs)("li", {
											className: "wow fadeInUp",
											"data-wow-delay": ".4s",
											children: [(0, i.jsxs)("h6", {
												children: [(0, i.jsx)("span", {
													children: "2"
												}), " Des producteurs partenaires"]
											}), (0, i.jsx)("p", {
												children: "Nos producteurs musiquaux vous accompagnent dans la concr\xe9tisation de votre projet artistique."
											})]
										}), (0, i.jsxs)("li", {
											className: "wow fadeInUp",
											"data-wow-delay": ".6s",
											children: [(0, i.jsxs)("h6", {
												children: [(0, i.jsx)("span", {
													children: "3"
												}), " Des r\xe9f\xe9rences impressionnantes"]
											}), (0, i.jsx)("p", {
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
		6598: function(e, s, n) {
			var i = n(5893),
				a = (n(7294), n(8636)),
				t = n(8222);
			s.Z = function(e) {
				var s = e.withBG,
					n = e.withPadding,
					r = e.halfBG,
					c = e.withOutTitle;
				return (0, i.jsxs)("section", {
					className: "services ".concat(n ? "section-padding" : "", " ").concat(s ? "sub-bg" : ""),
					children: [(0, i.jsxs)("div", {
						className: "container",
						children: [!c && (0, i.jsxs)("div", {
							className: "sec-head custom-font text-center",
							children: [(0, i.jsx)("h6", {
								className: "wow fadeIn",
								"data-wow-delay": ".5s",
								children: "Musique"
							}), (0, i.jsx)(a.Z, {
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
							children: t.map((function(e, s) {
								return (0, i.jsx)("div", {
									className: "col-lg-4 mb-4",
									children: (0, i.jsxs)("div", {
										className: "item ".concat(s != t.length - 1 ? "md-mb50" : "", " wow fadeInUp"),
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
					}), r && (0, i.jsx)("div", {
						className: "half-bg bottom"
					})]
				})
			}
		},
		5410: function(e, s, n) {
			n.d(s, {
				Z: function() {
					return p
				}
			});
			var i = n(5893),
				a = n(7294),
				t = n(6066),
				r = (n(8322), n(2739), JSON.parse('[{"id":1,"image":"img/team/waybery.jpg","name":"Waybery","title":"Chanson fran\xe7aise"},{"id":2,"image":"img/team/enda.jpg","name":"Enda","title":"Pop Soul"},{"id":3,"image":"img/team/farah-nella.jpg","name":"Farah Nella","title":"Pop urbaine"},{"id":4,"image":"img/team/windiane.jpg","name":"Windiane","title":"Pop carib\xe9enne"}]')),
				c = n(6010);

			function l(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function o(e, s) {
				for (var n = 0; n < s.length; n++) {
					var i = s[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}

			function d(e) {
				return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
					return e.__proto__ || Object.getPrototypeOf(e)
				})(e)
			}

			function u(e, s) {
				return !s || "object" !== h(s) && "function" !== typeof s ? l(e) : s
			}

			function m(e, s) {
				return (m = Object.setPrototypeOf || function(e, s) {
					return e.__proto__ = s, e
				})(e, s)
			}
			var h = function(e) {
				return e && "undefined" !== typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
			};

			function g(e) {
				var s = function() {
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
					var n, i = d(e);
					if (s) {
						var a = d(this).constructor;
						n = Reflect.construct(i, arguments, a)
					} else n = i.apply(this, arguments);
					return u(this, n)
				}
			}
			var p = function(e) {
				! function(e, s) {
					if ("function" !== typeof s && null !== s) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(s && s.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), s && m(e, s)
				}(u, e);
				var s, n, a, d = g(u);

				function u(e) {
					var s, n, a, t;
					return function(e, s) {
						if (!(e instanceof s)) throw new TypeError("Cannot call a class as a function")
					}(this, u), s = d.call(this, e), n = l(s), t = function() {
						return (0, i.jsxs)("div", {
							className: "navs mt-30 wow fadeInUp",
							"data-wow-delay": ".3s",
							children: [(0, i.jsx)("span", {
								className: "prev cursor-pointer",
								onClick: function() {
									return s.slider.slickPrev()
								},
								children: (0, i.jsx)("i", {
									className: "fas fa-chevron-left"
								})
							}), (0, i.jsx)("span", {
								className: "next cursor-pointer",
								onClick: function() {
									return s.slider.slickNext()
								},
								children: (0, i.jsx)("i", {
									className: "fas fa-chevron-right"
								})
							})]
						})
					}, (a = "renderArrows") in n ? Object.defineProperty(n, a, {
						value: t,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : n[a] = t, s
				}
				return s = u, (n = [{
					key: "render",
					value: function() {
						var e = this;
						return (0, i.jsx)("section", {
							className: "team section-padding",
							children: (0, i.jsx)("div", {
								className: "container",
								children: (0, i.jsxs)("div", {
									className: "row",
									children: [(0, i.jsx)("div", {
										className: "col-lg-4 valign",
										children: (0, i.jsxs)("div", {
											className: "full-width",
											children: [(0, i.jsxs)("div", {
												className: "sec-head custom-font mb-0",
												children: [(0, i.jsx)("h6", {
													children: "Recording"
												}), (0, i.jsx)("h3", {
													children: "NOS ARTISTES"
												})]
											}), this.renderArrows()]
										})
									}), (0, i.jsx)("div", {
										className: "col-lg-8",
										children: (0, i.jsx)(t.Z, {
											className: (0, c.Z)("team-container", "slide-active"),
											ref: function(s) {
												return e.slider = s
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
											children: r.map((function(e) {
												return (0, i.jsxs)("div", {
													className: "item wow fadeInUp",
													"data-wow-delay": ".3s",
													children: [(0, i.jsx)("div", {
														className: "img wow imago",
														children: (0, i.jsx)("img", {
															src: e.image,
															alt: ""
														})
													}), (0, i.jsxs)("div", {
														className: "info",
														children: [(0, i.jsx)("h5", {
															children: e.name
														}), (0, i.jsx)("span", {
															children: e.title
														}), (0, i.jsxs)("div", {
															className: "social",
															children: [(0, i.jsx)("a", {
																href: "#0",
																children: (0, i.jsx)("i", {
																	className: "fab fa-facebook-f"
																})
															}), (0, i.jsx)("a", {
																href: "#0",
																children: (0, i.jsx)("i", {
																	className: "fab fa-twitter"
																})
															}), (0, i.jsx)("a", {
																href: "#0",
																children: (0, i.jsx)("i", {
																	className: "fab fa-behance"
																})
															}), (0, i.jsx)("a", {
																href: "#0",
																children: (0, i.jsx)("i", {
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
				}]) && o(s.prototype, n), a && o(s, a), u
			}(a.Component)
		},
		2532: function(e, s, n) {
			var i = n(5893),
				a = (n(7294), n(9008));
			s.Z = function(e) {
				var s = e.children;
				return (0, i.jsxs)(i.Fragment, {
					children: [(0, i.jsx)(a.default, {
						children: (0, i.jsx)("link", {
							rel: "stylesheet",
							href: "css/dark.css"
						})
					}), s]
				})
			}
		},
		8222: function(e) {
			e.exports = JSON.parse('[{"id":1,"title":"Direction Artistique","icon":"pe-7s-musiclist","content":"Des experts au service des artistes : chaque talent peut trouver son public, avec le bon accompagnement et en suivant la bonne direction."},{"id":2,"title":"Acc\xe8s Studios","icon":"pe-7s-music","content":"Un ensemble de studios aux saveurs acoustiques diff\xe9rentes, et au mat\xe9riel choisi avec soin."},{"id":3,"title":"Enregistrement","icon":"pe-7s-micro","content":"Des ing\xe9nieurs du son passionn\xe9s, \xe0 la technique pointue. Un savoir-faire directement import\xe9 des Etats-Unis."},{"id":4,"title":"Mixage","icon":"pe-7s-edit","content":"Des techniques de mixage vari\xe9es, inspir\xe9es directement par les plus grands. L\'\xe9quipe est internationale et \xe7a s\'entend : nos productions ne sont pas modernes. Elles sont intemporelles."},{"id":5,"title":"Mastering","icon":"pe-7s-edit","content":"Une harmonisation sonore optimale gr\xe2ce \xe0 une technologie de pointe et des oreilles alertes. Possible en dolby atmos."},{"id":6,"title":"S\xe9minaire","icon":"pe-7s-culture","content":"Nous organisons des s\xe9jours cr\xe9atifs dans des lieux d\'exception."}]')
		}
	}
]);