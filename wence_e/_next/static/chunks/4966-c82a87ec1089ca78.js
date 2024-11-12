"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[4966], {
		6516: function(e, t, n) {
			function o(e) {
				var t = document.querySelector(e);
				if (t) {
					var n, o = .75 * (null === (n = t.getBoundingClientRect()) || void 0 === n ? void 0 : n.top);
					t.style.backgroundSize = "cover", t.style.backgroundRepeat = "no-repeat", t.style.backgroundAttachment = "fixed", t.style.backgroundPosition = "center ".concat(o, "px"), window.addEventListener("scroll", (function() {
						var t = document.querySelector(e);
						t && (o = .75 * t.getBoundingClientRect().top, t.style.backgroundPosition = "center ".concat(o, "px"))
					}))
				}
			}
			n.d(t, {
				Z: function() {
					return o
				}
			})
		},
		6188: function(e, t) {
			t.Z = function() {
				var e = document.querySelectorAll("section.noOverlay");
				e && e.forEach((function(e) {
					return e.removeAttribute("data-overlay-dark")
				}))
			}
		},
		4765: function(e, t, n) {
			var o = n(5893),
				r = n(7294),
				i = (n(8636), n(6066), n(8322), n(2739), n(2397));

			function c(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}

			function s(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function a(e) {
				return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
					return e.__proto__ || Object.getPrototypeOf(e)
				})(e)
			}

			function u(e, t) {
				return !t || "object" !== d(t) && "function" !== typeof t ? function(e) {
					if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return e
				}(e) : t
			}

			function l(e, t) {
				return (l = Object.setPrototypeOf || function(e, t) {
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
					var n, o = a(e);
					if (t) {
						var r = a(this).constructor;
						n = Reflect.construct(o, arguments, r)
					} else n = o.apply(this, arguments);
					return u(this, n)
				}
			}
			var f = function(e) {
				! function(e, t) {
					if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && l(e, t)
				}(u, e);
				var t, n, r, a = p(u);

				function u(e) {
					return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, u), a.call(this, e)
				}
				return t = u, (n = [{
					key: "render",
					value: function() {
						return (0, o.jsx)(i.Z, function(e) {
							for (var t = 1; t < arguments.length; t++) {
								var n = null != arguments[t] ? arguments[t] : {},
									o = Object.keys(n);
								"function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
									return Object.getOwnPropertyDescriptor(n, e).enumerable
								})))), o.forEach((function(t) {
									s(e, t, n[t])
								}))
							}
							return e
						}({
							description: "",
							title: "Wence vous propose 4 packages : Autonome, Ind\xe9pendant, Guest, Disruptif. Nos offres sont modulables et s'ajustent sur-mesure selon vos besoins."
						}, this.props))
					}
				}]) && c(t.prototype, n), r && c(t, r), u
			}(r.Component);
			t.Z = f
		},
		2397: function(e, t, n) {
			var o = n(5893),
				r = n(7294),
				i = n(8636),
				c = (n(6066), n(8322), n(2739), n(6188)),
				s = n(6516);

			function a(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}

			function u(e) {
				return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
					return e.__proto__ || Object.getPrototypeOf(e)
				})(e)
			}

			function l(e, t) {
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

			function f(e) {
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
					var n, o = u(e);
					if (t) {
						var r = u(this).constructor;
						n = Reflect.construct(o, arguments, r)
					} else n = o.apply(this, arguments);
					return l(this, n)
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
					}), t && d(e, t)
				}(l, e);
				var t, n, r, u = f(l);

				function l(e) {
					return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, l), u.call(this, e)
				}
				return t = l, (n = [{
					key: "componentDidMount",
					value: function() {
						(0, c.Z)(), (0, s.Z)(".testimonials.bg-img.parallaxie")
					}
				}, {
					key: "render",
					value: function() {
						return (0, o.jsx)("section", {
							className: "testimonials section-padding ".concat(this.props.subBgLftstl ? "sub-bg lftstl" : "", " ").concat(this.props.withBG ? "bg-img" : "", " ").concat(this.props.parallaxie ? "parallaxie" : "", " ").concat(this.props.overlay ? "" : "noOverlay"),
							style: {
								backgroundImage: "url(".concat(this.props.imgSrc, ")")
							},
							"data-overlay-dark": "".concat(this.props.overlay ? "9" : "0"),
							children: (0, o.jsx)("div", {
								className: "container position-re",
								children: (0, o.jsxs)("div", {
									className: "sec-head custom-font text-center",
									children: [(0, o.jsx)("h6", {
										className: "wow fadeIn",
										"data-wow-delay": ".5s",
										children: this.props.title
									}), (0, o.jsx)(i.Z, {
										children: (0, o.jsx)("h3", {
											className: "wow words chars splitting",
											"data-splitting": !0,
											children: this.props.description
										})
									})]
								})
							})
						})
					}
				}]) && a(t.prototype, n), r && a(t, r), l
			}(r.Component);
			t.Z = m
		},
		4579: function(e, t, n) {
			var o = n(5893),
				r = (n(7294), n(5106));
			t.Z = function() {
				return (0, o.jsx)(r.Z, {
					title: "Musique",
					imageUrl: "img/slid/singer-stage.jpg"
				})
			}
		},
		5909: function(e, t, n) {
			var o = n(5893),
				r = (n(7294), n(5106));
			t.Z = function() {
				return (0, o.jsx)(r.Z, {
					title: "Offre",
					imageUrl: "img/slid/forest-roads.jpg"
				})
			}
		},
		8566: function(e, t, n) {
			var o = n(5893),
				r = n(1664),
				i = (n(7294), n(8636));
			t.Z = function(e) {
				var t = e.withBG,
					n = e.withPadding,
					c = e.halfBG,
					s = e.withOutTitle,
					a = e.title,
					u = e.titleDescription,
					l = e.services;
				return (0, o.jsxs)("section", {
					className: "services ".concat(n ? "section-padding" : "", " ").concat(t ? "sub-bg" : ""),
					children: [(0, o.jsxs)("div", {
						className: "container",
						children: [!s && (0, o.jsxs)("div", {
							className: "sec-head custom-font text-center",
							children: [(0, o.jsx)(i.Z, {
								children: (0, o.jsx)("h3", {
									className: "wow words chars splitting",
									"data-splitting": !0,
									children: a
								})
							}), (0, o.jsx)("h6", {
								className: "wow fadeIn",
								"data-wow-delay": ".5s",
								children: u
							}), (0, o.jsx)("span", {
								className: "tbg",
								children: "Services"
							})]
						}), (0, o.jsx)("div", {
							className: "row center",
							children: l.map((function(e, t) {
								return (0, o.jsx)("div", {
									className: "col-lg-4 mb-4",
									children: (0, o.jsxs)("div", {
										className: "item ".concat(t != l.length - 1 ? "md-mb50" : "", " wow fadeInUp"),
										"data-wow-delay": 1 == e.id ? ".5s" : 2 == e.id ? ".3s" : ".8s",
										children: [e.icon && (0, o.jsx)("span", {
											className: "icon ".concat(e.icon)
										}), (0, o.jsx)("h6", {
											children: e.title
										}), e.content && (0, o.jsx)("p", {
											children: e.content
										}), e.button && e.isBlank && (0, o.jsx)("a", {
											target: "_blank",
											rel: "noreferrer",
											href: e.href,
											className: "btn-curve btn-lit wow fadeInUp",
											"data-wow-delay": ".5s",
											children: (0, o.jsx)("span", {
												children: e.button
											})
										}), e.button && !e.isBlank && (0, o.jsx)(r.default, {
											href: e.href,
											children: (0, o.jsx)("a", {
												className: "btn-curve btn-lit wow fadeInUp",
												"data-wow-delay": ".5s",
												children: (0, o.jsx)("span", {
													children: e.button
												})
											})
										})]
									})
								}, e.id)
							}))
						})]
					}), c && (0, o.jsx)("div", {
						className: "half-bg bottom"
					})]
				})
			}
		},
		6774: function(e, t, n) {
			var o = n(5893),
				r = (n(7294), n(5642)),
				i = n(8566);

			function c(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			t.Z = function(e) {
				return (0, o.jsx)(i.Z, function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {},
							o = Object.keys(n);
						"function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
							return Object.getOwnPropertyDescriptor(n, e).enumerable
						})))), o.forEach((function(t) {
							c(e, t, n[t])
						}))
					}
					return e
				}({
					titleDescription: "Chaque forfait peut s'adapter sur-mesure en fonction de vos besoins.",
					title: "COMPARATIF",
					services: r.mJ
				}, e))
			}
		},
		1827: function(e, t, n) {
			var o = n(5893),
				r = (n(7294), n(5642)),
				i = n(8566);

			function c(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			t.Z = function(e) {
				return (0, o.jsx)(i.Z, function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {},
							o = Object.keys(n);
						"function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
							return Object.getOwnPropertyDescriptor(n, e).enumerable
						})))), o.forEach((function(t) {
							c(e, t, n[t])
						}))
					}
					return e
				}({
					titleDescription: "DETAIL DE NOS OFFRES PAR SECTEUR D'ACTIVIT\xc9",
					title: "NOS SOLUTIONS.",
					services: r.A8
				}, e))
			}
		},
		7633: function(e, t, n) {
			var o = n(5893),
				r = (n(7294), n(5642)),
				i = n(8566);

			function c(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			t.Z = function(e) {
				return (0, o.jsx)(i.Z, function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {},
							o = Object.keys(n);
						"function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
							return Object.getOwnPropertyDescriptor(n, e).enumerable
						})))), o.forEach((function(t) {
							c(e, t, n[t])
						}))
					}
					return e
				}({
					titleDescription: "Un forfait entr\xe9e de gamme, pour les artistes ind\xe9pendants ou les producteurs qui d\xe9butent et souhaitent une infrastructure sans accompagnement personnalis\xe9.",
					title: "AUTONOME",
					services: r.bT
				}, e))
			}
		},
		5149: function(e, t, n) {
			var o = n(5893),
				r = (n(7294), n(5642)),
				i = n(8566);

			function c(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			t.Z = function(e) {
				return (0, o.jsx)(i.Z, function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {},
							o = Object.keys(n);
						"function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
							return Object.getOwnPropertyDescriptor(n, e).enumerable
						})))), o.forEach((function(t) {
							c(e, t, n[t])
						}))
					}
					return e
				}({
					titleDescription: "Un forfait pour les artistes et producteurs ind\xe9pendants qui cherchent un accompagnement surmesure et accessible.",
					title: "INDEPENDANT",
					services: r.Zf
				}, e))
			}
		},
		5964: function(e, t, n) {
			var o = n(5893),
				r = (n(7294), n(5642)),
				i = n(8566);

			function c(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			t.Z = function(e) {
				return (0, o.jsx)(i.Z, function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {},
							o = Object.keys(n);
						"function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
							return Object.getOwnPropertyDescriptor(n, e).enumerable
						})))), o.forEach((function(t) {
							c(e, t, n[t])
						}))
					}
					return e
				}({
					titleDescription: "Un forfait id\xe9al pour les labels ou producteurs d\xe9j\xe0 install\xe9s et qui souhaitent d\xe9velopper un EP complet.",
					title: "GUEST",
					services: r.JJ
				}, e))
			}
		},
		1396: function(e, t, n) {
			var o = n(5893),
				r = (n(7294), n(5642)),
				i = n(8566);

			function c(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			t.Z = function(e) {
				return (0, o.jsx)(i.Z, function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {},
							o = Object.keys(n);
						"function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
							return Object.getOwnPropertyDescriptor(n, e).enumerable
						})))), o.forEach((function(t) {
							c(e, t, n[t])
						}))
					}
					return e
				}({
					titleDescription: "Un forfait 360 \xe0 destination principalement des maisons de disque, qui permet de d\xe9velopper un album entier.",
					title: "DISRUPTIF",
					services: r.GT
				}, e))
			}
		},
		5642: function(e) {
			e.exports = JSON.parse('{"A8":[{"id":1,"title":"Musique","icon":"pe-7s-musiclist","content":"Direction artistique musicale / Enregistrement / Composition / Mixage / Mastering / S\xe9minaire"},{"id":2,"title":"Mode","icon":"pe-7s-diamond","content":"Direction artistique image / Stylisme / Acc\xe8s showrooms / Photos / Vid\xe9o"},{"id":3,"title":"M\xe9dia","icon":"pe-7s-micro","content":"Espace publicitaire / Campagne d\'influence"},{"id":4,"title":"Marketing","icon":"pe-7s-speaker","content":"Sondages / Attach\xe9s de presse / Strat\xe9gie / \xc9v\xe9nementiel / Merchandising"},{"id":5,"title":"Mouvement","icon":"pe-7s-study","content":"Coaching / Formation / Danse"}],"bT":[{"id":1,"title":"1 Son","icon":"pe-7s-musiclist","content":"5 heures de recording avec un ing\xe9nieur du son / 1 mixage / 1 mastering"},{"id":2,"title":"3 Photos","icon":"pe-7s-camera","content":"2 heures de shooting photo (une tenue, non fournie) / 3 images retouch\xe9es"},{"id":3,"title":"1 Capsule vid\xe9o","icon":"pe-7s-video","content":"Tournage d\'une capsule vid\xe9o (hors production) / Montage / Etalonnage"},{"id":4,"title":"1 Clip","icon":"pe-7s-video","content":"Pr\xe9-production : 1 rendez-vous de brief, storyboard, sc\xe9nario / Production : tournage / Montage, \xe9talonnage"},{"id":5,"title":"1 Strat\xe9gie","icon":"pe-7s-graph1","content":"1 rendez-vous diagnostic image et r\xe9seaux sociaux actuels / Recommandations et axes d\'am\xe9liorations"},{"id":6,"title":"1 Son","icon":"pe-7s-musiclist","content":"5 heures de recording avec un ing\xe9nieur du son / 1 mixage / 1 mastering"}],"Zf":[{"id":1,"title":"3 Sons","icon":"pe-7s-musiclist","content":"15 heures de recording avec un ing\xe9nieur du son / 3 mixages / 3 mastering"},{"id":2,"title":"5 Photos","icon":"pe-7s-camera","content":"2 heures de shooting photo / 5 images retouch\xe9es / 1 styliste d\xe9di\xe9 : 2 tenues fournies / 1 make-up artist"},{"id":3,"title":"1 Capsule vid\xe9o","icon":"pe-7s-video","content":"Tournage d\'une capsule vid\xe9o (hors production) / Montage / Etalonnage / 1 styliste d\xe9di\xe9 / 1 make-up artist"},{"id":4,"title":"1 Clip","icon":"pe-7s-video","content":"Pr\xe9-production : 1 rendez-vous de brief, storyboard, sc\xe9nario / Production : tournage / Montage, \xe9talonnage / 1 styliste d\xe9di\xe9 / 1 make-up artist"},{"id":5,"title":"1 Accompagnement","icon":"pe-7s-users","content":"1 rendez-vous diagnostic image et r\xe9seaux sociaux actuels / Recommandations et axes d\'am\xe9liorations / Accompagnement et \xe9criture contenus r\xe9seaux sociaux durant 6 mois"}],"JJ":[{"id":1,"title":"10 Sons","icon":"pe-7s-musiclist","content":"50 heures de recording avec un ing\xe9nieur du son / 10 mixages / 10 mastering"},{"id":2,"title":"7 Photos","icon":"pe-7s-camera","content":"4 heures de shooting photo (une tenue, non fournie) / 7 images retouch\xe9es / 1 styliste d\xe9di\xe9 : 3 tenues fournies / 1 make-up artist / 1 rendez-vous de pr\xe9paration en visio avec 1 sp\xe9cialiste de l\'image"},{"id":3,"title":"1 Capsule vid\xe9o","icon":"pe-7s-video","content":"Tournage d\'une capsule vid\xe9o (hors production) / Montage / Etalonnage / 1 styliste d\xe9di\xe9 + 1 rdv essayages en amont / 1 make-up artist + 1 rdv test make-up en amont / 1 DA d\xe9di\xe9"},{"id":4,"title":"1 Clip","icon":"pe-7s-video","content":"Pr\xe9-production : 1 rendez-vous de brief, storyboard, sc\xe9nario / Production : tournage, logistique / Montage, \xe9talonnage / 1 styliste d\xe9di\xe9 (3 tenues) / 1 make-up artist / Logistique : booking lieux, figurants, partenaires"},{"id":5,"title":"1 Plan de lancement : 3 singles","icon":"pe-7s-rocket","content":"Sortie d\'un projet : strat\xe9gie initiale autour de 3 singles / Production de contenus : accompagnement et cr\xe9ation / Gestion de contenus : community management"}],"GT":[{"id":1,"title":"15 Sons","icon":"pe-7s-musiclist","content":"100 heures de recording avec un ing\xe9nieur du son / 15 mixages / 15 mastering / 1 \xe9quipe d\xe9di\xe9e de cr\xe9atifs / 1 DA d\xe9di\xe9 / 1 s\xe9minaire"},{"id":2,"title":"10 Photos","icon":"pe-7s-camera","content":"5 heures de shooting photo (une tenue, non fournie) / 10 images retouch\xe9es / 1 styliste d\xe9di\xe9 : 4 tenues fournies / 1 make-up artist / 1 rendez-vous de pr\xe9paration en physique pour essayages + test make-up"},{"id":3,"title":"12 Capsule vid\xe9o","icon":"pe-7s-video","content":"Tournage de 12 capsules vid\xe9o (hors production) / Montage / Etalonnage / 1 styliste d\xe9di\xe9 + 1 rdv essayages en amont / 1 make-up artist + 1 rdv test make-up en amont / 1 DA d\xe9di\xe9"},{"id":4,"title":"1 Clip","icon":"pe-7s-video","content":"Pr\xe9-production : 3 rendez-vous en amont, storyboard, sc\xe9nario / Production : tournage, logistique / Montage, \xe9talonnage / 1 styliste d\xe9di\xe9 (5 tenues) / 1 make-up artist / Logistique : booking lieux, figurants, partenaires / 1 DA d\xe9di\xe9 / Vid\xe9os de making-of / Vid\xe9os-reportages"},{"id":5,"title":"1 PLAN DE LANCEMENT : 6 SINGLES","icon":"pe-7s-rocket","content":"Sortie d\'un projet : strat\xe9gie initiale autour de 6 singles / Production de contenus : accompagnement et cr\xe9ation / Gestion de contenus : community management"}],"mJ":[{"id":1,"title":"AUTONOME","icon":"","content":"1 SON / 3 PHOTOS / 1 CAPSULE VIDEO / 1 CLIP / 1 STRATEGIE"},{"id":2,"title":"INDEPENDANT","icon":"","content":"3 SONS / 5 PHOTOS / 1 CAPSULE VIDEO / 1 CLIP / 1 ACCOMPAGNEMENT"},{"id":3,"title":"GUEST","icon":"","content":"10 SONS / 7 PHOTOS / 1 CAPSULE VIDEO / 1 CLIP / 1 PLAN DE LANCEMENT 3 SINGLES"},{"id":4,"title":"DISRUPTIF","icon":"","content":"15 SONS / 10 PHOTOS / 12 CAPSULES VIDEO / 1 CLIP / 1 PLAN DE LANCEMENT 6 SINGLES"}]}')
		}
	}
]);