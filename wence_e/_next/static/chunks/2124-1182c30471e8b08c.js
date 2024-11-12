"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[2124, 4016], {
		6010: function(e, a, n) {
			function t(e) {
				var a, n, i = "";
				if ("string" == typeof e || "number" == typeof e) i += e;
				else if ("object" == typeof e)
					if (Array.isArray(e))
						for (a = 0; a < e.length; a++) e[a] && (n = t(e[a])) && (i && (i += " "), i += n);
					else
						for (a in e) e[a] && (i && (i += " "), i += a);
				return i
			}
			a.Z = function() {
				for (var e, a, n = 0, i = ""; n < arguments.length;)(e = arguments[n++]) && (a = t(e)) && (i && (i += " "), i += a);
				return i
			}
		},
		2455: function(e, a, n) {
			n.d(a, {
				gw: function() {
					return i
				},
				Ji: function() {
					return s
				},
				U6: function() {
					return r
				},
				m7: function() {
					return l
				},
				mM: function() {
					return c
				}
			});
			var t = 0;
			var i = function(e, a) {
					setTimeout((function() {}), e)
				},
				s = function(e, a) {
					setInterval(function(e) {
						(t = Number(window.getComputedStyle(e).getPropertyValue("opacity"))) < 1 ? (t += 1, e.style.opacity = t) : clearInterval(0)
					}(e), a)
				},
				r = function(e, a) {
					setInterval(function(e) {
						(t = Number(window.getComputedStyle(e).getPropertyValue("opacity"))) > 0 ? (t = 0, e.style.opacity = t) : clearInterval(0)
					}(e), a)
				},
				l = function(e) {
					var a = [];
					if (!e.parentNode) return a;
					for (var n = e.parentNode.firstChild; n;) 1 === n.nodeType && n !== e && a.push(n), n = n.nextSibling;
					return a
				},
				c = function(e, a) {
					e.style.left = a
				}
		},
		4140: function(e, a, n) {
			var t = n(2455);
			a.Z = function() {
				var e = document.querySelectorAll(".feat .items");
				e && e.forEach((function(e) {
					e.onmouseover = function(a) {
						e.classList.add("active");
						(0, t.m7)(e).map((function(e) {
							return e.classList.remove("active")
						}))
					}
				}))
			}
		},
		4076: function(e, a, n) {
			n.d(a, {
				D: function() {
					return t
				}
			});
			var t = function() {
				document.getElementsByClassName("thumparallax-down")
			}
		},
		4029: function(e, a, n) {
			var t = n(5893),
				i = n(6010),
				s = (n(7294), n(8636));
			a.Z = function(e) {
				var a = e.title,
					n = e.children,
					r = e.paddingBottom;
				return (0, t.jsx)("section", {
					className: (0, i.Z)("intro-section", "section-padding", !r && "pb-0"),
					children: (0, t.jsx)("div", {
						className: "container",
						children: (0, t.jsxs)("div", {
							className: "row",
							children: [(0, t.jsx)("div", {
								className: "col-lg-3 col-md-4",
								children: (0, t.jsx)("div", {
									className: "htit sm-mb30",
									children: (0, t.jsx)("h4", {
										children: a
									})
								})
							}), (0, t.jsx)("div", {
								className: "col-lg-8 offset-lg-1 col-md-8",
								children: (0, t.jsx)("div", {
									className: "text",
									children: (0, t.jsx)(s.Z, {
										children: (0, t.jsx)("p", {
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
		5106: function(e, a, n) {
			var t = n(5893),
				i = n(1664);
			n(7294);
			a.Z = function(e) {
				var a = e.title,
					n = e.imageUrl;
				return (0, t.jsx)("header", {
					className: "pages-header bg-img valign",
					style: {
						backgroundImage: "url(".concat(n, ")")
					},
					"data-overlay-dark": "5",
					children: (0, t.jsx)("div", {
						className: "container",
						children: (0, t.jsx)("div", {
							className: "row",
							children: (0, t.jsx)("div", {
								className: "col-lg-12",
								children: (0, t.jsxs)("div", {
									className: "cont text-center",
									children: [(0, t.jsx)("h1", {
										children: a
									}), (0, t.jsxs)("div", {
										className: "path",
										children: [(0, t.jsx)(i.default, {
											href: "/",
											children: (0, t.jsx)("a", {
												children: "Accueil"
											})
										}), (0, t.jsx)("span", {
											children: "/"
										}), (0, t.jsx)("a", {
											href: "#0",
											className: "active",
											children: a
										})]
									})]
								})
							})
						})
					})
				})
			}
		},
		621: function(e, a, n) {
			var t = n(5893),
				i = (n(7294), n(8636)),
				s = n(1664);
			a.Z = function(e) {
				var a = e.img,
					n = e.theme,
					r = e.subBG;
				return (0, t.jsx)("section", {
					className: "call-action section-padding ".concat(r ? "sub-bg" : "", " bg-img"),
					style: {
						backgroundImage: "url(".concat(a || "/img/pattern.png", ")")
					},
					children: (0, t.jsx)("div", {
						className: "container",
						children: (0, t.jsxs)("div", {
							className: "row",
							children: [(0, t.jsx)("div", {
								className: "col-md-8 col-lg-9",
								children: (0, t.jsx)("div", {
									className: "content sm-mb30",
									children: (0, t.jsxs)(i.Z, {
										children: [(0, t.jsx)("h6", {
											className: "wow words chars splitting",
											"data-splitting": !0,
											children: "Rencontrons-nous"
										}), (0, t.jsxs)("h2", {
											className: "wow words custom-font chars splitting",
											"data-splitting": !0,
											children: ["parlons de ", (0, t.jsx)("b", {
												children: "vous"
											}), "."]
										})]
									})
								})
							}), (0, t.jsx)("div", {
								className: "col-md-4 col-lg-3 valign",
								children: (0, t.jsx)(s.default, {
									href: "/contact",
									children: (0, t.jsx)("a", {
										className: "btn-curve ".concat("light" == n ? "btn-blc" : "btn-lit", " wow fadeInUp"),
										"data-wow-delay": ".5s",
										children: (0, t.jsx)("span", {
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
		6224: function(e, a, n) {
			n.d(a, {
				Z: function() {
					return r
				}
			});
			var t = n(5893),
				i = (n(7294), JSON.parse('[{"id":1,"lightImage":"img/clients/brands/light/1.png","darkImage":"img/clients/brands/dark/because-music.png","url":"https://www.because.tv","title":"Because Music"},{"id":2,"lightImage":"img/clients/brands/light/2.png","darkImage":"img/clients/brands/dark/play-two.png","url":"https://playtwo.fr","title":"Play Two"},{"id":3,"lightImage":"img/clients/brands/light/3.png","darkImage":"img/clients/brands/dark/believe.png","url":"https://www.believe.com","title":"Believe"},{"id":4,"lightImage":"img/clients/brands/light/4.png","darkImage":"img/clients/brands/dark/universal.png","url":"https://www.universalmusic.fr","title":"Universal Music"},{"id":5,"lightImage":"/img/clients/brands/light/5.png","darkImage":"img/clients/brands/dark/warner.png","url":"https://www.warnermusic.fr","title":"Warner Music"},{"id":6,"lightImage":"img/clients/brands/light/6.png","darkImage":"img/clients/brands/dark/tf1.png","url":"https://www.tf1.fr/","title":"TF1"},{"id":7,"lightImage":"img/clients/brands/light/7.png","darkImage":"img/clients/brands/dark/fantomatx.png","url":"#fantomatx","title":"Fant\xf4matX"},{"id":8,"lightImage":"img/clients/brands/light/8.png","darkImage":"img/clients/brands/dark/nouvelle-ecole-music.png","url":"https://www.facebook.com/NouvelleEcoleLabel/","title":"Nouvelle \xc9cole"}]')),
				s = n(8636),
				r = function(e) {
					var a = e.theme,
						n = e.subBG,
						r = i.slice(0, i.length / 2),
						l = i.slice(4, i.length);
					return (0, t.jsx)("section", {
						className: "clients section-padding ".concat(n ? "sub-bg" : ""),
						children: (0, t.jsx)("div", {
							className: "container",
							children: (0, t.jsxs)("div", {
								className: "row",
								children: [(0, t.jsx)("div", {
									className: "col-lg-4 valign",
									children: (0, t.jsx)("div", {
										className: "sec-head custom-font mb-0",
										children: (0, t.jsx)("h3", {
											children: "Ils nous font confiance"
										})
									})
								}), (0, t.jsx)("div", {
									className: "col-lg-8",
									children: (0, t.jsxs)("div", {
										children: [(0, t.jsx)("div", {
											className: "row bord",
											children: r.map((function(e) {
												return (0, t.jsx)("div", {
													className: "col-md-3 col-6 brands",
													children: (0, t.jsx)("div", {
														className: "item wow fadeIn",
														"data-wow-delay": "".concat(1 == e.id ? ".3" : 2 == e.id ? ".6" : 3 == e.id ? ".8" : 4 == e.id ? ".3" : "", "s"),
														children: (0, t.jsxs)("div", {
															className: "img",
															children: ["light" === a ? (0, t.jsx)("img", {
																src: e.lightImage,
																alt: ""
															}) : (0, t.jsx)("img", {
																src: e.darkImage,
																alt: ""
															}), (0, t.jsx)(s.Z, {
																children: (0, t.jsx)("a", {
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
										}), (0, t.jsx)("div", {
											className: "row",
											children: l.map((function(e) {
												return (0, t.jsx)("div", {
													className: "".concat(5 == e.id || 6 == e.id ? "col-md-3 col-6 brands sm-mb30" : 7 == e.id || 8 == e.id ? "col-md-3 col-6 brands" : ""),
													children: (0, t.jsx)("div", {
														className: "item wow fadeIn",
														"data-wow-delay": "".concat(1 == e.id ? ".4" : 2 == e.id ? ".7" : 3 == e.id ? ".5" : 4 == e.id ? ".3" : "", "s"),
														children: (0, t.jsxs)("div", {
															className: "img",
															children: ["light" === a ? (0, t.jsx)("img", {
																src: e.lightImage,
																alt: ""
															}) : (0, t.jsx)("img", {
																src: e.darkImage,
																alt: ""
															}), (0, t.jsx)(s.Z, {
																children: (0, t.jsx)("a", {
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
		1690: function(e, a, n) {
			var t = n(5893),
				i = (n(7294), n(2175), n(2806));
			a.Z = function(e) {
				var a = e.noSubBG;
				return (0, t.jsx)("footer", {
					className: "footer-half ".concat(a ? "" : "sub-bg", " section-padding pb-0"),
					children: (0, t.jsxs)("div", {
						className: "container",
						children: [(0, t.jsxs)("div", {
							className: "row",
							children: [(0, t.jsx)("div", {
								className: "col-lg-5",
								children: (0, t.jsxs)("div", {
									className: "cont",
									children: [(0, t.jsx)("div", {
										className: "logo",
										children: (0, t.jsx)("a", {
											href: "#0",
											children: (0, t.jsx)("img", {
												src: "".concat(i.E8),
												alt: ""
											})
										})
									}), (0, t.jsx)("div", {
										className: "con-info custom-font",
										children: (0, t.jsxs)("ul", {
											children: [(0, t.jsxs)("li", {
												children: [(0, t.jsx)("span", {
													children: "Email : "
												}), " contact@wence-entertainment.com"]
											}), (0, t.jsxs)("li", {
												children: [(0, t.jsx)("span", {
													children: "Adresse : "
												}), " 2 Rue B\xe9ranger, 92320 Ch\xe2tillon."]
											})]
										})
									})]
								})
							}), (0, t.jsx)("div", {
								className: "col-lg-5 offset-lg-2",
								children: (0, t.jsx)("div", {
									className: "cont",
									children: (0, t.jsxs)("div", {
										className: "social-icon",
										children: [(0, t.jsx)("h6", {
											className: "custom-font stit simple-btn",
											children: "Suivez-nous"
										}), (0, t.jsx)("div", {
											className: "social",
											children: (0, t.jsx)("a", {
												href: "https://www.instagram.com/wence_entertainment/?hl=fr",
												className: "icon",
												rel: "noreferrer",
												target: "_blank",
												children: (0, t.jsx)("i", {
													className: "fab fa-instagram"
												})
											})
										})]
									})
								})
							})]
						}), (0, t.jsx)("div", {
							className: "copyrights text-center",
							children: (0, t.jsx)("p", {
								children: "\xa9 2023. Made with passion by The Well Com'."
							})
						})]
					})
				})
			}
		},
		4848: function(e, a, n) {
			n.d(a, {
				Z: function() {
					return o
				}
			});
			var t = n(5893),
				i = (n(7294), n(2175), n(1664)),
				s = n(2806),
				r = n(2455),
				l = function(e) {
					(0, r.m7)(e.target.parentElement).filter((function(e) {
						return e.classList.contains("show")
					})).map((function(e) {
						e.classList.remove("show"), e.childNodes[0] && e.childNodes[0].setAttribute("aria-expanded", !1), e.childNodes[1] && e.childNodes[1].classList.remove("show")
					})), e.target.parentElement.classList.toggle("show"), e.target.setAttribute("aria-expanded", !0), e.target.parentElement.childNodes[1].classList.toggle("show")
				},
				c = function(e) {
					document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")
				},
				o = function(e) {
					var a = e.lr,
						n = e.nr,
						r = e.theme;
					return (0, t.jsx)("nav", {
						ref: n,
						className: "navbar navbar-expand-lg change ".concat("themeL" === r ? "light" : ""),
						children: (0, t.jsxs)("div", {
							className: "container",
							children: [(0, t.jsx)(i.default, {
								href: "/",
								children: (0, t.jsx)("a", {
									className: "logo",
									children: r && "themeL" === r ? (0, t.jsx)("img", {
										ref: a,
										src: "".concat(s.Q1),
										alt: "logo"
									}) : (0, t.jsx)("img", {
										ref: a,
										src: "".concat(s.E8),
										alt: "logo"
									})
								})
							}), (0, t.jsx)("button", {
								className: "navbar-toggler",
								type: "button",
								onClick: c,
								"data-toggle": "collapse",
								"data-target": "#navbarSupportedContent",
								"aria-controls": "navbarSupportedContent",
								"aria-expanded": "false",
								"aria-label": "Toggle navigation",
								children: (0, t.jsx)("span", {
									className: "icon-bar",
									children: (0, t.jsx)("i", {
										className: "fas fa-bars"
									})
								})
							}), (0, t.jsx)("div", {
								className: "collapse navbar-collapse",
								id: "navbarSupportedContent",
								children: (0, t.jsxs)("ul", {
									className: "navbar-nav ml-auto",
									children: [(0, t.jsx)("li", {
										className: "nav-item",
										children: (0, t.jsx)(i.default, {
											href: "/",
											children: (0, t.jsx)("a", {
												className: "nav-link",
												children: "Accueil"
											})
										})
									}), (0, t.jsx)("li", {
										className: "nav-item",
										children: (0, t.jsx)(i.default, {
											href: "/about",
											children: (0, t.jsx)("a", {
												className: "nav-link",
												children: "Notre vision"
											})
										})
									}), (0, t.jsxs)("li", {
										className: "nav-item dropdown",
										onClick: l,
										children: [(0, t.jsx)("span", {
											className: "nav-link dropdown-toggle",
											"data-toggle": "dropdown",
											role: "button",
											"aria-haspopup": "true",
											"aria-expanded": "false",
											children: "Les cinq M"
										}), (0, t.jsxs)("div", {
											className: "dropdown-menu",
											children: [(0, t.jsx)(i.default, {
												href: "/music",
												children: (0, t.jsx)("a", {
													className: "dropdown-item",
													children: "Musique"
												})
											}), (0, t.jsx)(i.default, {
												href: "/mode",
												children: (0, t.jsx)("a", {
													className: "dropdown-item",
													children: "Mode"
												})
											}), (0, t.jsx)(i.default, {
												href: "/media",
												children: (0, t.jsx)("a", {
													className: "dropdown-item",
													children: "Media"
												})
											}), (0, t.jsx)(i.default, {
												href: "/marketing",
												children: (0, t.jsx)("a", {
													className: "dropdown-item",
													children: "Marketing"
												})
											}), (0, t.jsx)(i.default, {
												href: "/mouvement",
												children: (0, t.jsx)("a", {
													className: "dropdown-item",
													children: "Mouvement"
												})
											})]
										})]
									}), (0, t.jsx)("li", {
										className: "nav-item",
										children: (0, t.jsx)(i.default, {
											href: "/wence-bank",
											children: (0, t.jsx)("a", {
												className: "nav-link",
												children: "Wence Bank"
											})
										})
									}), (0, t.jsx)("li", {
										className: "nav-item",
										children: (0, t.jsx)(i.default, {
											href: "/offre",
											children: (0, t.jsx)("a", {
												className: "nav-link",
												children: "Offre"
											})
										})
									}), (0, t.jsx)("li", {
										className: "nav-item",
										children: (0, t.jsx)(i.default, {
											href: "https://wcards.wence-entertainment.com",
											children: (0, t.jsx)("a", {
												className: "nav-link",
												children: "Wcards"
											})
										})
									}), (0, t.jsx)("li", {
										className: "nav-item",
										children: (0, t.jsx)(i.default, {
											href: "/contact",
											children: (0, t.jsx)("a", {
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
		6169: function(e, a, n) {
			n(5893), n(7294), n(8636), n(1664), n(8380)
		},
		8636: function(e, a, n) {
			var t = n(5893),
				i = n(7294);

			function s(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function r(e, a) {
				if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
			}

			function l(e, a) {
				for (var n = 0; n < a.length; n++) {
					var t = a[n];
					t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
				}
			}

			function c(e, a, n) {
				return a in e ? Object.defineProperty(e, a, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[a] = n, e
			}

			function o(e) {
				return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
					return e.__proto__ || Object.getPrototypeOf(e)
				})(e)
			}

			function d(e, a) {
				return !a || "object" !== g(a) && "function" !== typeof a ? s(e) : a
			}

			function m(e, a) {
				return (m = Object.setPrototypeOf || function(e, a) {
					return e.__proto__ = a, e
				})(e, a)
			}
			var g = function(e) {
				return e && "undefined" !== typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
			};

			function h(e) {
				var a = function() {
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
					var n, t = o(e);
					if (a) {
						var i = o(this).constructor;
						n = Reflect.construct(t, arguments, i)
					} else n = t.apply(this, arguments);
					return d(this, n)
				}
			}
			var u = function(e) {
				! function(e, a) {
					if ("function" !== typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(a && a.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), a && m(e, a)
				}(g, e);
				var a, n, o, d = h(g);

				function g() {
					var e;
					return r(this, g), c(s(e = d.apply(this, arguments)), "target", i.createRef()), c(s(e), "split", (function() {
						e.target.current && Splitting({
							target: e.target.current
						})
					})), c(s(e), "componentDidMount", e.split), c(s(e), "componentDidUpdate", e.split), e
				}
				return a = g, (n = [{
					key: "render",
					value: function() {
						return (0, t.jsx)("div", {
							ref: this.target,
							children: this.props.children
						})
					}
				}]) && l(a.prototype, n), o && l(a, o), g
			}(i.Component);
			a.Z = u
		},
		2532: function(e, a, n) {
			var t = n(5893),
				i = (n(7294), n(9008));
			a.Z = function(e) {
				var a = e.children;
				return (0, t.jsxs)(t.Fragment, {
					children: [(0, t.jsx)(i.default, {
						children: (0, t.jsx)("link", {
							rel: "stylesheet",
							href: "css/dark.css"
						})
					}), a]
				})
			}
		},
		8380: function(e) {
			e.exports = JSON.parse('[{"id":1,"image":"img/portfolio/mas/lartiste-lunettes.jpeg","title":"Lartiste","tags":["Management","Stragt\xe9gies","Concerts"],"filterCategory":["management"]},{"id":2,"image":"img/portfolio/mas/yves-saint-laurent.jpeg","title":"Yves Saint Laurent","tags":["Chansons","Campagne"],"filterCategory":["chanson","campagne"]},{"id":3,"image":"img/portfolio/mas/marwa-loud.jpeg","title":"Marwa Loud","tags":["Management","Strat\xe9gies"],"filterCategory":["management"]},{"id":4,"image":"img/portfolio/mas/cacharel-Logo.jpeg","title":"Cacharel","tags":["Chansons","campagne"],"filterCategory":["chanson","campagne"]},{"id":5,"image":"img/portfolio/mas/loreal.png","title":"Lor\xe9al","tags":["Chansons","\xc9v\xe8nements influence","Campagnes"],"filterCategory":["chanosn","campagne"]},{"id":6,"image":"img/portfolio/mas/sean-paul.png","title":"Sean Paul","tags":["Chansons"],"filterCategory":["chanson"]},{"id":7,"image":"img/portfolio/mas/maison-margiela.jpeg","title":"Maison Margi\xe9la","tags":["Chansons"],"filterCategory":["chanson"]},{"id":8,"image":"/img/portfolio/mas/anitta.jpg","title":"Anitta","tags":["Direction artistique","Chansons"],"filterCategory":["chanson","management"]},{"id":9,"image":"img/portfolio/mas/aya-nakamura.jpeg","title":"Aya Nakamura","tags":["Chansons"],"filterCategory":["chanson"]},{"id":10,"image":"img/portfolio/mas/viktor-rolf.jpeg","title":"Viktor Rolf","tags":["Chansons"],"filterCategory":["chanson"]},{"id":11,"image":"img/portfolio/mas/kalash-criminel.jpeg","title":"Kalash Criminel","tags":["Business Management"],"filterCategory":["management"]},{"id":12,"image":"img/portfolio/mas/dior.jpeg","title":"Dior","tags":["Chansons"],"filterCategory":["chanson"]},{"id":13,"image":"img/portfolio/mas/ford.jpeg","title":"Ford","tags":["Chansons"],"filterCategory":["chanson"]},{"id":14,"image":"img/portfolio/mas/ninho.jpeg","title":"Ninho","tags":["Instrumentales"],"filterCategory":["chanson"]},{"id":15,"image":"img/portfolio/mas/ronisia.jpeg","title":"Ronisia","tags":["Chansons"],"filterCategory":["chanson"]},{"id":16,"image":"img/portfolio/mas/biotherm.jpeg","title":"Biotherm","tags":["Chansons","Campagne m\xe9dia"],"filterCategory":["chanson","campagne"]}]')
		}
	}
]);