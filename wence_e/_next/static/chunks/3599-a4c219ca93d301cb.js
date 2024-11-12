(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[3599], {
		621: function(e, t, s) {
			"use strict";
			var a = s(5893),
				i = (s(7294), s(8636)),
				r = s(1664);
			t.Z = function(e) {
				var t = e.img,
					s = e.theme,
					n = e.subBG;
				return (0, a.jsx)("section", {
					className: "call-action section-padding ".concat(n ? "sub-bg" : "", " bg-img"),
					style: {
						backgroundImage: "url(".concat(t || "img/pattern.png", ")")
					},
					children: (0, a.jsx)("div", {
						className: "container",
						children: (0, a.jsxs)("div", {
							className: "row",
							children: [(0, a.jsx)("div", {
								className: "col-md-8 col-lg-9",
								children: (0, a.jsx)("div", {
									className: "content sm-mb30",
									children: (0, a.jsxs)(i.Z, {
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
								children: (0, a.jsx)(r.default, {
									href: "/contact",
									children: (0, a.jsx)("a", {
										className: "btn-curve ".concat("light" == s ? "btn-blc" : "btn-lit", " wow fadeInUp"),
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
		6224: function(e, t, s) {
			"use strict";
			s.d(t, {
				Z: function() {
					return n
				}
			});
			var a = s(5893),
				i = (s(7294), JSON.parse('[{"id":1,"lightImage":"img/clients/brands/light/1.png","darkImage":"img/clients/brands/dark/because-music.png","url":"https://www.because.tv","title":"Because Music"},{"id":2,"lightImage":"img/clients/brands/light/2.png","darkImage":"img/clients/brands/dark/play-two.png","url":"https://playtwo.fr","title":"Play Two"},{"id":3,"lightImage":"img/clients/brands/light/3.png","darkImage":"img/clients/brands/dark/believe.png","url":"https://www.believe.com","title":"Believe"},{"id":4,"lightImage":"img/clients/brands/light/4.png","darkImage":"img/clients/brands/dark/universal.png","url":"https://www.universalmusic.fr","title":"Universal Music"},{"id":5,"lightImage":"img/clients/brands/light/5.png","darkImage":"img/clients/brands/dark/warner.png","url":"https://www.warnermusic.fr","title":"Warner Music"},{"id":6,"lightImage":"img/clients/brands/light/6.png","darkImage":"/img/clients/brands/dark/tf1.png","url":"https://www.tf1.fr/","title":"TF1"},{"id":7,"lightImage":"/img/clients/brands/light/7.png","darkImage":"/img/clients/brands/dark/fantomatx.png","url":"#fantomatx","title":"Fant\xf4matX"},{"id":8,"lightImage":"img/clients/brands/light/8.png","darkImage":"img/clients/brands/dark/nouvelle-ecole-music.png","url":"https://www.facebook.com/NouvelleEcoleLabel/","title":"Nouvelle \xc9cole"}]')),
				r = s(8636),
				n = function(e) {
					var t = e.theme,
						s = e.subBG,
						n = i.slice(0, i.length / 2),
						l = i.slice(4, i.length);
					return (0, a.jsx)("section", {
						className: "clients section-padding ".concat(s ? "sub-bg" : ""),
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
											children: n.map((function(e) {
												return (0, a.jsx)("div", {
													className: "col-md-3 col-6 brands",
													children: (0, a.jsx)("div", {
														className: "item wow fadeIn",
														"data-wow-delay": "".concat(1 == e.id ? ".3" : 2 == e.id ? ".6" : 3 == e.id ? ".8" : 4 == e.id ? ".3" : "", "s"),
														children: (0, a.jsxs)("div", {
															className: "img",
															children: ["light" === t ? (0, a.jsx)("img", {
																src: e.lightImage,
																alt: ""
															}) : (0, a.jsx)("img", {
																src: e.darkImage,
																alt: ""
															}), (0, a.jsx)(r.Z, {
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
											children: l.map((function(e) {
												return (0, a.jsx)("div", {
													className: "".concat(5 == e.id || 6 == e.id ? "col-md-3 col-6 brands sm-mb30" : 7 == e.id || 8 == e.id ? "col-md-3 col-6 brands" : ""),
													children: (0, a.jsx)("div", {
														className: "item wow fadeIn",
														"data-wow-delay": "".concat(1 == e.id ? ".4" : 2 == e.id ? ".7" : 3 == e.id ? ".5" : 4 == e.id ? ".3" : "", "s"),
														children: (0, a.jsxs)("div", {
															className: "img",
															children: ["light" === t ? (0, a.jsx)("img", {
																src: e.lightImage,
																alt: ""
															}) : (0, a.jsx)("img", {
																src: e.darkImage,
																alt: ""
															}), (0, a.jsx)(r.Z, {
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
		5222: function(e, t, s) {
			"use strict";
			var a = s(5893),
				i = (s(7294), s(5774));
			s(6422);
			t.Z = function(e) {
				var t = e.subBG,
					s = e.theme,
					r = {
						path: {
							stroke: "#75dab4"
						},
						trail: {
							stroke: s ? "dark" == s ? "#0f1218" : "#e5e5e5" : ""
						},
						text: {
							fill: s ? "dark" == s ? "#ffffff" : "#4e4e4e" : "",
							fontSize: "16px"
						}
					};
				return (0, a.jsx)("section", {
					className: "skills-circle pt-50 pb-50 ".concat(t ? "sub-bg" : ""),
					children: (0, a.jsx)("div", {
						className: "container",
						children: (0, a.jsx)("div", {
							className: "row",
							children: (0, a.jsx)("div", {
								className: "col-lg-7",
								children: (0, a.jsx)("div", {
									className: "",
									children: (0, a.jsxs)("div", {
										className: "row",
										children: [(0, a.jsx)("div", {
											className: "col-md-6",
											children: (0, a.jsxs)("div", {
												className: "item wow fadeInLeft",
												"data-wow-delay": ".6",
												children: [(0, a.jsx)("div", {
													className: "skill",
													children: (0, a.jsx)(i.Ip, {
														value: 100,
														strokeWidth: 2,
														text: "10 ans",
														styles: r
													})
												}), (0, a.jsxs)("div", {
													className: "cont",
													children: [(0, a.jsx)("span", {
														children: "10 ans"
													}), (0, a.jsx)("h6", {
														children: "D'exp\xe9rience"
													})]
												})]
											})
										}), (0, a.jsx)("div", {
											className: "col-md-6",
											children: (0, a.jsxs)("div", {
												className: "item wow fadeInLeft",
												"data-wow-delay": ".3",
												children: [(0, a.jsx)("div", {
													className: "skill",
													children: (0, a.jsx)(i.Ip, {
														value: 100,
														strokeWidth: 2,
														text: "240",
														styles: r
													})
												}), (0, a.jsxs)("div", {
													className: "cont",
													children: [(0, a.jsx)("span", {
														children: "Projets"
													}), (0, a.jsx)("h6", {
														children: "Artistiques"
													})]
												})]
											})
										})]
									})
								})
							})
						})
					})
				})
			}
		},
		3205: function(e, t, s) {
			"use strict";
			var a = s(5893),
				i = s(7294);
			s(8636), s(6066), s(8322), s(2739), s(1239), s(2157);

			function r(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					var s = [],
						a = !0,
						i = !1,
						r = void 0;
					try {
						for (var n, l = e[Symbol.iterator](); !(a = (n = l.next()).done) && (s.push(n.value), !t || s.length !== t); a = !0);
					} catch (c) {
						i = !0, r = c
					} finally {
						try {
							a || null == l.return || l.return()
						} finally {
							if (i) throw r
						}
					}
					return s
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance")
				}()
			}
			t.Z = function() {
				var e = r(i.useState(!1), 2);
				e[0], e[1];
				i.useEffect((function() {
					console.clear()
				}), []);
				return (0, a.jsx)("section", {
					className: "block-sec",
					children: (0, a.jsx)("div", {
						className: "background bg-img section-padding",
						style: {
							backgroundImage: "url(img/slid/matthieu-grey.jpeg)"
						},
						"data-overlay-dark": "8",
						children: (0, a.jsx)("div", {
							className: "container",
							children: (0, a.jsx)("div", {
								className: "row",
								children: (0, a.jsx)("div", {
									className: "col-lg-6",
									children: (0, a.jsx)("div", {
										className: "vid-area",
										children: (0, a.jsx)("div", {
											className: "cont",
											children: (0, a.jsx)("h3", {
												className: "wow",
												children: "Wence, c\u2019est le talent dans l\u2019\xe9coute et l\u2019\xe9coute des talents."
											})
										})
									})
								})
							})
						})
					})
				})
			}
		},
		6422: function() {},
		5774: function(e, t, s) {
			"use strict";
			s.d(t, {
				Ip: function() {
					return c
				}
			});
			var a = s(7294),
				i = function(e, t) {
					return (i = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(e, t) {
							e.__proto__ = t
						} || function(e, t) {
							for (var s in t) t.hasOwnProperty(s) && (e[s] = t[s])
						})(e, t)
				};

			function r(e) {
				var t = e.className,
					s = e.counterClockwise,
					i = e.dashRatio,
					r = e.pathRadius,
					c = e.strokeWidth,
					d = e.style;
				return (0, a.createElement)("path", {
					className: t,
					style: Object.assign({}, d, l({
						pathRadius: r,
						dashRatio: i,
						counterClockwise: s
					})),
					d: n({
						pathRadius: r,
						counterClockwise: s
					}),
					strokeWidth: c,
					fillOpacity: 0
				})
			}

			function n(e) {
				var t = e.pathRadius,
					s = e.counterClockwise ? 1 : 0;
				return "\n      M 50,50\n      m 0,-" + t + "\n      a " + t + "," + t + " " + s + " 1 1 0," + 2 * t + "\n      a " + t + "," + t + " " + s + " 1 1 0,-" + 2 * t + "\n    "
			}

			function l(e) {
				var t = e.counterClockwise,
					s = e.dashRatio,
					a = e.pathRadius,
					i = 2 * Math.PI * a,
					r = (1 - s) * i;
				return {
					strokeDasharray: i + "px " + i + "px",
					strokeDashoffset: (t ? -r : r) + "px"
				}
			}
			var c = function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return function(e, t) {
					function s() {
						this.constructor = e
					}
					i(e, t), e.prototype = null === t ? Object.create(t) : (s.prototype = t.prototype, new s)
				}(t, e), t.prototype.getBackgroundPadding = function() {
					return this.props.background ? this.props.backgroundPadding : 0
				}, t.prototype.getPathRadius = function() {
					return 50 - this.props.strokeWidth / 2 - this.getBackgroundPadding()
				}, t.prototype.getPathRatio = function() {
					var e = this.props,
						t = e.value,
						s = e.minValue,
						a = e.maxValue;
					return (Math.min(Math.max(t, s), a) - s) / (a - s)
				}, t.prototype.render = function() {
					var e = this.props,
						t = e.circleRatio,
						s = e.className,
						i = e.classes,
						n = e.counterClockwise,
						l = e.styles,
						c = e.strokeWidth,
						d = e.text,
						o = this.getPathRadius(),
						u = this.getPathRatio();
					return (0, a.createElement)("svg", {
						className: i.root + " " + s,
						style: l.root,
						viewBox: "0 0 100 100",
						"data-test-id": "CircularProgressbar"
					}, this.props.background ? (0, a.createElement)("circle", {
						className: i.background,
						style: l.background,
						cx: 50,
						cy: 50,
						r: 50
					}) : null, (0, a.createElement)(r, {
						className: i.trail,
						counterClockwise: n,
						dashRatio: t,
						pathRadius: o,
						strokeWidth: c,
						style: l.trail
					}), (0, a.createElement)(r, {
						className: i.path,
						counterClockwise: n,
						dashRatio: u * t,
						pathRadius: o,
						strokeWidth: c,
						style: l.path
					}), d ? (0, a.createElement)("text", {
						className: i.text,
						style: l.text,
						x: 50,
						y: 50
					}, d) : null)
				}, t.defaultProps = {
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
				}, t
			}(a.Component)
		}
	}
]);