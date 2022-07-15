"use strict";
exports.id = 768;
exports.ids = [768];
exports.modules = {

/***/ 1768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ demos)
});

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/config/particle-config.js
const particlesConfig = {
  particles: {
    number: {
      value: 130,
      density: {
        enable: true,
        value_area: 900
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "/img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.2,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.3,
        sync: false
      }
    },
    size: {
      value: 1.8,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.4,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3
      },
      repulse: {
        distance: 400,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};
/* harmony default export */ const particle_config = (particlesConfig);
// EXTERNAL MODULE: external "react-tsparticles"
var external_react_tsparticles_ = __webpack_require__(4753);
var external_react_tsparticles_default = /*#__PURE__*/__webpack_require__.n(external_react_tsparticles_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Split/index.jsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Split extends (external_react_default()).Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "target", /*#__PURE__*/external_react_default().createRef());

    _defineProperty(this, "split", () => {
      if (this.target.current) {
        Splitting({
          target: this.target.current
        });
      }
    });

    _defineProperty(this, "componentDidMount", this.split);

    _defineProperty(this, "componentDidUpdate", this.split);
  }

  render() {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      ref: this.target,
      children: this.props.children
    });
  }

}

/* harmony default export */ const components_Split = (Split);
// EXTERNAL MODULE: ./src/layouts/Dark.jsx
var Dark = __webpack_require__(9516);
;// CONCATENATED MODULE: ./src/common/initIsotope.js
const initIsotope = () => {
  var grid = document.querySelectorAll(".gallery");
  var iso;

  if (grid.length >= 1) {
    grid.forEach(item => {
      iso = new Isotope(item, {
        itemSelector: ".items"
      });
    });
  }

  var gridMons = document.querySelectorAll(".gallery-mons");

  if (gridMons.length >= 1) {
    gridMons.forEach(item => {
      iso = new Isotope(item, {
        itemSelector: ".items",
        masonry: {
          columnWidth: ".width2"
        }
      });
    });
  }

  var filtersElem = document.querySelector(".filtering");

  if (filtersElem) {
    filtersElem.addEventListener("click", function (event) {
      if (!matchesSelector(event.target, "span")) {
        return;
      }

      var filterValue = event.target.getAttribute("data-filter");
      filterValue = filterValue;
      iso.arrange({
        filter: filterValue
      });
    });
    var buttonGroups = document.querySelectorAll(".filtering");

    for (var i = 0, len = buttonGroups.length; i < len; i++) {
      var buttonGroup = buttonGroups[i];
      radioButtonGroup(buttonGroup);
    }

    function radioButtonGroup(buttonGroup) {
      buttonGroup.addEventListener("click", function (event) {
        if (!matchesSelector(event.target, "span")) {
          return;
        }

        buttonGroup.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");
      });
    }
  }
};

/* harmony default export */ const common_initIsotope = (initIsotope);
;// CONCATENATED MODULE: ./src/pages/demos/demos.jsx


/* eslint-disable @next/next/no-img-element */










