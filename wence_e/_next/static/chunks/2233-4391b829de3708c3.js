"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[2233], {
		6516: function(e, t, s) {
			function n(e) {
				var t = document.querySelector(e);
				if (t) {
					var s, n = .75 * (null === (s = t.getBoundingClientRect()) || void 0 === s ? void 0 : s.top);
					t.style.backgroundSize = "cover", t.style.backgroundRepeat = "no-repeat", t.style.backgroundAttachment = "fixed", t.style.backgroundPosition = "center ".concat(n, "px"), window.addEventListener("scroll", (function() {
						var t = document.querySelector(e);
						t && (n = .75 * t.getBoundingClientRect().top, t.style.backgroundPosition = "center ".concat(n, "px"))
					}))
				}
			}
			s.d(t, {
				Z: function() {
					return n
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
		2233: function(e, t, s) {
			var n = s(5893),
				r = s(7294),
				a = s(8636),
				i = s(6066),
				c = (s(8322), s(2739), s(6188)),
				o = s(6516);

			function l(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function d(e, t) {
				for (var s = 0; s < t.length; s++) {
					var n = t[s];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
				}
			}

			function u(e) {
				return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
					return e.__proto__ || Object.getPrototypeOf(e)
				})(e)
			}

			function h(e, t) {
				return !t || "object" !== f(t) && "function" !== typeof t ? l(e) : t
			}

			function m(e, t) {
				return (m = Object.setPrototypeOf || function(e, t) {
					return e.__proto__ = t, e
				})(e, t)
			}
			var f = function(e) {
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
					var s, n = u(e);
					if (t) {
						var r = u(this).constructor;
						s = Reflect.construct(n, arguments, r)
					} else s = n.apply(this, arguments);
					return h(this, s)
				}
			}
			var g = function(e) {
				! function(e, t) {
					if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && m(e, t)
				}(h, e);
				var t, s, r, u = p(h);

				function h(e) {
					var t, s, r, a;
					return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, h), t = u.call(this, e), s = l(t), a = function() {
						return (0, n.jsxs)("div", {
							className: "arrows",
							children: [(0, n.jsx)("div", {
								onClick: function() {
									return t.slider.slickNext()
								},
								className: "next cursor-pointer",
								children: (0, n.jsx)("span", {
									className: "pe-7s-angle-right"
								})
							}), (0, n.jsx)("div", {
								onClick: function() {
									return t.slider.slickPrev()
								},
								className: "prev cursor-pointer",
								children: (0, n.jsx)("span", {
									className: "pe-7s-angle-left"
								})
							})]
						})
					}, (r = "renderArrows") in s ? Object.defineProperty(s, r, {
						value: a,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : s[r] = a, t
				}
				return t = h, (s = [{
					key: "componentDidMount",
					value: function() {
						(0, c.Z)(), (0, o.Z)(".testimonials.bg-img.parallaxie")
					}
				}, {
					key: "render",
					value: function() {
						var e = this;
						return (0, n.jsx)("section", {
							className: "testimonials section-padding ".concat(this.props.subBgLftstl ? "sub-bg lftstl" : "", " ").concat(this.props.withBG ? "bg-img" : "", " ").concat(this.props.parallaxie ? "parallaxie" : "", " ").concat(this.props.overlay ? "" : "noOverlay"),
							style: {
								backgroundImage: "".concat(this.props.withBG && !this.props.imgSrc ? "url(img/slid/3.jpg)" : this.props.imgSrc ? "url(".concat(this.props.imgSrc, ")") : "none")
							},
							"data-overlay-dark": "".concat(this.props.overlay ? "9" : "0"),
							children: (0, n.jsxs)("div", {
								className: "container position-re",
								children: [(0, n.jsxs)("div", {
									className: "sec-head custom-font text-center",
									children: [(0, n.jsx)("h6", {
										className: "wow fadeIn",
										"data-wow-delay": ".5s",
										children: "Wence Entertainment"
									}), (0, n.jsx)(a.Z, {
										children: (0, n.jsx)("h3", {
											className: "wow words chars splitting",
											"data-splitting": !0,
											children: "LANCEMENT DE 12 NOUVEAUX MEDIA COURANT 2023."
										})
									}), (0, n.jsx)("span", {
										className: "tbg",
										children: "Testimonials"
									})]
								}), (0, n.jsx)("div", {
									className: "row justify-content-center wow fadeInUp",
									"data-wow-delay": ".5s",
									children: (0, n.jsx)("div", {
										className: "col-lg-8",
										children: (0, n.jsxs)(i.Z, {
											className: "slic-item",
											ref: function(t) {
												return e.slider = t
											},
											dots: !0,
											infinite: !0,
											arrows: !0,
											autoplay: !0,
											rows: 1,
											slidesToScroll: 1,
											slidesToShow: 1,
											children: [(0, n.jsxs)("div", {
												className: "item",
												children: [(0, n.jsx)("p", {
													children: "Working with Avo digital agency to support our organic and paid social media activity has extended the marketing activities we are able to achieve platform has made collaboration easy."
												}), (0, n.jsx)("div", {
													className: "info",
													children: (0, n.jsx)("div", {
														className: "cont",
														children: (0, n.jsx)("div", {
															className: "author",
															children: this.props.subBgLftstl ? (0, n.jsxs)(n.Fragment, {
																children: [(0, n.jsx)("div", {
																	className: "lxleft",
																	children: (0, n.jsx)("div", {
																		className: "img",
																		children: (0, n.jsx)("img", {
																			src: "img/clients/1.jpg",
																			alt: ""
																		})
																	})
																}), (0, n.jsxs)("div", {
																	className: "fxright",
																	children: [(0, n.jsx)("h6", {
																		className: "author-name custom-font",
																		children: "Alex Regelman"
																	}), (0, n.jsx)("span", {
																		className: "author-details",
																		children: "Co-founder, Colabrio"
																	})]
																})]
															}) : (0, n.jsxs)(n.Fragment, {
																children: [(0, n.jsx)("div", {
																	className: "img",
																	children: (0, n.jsx)("img", {
																		src: "img/clients/1.jpg",
																		alt: ""
																	})
																}), (0, n.jsx)("h6", {
																	className: "author-name custom-font",
																	children: "Alex Regelman"
																}), (0, n.jsx)("span", {
																	className: "author-details",
																	children: "Co-founder, Colabrio"
																})]
															})
														})
													})
												})]
											}), (0, n.jsxs)("div", {
												className: "item",
												children: [(0, n.jsx)("p", {
													children: "Avo started out managing our SEO efforts, but their scientific approach to digital marketing and the results they have achieved made it an easy decision for us to handover the management."
												}), (0, n.jsx)("div", {
													className: "info",
													children: (0, n.jsx)("div", {
														className: "cont",
														children: (0, n.jsx)("div", {
															className: "author",
															children: this.props.subBgLftstl ? (0, n.jsxs)(n.Fragment, {
																children: [(0, n.jsx)("div", {
																	className: "lxleft",
																	children: (0, n.jsx)("div", {
																		className: "img",
																		children: (0, n.jsx)("img", {
																			src: "img/clients/1.jpg",
																			alt: ""
																		})
																	})
																}), (0, n.jsxs)("div", {
																	className: "fxright",
																	children: [(0, n.jsx)("h6", {
																		className: "author-name custom-font",
																		children: "Alex Regelman"
																	}), (0, n.jsx)("span", {
																		className: "author-details",
																		children: "Co-founder, Colabrio"
																	})]
																})]
															}) : (0, n.jsxs)(n.Fragment, {
																children: [(0, n.jsx)("div", {
																	className: "img",
																	children: (0, n.jsx)("img", {
																		src: "img/clients/1.jpg",
																		alt: ""
																	})
																}), (0, n.jsx)("h6", {
																	className: "author-name custom-font",
																	children: "Alex Regelman"
																}), (0, n.jsx)("span", {
																	className: "author-details",
																	children: "Co-founder, Colabrio"
																})]
															})
														})
													})
												})]
											}), (0, n.jsxs)("div", {
												className: "item",
												children: [(0, n.jsx)("p", {
													children: "I would highly recommend Avo Digital. I worked with the team on an animation for our U+2018 Click & Collect U+2019 service. This team is different from any other agency I have worked with in the past."
												}), (0, n.jsx)("div", {
													className: "info",
													children: (0, n.jsx)("div", {
														className: "cont",
														children: (0, n.jsx)("div", {
															className: "author",
															children: this.props.subBgLftstl ? (0, n.jsxs)(n.Fragment, {
																children: [(0, n.jsx)("div", {
																	className: "lxleft",
																	children: (0, n.jsx)("div", {
																		className: "img",
																		children: (0, n.jsx)("img", {
																			src: "img/clients/1.jpg",
																			alt: ""
																		})
																	})
																}), (0, n.jsxs)("div", {
																	className: "fxright",
																	children: [(0, n.jsx)("h6", {
																		className: "author-name custom-font",
																		children: "Alex Regelman"
																	}), (0, n.jsx)("span", {
																		className: "author-details",
																		children: "Co-founder, Colabrio"
																	})]
																})]
															}) : (0, n.jsxs)(n.Fragment, {
																children: [(0, n.jsx)("div", {
																	className: "img",
																	children: (0, n.jsx)("img", {
																		src: "img/clients/1.jpg",
																		alt: ""
																	})
																}), (0, n.jsx)("h6", {
																	className: "author-name custom-font",
																	children: "Alex Regelman"
																}), (0, n.jsx)("span", {
																	className: "author-details",
																	children: "Co-founder, Colabrio"
																})]
															})
														})
													})
												})]
											})]
										})
									})
								}), this.renderArrows()]
							})
						})
					}
				}]) && d(t.prototype, s), r && d(t, r), h
			}(r.Component);
			t.Z = g
		}
	}
]);