(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[2367], {
		6802: function(e, a) {
			"use strict";
			a.Z = function() {
				window.addEventListener("scroll", (function() {
					var e = window.pageYOffset;
					document.querySelector(".fixed-slider .caption") && document.querySelectorAll(".fixed-slider .caption").forEach((function(a) {
						a.style.transform = "translate3d(0, " + -.2 * e + "px, 0)", a.style.opacity = 1 - e / 600
					}))
				}))
			}
		},
		8063: function(e, a) {
			"use strict";
			a.Z = function() {
				var e;
				document.querySelectorAll(".gallery").forEach((function(a) {
					e = new Isotope(a, {
						itemSelector: ".items"
					})
				}));
				var a = document.querySelector(".filtering");
				if (a) {
					var s = function(e) {
						e.addEventListener("click", (function(a) {
							matchesSelector(a.target, "span") && (e.querySelector(".active").classList.remove("active"), a.target.classList.add("active"))
						}))
					};
					a.addEventListener("click", (function(a) {
						if (matchesSelector(a.target, "span")) {
							var s = a.target.getAttribute("data-filter");
							s = s, e.arrange({
								filter: s
							})
						}
					}));
					for (var i = document.querySelectorAll(".filtering"), t = 0, n = i.length; t < n; t++) {
						s(i[t])
					}
				}
			}
		},
		5850: function(e, a) {
			"use strict";
			a.Z = function() {
				document.querySelector(".swiper-pagination") && (document.querySelector(".swiper-pagination").innerHTML = document.querySelector(".swiper-pagination").innerHTML.replace(" / ", ""))
			}
		},
		6719: function(e, a, s) {
			"use strict";
			var i = s(5893),
				t = (s(7294), s(1664)),
				n = s(8636);
			a.Z = function() {
				return (0, i.jsx)("section", {
					className: "blc-sec section-padding pb-0",
					children: (0, i.jsx)("div", {
						className: "container",
						children: (0, i.jsxs)("div", {
							className: "row",
							children: [(0, i.jsx)("div", {
								className: "col-lg-7",
								children: (0, i.jsxs)("div", {
									className: "intro md-mb30",
									children: [(0, i.jsxs)("div", {
										className: "sub-title",
										children: [(0, i.jsx)("h6", {
											children: "\xc0 propos de nous"
										}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {})]
									}), (0, i.jsx)(n.Z, {
										children: (0, i.jsx)("h1", {
											className: "extra-title wow words chars splitting",
											"data-splitting": !0,
											children: "10 000 m2 au service des creatores."
										})
									})]
								})
							}), (0, i.jsx)("div", {
								className: "col-lg-5 valign",
								children: (0, i.jsxs)("div", {
									className: "full-width",
									children: [(0, i.jsx)(n.Z, {
										children: (0, i.jsx)("p", {
											className: "wow txt words chars splitting",
											"data-splitting": !0,
											children: "Wence investit sur les creatores - des cr\xe9atifs qui assument leur diff\xe9rence, en mettant \xe0 leur disposition des endroits, des outils, et des \xe9quipes pour les accompagner. Ils peuvent \xeatre artiste, danseur.se, influenceur.se, chanteur.se, humoriste, compositeur.ice, couturier.e, auteur.e, d\xe9corateur.ice, dessinateur.ice, sc\xe9nariste, graphiste, chor\xe9graphe, com\xe9dien.ne, mod\xe8le, peintre, photographe, sculpteur.ice, styliste, vid\xe9aste... des talents de tous les horizons."
										})
									}), (0, i.jsx)(n.Z, {
										children: (0, i.jsx)(t.default, {
											href: "/about/about-dark",
											children: (0, i.jsx)("a", {
												className: "simple-btn custom-font mt-20 wow words chars splitting",
												"data-splitting": !0,
												children: (0, i.jsx)("span", {
													children: "En savoir plus"
												})
											})
										})
									})]
								})
							})]
						})
					})
				})
			}
		},
		6469: function(e, a, s) {
			"use strict";
			var i = s(5893),
				t = s(7294),
				n = s(3526),
				r = s(2873),
				l = s(1664),
				o = s(8116),
				c = (s(933), s(8770), s(92), s(8636)),
				d = s(6802),
				m = s(5850);

			function u(e, a) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, a) {
					var s = [],
						i = !0,
						t = !1,
						n = void 0;
					try {
						for (var r, l = e[Symbol.iterator](); !(i = (r = l.next()).done) && (s.push(r.value), !a || s.length !== a); i = !0);
					} catch (o) {
						t = !0, n = o
					} finally {
						try {
							i || null == l.return || l.return()
						} finally {
							if (t) throw n
						}
					}
					return s
				}(e, a) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance")
				}()
			}
			o.ZP.use([o.W_, o.tl, o.VS, o.pt]);
			a.Z = function() {
				var e = u(t.useState(!0), 2),
					a = e[0],
					s = e[1];
				t.useEffect((function() {
					(0, d.Z)(), setTimeout((function() {
						s(!1), (0, m.Z)()
					}), 1e3)
				}), []);
				var o = t.useRef(null),
					g = t.useRef(null),
					h = t.useRef(null);
				return (0, i.jsx)("header", {
					className: "slider slider-prlx",
					children: (0, i.jsxs)("div", {
						className: "swiper-container parallax-slider",
						children: [a ? null : (0, i.jsx)(r.t, {
							speed: 1e3,
							autoplay: !0,
							parallax: !0,
							navigation: {
								prevEl: o.current,
								nextEl: g.current
							},
							pagination: {
								type: "fraction",
								clickable: !0,
								el: h.current
							},
							onBeforeInit: function(e) {
								e.params.navigation.prevEl = o.current, e.params.navigation.nextEl = g.current, e.params.pagination.el = h.current
							},
							onSwiper: function(e) {
								setTimeout((function() {
									for (var a = 0; a < e.slides.length; a++) e.slides[a].childNodes[0].setAttribute("data-swiper-parallax", .75 * e.width);
									e.params.navigation.prevEl = o.current, e.params.navigation.nextEl = g.current, e.params.pagination.el = h.current, e.navigation.destroy(), e.navigation.init(), e.navigation.update(), e.pagination.destroy(), e.pagination.init(), e.pagination.update()
								}))
							},
							className: "swiper-wrapper",
							slidesPerView: 1,
							children: n.map((function(e) {
								return (0, i.jsx)(r.o, {
									className: "swiper-slide",
									children: (0, i.jsx)("div", {
										className: "bg-img valign",
										style: {
											backgroundImage: "url(".concat(e.image, ")")
										},
										"data-overlay-dark": "6",
										children: (0, i.jsx)("div", {
											className: "container",
											children: (0, i.jsx)("div", {
												className: "row",
												children: (0, i.jsx)("div", {
													className: "col-lg-12",
													children: (0, i.jsxs)("div", {
														className: "caption dig",
														children: [(0, i.jsx)(c.Z, {
															children: (0, i.jsx)("h1", {
																className: "words chars splitting",
																children: "object" === typeof e.title ? (0, i.jsxs)(i.Fragment, {
																	children: [e.title.first, (0, i.jsx)("div", {
																		className: "tline",
																		children: e.title.second
																	})]
																}) : e.title
															})
														}), (0, i.jsx)(l.default, {
															href: "/works2/works2-dark",
															children: (0, i.jsx)("a", {
																className: "simple-btn mt-50",
																children: (0, i.jsx)("span", {
																	children: "Discover Works"
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
						}), (0, i.jsxs)("div", {
							className: "setone setwo",
							children: [(0, i.jsx)("div", {
								ref: g,
								className: "swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",
								children: (0, i.jsx)("i", {
									className: "fas fa-chevron-right"
								})
							}), (0, i.jsx)("div", {
								ref: o,
								className: "swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",
								children: (0, i.jsx)("i", {
									className: "fas fa-chevron-left"
								})
							})]
						}), (0, i.jsx)("div", {
							ref: h,
							className: "swiper-pagination top botm custom-font"
						}), (0, i.jsxs)("div", {
							className: "social-icon",
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
									className: "fab fa-pinterest-p"
								})
							})]
						})]
					})
				})
			}
		},
		7743: function(e, a, s) {
			"use strict";
			var i = s(5893),
				t = s(7294),
				n = s(8636),
				r = (s(1664), s(8063)),
				l = s(8380);

			function o(e, a) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, a) {
					var s = [],
						i = !0,
						t = !1,
						n = void 0;
					try {
						for (var r, l = e[Symbol.iterator](); !(i = (r = l.next()).done) && (s.push(r.value), !a || s.length !== a); i = !0);
					} catch (o) {
						t = !0, n = o
					} finally {
						try {
							i || null == l.return || l.return()
						} finally {
							if (t) throw n
						}
					}
					return s
				}(e, a) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance")
				}()
			}
			a.Z = function(e) {
				var a = e.column,
					s = e.filterPosition,
					c = e.hideFilter,
					d = e.hideSectionTitle,
					m = o(t.useState(!1), 2),
					u = m[0],
					g = m[1];
				return t.useEffect((function() {
					g(!0), u && setTimeout((function() {
						(0, r.Z)()
					}), 1e3)
				}), [u]), (0, i.jsxs)("section", {
					className: "portfolio section-padding pb-70",
					id: "#nos-artistes",
					children: [!d && (0, i.jsx)("div", {
						className: "container",
						children: (0, i.jsxs)("div", {
							className: "sec-head custom-font",
							children: [(0, i.jsx)("h6", {
								className: "wow fadeIn",
								"data-wow-delay": ".5s",
								children: "Portfolio"
							}), (0, i.jsx)(n.Z, {
								children: (0, i.jsx)("h3", {
									className: "wow words chars splitting",
									"data-splitting": !0,
									children: "Works."
								})
							}), (0, i.jsx)("span", {
								className: "tbg text-right",
								children: "Portfolio"
							})]
						})
					}), (0, i.jsx)("div", {
						className: "".concat(3 === a ? "container-fluid" : "container"),
						children: (0, i.jsxs)("div", {
							className: "row",
							children: [!c && (0, i.jsx)("div", {
								className: "filtering ".concat("center" === s ? "text-center" : "left" === s ? "text-left" : "text-right", " col-12"),
								children: (0, i.jsxs)("div", {
									className: "filter",
									children: [(0, i.jsx)("span", {
										"data-filter": "*",
										className: "active",
										children: "Tout"
									}), (0, i.jsx)("span", {
										"data-filter": ".chanson",
										children: "Chanson"
									}), (0, i.jsx)("span", {
										"data-filter": ".campagne",
										children: "Campagne"
									}), (0, i.jsx)("span", {
										"data-filter": ".management",
										children: "Management"
									})]
								})
							}), (0, i.jsx)("div", {
								className: "gallery full-width",
								children: l.map((function(e, s) {
									return (0, i.jsxs)("div", {
										className: "".concat(3 === a ? "col-lg-4 col-md-6" : 2 === a ? "col-md-6" : "col-12", " items ").concat(e.filterCategory.join(" "), " wow fadeInUp ").concat(2 === e.id && 3 == a || 1 === e.id && 2 == a ? "lg-mr" : ""),
										"data-wow-delay": ".4s",
										children: [(0, i.jsxs)("div", {
											className: "item-img",
											children: [(0, i.jsx)("img", {
												src: e.image,
												alt: "image"
											}), (0, i.jsx)("div", {
												className: "item-img-overlay"
											})]
										}), (0, i.jsxs)("div", {
											className: "cont",
											children: [(0, i.jsx)("h6", {
												children: e.title
											}), (0, i.jsx)("span", {
												children: e.tags.map((function(a, s) {
													return (0, i.jsxs)(t.Fragment, {
														children: [a, s == e.tags.length - 1 ? "" : ","]
													}, 3 * s)
												}))
											})]
										})]
									}, e.id)
								}))
							})]
						})
					})]
				})
			}
		},
		6156: function(e, a, s) {
			"use strict";
			var i = s(5893),
				t = (s(7294), s(1664));
			a.Z = function() {
				return (0, i.jsx)("section", {
					className: "services section-padding",
					children: (0, i.jsxs)("div", {
						className: "container",
						children: [(0, i.jsxs)("div", {
							className: "row justify-content-center",
							children: [(0, i.jsx)("div", {
								className: "col-lg-3 wow fadeInUp",
								"data-wow-delay": ".4s",
								children: (0, i.jsxs)("div", {
									className: "mas-item",
									children: [(0, i.jsx)("span", {
										className: "icon pe-7s-musiclist"
									}), (0, i.jsx)("h6", {
										children: "Musique"
									}), (0, i.jsx)("div", {
										className: "text-right",
										children: (0, i.jsx)(t.default, {
											href: "/music",
											children: (0, i.jsx)("a", {
												className: "more",
												children: (0, i.jsx)("i", {
													className: "fas fa-chevron-right"
												})
											})
										})
									}), (0, i.jsx)("div", {
										className: "bg-color"
									})]
								})
							}), (0, i.jsx)("div", {
								className: "col-lg-3 offset-lg-1 wow fadeInUp",
								"data-wow-delay": ".4s",
								children: (0, i.jsxs)("div", {
									className: "mas-item",
									children: [(0, i.jsx)("span", {
										className: "icon pe-7s-diamond"
									}), (0, i.jsx)("h6", {
										children: "Mode"
									}), (0, i.jsx)("div", {
										className: "text-right",
										children: (0, i.jsx)(t.default, {
											href: "/mode",
											children: (0, i.jsx)("a", {
												className: "more",
												children: (0, i.jsx)("i", {
													className: "fas fa-chevron-right"
												})
											})
										})
									}), (0, i.jsx)("div", {
										className: "bg-color"
									})]
								})
							}), (0, i.jsx)("div", {
								className: "col-lg-3 offset-lg-1 wow fadeInUp",
								"data-wow-delay": ".4s",
								children: (0, i.jsxs)("div", {
									className: "mas-item",
									children: [(0, i.jsx)("span", {
										className: "icon pe-7s-news-paper"
									}), (0, i.jsx)("h6", {
										children: "Media"
									}), (0, i.jsx)("div", {
										className: "text-right",
										children: (0, i.jsx)(t.default, {
											href: "/media",
											children: (0, i.jsx)("a", {
												className: "more",
												children: (0, i.jsx)("i", {
													className: "fas fa-chevron-right"
												})
											})
										})
									}), (0, i.jsx)("div", {
										className: "bg-color"
									})]
								})
							})]
						}), (0, i.jsxs)("div", {
							className: "row justify-content-center",
							children: [(0, i.jsx)("div", {
								className: "col-lg-3 offset-lg-1 wow fadeInUp",
								"data-wow-delay": ".4s",
								children: (0, i.jsxs)("div", {
									className: "mas-item",
									children: [(0, i.jsx)("span", {
										className: "icon pe-7s-speaker"
									}), (0, i.jsx)("h6", {
										children: "Marketing"
									}), (0, i.jsx)("div", {
										className: "text-right",
										children: (0, i.jsx)(t.default, {
											href: "/marketing",
											children: (0, i.jsx)("a", {
												className: "more",
												children: (0, i.jsx)("i", {
													className: "fas fa-chevron-right"
												})
											})
										})
									}), (0, i.jsx)("div", {
										className: "bg-color"
									})]
								})
							}), (0, i.jsx)("div", {
								className: "col-lg-3 offset-lg-1 wow fadeInUp",
								"data-wow-delay": ".4s",
								children: (0, i.jsxs)("div", {
									className: "mas-item",
									children: [(0, i.jsx)("span", {
										className: "icon pe-7s-study"
									}), (0, i.jsx)("h6", {
										children: "Mouvement"
									}), (0, i.jsx)("div", {
										className: "text-right",
										children: (0, i.jsx)(t.default, {
											href: "/mouvement",
											children: (0, i.jsx)("a", {
												className: "more",
												children: (0, i.jsx)("i", {
													className: "fas fa-chevron-right"
												})
											})
										})
									}), (0, i.jsx)("div", {
										className: "bg-color"
									})]
								})
							})]
						})]
					})
				})
			}
		},
		8770: function() {},
		3526: function(e) {
			"use strict";
			e.exports = JSON.parse('[{"id":1,"title":{"first":"Wence","second":"Entertainment"},"content":"If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.","image":"img/demos/bg.png","link":{"title":"NOTRE VISION","href":"/about"}},{"id":2,"title":{"first":"Musique","second":"Services"},"content":"If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.","image":"img/demos/studio.jpeg","link":{"title":"NOS SUCCES","href":"/music"}},{"id":2,"title":{"first":"Mode","second":"Photo & Vid\xe9o"},"content":"If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.","image":"img/demos/music-face.webp","link":{"title":"VOTRE IMAGE","href":"mode"}}]')
		},
		8380: function(e) {
			"use strict";
			e.exports = JSON.parse('[{"id":1,"image":"img/portfolio/mas/lartiste-lunettes.jpeg","title":"Lartiste","tags":["Management","Stragt\xe9gies","Concerts"],"filterCategory":["management"]},{"id":2,"image":"img/portfolio/mas/yves-saint-laurent.jpeg","title":"Yves Saint Laurent","tags":["Chansons","Campagne"],"filterCategory":["chanson","campagne"]},{"id":3,"image":"img/portfolio/mas/marwa-loud.jpeg","title":"Marwa Loud","tags":["Management","Strat\xe9gies"],"filterCategory":["management"]},{"id":4,"image":"img/portfolio/mas/cacharel-Logo.jpeg","title":"Cacharel","tags":["Chansons","campagne"],"filterCategory":["chanson","campagne"]},{"id":5,"image":"img/portfolio/mas/loreal.png","title":"Lor\xe9al","tags":["Chansons","\xc9v\xe8nements influence","Campagnes"],"filterCategory":["chanosn","campagne"]},{"id":6,"image":"img/portfolio/mas/sean-paul.png","title":"Sean Paul","tags":["Chansons"],"filterCategory":["chanson"]},{"id":7,"image":"img/portfolio/mas/maison-margiela.jpeg","title":"Maison Margi\xe9la","tags":["Chansons"],"filterCategory":["chanson"]},{"id":8,"image":"img/portfolio/mas/anitta.jpg","title":"Anitta","tags":["Direction artistique","Chansons"],"filterCategory":["chanson","management"]},{"id":9,"image":"img/portfolio/mas/aya-nakamura.jpeg","title":"Aya Nakamura","tags":["Chansons"],"filterCategory":["chanson"]},{"id":10,"image":"img/portfolio/mas/viktor-rolf.jpeg","title":"Viktor Rolf","tags":["Chansons"],"filterCategory":["chanson"]},{"id":11,"image":"img/portfolio/mas/kalash-criminel.jpeg","title":"Kalash Criminel","tags":["Business Management"],"filterCategory":["management"]},{"id":12,"image":"img/portfolio/mas/dior.jpeg","title":"Dior","tags":["Chansons"],"filterCategory":["chanson"]},{"id":13,"image":"img/portfolio/mas/ford.jpeg","title":"Ford","tags":["Chansons"],"filterCategory":["chanson"]},{"id":14,"image":"img/portfolio/mas/ninho.jpeg","title":"Ninho","tags":["Instrumentales"],"filterCategory":["chanson"]},{"id":15,"image":"img/portfolio/mas/ronisia.jpeg","title":"Ronisia","tags":["Chansons"],"filterCategory":["chanson"]},{"id":16,"image":"img/portfolio/mas/biotherm.jpeg","title":"Biotherm","tags":["Chansons","Campagne m\xe9dia"],"filterCategory":["chanson","campagne"]}]')
		}
	}
]);