const Demos = () => {
  const [pageLoaded, setPageLoaded] = external_react_default().useState(false);
  external_react_default().useEffect(() => {
    setPageLoaded(true);
    setTimeout(() => {
      if (pageLoaded) {
        common_initIsotope();
      }
    }, 1000);
  }, [pageLoaded]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Dark/* default */.Z, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "575932941",
      children: [".sec-head.jsx-575932941 h3.jsx-575932941{font-size:60px;font-weight:700;position:relative;}", ".sec-head.jsx-575932941 .tbg.jsx-575932941{position:absolute;top:-120px;left:0;width:100%;font-size:15vw;font-weight:900;line-height:1;background:linear-gradient( 180deg, #fff 0%, rgba(17,18,21,0.2) 70% );-webkit-background-clip:text;-webkit-text-fill-color:transparent;opacity:0.1;}", ".sec-head.jsx-575932941 .tbg.jsx-575932941 b.jsx-575932941{font-weight:500;font-size:12vw;}", ".main-content.jsx-575932941{position:relative;z-index:999999;background:transparent;}", ".masonery.jsx-575932941 .gallery.jsx-575932941 .items.jsx-575932941{margin-top:30px;}", ".masonery.jsx-575932941 .container-fluid.jsx-575932941{padding:0 100px;}", "@media (max-width:768px){.masonery.jsx-575932941 .container-fluid.jsx-575932941{padding:0 20px;}.sec-head.jsx-575932941 h3.jsx-575932941{font-size:34px;}.sec-head.jsx-575932941{margin:0 auto 30px;}}", ".masonery.jsx-575932941 .item-img.jsx-575932941{padding:5px 15px 20px;border-radius:10px;background:#18191d;position:relative;}", ".masonery.jsx-575932941 .item-img.jsx-575932941 .dot.jsx-575932941{width:7px;height:7px;border-radius:50%;background:rgba(255,255,255,0.05);}", ".masonery.jsx-575932941 .item-img.jsx-575932941 .img.jsx-575932941{border-radius:10px;overflow:hidden;}", ".masonery.jsx-575932941 .item-img.jsx-575932941 .img.jsx-575932941 img.jsx-575932941{-webkit-transition:all 0.4s;transition:all 0.4s;}", ".masonery.jsx-575932941 .item-img.jsx-575932941 .img.jsx-575932941:hover img.jsx-575932941{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}", ".masonery.jsx-575932941 .item-img.jsx-575932941 .cont.jsx-575932941{margin-top:20px;text-align:center;position:relative;}", ".masonery.jsx-575932941 .item-img.jsx-575932941 .cont.jsx-575932941 h6.jsx-575932941{font-size:16px;font-weight:500;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}", ".masonery.jsx-575932941 .item-img.jsx-575932941 .cont.jsx-575932941 .sta.jsx-575932941{position:absolute;top:-47px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);padding:5px 10px;border-radius:30px;box-shadow:0px 5px 20px rgba(255,255,255,0.05);font-size:12px;}", ".masonery.jsx-575932941 .item-img.jsx-575932941 .cont.jsx-575932941 .sta.coming.jsx-575932941{background:#03be5f;}", ".masonery.jsx-575932941 .item-img.jsx-575932941 .cont.jsx-575932941 .sta.new.jsx-575932941{background:#ff4b4b;}"]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-575932941" + " " + "circle-bg",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-575932941" + " " + "circle-color fixed",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-575932941" + " " + "gradient-circle"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-575932941" + " " + "gradient-circle two"
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
      "data-overlay-dark": "4",
      style: {
        backgroundImage: "url(/demo-img/bg.png)",
        minHeight: "100vh",
        zIndex: 99999
      },
      className: "jsx-575932941" + " " + "works-header particles valign bg-img parallaxie",
      children: [/*#__PURE__*/jsx_runtime_.jsx((external_react_tsparticles_default()), {
        id: "particles-js",
        options: particle_config
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jsx-575932941" + " " + "container",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-575932941" + " " + "row justify-content-center",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-575932941" + " " + "col-lg-9 col-md-11 static",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-575932941" + " " + "capt mt-50",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "bactxt custom-font valign",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  style: {
                    color: "transparent"
                  },
                  className: "jsx-575932941" + " " + "full-width",
                  children: "vie"
                })
              })
            })
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-575932941" + " " + "main-content section-padding pb-0",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
        className: "jsx-575932941" + " " + "masonery section-padding",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-575932941" + " " + "container",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-575932941" + " " + "row justify-content-center",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-575932941" + " " + "col-lg-8 col-md-10",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "jsx-575932941" + " " + "sec-head text-center",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                  className: "jsx-575932941" + " " + "color-font",
                  children: "49+ stunning unique ready template"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  className: "jsx-575932941" + " " + "tbg",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("b", {
                    className: "jsx-575932941",
                    children: "+"
                  }), "49"]
                })]
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-575932941" + " " + "container-fluid",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-575932941" + " " + "row",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "jsx-575932941" + " " + "gallery full-width",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/homepage/home1-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/1.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Main Demo"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/homepage/home1-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/01.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Main Demo"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/homepage/home2-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/2.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Creative Agency"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/homepage/home2-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/02.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Creative Agency"
                        })
                      })]
                    })
                  })]
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "jsx-575932941" + " " + "gallery full-width",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/mobile-app/mobile-app-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/mobile1.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Mobile app"
                        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "jsx-575932941" + " " + "sta new",
                          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                            className: "jsx-575932941",
                            children: "New Demo"
                          })
                        })]
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/mobile-app/mobile-app-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/mobile2.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Mobile app"
                        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "jsx-575932941" + " " + "sta new",
                          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                            className: "jsx-575932941",
                            children: "New Demo"
                          })
                        })]
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/homepage/home7-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/n2.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Freelancer"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/homepage/home7-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/n02.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Freelancer"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/homepage/home8-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/n3.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Architecture"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/homepage/home8-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/n03.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Architecture"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/homepage/home5-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/3.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Digital Agency"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/homepage/home5-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/03.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Digital Agency"
                        })
                      })]
                    })
                  })]
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "jsx-575932941" + " " + "gallery full-width",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/homepage/home4-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/4.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Business One Page"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/homepage/home4-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/04.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Business One Page"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/homepage/home3-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/5.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Corporate Business"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/homepage/home3-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/05.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Corporate Business"
                        })
                      })]
                    })
                  })]
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "jsx-575932941" + " " + "gallery full-width",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/homepage/home6-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/n1.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Modern Agency"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/homepage/home6-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/n01.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Modern Agency"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "jsx-575932941" + " " + "img",
                    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: "/demo-img/c3.png",
                      alt: "image",
                      className: "jsx-575932941"
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "jsx-575932941" + " " + "cont",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                      className: "jsx-575932941",
                      children: "Restaurant"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "jsx-575932941" + " " + "sta coming",
                      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "jsx-575932941",
                        children: "Coming Soon"
                      })
                    })]
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "jsx-575932941" + " " + "img",
                    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: "/demo-img/c4.png",
                      alt: "image",
                      className: "jsx-575932941"
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "jsx-575932941" + " " + "cont",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                      className: "jsx-575932941",
                      children: "Multipurpose"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "jsx-575932941" + " " + "sta coming",
                      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "jsx-575932941",
                        children: "Coming Soon"
                      })
                    })]
                  })]
                })
              })]
            })]
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
        className: "jsx-575932941" + " " + "masonery section-padding position-re",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-575932941" + " " + "container",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-575932941" + " " + "row justify-content-center",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-575932941" + " " + "col-lg-8 col-md-10",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "sec-head text-center",
                children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
                  className: "jsx-575932941" + " " + "color-font",
                  children: "Showcases"
                })
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-575932941" + " " + "container-fluid",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-575932941" + " " + "row",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "jsx-575932941" + " " + "gallery full-width",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/showcase/showcase-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/s1.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Full Screen"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/showcase/showcase-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/s01.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Full Screen"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/showcase4/showcase4-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/s2.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Showcase Carousel"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/showcase4/showcase4-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/s02.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Showcase Carousel"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/showcase3/showcase3-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/s3.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Showcase Circle"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/showcase3/showcase3-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/s03.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Showcase Circle"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/works/works-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/w1.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Works 3 column"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/works/works-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/w01.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Works 3 column"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/works2/works2-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/w2.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Works Filtering"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/works2/works2-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/w02.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Works Filtering"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/works3/works3-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/w3.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Works Gallery"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/works3/works3-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/w03.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Works Gallery"
                        })
                      })]
                    })
                  })]
                })
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-575932941" + " " + "line top left"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
        className: "jsx-575932941" + " " + "masonery section-padding position-re",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-575932941" + " " + "container",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-575932941" + " " + "row justify-content-center",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-575932941" + " " + "col-lg-8 col-md-10",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "sec-head text-center",
                children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
                  className: "jsx-575932941" + " " + "color-font",
                  children: "Inner Pages"
                })
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-575932941" + " " + "container-fluid",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-575932941" + " " + "row",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "jsx-575932941" + " " + "gallery full-width",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/blog/blog-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/standerd-blog-dark.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Standerd Blog"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/blog/blog-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/standerd-blog-light.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Standerd Blog"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/blog-list/blog-list-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/blog-list-dark.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Blog List"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/blog-list/blog-list-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/blog-list-light.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Blog List"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/blog-grid/blog-grid-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/blog-grid-dark.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Blog Grid"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/blog-grid/blog-grid-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/blog-grid-light.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Blog Grid"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/blog-details/blog-details-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/blog-details-dark.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Blog Details"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/blog-details/blog-details-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/blog-details-light.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Blog Details"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/about/about-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/about.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "About Us"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/about/about-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/about1.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "About Us"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/contact/contact-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/contact-dark.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Contact"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/contact/contact-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/contact-light.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Contact"
                        })
                      })]
                    })
                  })]
                })
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-575932941" + " " + "line top left"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
        className: "jsx-575932941" + " " + "services bords lficon section-padding position-re",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "jsx-575932941" + " " + "container",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-575932941" + " " + "row justify-content-center",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-575932941" + " " + "col-lg-8 col-md-10",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "jsx-575932941" + " " + "sec-head  text-center",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                  "data-wow-delay": ".5s",
                  className: "jsx-575932941" + " " + "wow fadeIn",
                  children: "Best Features"
                }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                  className: "jsx-575932941" + " " + "wow color-font",
                  children: "Creative Agency, Corporate and Portfolio Template"
                })]
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-575932941" + " " + "row",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              "data-wow-delay": ".5s",
              className: "jsx-575932941" + " " + "col-lg-6 wow fadeInLeft",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "jsx-575932941" + " " + "item-box",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "jsx-575932941",
                  children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "icon pe-7s-paint-bucket"
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "jsx-575932941" + " " + "cont",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                    className: "jsx-575932941",
                    children: "UI/UX Design"
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: "jsx-575932941",
                    children: "We provide the best design by following the latest trends."
                  })]
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              "data-wow-delay": ".7s",
              className: "jsx-575932941" + " " + "col-lg-6 wow fadeInLeft",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "jsx-575932941" + " " + "item-box",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "jsx-575932941",
                  children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "icon pe-7s-phone"
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "jsx-575932941" + " " + "cont",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                    className: "jsx-575932941",
                    children: "Easily Customizable"
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: "jsx-575932941",
                    children: "Build and customize stunning pages in minutes."
                  })]
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              "data-wow-delay": ".9s",
              className: "jsx-575932941" + " " + "col-lg-6 wow fadeInLeft",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "jsx-575932941" + " " + "item-box",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "jsx-575932941",
                  children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "icon pe-7s-display1"
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "jsx-575932941" + " " + "cont",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                    className: "jsx-575932941",
                    children: "One / Multi Page"
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: "jsx-575932941",
                    children: "Choose the layout style that fits your need."
                  })]
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              "data-wow-delay": ".5s",
              className: "jsx-575932941" + " " + "col-lg-6 wow fadeInLeft",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "jsx-575932941" + " " + "item-box",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "jsx-575932941",
                  children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "icon pe-7s-diskette"
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "jsx-575932941" + " " + "cont",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                    className: "jsx-575932941",
                    children: "24/7 Support"
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: "jsx-575932941",
                    children: "We commit to keep your site up-to-date."
                  })]
                })]
              })
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-575932941" + " " + "line top right"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("section", {
        style: {
          backgroundImage: "url(/img/patrn.svg)"
        },
        className: "jsx-575932941" + " " + "call-action section-padding bg-img",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-575932941" + " " + "container",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-575932941" + " " + "row",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-575932941" + " " + "col-md-8 col-lg-9",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "content sm-mb30",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(components_Split, {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                    "data-splitting": true,
                    className: "jsx-575932941" + " " + "wow words chars splitting",
                    children: "Purchase The Vie"
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
                    "data-splitting": true,
                    className: "jsx-575932941" + " " + "wow words chars splitting",
                    children: ["and Make ", /*#__PURE__*/jsx_runtime_.jsx("br", {
                      className: "jsx-575932941"
                    }), /*#__PURE__*/jsx_runtime_.jsx("b", {
                      className: "jsx-575932941" + " " + "back-color",
                      children: "Your Life Easier"
                    }), "."]
                  })]
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-575932941" + " " + "col-md-4 col-lg-3 valign",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#0",
                "data-wow-delay": ".5s",
                className: "jsx-575932941" + " " + "butn bord curve wow fadeInUp",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "jsx-575932941",
                  children: "Purchase Now"
                })
              })
            })]
          })
        })
      })]
    })]
  });
};

/* harmony default export */ const demos = (Demos);

/***/ })

};
;