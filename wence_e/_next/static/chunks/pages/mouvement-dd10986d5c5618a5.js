(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[7125, 4016], {
		4290: function(e, s, t) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/mouvement", function() {
				return t(7628)
			}])
		},
		2455: function(e, s, t) {
			"use strict";
			t.d(s, {
				gw: function() {
					return n
				},
				Ji: function() {
					return i
				},
				U6: function() {
					return r
				},
				m7: function() {
					return c
				},
				mM: function() {
					return l
				}
			});
			var a = 0;
			var n = function(e, s) {
					setTimeout((function() {}), e)
				},
				i = function(e, s) {
					setInterval(function(e) {
						(a = Number(window.getComputedStyle(e).getPropertyValue("opacity"))) < 1 ? (a += 1, e.style.opacity = a) : clearInterval(0)
					}(e), s)
				},
				r = function(e, s) {
					setInterval(function(e) {
						(a = Number(window.getComputedStyle(e).getPropertyValue("opacity"))) > 0 ? (a = 0, e.style.opacity = a) : clearInterval(0)
					}(e), s)
				},
				c = function(e) {
					var s = [];
					if (!e.parentNode) return s;
					for (var t = e.parentNode.firstChild; t;) 1 === t.nodeType && t !== e && s.push(t), t = t.nextSibling;
					return s
				},
				l = function(e, s) {
					e.style.left = s
				}
		},
		4140: function(e, s, t) {
			"use strict";
			var a = t(2455);
			s.Z = function() {
				var e = document.querySelectorAll(".feat .items");
				e && e.forEach((function(e) {
					e.onmouseover = function(s) {
						e.classList.add("active");
						(0, a.m7)(e).map((function(e) {
							return e.classList.remove("active")
						}))
					}
				}))
			}
		},
		4076: function(e, s, t) {
			"use strict";
			t.d(s, {
				D: function() {
					return a
				}
			});
			var a = function() {
				document.getElementsByClassName("thumparallax-down")
			}
		},
		5106: function(e, s, t) {
			"use strict";
			var a = t(5893),
				n = t(1664);
			t(7294);
			s.Z = function(e) {
				var s = e.title,
					t = e.imageUrl;
				return (0, a.jsx)("header", {
					className: "pages-header bg-img valign",
					style: {
						backgroundImage: "url(".concat(t, ")")
					},
					"data-overlay-dark": "5",
					children: (0, a.jsx)("div", {
						className: "container",
						children: (0, a.jsx)("div", {
							className: "row",
							children: (0, a.jsx)("div", {
								className: "col-lg-12",
								children: (0, a.jsxs)("div", {
									className: "cont text-center",
									children: [(0, a.jsx)("h1", {
										children: s
									}), (0, a.jsxs)("div", {
										className: "path",
										children: [(0, a.jsx)(n.default, {
											href: "/",
											children: (0, a.jsx)("a", {
												children: "Accueil"
											})
										}), (0, a.jsx)("span", {
											children: "/"
										}), (0, a.jsx)("a", {
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
		621: function(e, s, t) {
			"use strict";
			var a = t(5893),
				n = (t(7294), t(8636)),
				i = t(1664);
			s.Z = function(e) {
				var s = e.img,
					t = e.theme,
					r = e.subBG;
				return (0, a.jsx)("section", {
					className: "call-action section-padding ".concat(r ? "sub-bg" : "", " bg-img"),
					style: {
						backgroundImage: "url(".concat(s || "img/pattern.png", ")")
					},
					children: (0, a.jsx)("div", {
						className: "container",
						children: (0, a.jsxs)("div", {
							className: "row",
							children: [(0, a.jsx)("div", {
								className: "col-md-8 col-lg-9",
								children: (0, a.jsx)("div", {
									className: "content sm-mb30",
									children: (0, a.jsxs)(n.Z, {
										children: [(0, a.jsx)("h6", {
											className: "wow words chars splitting",
											"data-splitting": !0,
											children: "Rencontrons-nous"
										}), (0, a.jsxs)("h2", {
											className: "wow words custom-font chars splitting",
											"data-splitting": !0,
											children: ["parlons de ", (0, a.jsx)("b", {
												children: "vous"
											}), "."]
										})]
									})
								})
							}), (0, a.jsx)("div", {
								className: "col-md-4 col-lg-3 valign",
								children: (0, a.jsx)(i.default, {
									href: "/contact",
									children: (0, a.jsx)("a", {
										className: "btn-curve ".concat("light" == t ? "btn-blc" : "btn-lit", " wow fadeInUp"),
										"data-wow-delay": ".5s",
										children: (0, a.jsx)("span", {
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
		6224: function(e, s, t) {
			"use strict";
			t.d(s, {
				Z: function() {
					return r
				}
			});
			var a = t(5893),
				n = (t(7294), JSON.parse('[{"id":1,"lightImage":"img/clients/brands/light/1.png","darkImage":"img/clients/brands/dark/because-music.png","url":"https://www.because.tv","title":"Because Music"},{"id":2,"lightImage":"img/clients/brands/light/2.png","darkImage":"img/clients/brands/dark/play-two.png","url":"https://playtwo.fr","title":"Play Two"},{"id":3,"lightImage":"img/clients/brands/light/3.png","darkImage":"img/clients/brands/dark/believe.png","url":"https://www.believe.com","title":"Believe"},{"id":4,"lightImage":"/img/clients/brands/light/4.png","darkImage":"img/clients/brands/dark/universal.png","url":"https://www.universalmusic.fr","title":"Universal Music"},{"id":5,"lightImage":"/img/clients/brands/light/5.png","darkImage":"img/clients/brands/dark/warner.png","url":"https://www.warnermusic.fr","title":"Warner Music"},{"id":6,"lightImage":"img/clients/brands/light/6.png","darkImage":"img/clients/brands/dark/tf1.png","url":"https://www.tf1.fr/","title":"TF1"},{"id":7,"lightImage":"img/clients/brands/light/7.png","darkImage":"img/clients/brands/dark/fantomatx.png","url":"#fantomatx","title":"Fant\xf4matX"},{"id":8,"lightImage":"img/clients/brands/light/8.png","darkImage":"img/clients/brands/dark/nouvelle-ecole-music.png","url":"https://www.facebook.com/NouvelleEcoleLabel/","title":"Nouvelle \xc9cole"}]')),
				i = t(8636),
				r = function(e) {
					var s = e.theme,
						t = e.subBG,
						r = n.slice(0, n.length / 2),
						c = n.slice(4, n.length);
					return (0, a.jsx)("section", {
						className: "clients section-padding ".concat(t ? "sub-bg" : ""),
						children: (0, a.jsx)("div", {
							className: "container",
							children: (0, a.jsxs)("div", {
								className: "row",
								children: [(0, a.jsx)("div", {
									className: "col-lg-4 valign",
									children: (0, a.jsx)("div", {
										className: "sec-head custom-font mb-0",
										children: (0, a.jsx)("h3", {
											children: "Ils nous font confiance"
										})
									})
								}), (0, a.jsx)("div", {
									className: "col-lg-8",
									children: (0, a.jsxs)("div", {
										children: [(0, a.jsx)("div", {
											className: "row bord",
											children: r.map((function(e) {
												return (0, a.jsx)("div", {
													className: "col-md-3 col-6 brands",
													children: (0, a.jsx)("div", {
														className: "item wow fadeIn",
														"data-wow-delay": "".concat(1 == e.id ? ".3" : 2 == e.id ? ".6" : 3 == e.id ? ".8" : 4 == e.id ? ".3" : "", "s"),
														children: (0, a.jsxs)("div", {
															className: "img",
															children: ["light" === s ? (0, a.jsx)("img", {
																src: e.lightImage,
																alt: ""
															}) : (0, a.jsx)("img", {
																src: e.darkImage,
																alt: ""
															}), (0, a.jsx)(i.Z, {
																children: (0, a.jsx)("a", {
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
										}), (0, a.jsx)("div", {
											className: "row",
											children: c.map((function(e) {
												return (0, a.jsx)("div", {
													className: "".concat(5 == e.id || 6 == e.id ? "col-md-3 col-6 brands sm-mb30" : 7 == e.id || 8 == e.id ? "col-md-3 col-6 brands" : ""),
													children: (0, a.jsx)("div", {
														className: "item wow fadeIn",
														"data-wow-delay": "".concat(1 == e.id ? ".4" : 2 == e.id ? ".7" : 3 == e.id ? ".5" : 4 == e.id ? ".3" : "", "s"),
														children: (0, a.jsxs)("div", {
															className: "img",
															children: ["light" === s ? (0, a.jsx)("img", {
																src: e.lightImage,
																alt: ""
															}) : (0, a.jsx)("img", {
																src: e.darkImage,
																alt: ""
															}), (0, a.jsx)(i.Z, {
																children: (0, a.jsx)("a", {
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
		1690: function(e, s, t) {
			"use strict";
			var a = t(5893),
				n = (t(7294), t(2175), t(2806));
			s.Z = function(e) {
				var s = e.noSubBG;
				return (0, a.jsx)("footer", {
					className: "footer-half ".concat(s ? "" : "sub-bg", " section-padding pb-0"),
					children: (0, a.jsxs)("div", {
						className: "container",
						children: [(0, a.jsxs)("div", {
							className: "row",
							children: [(0, a.jsx)("div", {
								className: "col-lg-5",
								children: (0, a.jsxs)("div", {
									className: "cont",
									children: [(0, a.jsx)("div", {
										className: "logo",
										children: (0, a.jsx)("a", {
											href: "#0",
											children: (0, a.jsx)("img", {
												src: "".concat(n.E8),
												alt: ""
											})
										})
									}), (0, a.jsx)("div", {
										className: "con-info custom-font",
										children: (0, a.jsxs)("ul", {
											children: [(0, a.jsxs)("li", {
												children: [(0, a.jsx)("span", {
													children: "Email : "
												}), " contact@wence-entertainment.com"]
											}), (0, a.jsxs)("li", {
												children: [(0, a.jsx)("span", {
													children: "Adresse : "
												}), " 2 Rue B\xe9ranger, 92320 Ch\xe2tillon."]
											})]
										})
									})]
								})
							}), (0, a.jsx)("div", {
								className: "col-lg-5 offset-lg-2",
								children: (0, a.jsx)("div", {
									className: "cont",
									children: (0, a.jsxs)("div", {
										className: "social-icon",
										children: [(0, a.jsx)("h6", {
											className: "custom-font stit simple-btn",
											children: "Suivez-nous"
										}), (0, a.jsx)("div", {
											className: "social",
											children: (0, a.jsx)("a", {
												href: "https://www.instagram.com/wence_entertainment/?hl=fr",
												className: "icon",
												rel: "noreferrer",
												target: "_blank",
												children: (0, a.jsx)("i", {
													className: "fab fa-instagram"
												})
											})
										})]
									})
								})
							})]
						}), (0, a.jsx)("div", {
							className: "copyrights text-center",
							children: (0, a.jsx)("p", {
								children: "\xa9 2023. Made with passion by The Well Com'."
							})
						})]
					})
				})
			}
		},
		4848: function(e, s, t) {
			"use strict";
			t.d(s, {
				Z: function() {
					return o
				}
			});
			var a = t(5893),
				n = (t(7294), t(2175), t(1664)),
				i = t(2806),
				r = t(2455),
				c = function(e) {
					(0, r.m7)(e.target.parentElement).filter((function(e) {
						return e.classList.contains("show")
					})).map((function(e) {
						e.classList.remove("show"), e.childNodes[0] && e.childNodes[0].setAttribute("aria-expanded", !1), e.childNodes[1] && e.childNodes[1].classList.remove("show")
					})), e.target.parentElement.classList.toggle("show"), e.target.setAttribute("aria-expanded", !0), e.target.parentElement.childNodes[1].classList.toggle("show")
				},
				l = function(e) {
					document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")
				},
				o = function(e) {
					var s = e.lr,
						t = e.nr,
						r = e.theme;
					return (0, a.jsx)("nav", {
						ref: t,
						className: "navbar navbar-expand-lg change ".concat("themeL" === r ? "light" : ""),
						children: (0, a.jsxs)("div", {
							className: "container",
							children: [(0, a.jsx)(n.default, {
								href: "/",
								children: (0, a.jsx)("a", {
									className: "logo",
									children: r && "themeL" === r ? (0, a.jsx)("img", {
										ref: s,
										src: "".concat(i.Q1),
										alt: "logo"
									}) : (0, a.jsx)("img", {
										ref: s,
										src: "".concat(i.E8),
										alt: "logo"
									})
								})
							}), (0, a.jsx)("button", {
								className: "navbar-toggler",
								type: "button",
								onClick: l,
								"data-toggle": "collapse",
								"data-target": "#navbarSupportedContent",
								"aria-controls": "navbarSupportedContent",
								"aria-expanded": "false",
								"aria-label": "Toggle navigation",
								children: (0, a.jsx)("span", {
									className: "icon-bar",
									children: (0, a.jsx)("i", {
										className: "fas fa-bars"
									})
								})
							}), (0, a.jsx)("div", {
								className: "collapse navbar-collapse",
								id: "navbarSupportedContent",
								children: (0, a.jsxs)("ul", {
									className: "navbar-nav ml-auto",
									children: [(0, a.jsx)("li", {
										className: "nav-item",
										children: (0, a.jsx)(n.default, {
											href: "/",
											children: (0, a.jsx)("a", {
												className: "nav-link",
												children: "Accueil"
											})
										})
									}), (0, a.jsx)("li", {
										className: "nav-item",
										children: (0, a.jsx)(n.default, {
											href: "/about",
											children: (0, a.jsx)("a", {
												className: "nav-link",
												children: "Notre vision"
											})
										})
									}), (0, a.jsxs)("li", {
										className: "nav-item dropdown",
										onClick: c,
										children: [(0, a.jsx)("span", {
											className: "nav-link dropdown-toggle",
											"data-toggle": "dropdown",
											role: "button",
											"aria-haspopup": "true",
											"aria-expanded": "false",
											children: "Les cinq M"
										}), (0, a.jsxs)("div", {
											className: "dropdown-menu",
											children: [(0, a.jsx)(n.default, {
												href: "/music",
												children: (0, a.jsx)("a", {
													className: "dropdown-item",
													children: "Musique"
												})
											}), (0, a.jsx)(n.default, {
												href: "/mode",
												children: (0, a.jsx)("a", {
													className: "dropdown-item",
													children: "Mode"
												})
											}), (0, a.jsx)(n.default, {
												href: "/media",
												children: (0, a.jsx)("a", {
													className: "dropdown-item",
													children: "Media"
												})
											}), (0, a.jsx)(n.default, {
												href: "/marketing",
												children: (0, a.jsx)("a", {
													className: "dropdown-item",
													children: "Marketing"
												})
											}), (0, a.jsx)(n.default, {
												href: "/mouvement",
												children: (0, a.jsx)("a", {
													className: "dropdown-item",
													children: "Mouvement"
												})
											})]
										})]
									}), (0, a.jsx)("li", {
										className: "nav-item",
										children: (0, a.jsx)(n.default, {
											href: "/wence-bank",
											children: (0, a.jsx)("a", {
												className: "nav-link",
												children: "Wence Bank"
											})
										})
									}), (0, a.jsx)("li", {
										className: "nav-item",
										children: (0, a.jsx)(n.default, {
											href: "/offre",
											children: (0, a.jsx)("a", {
												className: "nav-link",
												children: "Offre"
											})
										})
									}), (0, a.jsx)("li", {
										className: "nav-item",
										children: (0, a.jsx)(n.default, {
											href: "https://wcards.wence-entertainment.com",
											children: (0, a.jsx)("a", {
												className: "nav-link",
												children: "Wcards"
											})
										})
									}), (0, a.jsx)("li", {
										className: "nav-item",
										children: (0, a.jsx)(n.default, {
											href: "/contact",
											children: (0, a.jsx)("a", {
												className: "nav-link",
												children: "Contact"
											})
										})
									})]
								})
							})]
						})
					})
				}
		},
		8636: function(e, s, t) {
			"use strict";
			var a = t(5893),
				n = t(7294);

			function i(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function r(e, s) {
				if (!(e instanceof s)) throw new TypeError("Cannot call a class as a function")
			}

			function c(e, s) {
				for (var t = 0; t < s.length; t++) {
					var a = s[t];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}

			function l(e, s, t) {
				return s in e ? Object.defineProperty(e, s, {
					value: t,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[s] = t, e
			}

			function o(e) {
				return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
					return e.__proto__ || Object.getPrototypeOf(e)
				})(e)
			}

			function d(e, s) {
				return !s || "object" !== m(s) && "function" !== typeof s ? i(e) : s
			}

			function u(e, s) {
				return (u = Object.setPrototypeOf || function(e, s) {
					return e.__proto__ = s, e
				})(e, s)
			}
			var m = function(e) {
				return e && "undefined" !== typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
			};

			function h(e) {
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
					var t, a = o(e);
					if (s) {
						var n = o(this).constructor;
						t = Reflect.construct(a, arguments, n)
					} else t = a.apply(this, arguments);
					return d(this, t)
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
					}), s && u(e, s)
				}(m, e);
				var s, t, o, d = h(m);

				function m() {
					var e;
					return r(this, m), l(i(e = d.apply(this, arguments)), "target", n.createRef()), l(i(e), "split", (function() {
						e.target.current && Splitting({
							target: e.target.current
						})
					})), l(i(e), "componentDidMount", e.split), l(i(e), "componentDidUpdate", e.split), e
				}
				return s = m, (t = [{
					key: "render",
					value: function() {
						return (0, a.jsx)("div", {
							ref: this.target,
							children: this.props.children
						})
					}
				}]) && c(s.prototype, t), o && c(s, o), m
			}(n.Component);
			s.Z = p
		},
		4735: function(e, s, t) {
			"use strict";
			t.d(s, {
				Z: function() {
					return o
				}
			});
			var a = t(5893),
				n = t(7294),
				i = JSON.parse('[{"id":1,"title":"art & illustration","secTex":"Innovation and Crafts","image":"img/portfolio/metro/01.jpg","slug":"/project-details2/project-details2-dark"},{"id":2,"title":"art & illustration","secTex":"Inspiring new space","image":"img/portfolio/metro/02.jpg","slug":"/project-details2/project-details2-dark"},{"id":3,"title":"art & illustration","secTex":"Natural plus modern","image":"img/portfolio/metro/03.jpg","slug":"/project-details2/project-details2-dark"},{"id":4,"title":"art & illustration","secTex":"Innovation and Crafts","image":"img/portfolio/metro/04.jpg","slug":"/project-details2/project-details2-dark"},{"id":5,"title":"art & illustration","secTex":"Natural plus modern","image":"img/portfolio/metro/05.jpg","slug":"/project-details2/project-details2-dark"}]'),
				r = t(2873),
				c = t(8116),
				l = t(1664);
			t(933), t(8770), t(92);
			c.ZP.use([c.pt, c.tl, c.W_]);
			var o = function() {
				var e = n.useRef(null),
					s = n.useRef(null);
				return (0, a.jsx)("section", {
					className: "work-carousel section-padding metro position-re",
					children: (0, a.jsxs)("div", {
						className: "container ontop",
						children: [(0, a.jsxs)("div", {
							className: "sec-head custom-font text-center",
							children: [(0, a.jsx)("h6", {
								className: "wow fadeIn",
								"data-wow-delay": ".5s",
								children: "Plus qu'un projet, une aventure"
							}), (0, a.jsx)("h3", {
								className: "wow words chars splitting",
								"data-splitting": !0,
								children: "Nos artistes."
							}), (0, a.jsx)("span", {
								className: "tbg",
								children: "Services"
							})]
						}), (0, a.jsx)("div", {
							className: "row",
							children: (0, a.jsx)("div", {
								className: "col-lg-12",
								children: (0, a.jsxs)("div", {
									className: "swiper-container",
									children: [(0, a.jsx)(r.t, {
										className: "swiper-wrapper",
										slidesPerView: 2,
										centeredSlides: !0,
										loop: !0,
										navigation: {
											prevEl: e.current,
											nextEl: s.current
										},
										onBeforeInit: function(t) {
											t.params.navigation.prevEl = e.current, t.params.navigation.nextEl = s.current
										},
										onSwiper: function(t) {
											setTimeout((function() {
												t.params.navigation.prevEl = e.current, t.params.navigation.nextEl = s.current, t.navigation.destroy(), t.navigation.init(), t.navigation.update()
											}))
										},
										autoplay: {
											delay: 2500,
											disableOnInteraction: !1
										},
										speed: 1e3,
										breakpoints: {
											320: {
												slidesPerView: 1,
												spaceBetween: 0
											},
											640: {
												slidesPerView: 1,
												spaceBetween: 0
											},
											767: {
												slidesPerView: 1,
												spaceBetween: 0,
												centeredSlides: !1
											},
											991: {
												slidesPerView: 2
											}
										},
										children: i.map((function(e) {
											return (0, a.jsx)(r.o, {
												className: "swiper-slide",
												children: (0, a.jsxs)("div", {
													className: "content wow noraidus fadeInUp",
													"data-wow-delay": ".3s",
													children: [(0, a.jsx)("div", {
														className: "item-img bg-img wow imago",
														style: {
															backgroundImage: "url(".concat(e.image, ")")
														}
													}), (0, a.jsxs)("div", {
														className: "cont",
														children: [(0, a.jsx)("h6", {
															className: "color-font",
															children: (0, a.jsx)(l.default, {
																href: "/works/works-dark",
																children: e.title
															})
														}), (0, a.jsx)("h4", {
															children: (0, a.jsx)(l.default, {
																href: "/project-details2/project-details2-dark",
																children: e.secTex
															})
														})]
													})]
												})
											}, e.id)
										}))
									}), (0, a.jsx)("div", {
										ref: s,
										className: "swiper-button-next swiper-nav-ctrl simp-next cursor-pointer",
										children: (0, a.jsx)("span", {
											className: "simple-btn right",
											children: "Next"
										})
									}), (0, a.jsx)("div", {
										ref: e,
										className: "swiper-button-prev swiper-nav-ctrl simp-prev cursor-pointer",
										children: (0, a.jsx)("span", {
											className: "simple-btn",
											children: "Prev"
										})
									})]
								})
							})
						})]
					})
				})
			}
		},
		2532: function(e, s, t) {
			"use strict";
			var a = t(5893),
				n = (t(7294), t(9008));
			s.Z = function(e) {
				var s = e.children;
				return (0, a.jsxs)(a.Fragment, {
					children: [(0, a.jsx)(n.default, {
						children: (0, a.jsx)("link", {
							rel: "stylesheet",
							href: "css/dark.css"
						})
					}), s]
				})
			}
		},
		7628: function(e, s, t) {
			"use strict";
			t.r(s), t.d(s, {
				default: function() {
					return w
				}
			});
			var a = t(5893),
				n = t(9008),
				i = t(7294),
				r = t(8636),
				c = JSON.parse('{"wp":"img/intro/danse-seminar.jpg","Lx":"img/intro/seminar-question.jpg","_g":"img/intro/seminar.jpg","bH":"Formation","TN":{"P":"Se former \xe0 la Wence academy","E":""},"kQ":"Venez vous former \xe0 travers les t\xe9moignages d\'acteurs incontournables de vos march\xe9s. Le d\xe9veloppement personnel se transforme en d\xe9veloppement collectif : ensemble, on est plus fort, on va plus loin. L\'enjeu est ici de s\'\xe9lever avec le groupe et par la force de l\'apprentissage. Tirer savoir-faire et savoir-\xeatre des exp\xe9riences de personnalit\xe9s, que ce soit sous forme de masterclass, s\xe9minaires, ou cours particuliers.","R2":[{"id":1,"icon":"display2","name":{"first":"Masterclass","second":""},"wowDelay":".3s"},{"id":2,"icon":"science","name":{"first":"Seminaires","second":""},"wowDelay":".5s"},{"id":3,"icon":"note","name":{"first":"Cours particuliers","second":""},"wowDelay":".8s"}]}'),
				l = function() {
					return (0, a.jsx)("div", {
						className: "about section-padding",
						children: (0, a.jsx)("div", {
							className: "container",
							children: (0, a.jsxs)("div", {
								className: "row",
								children: [(0, a.jsx)("div", {
									className: "col-lg-5",
									children: (0, a.jsx)("div", {
										className: "img-mons",
										children: (0, a.jsxs)("div", {
											className: "row",
											children: [(0, a.jsx)("div", {
												className: "col-md-5 cmd-padding valign",
												children: (0, a.jsx)("div", {
													className: "img1 wow imago",
													"data-wow-delay": ".5s",
													children: (0, a.jsx)("img", {
														src: c.wp,
														alt: ""
													})
												})
											}), (0, a.jsxs)("div", {
												className: "col-md-7 cmd-padding",
												children: [(0, a.jsx)("div", {
													className: "img2 wow imago",
													"data-wow-delay": ".3s",
													children: (0, a.jsx)("img", {
														src: c.Lx,
														alt: ""
													})
												}), (0, a.jsx)("div", {
													className: "img3 wow imago",
													"data-wow-delay": ".8s",
													children: (0, a.jsx)("img", {
														src: c._g,
														alt: ""
													})
												})]
											})]
										})
									})
								}), (0, a.jsx)("div", {
									className: "col-lg-6 offset-lg-1 valign",
									children: (0, a.jsxs)("div", {
										className: "content",
										children: [(0, a.jsxs)("div", {
											className: "sub-title",
											children: [(0, a.jsx)("h6", {
												children: c.bH
											}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {})]
										}), (0, a.jsx)(r.Z, {
											children: (0, a.jsxs)("h3", {
												className: "words chars splitting main-title wow",
												"data-splitting": !0,
												children: [c.TN.P, " ", (0, a.jsx)("br", {}), " ", c.TN.E]
											})
										}), (0, a.jsx)(r.Z, {
											children: (0, a.jsx)("p", {
												className: "words chars splitting wow txt",
												"data-splitting": !0,
												children: c.kQ
											})
										}), (0, a.jsx)("div", {
											className: "ftbox mt-30",
											children: (0, a.jsx)("ul", {
												children: c.R2.map((function(e) {
													return (0, a.jsxs)("li", {
														className: "wow fadeIn ".concat(2 == e.id ? "space" : ""),
														"data-wow-delay": e.wowDelay,
														children: [(0, a.jsx)("span", {
															className: "icon color-font pe-7s-".concat(e.icon)
														}), (0, a.jsxs)("h6", {
															className: "custom-font",
															children: [e.name.first, " ", (0, a.jsx)("br", {}), " ", e.name.second]
														}), (0, a.jsxs)("div", {
															className: "dots",
															children: [(0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {})]
														})]
													}, e.id)
												}))
											})
										})]
									})
								})]
							})
						})
					})
				},
				o = t(621),
				d = t(6224),
				u = t(1690),
				m = (t(1664), t(5774), t(6422), function(e) {
					e.skillsTheme;
					return (0, a.jsx)("section", {
						className: "about section-padding",
						children: (0, a.jsx)("div", {
							className: "container",
							children: (0, a.jsxs)("div", {
								className: "row",
								children: [(0, a.jsx)("div", {
									className: "col-lg-6 valign",
									children: (0, a.jsxs)("div", {
										className: "content",
										children: [(0, a.jsxs)("div", {
											className: "sub-title",
											children: [(0, a.jsx)("h6", {
												children: "Coaching"
											}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {})]
										}), (0, a.jsx)(r.Z, {
											children: (0, a.jsx)("h3", {
												className: "co-tit custom-font wow words chars splitting",
												"data-splitting": !0,
												children: "Nous proposons des coachings sur mesure pour monter en comp\xe9tence"
											})
										}), (0, a.jsxs)("p", {
											className: "wow fadeInUp",
											"data-wow-delay": ".4s",
											children: ["On n'a jamais fini de se d\xe9velopper : \xe0 chaque sujet son coach. Que le besoin soit de d\xe9velopper ses capacit\xe9s en chant, en acting, en expression sc\xe9nique, en confiance en soi, en sport...", (0, a.jsx)("br", {})]
										}), (0, a.jsx)("p", {
											className: "mt-10 wow fadeInUp",
											"data-wow-delay": ".4s",
											children: "Wence propose des parcours de coaching sur-mesure, pour apprendre toujours plus et avoir confiance en soi."
										})]
									})
								}), (0, a.jsx)("div", {
									className: "col-lg-6",
									children: (0, a.jsx)("div", {
										className: "blc-img",
										children: (0, a.jsx)("div", {
											className: "bimg wow imago",
											children: (0, a.jsx)("img", {
												src: "img/slid/blue-jump.jpg",
												alt: ""
											})
										})
									})
								})]
							})
						})
					})
				}),
				h = t(5106),
				p = function() {
					return (0, a.jsx)(h.Z, {
						title: "Mouvement",
						imageUrl: "img/slid/danse-couple.jpg"
					})
				},
				g = t(4140),
				f = t(4076),
				x = function() {
					return i.useEffect((function() {
						(0, g.Z)(), setTimeout((function() {
							(0, f.D)()
						}), 1e3)
					}), []), (0, a.jsx)("section", {
						className: "min-area sub-bg",
						children: (0, a.jsx)("div", {
							className: "container",
							children: (0, a.jsxs)("div", {
								className: "row",
								children: [(0, a.jsx)("div", {
									className: "col-lg-6",
									children: (0, a.jsx)("div", {
										className: "img",
										children: (0, a.jsx)("img", {
											className: "thumparallax-down",
											src: "img/air-danse.jpg",
											alt: ""
										})
									})
								}), (0, a.jsx)("div", {
									className: "col-lg-6 valign",
									children: (0, a.jsxs)("div", {
										className: "content",
										children: [(0, a.jsx)(r.Z, {
											children: (0, a.jsx)("h4", {
												className: "wow custom-font words chars splitting",
												"data-splitting": !0,
												children: "DANSE."
											})
										}), (0, a.jsx)(r.Z, {
											children: (0, a.jsx)("p", {
												className: "wow txt words chars splitting",
												"data-splitting": !0,
												children: "La danse permet de d\xe9velopper des talents insoup\xe7onn\xe9s : la Wence Academy propose des cours de danse, mais aussi des talents form\xe9s par nos soins disponibles pour intervenir sur des tournages et spectacles vivants."
											})
										}), (0, a.jsxs)("ul", {
											className: "feat",
											children: [(0, a.jsx)("li", {
												className: "wow fadeInUp",
												"data-wow-delay": ".2s",
												children: (0, a.jsxs)("h6", {
													children: [(0, a.jsx)("span", {
														children: "1"
													}), " Cours de danse"]
												})
											}), (0, a.jsx)("li", {
												className: "wow fadeInUp",
												"data-wow-delay": ".4s",
												children: (0, a.jsxs)("h6", {
													children: [(0, a.jsx)("span", {
														children: "2"
													}), " Danseurs professionnels"]
												})
											}), (0, a.jsx)("li", {
												className: "wow fadeInUp",
												"data-wow-delay": ".6s",
												children: (0, a.jsxs)("h6", {
													children: [(0, a.jsx)("span", {
														children: "3"
													}), " Tournages et spectacles"]
												})
											})]
										})]
									})
								})]
							})
						})
					})
				},
				j = t(4848),
				v = (t(4735), t(2532)),
				w = function() {
					var e = i.useRef(null);
					return i.useEffect((function() {
						var s = e.current;
						window.pageYOffset > 300 ? s.classList.add("nav-scroll") : s.classList.remove("nav-scroll"), window.addEventListener("scroll", (function() {
							window.pageYOffset > 300 ? s.classList.add("nav-scroll") : s.classList.remove("nav-scroll")
						}))
					}), [e]), (0, a.jsxs)(v.Z, {
						children: [(0, a.jsxs)(n.default, {
							children: [(0, a.jsx)("title", {
								children: "Wence Entertainment - Mouvement"
							}), (0, a.jsx)("meta", {
								name: "description",
								content: "WENCE est une agence de management artistique qui propose des programmes de coaching et de formation sur-mesure pour devenir un artiste complet et concr\xe9tiser tous vos projets."
							}, "desc"), (0, a.jsx)("meta", {
								property: "og:title",
								content: "Wence Entertainment - Mouvement"
							}), (0, a.jsx)("meta", {
								property: "og:description",
								content: "WENCE est une agence de management artistique qui propose des programmes de coaching et de formation sur-mesure pour devenir un artiste complet et concr\xe9tiser tous vos projets."
							})]
						}), (0, a.jsx)(j.Z, {
							nr: e
						}), (0, a.jsx)(p, {}), (0, a.jsx)(m, {
							skillsTheme: "dark"
						}), (0, a.jsx)(l, {}), (0, a.jsx)(x, {}), (0, a.jsx)(d.Z, {
							theme: "dark"
						}), (0, a.jsx)(o.Z, {
							subBG: !0
						}), (0, a.jsx)(u.Z, {})]
					})
				}
		},
		6422: function() {},
		8770: function() {},
		5774: function(e, s, t) {
			"use strict";
			t.d(s, {
				Ip: function() {
					return l
				}
			});
			var a = t(7294),
				n = function(e, s) {
					return (n = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(e, s) {
							e.__proto__ = s
						} || function(e, s) {
							for (var t in s) s.hasOwnProperty(t) && (e[t] = s[t])
						})(e, s)
				};

			function i(e) {
				var s = e.className,
					t = e.counterClockwise,
					n = e.dashRatio,
					i = e.pathRadius,
					l = e.strokeWidth,
					o = e.style;
				return (0, a.createElement)("path", {
					className: s,
					style: Object.assign({}, o, c({
						pathRadius: i,
						dashRatio: n,
						counterClockwise: t
					})),
					d: r({
						pathRadius: i,
						counterClockwise: t
					}),
					strokeWidth: l,
					fillOpacity: 0
				})
			}

			function r(e) {
				var s = e.pathRadius,
					t = e.counterClockwise ? 1 : 0;
				return "\n      M 50,50\n      m 0,-" + s + "\n      a " + s + "," + s + " " + t + " 1 1 0," + 2 * s + "\n      a " + s + "," + s + " " + t + " 1 1 0,-" + 2 * s + "\n    "
			}

			function c(e) {
				var s = e.counterClockwise,
					t = e.dashRatio,
					a = e.pathRadius,
					n = 2 * Math.PI * a,
					i = (1 - t) * n;
				return {
					strokeDasharray: n + "px " + n + "px",
					strokeDashoffset: (s ? -i : i) + "px"
				}
			}
			var l = function(e) {
				function s() {
					return null !== e && e.apply(this, arguments) || this
				}
				return function(e, s) {
					function t() {
						this.constructor = e
					}
					n(e, s), e.prototype = null === s ? Object.create(s) : (t.prototype = s.prototype, new t)
				}(s, e), s.prototype.getBackgroundPadding = function() {
					return this.props.background ? this.props.backgroundPadding : 0
				}, s.prototype.getPathRadius = function() {
					return 50 - this.props.strokeWidth / 2 - this.getBackgroundPadding()
				}, s.prototype.getPathRatio = function() {
					var e = this.props,
						s = e.value,
						t = e.minValue,
						a = e.maxValue;
					return (Math.min(Math.max(s, t), a) - t) / (a - t)
				}, s.prototype.render = function() {
					var e = this.props,
						s = e.circleRatio,
						t = e.className,
						n = e.classes,
						r = e.counterClockwise,
						c = e.styles,
						l = e.strokeWidth,
						o = e.text,
						d = this.getPathRadius(),
						u = this.getPathRatio();
					return (0, a.createElement)("svg", {
						className: n.root + " " + t,
						style: c.root,
						viewBox: "0 0 100 100",
						"data-test-id": "CircularProgressbar"
					}, this.props.background ? (0, a.createElement)("circle", {
						className: n.background,
						style: c.background,
						cx: 50,
						cy: 50,
						r: 50
					}) : null, (0, a.createElement)(i, {
						className: n.trail,
						counterClockwise: r,
						dashRatio: s,
						pathRadius: d,
						strokeWidth: l,
						style: c.trail
					}), (0, a.createElement)(i, {
						className: n.path,
						counterClockwise: r,
						dashRatio: u * s,
						pathRadius: d,
						strokeWidth: l,
						style: c.path
					}), o ? (0, a.createElement)("text", {
						className: n.text,
						style: c.text,
						x: 50,
						y: 50
					}, o) : null)
				}, s.defaultProps = {
					background: !1,
					backgroundPadding: 0,
					circleRatio: 1,
					classes: {
						root: "CircularProgressbar",
						trail: "CircularProgressbar-trail",
						path: "CircularProgressbar-path",
						text: "CircularProgressbar-text",
						background: "CircularProgressbar-background"
					},
					counterClockwise: !1,
					className: "",
					maxValue: 100,
					minValue: 0,
					strokeWidth: 8,
					styles: {
						root: {},
						trail: {},
						path: {},
						text: {},
						background: {}
					},
					text: ""
				}, s
			}(a.Component)
		}
	},
	function(e) {
		e.O(0, [6468, 9121, 9774, 2888, 179], (function() {
			return s = 4290, e(e.s = s);
			var s
		}));
		var s = e.O();
		_N_E = s
	}
]);