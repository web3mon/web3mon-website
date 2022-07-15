"use strict";
exports.id = 933;
exports.ids = [933];
exports.modules = {

/***/ 4246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ navbar_full_menu)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/data/app.json
const app_namespaceObject = JSON.parse('{"E8":"/img/logo-light.png","Q1":"/img/logo-dark.png"}');
;// CONCATENATED MODULE: ./src/common/getSiblings.js
const getSiblings = e => {
  let siblings = [];

  if (!e.parentNode) {
    return siblings;
  }

  let sibling = e.parentNode.firstChild;

  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling);
    }

    sibling = sibling.nextSibling;
  }

  return siblings;
};

/* harmony default export */ const common_getSiblings = (getSiblings);
;// CONCATENATED MODULE: ./src/common/animateElement.js
const animateElement = (el, to) => {
  function draw() {
    el.style.left = to;
  }

  draw();
};

/* harmony default export */ const common_animateElement = (animateElement);
;// CONCATENATED MODULE: ./src/common/delay.js
const delay = (time, callback) => {
  setTimeout(function () {
    callback;
  }, time);
};

/* harmony default export */ const common_delay = (delay);
;// CONCATENATED MODULE: ./src/common/initFullNavbarMenu.js





const initFullNavbarMenu = () => {
  function noScroll() {
    window.scrollTo(0, 0);
  }

  var open = false,
      navDark = document.querySelector(".topnav.dark"),
      logoChan = document.querySelector(".topnav.dark .logo img"),
      menuIcon = document.querySelector(".topnav .menu-icon");

  if (menuIcon) {
    menuIcon.addEventListener("click", function () {
      open = !open;
      document.querySelector(".hamenu").classList.toggle("open");

      if (open) {
        common_animateElement(document.querySelector(".hamenu"), "0px");
        document.querySelector(".topnav .menu-icon .text ").classList.add("open");

        if (navDark) {
          navDark.classList.add("navlit");
        }

        if (logoChan) {
          logoChan.setAttribute("src", app_namespaceObject.E8);
        }

        window.addEventListener("scroll", noScroll);
      } else {
        common_delay(300, common_animateElement(document.querySelector(".hamenu"), "-100%"));
        document.querySelector(".topnav .menu-icon .text").classList.remove("open");

        if (navDark) {
          navDark.classList.remove("navlit");
        }

        if (logoChan) {
          logoChan.setAttribute("src", app_namespaceObject.Q1);
        }

        window.removeEventListener("scroll", noScroll);
      }
    });
    document.querySelectorAll(".main-menu a").forEach(item => {
      item.addEventListener("click", () => {
        common_delay(300, common_animateElement(document.querySelector(".hamenu"), "-100%"));
        document.querySelector(".topnav .menu-icon .text").classList.remove("open");

        if (navDark) {
          navDark.classList.remove("navlit");
        }

        if (logoChan) {
          logoChan.setAttribute("src", app_namespaceObject.Q1);
        }

        window.removeEventListener("scroll", noScroll);
      });
    });
  }

  document.querySelectorAll(".hamenu .menu-links .main-menu > li").forEach(item => {
    item.addEventListener("mouseenter", function () {
      this.style.opacity = "1";
      common_getSiblings(this).forEach(item => {
        item.style.opacity = ".5";
      });
    });
    item.addEventListener("mouseleave", function () {
      document.querySelectorAll(".hamenu .menu-links .main-menu > li").forEach(item2 => {
        item2.style.opacity = "1";
      });
    });
  });

  if (document.querySelectorAll(".main-menu > li .dmenu").length) {
    document.querySelectorAll(".main-menu > li .dmenu").forEach(item => {
      item.addEventListener("click", function () {
        document.querySelector(".main-menu").classList.add("gosub");
        common_getSiblings(this.parentNode.parentNode).forEach(item => {
          item.childNodes[1] ? item.childNodes[1].classList.remove("sub-open") : "";
        });
        this.parentNode.parentNode.childNodes[1].classList.add("sub-open");
      });
    });
  }

  if (document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").length) {
    document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").forEach(item => {
      item.addEventListener("click", function () {
        document.querySelector(".main-menu").classList.remove("gosub");
        document.querySelector(".main-menu").classList.remove("sub-open");
      });
    });
  }
};

/* harmony default export */ const common_initFullNavbarMenu = (initFullNavbarMenu);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Navbar-full-menu/navbar.full-menu.jsx
/* eslint-disable @next/next/no-img-element */








