"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[4016], {
		2455: function(e, n, t) {
			t.d(n, {
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
			var a = function(e, n) {
					setTimeout((function() {}), e)
				},
				s = function(e, n) {
					setInterval(function(e) {
						(r = Number(window.getComputedStyle(e).getPropertyValue("opacity"))) < 1 ? (r += 1, e.style.opacity = r) : clearInterval(0)
					}(e), n)
				},
				i = function(e, n) {
					setInterval(function(e) {
						(r = Number(window.getComputedStyle(e).getPropertyValue("opacity"))) > 0 ? (r = 0, e.style.opacity = r) : clearInterval(0)
					}(e), n)
				},
				c = function(e) {
					var n = [];
					if (!e.parentNode) return n;
					for (var t = e.parentNode.firstChild; t;) 1 === t.nodeType && t !== e && n.push(t), t = t.nextSibling;
					return n
				},
				l = function(e, n) {
					e.style.left = n
				}
		},
		1690: function(e, n, t) {
			var r = t(5893),
				a = (t(7294), t(2175), t(2806));
			n.Z = function(e) {
				var n = e.noSubBG;
				return (0, r.jsx)("footer", {
					className: "footer-half ".concat(n ? "" : "sub-bg", " section-padding pb-0"),
					children: (0, r.jsxs)("div", {
						className: "container",
						children: [(0, r.jsxs)("div", {
							className: "row",
							children: [(0, r.jsx)("div", {
								className: "col-lg-5",
								children: (0, r.jsxs)("div", {
									className: "cont",
									children: [(0, r.jsx)("div", {
										className: "logo",
										children: (0, r.jsx)("a", {
											href: "#0",
											children: (0, r.jsx)("img", {
												src: "".concat(a.E8),
												alt: ""
											})
										})
									}), (0, r.jsx)("div", {
										className: "con-info custom-font",
										children: (0, r.jsxs)("ul", {
											children: [(0, r.jsxs)("li", {
												children: [(0, r.jsx)("span", {
													children: "Email : "
												}), " contact@wence-entertainment.com"]
											}), (0, r.jsxs)("li", {
												children: [(0, r.jsx)("span", {
													children: "Adresse : "
												}), " 2 Rue B\xe9ranger, 92320 Ch\xe2tillon."]
											})]
										})
									})]
								})
							}), (0, r.jsx)("div", {
								className: "col-lg-5 offset-lg-2",
								children: (0, r.jsx)("div", {
									className: "cont",
									children: (0, r.jsxs)("div", {
										className: "social-icon",
										children: [(0, r.jsx)("h6", {
											className: "custom-font stit simple-btn",
											children: "Suivez-nous"
										}), (0, r.jsx)("div", {
											className: "social",
											children: (0, r.jsx)("a", {
												href: "https://www.instagram.com/wence_entertainment/?hl=fr",
												className: "icon",
												rel: "noreferrer",
												target: "_blank",
												children: (0, r.jsx)("i", {
													className: "fab fa-instagram"
												})
											})
										})]
									})
								})
							})]
						}), (0, r.jsx)("div", {
							className: "copyrights text-center",
							children: (0, r.jsx)("p", {
								children: "\xa9 2023. Made with passion by The Well Com'."
							})
						})]
					})
				})
			}
		},
		4848: function(e, n, t) {
			t.d(n, {
				Z: function() {
					return o
				}
			});
			var r = t(5893),
				a = (t(7294), t(2175), t(1664)),
				s = t(2806),
				i = t(2455),
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
					var n = e.lr,
						t = e.nr,
						i = e.theme;
					return (0, r.jsx)("nav", {
						ref: t,
						className: "navbar navbar-expand-lg change ".concat("themeL" === i ? "light" : ""),
						children: (0, r.jsxs)("div", {
							className: "container",
							children: [(0, r.jsx)(a.default, {
								href: "/",
								children: (0, r.jsx)("a", {
									className: "logo",
									children: i && "themeL" === i ? (0, r.jsx)("img", {
										ref: n,
										src: "".concat(s.Q1),
										alt: "logo"
									}) : (0, r.jsx)("img", {
										ref: n,
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
		8636: function(e, n, t) {
			var r = t(5893),
				a = t(7294);

			function s(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function i(e, n) {
				if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
			}

			function c(e, n) {
				for (var t = 0; t < n.length; t++) {
					var r = n[t];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}

			function l(e, n, t) {
				return n in e ? Object.defineProperty(e, n, {
					value: t,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[n] = t, e
			}

			function o(e) {
				return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
					return e.__proto__ || Object.getPrototypeOf(e)
				})(e)
			}

			function d(e, n) {
				return !n || "object" !== f(n) && "function" !== typeof n ? s(e) : n
			}

			function u(e, n) {
				return (u = Object.setPrototypeOf || function(e, n) {
					return e.__proto__ = n, e
				})(e, n)
			}
			var f = function(e) {
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
					var t, r = o(e);
					if (n) {
						var a = o(this).constructor;
						t = Reflect.construct(r, arguments, a)
					} else t = r.apply(this, arguments);
					return d(this, t)
				}
			}
			var m = function(e) {
				! function(e, n) {
					if ("function" !== typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(n && n.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), n && u(e, n)
				}(f, e);
				var n, t, o, d = h(f);

				function f() {
					var e;
					return i(this, f), l(s(e = d.apply(this, arguments)), "target", a.createRef()), l(s(e), "split", (function() {
						e.target.current && Splitting({
							target: e.target.current
						})
					})), l(s(e), "componentDidMount", e.split), l(s(e), "componentDidUpdate", e.split), e
				}
				return n = f, (t = [{
					key: "render",
					value: function() {
						return (0, r.jsx)("div", {
							ref: this.target,
							children: this.props.children
						})
					}
				}]) && c(n.prototype, t), o && c(n, o), f
			}(a.Component);
			n.Z = m
		}
	}
]);