"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[1141], {
		2115: function(e, t) {
			t.Z = function() {
				window.addEventListener("scroll", (function() {
					var e = window.pageYOffset;
					document.querySelector(".fixed-slider .capt .parlx") && (document.querySelector(".fixed-slider .capt .parlx").style.transform = "translate3d(0, " + -.2 * e + "px, 0)", document.querySelector(".fixed-slider .capt .parlx").style.opacity = 1 - e / 600), document.querySelector(".fixed-slider .caption") && (document.querySelector(".fixed-slider .caption").style.transform = "translate3d(0, " + -.2 * e + "px, 0)", document.querySelector(".fixed-slider .caption").style.opacity = 1 - e / 600)
				}))
			}
		},
		2455: function(e, t, n) {
			n.d(t, {
				gw: function() {
					return a
				},
				Ji: function() {
					return s
				},
				U6: function() {
					return i
				},
				m7: function() {
					return c
				},
				mM: function() {
					return l
				}
			});
			var r = 0;
			var a = function(e, t) {
					setTimeout((function() {}), e)
				},
				s = function(e, t) {
					setInterval(function(e) {
						(r = Number(window.getComputedStyle(e).getPropertyValue("opacity"))) < 1 ? (r += 1, e.style.opacity = r) : clearInterval(0)
					}(e), t)
				},
				i = function(e, t) {
					setInterval(function(e) {
						(r = Number(window.getComputedStyle(e).getPropertyValue("opacity"))) > 0 ? (r = 0, e.style.opacity = r) : clearInterval(0)
					}(e), t)
				},
				c = function(e) {
					var t = [];
					if (!e.parentNode) return t;
					for (var n = e.parentNode.firstChild; n;) 1 === n.nodeType && n !== e && t.push(n), n = n.nextSibling;
					return t
				},
				l = function(e, t) {
					e.style.left = t
				}
		},
		2209: function(e, t, n) {
			var r = n(5893),
				a = n(7294),
				s = n(2115);

			function i(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					var n = [],
						r = !0,
						a = !1,
						s = void 0;
					try {
						for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
					} catch (l) {
						a = !0, s = l
					} finally {
						try {
							r || null == c.return || c.return()
						} finally {
							if (a) throw s
						}
					}
					return n
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance")
				}()
			}
			t.Z = function(e) {
				var t = e.sliderRef,
					n = i(a.useState(!1), 2),
					c = n[0],
					l = n[1];
				return a.useEffect((function() {
					l(!0), c && (0, s.Z)()
				}), [c]), (0, r.jsx)("header", {
					ref: t,
					className: "works-header fixed-slider hfixd valign",
					children: (0, r.jsx)("div", {
						className: "container",
						children: (0, r.jsx)("div", {
							className: "row justify-content-center",
							children: (0, r.jsx)("div", {
								className: "col-lg-9 col-md-11 static",
								children: (0, r.jsxs)("div", {
									className: "capt mt-50",
									children: [(0, r.jsx)("div", {
										className: "parlx",
										children: (0, r.jsxs)("h2", {
											className: "custom-font",
											children: [(0, r.jsx)("span", {
												children: "Discutons"
											}), "\xc9crivez-nous."]
										})
									}), (0, r.jsx)("div", {
										className: "bactxt custom-font valign",
										children: (0, r.jsx)("span", {
											className: "full-width",
											children: "Contact"
										})
									})]
								})
							})
						})
					})
				})
			}
		},
		4637: function(e, t, n) {
			var r = n(5893),
				a = n(7294),
				s = (n(2175), n(9669), n(8636));
			t.Z = function(e) {
				e.theme, a.useRef(null);
				return (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)("section", {
						className: "contact section-padding",
						children: (0, r.jsx)("div", {
							className: "container",
							children: (0, r.jsx)("div", {
								className: "row",
								children: (0, r.jsx)("div", {
									className: "col-lg-12",
									children: (0, r.jsxs)("div", {
										className: "cont-info",
										children: [(0, r.jsx)("h4", {
											className: "extra-title mb-50",
											children: "Info Contact."
										}), (0, r.jsx)(s.Z, {
											children: (0, r.jsx)("h3", {
												className: "custom-font wow",
												"data-splitting": !0,
												children: "\xc9CHANGER."
											})
										}), (0, r.jsx)("div", {
											className: "item mb-40",
											children: (0, r.jsx)("h5", {
												children: (0, r.jsx)("a", {
													href: "#0",
													children: "contact@wence-entertainment.com"
												})
											})
										}), (0, r.jsx)(s.Z, {
											children: (0, r.jsx)("h3", {
												className: "custom-font wow",
												"data-splitting": !0,
												children: "VISITER."
											})
										}), (0, r.jsx)("div", {
											className: "item",
											children: (0, r.jsxs)("h6", {
												children: ["2 Rue B\xe9ranger,", (0, r.jsx)("br", {}), "92320 Ch\xe2tillon"]
											})
										}), (0, r.jsx)("div", {
											className: "social mt-50",
											children: (0, r.jsx)("a", {
												href: "https://www.instagram.com/wence_entertainment/?hl=fr",
												className: "icon",
												children: (0, r.jsx)("i", {
													className: "fab fa-instagram"
												})
											})
										})]
									})
								})
							})
						})
					}), (0, r.jsx)("div", {
						className: "map",
						id: "ieatmaps",
						children: (0, r.jsx)("iframe", {
							src: "https://maps.google.com/maps?q=2%20Rue%20B%C3%A9ranger,%2092320%20Ch%C3%A2tillon&t=&z=13&ie=UTF8&iwloc=&output=embed",
							style: {
								border: 0
							},
							allowFullScreen: "",
							loading: "lazy"
						})
					}), (0, r.jsx)("footer", {
						className: "footer-half sub-bg",
						children: (0, r.jsx)("div", {
							className: "container",
							children: (0, r.jsx)("div", {
								className: "copyrights text-center mt-0",
								children: (0, r.jsx)("p", {
									children: "\xa9 2023. Made with passion by The Well Com'."
								})
							})
						})
					})]
				})
			}
		},
		4848: function(e, t, n) {
			n.d(t, {
				Z: function() {
					return o
				}
			});
			var r = n(5893),
				a = (n(7294), n(2175), n(1664)),
				s = n(2806),
				i = n(2455),
				c = function(e) {
					(0, i.m7)(e.target.parentElement).filter((function(e) {
						return e.classList.contains("show")
					})).map((function(e) {
						e.classList.remove("show"), e.childNodes[0] && e.childNodes[0].setAttribute("aria-expanded", !1), e.childNodes[1] && e.childNodes[1].classList.remove("show")
					})), e.target.parentElement.classList.toggle("show"), e.target.setAttribute("aria-expanded", !0), e.target.parentElement.childNodes[1].classList.toggle("show")
				},
				l = function(e) {
					document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")
				},
				o = function(e) {
					var t = e.lr,
						n = e.nr,
						i = e.theme;
					return (0, r.jsx)("nav", {
						ref: n,
						className: "navbar navbar-expand-lg change ".concat("themeL" === i ? "light" : ""),
						children: (0, r.jsxs)("div", {
							className: "container",
							children: [(0, r.jsx)(a.default, {
								href: "/",
								children: (0, r.jsx)("a", {
									className: "logo",
									children: i && "themeL" === i ? (0, r.jsx)("img", {
										ref: t,
										src: "".concat(s.Q1),
										alt: "logo"
									}) : (0, r.jsx)("img", {
										ref: t,
										src: "".concat(s.E8),
										alt: "logo"
									})
								})
							}), (0, r.jsx)("button", {
								className: "navbar-toggler",
								type: "button",
								onClick: l,
								"data-toggle": "collapse",
								"data-target": "#navbarSupportedContent",
								"aria-controls": "navbarSupportedContent",
								"aria-expanded": "false",
								"aria-label": "Toggle navigation",
								children: (0, r.jsx)("span", {
									className: "icon-bar",
									children: (0, r.jsx)("i", {
										className: "fas fa-bars"
									})
								})
							}), (0, r.jsx)("div", {
								className: "collapse navbar-collapse",
								id: "navbarSupportedContent",
								children: (0, r.jsxs)("ul", {
									className: "navbar-nav ml-auto",
									children: [(0, r.jsx)("li", {
										className: "nav-item",
										children: (0, r.jsx)(a.default, {
											href: "/",
											children: (0, r.jsx)("a", {
												className: "nav-link",
												children: "Accueil"
											})
										})
									}), (0, r.jsx)("li", {
										className: "nav-item",
										children: (0, r.jsx)(a.default, {
											href: "/about",
											children: (0, r.jsx)("a", {
												className: "nav-link",
												children: "Notre vision"
											})
										})
									}), (0, r.jsxs)("li", {
										className: "nav-item dropdown",
										onClick: c,
										children: [(0, r.jsx)("span", {
											className: "nav-link dropdown-toggle",
											"data-toggle": "dropdown",
											role: "button",
											"aria-haspopup": "true",
											"aria-expanded": "false",
											children: "Les cinq M"
										}), (0, r.jsxs)("div", {
											className: "dropdown-menu",
											children: [(0, r.jsx)(a.default, {
												href: "/music",
												children: (0, r.jsx)("a", {
													className: "dropdown-item",
													children: "Musique"
												})
											}), (0, r.jsx)(a.default, {
												href: "/mode",
												children: (0, r.jsx)("a", {
													className: "dropdown-item",
													children: "Mode"
												})
											}), (0, r.jsx)(a.default, {
												href: "/media",
												children: (0, r.jsx)("a", {
													className: "dropdown-item",
													children: "Media"
												})
											}), (0, r.jsx)(a.default, {
												href: "/marketing",
												children: (0, r.jsx)("a", {
													className: "dropdown-item",
													children: "Marketing"
												})
											}), (0, r.jsx)(a.default, {
												href: "/mouvement",
												children: (0, r.jsx)("a", {
													className: "dropdown-item",
													children: "Mouvement"
												})
											})]
										})]
									}), (0, r.jsx)("li", {
										className: "nav-item",
										children: (0, r.jsx)(a.default, {
											href: "/wence-bank",
											children: (0, r.jsx)("a", {
												className: "nav-link",
												children: "Wence Bank"
											})
										})
									}), (0, r.jsx)("li", {
										className: "nav-item",
										children: (0, r.jsx)(a.default, {
											href: "/offre",
											children: (0, r.jsx)("a", {
												className: "nav-link",
												children: "Offre"
											})
										})
									}), (0, r.jsx)("li", {
										className: "nav-item",
										children: (0, r.jsx)(a.default, {
											href: "https://wcards.wence-entertainment.com",
											children: (0, r.jsx)("a", {
												className: "nav-link",
												children: "Wcards"
											})
										})
									}), (0, r.jsx)("li", {
										className: "nav-item",
										children: (0, r.jsx)(a.default, {
											href: "/contact",
											children: (0, r.jsx)("a", {
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
		8636: function(e, t, n) {
			var r = n(5893),
				a = n(7294);

			function s(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function i(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}

			function c(e, t) {
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

			function o(e) {
				return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
					return e.__proto__ || Object.getPrototypeOf(e)
				})(e)
			}

			function d(e, t) {
				return !t || "object" !== f(t) && "function" !== typeof t ? s(e) : t
			}

			function u(e, t) {
				return (u = Object.setPrototypeOf || function(e, t) {
					return e.__proto__ = t, e
				})(e, t)
			}
			var f = function(e) {
				return e && "undefined" !== typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
			};

			function h(e) {
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
					var n, r = o(e);
					if (t) {
						var a = o(this).constructor;
						n = Reflect.construct(r, arguments, a)
					} else n = r.apply(this, arguments);
					return d(this, n)
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
					}), t && u(e, t)
				}(f, e);
				var t, n, o, d = h(f);

				function f() {
					var e;
					return i(this, f), l(s(e = d.apply(this, arguments)), "target", a.createRef()), l(s(e), "split", (function() {
						e.target.current && Splitting({
							target: e.target.current
						})
					})), l(s(e), "componentDidMount", e.split), l(s(e), "componentDidUpdate", e.split), e
				}
				return t = f, (n = [{
					key: "render",
					value: function() {
						return (0, r.jsx)("div", {
							ref: this.target,
							children: this.props.children
						})
					}
				}]) && c(t.prototype, n), o && c(t, o), f
			}(a.Component);
			t.Z = m
		}
	}
]);