const NavbarFullMenu = ({
  theme
}) => {
  external_react_default().useEffect(() => {
    common_initFullNavbarMenu();
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "navi",
      className: `topnav ${theme ? theme === "light" ? "light" : "" : ""}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container-fluid",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "logo",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "",
            children: theme ? theme === "light" ? /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: app_namespaceObject.Q1,
              alt: "logo"
            }) : /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: app_namespaceObject.E8,
              alt: "logo"
            }) : /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: app_namespaceObject.E8,
              alt: "logo"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "menu-icon",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: "icon",
            children: [/*#__PURE__*/jsx_runtime_.jsx("i", {}), /*#__PURE__*/jsx_runtime_.jsx("i", {})]
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "text",
            "data-splitting": true,
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "menu-text word",
              children: "Menu"
            })
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "hamenu",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-9 col-md-8",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "menu-links",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "main-menu",
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "o-hidden",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      href: "https://nearmoondao.gitbook.io/web3mon/",
                      target: "_blank",
                      rel: "noreferrer",
                      className: "link",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "nm",
                        children: "01."
                      }), "Whitepaper"]
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "o-hidden",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      href: "https://nearmoondao.gitbook.io/web3mon/",
                      target: "_blank",
                      rel: "noreferrer",
                      className: "link",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "nm",
                        children: "02."
                      }), "Demo (coming soon)"]
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "o-hidden",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      a: true,
                      href: "mailto:hello@nearmoon.finance",
                      target: "_blank",
                      rel: "noreferrer",
                      className: "link",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "nm",
                        children: "03."
                      }), "Contact"]
                    })
                  })
                })]
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-3 col-md-4",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "cont-info",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "item",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                  children: "Twitter :"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: " @web3mon"
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "item",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                  children: "Email :"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#0",
                    children: "hello@web3mon.io"
                  })
                })]
              })]
            })
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const navbar_full_menu = (NavbarFullMenu);

/***/ }),

/***/ 6827:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var _data_showcases_full_screen_slider_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(265);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3877);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_4__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);










swiper__WEBPACK_IMPORTED_MODULE_4__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_4__.Parallax, swiper__WEBPACK_IMPORTED_MODULE_4__.Mousewheel]);

const ShowcasesFullScreenCircleSlide = () => {
  const [load, setLoad] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    });
  }, []);
  const navigationPrevRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  const navigationNextRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("header", {
    className: "slider circle-slide showcase-carus",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      id: "content-carousel-container-unq-1",
      className: "swiper-container",
      children: !load ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
        speed: 1000,
        mousewheel: true,
        parallax: true,
        centeredSlides: true,
        slidesPerView: 1,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        spaceBetween: 500,
        navigation: {
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current
        },
        onBeforeInit: swiper => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        },
        onSwiper: swiper => {
          setTimeout(() => {
            for (var i = 0; i < swiper.slides.length; i++) {
              swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.width);
            }

            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        },
        className: "swiper-wrapper",
        breakpoints: {
          0: {
            spaceBetween: 0
          },
          640: {
            spaceBetween: 0
          },
          768: {
            spaceBetween: 30
          },
          1024: {
            spaceBetween: 500
          }
        },
        children: _data_showcases_full_screen_slider_json__WEBPACK_IMPORTED_MODULE_3__.map(slide => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
          className: "swiper-slide",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            className: "full-width",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "bg-img valign",
              style: {
                backgroundImage: `url(${slide.image})`
              },
              "data-overlay-dark": "1",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                className: "caption ontop valign",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: "o-hidden",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h1", {
                    "data-swiper-parallax": "-2000",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                        className: "stroke",
                        children: slide.title.first
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                        children: slide.title.second
                      })]
                    })
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                className: "copy-cap valign",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: "cap",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h1", {
                    "data-swiper-parallax": "-2000",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                        className: "stroke",
                        children: slide.title.first
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                        children: slide.title.second
                      })]
                    })
                  })
                })
              })]
            })
          })
        }, slide.id))
      }) : null
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "txt-botm",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        ref: navigationNextRef,
        className: "swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
            children: "Next"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("i", {
            className: "fas fa-chevron-right"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        ref: navigationPrevRef,
        className: "swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("i", {
            className: "fas fa-chevron-left"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
            children: "Prev"
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowcasesFullScreenCircleSlide);
});

/***/ }),

/***/ 1933:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navbar_full_menu_navbar_full_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4246);
/* harmony import */ var _components_Showcases_full_screen_circle_slide_showcases_full_screen_circle_slide_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6827);
/* harmony import */ var _layouts_Dark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9516);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Showcases_full_screen_circle_slide_showcases_full_screen_circle_slide_jsx__WEBPACK_IMPORTED_MODULE_2__]);
_components_Showcases_full_screen_circle_slide_showcases_full_screen_circle_slide_jsx__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];







const Showcase3Dark = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_layouts_Dark__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_Navbar_full_menu_navbar_full_menu__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_Showcases_full_screen_circle_slide_showcases_full_screen_circle_slide_jsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Showcase3Dark);
});

/***/ }),

/***/ 265:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"title":{"first":"The First NFT","second":"Multiverse"},"image":"/img/circleimage/full/1.png","sub":"image"},{"id":2,"title":{"first":"PVP Turn based","second":"Combat Game"},"image":"/img/circleimage/full/2.png","sub":"image"},{"id":3,"title":{"first":"Play to","second":"Earn with"},"image":"/img/circleimage/full/3.png","sub":"image"},{"id":4,"title":{"first":"NFT you","second":"already own"},"image":"/img/circleimage/full/4.jpg","sub":"image"}]');

/***/ })

};
;