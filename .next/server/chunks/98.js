exports.id = 98;
exports.ids = [98];
exports.modules = {

/***/ 1001:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "portfolio_main__bicQR",
	"modal_main": "portfolio_modal_main__8i9rj",
	"portfolio_heading": "portfolio_portfolio_heading__Wilep",
	"wedding_options": "portfolio_wedding_options__YIZt1",
	"portfolio_content1": "portfolio_portfolio_content1__VCQ7h",
	"portfolio_content2": "portfolio_portfolio_content2__VeZrS",
	"portfolio_content3": "portfolio_portfolio_content3__j1aK0",
	"portfolio_content4": "portfolio_portfolio_content4__t_53D",
	"portfolio_image": "portfolio_portfolio_image__WDO2_"
};


/***/ }),

/***/ 7098:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OL": () => (/* binding */ IndoorPortfolio),
/* harmony export */   "NH": () => (/* binding */ WeddingPortfolio),
/* harmony export */   "MT": () => (/* binding */ CommercialPortfolio),
/* harmony export */   "x_": () => (/* binding */ ProductPortfolio),
/* harmony export */   "_Y": () => (/* binding */ Portfolio)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1001);
/* harmony import */ var _styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6446);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9783);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9929);
/* harmony import */ var _store_bridal_page1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4449);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Modal__WEBPACK_IMPORTED_MODULE_5__, framer_motion__WEBPACK_IMPORTED_MODULE_4__]);
([_Modal__WEBPACK_IMPORTED_MODULE_5__, framer_motion__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



//import wedding from '../../public/store/wedding_page1.json'






function IndoorPortfolio({ query , weddingurl , natureurl , dataa  }) {
    const fadein = {
        hidden: {
            opacity: 0,
            y: '10rem'
        },
        visible: {
            opacity: 1,
            y: '0rem',
            transition: {
                duration: 0.5
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 1
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        aos__WEBPACK_IMPORTED_MODULE_3___default().init({
            duration: 500
        });
    }, []);
    const { 0: openMenu , 1: setOpenMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const onGettingOpenMenuHandler = (action)=>{
        console.log(action);
        setOpenMenu(action);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
            className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default())[openMenu ? 'modal_main' : 'main'],
            variants: fadein,
            initial: "hidden",
            animate: "visible",
            exit: "exit",
            children: [
                openMenu && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal__WEBPACK_IMPORTED_MODULE_5__/* .MenuModal */ .H, {
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navbar__WEBPACK_IMPORTED_MODULE_2__/* .TopNav */ .t, {
                    OpenMenu: onGettingOpenMenuHandler
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_heading),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "indoor"
                    }, "Indoor")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_content1),
                    children: dataa.map((u)=>{
                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: u,
                            className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_image)
                        }));
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_content2),
                    children: dataa.map((u)=>{
                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: u,
                            className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_image)
                        }));
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_content3),
                    children: dataa.map((u)=>{
                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: u,
                            className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_image)
                        }));
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_content4),
                    children: dataa.map((u)=>{
                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: u,
                            className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_image)
                        }));
                    })
                })
            ]
        })
    }));
}
function WeddingPortfolio({ query , weddingurl , natureurl , dataa  }) {
    const fadein = {
        hidden: {
            opacity: 0,
            y: '10rem'
        },
        visible: {
            opacity: 1,
            y: '0rem',
            transition: {
                duration: 0.5
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 1
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        aos__WEBPACK_IMPORTED_MODULE_3___default().init({
            duration: 500
        });
    }, []);
    const { 0: openMenu , 1: setOpenMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const onGettingOpenMenuHandler = (action)=>{
        console.log(action);
        setOpenMenu(action);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
        className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),
        variants: fadein,
        initial: "hidden",
        animate: "visible",
        exit: "exit",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navbar__WEBPACK_IMPORTED_MODULE_2__/* .TopNav */ .t, {
                OpenMenu: onGettingOpenMenuHandler
            }),
            openMenu && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal__WEBPACK_IMPORTED_MODULE_5__/* .MenuModal */ .H, {
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_heading),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "wedding"
                    }, "Wedding"),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().wedding_options),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: "Pre wedding"
                            }, "weeding"),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: "Haldi"
                            }, "model"),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: "Mandap"
                            }, "nature")
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_content1),
                children: dataa.map((u)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: u,
                        className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_image)
                    }));
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_content2),
                children: dataa.map((u)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: u,
                        className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_image)
                    }));
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_content3),
                children: dataa.map((u)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: u,
                        className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_image)
                    }));
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_content4),
                children: dataa.map((u)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: u,
                        className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_image)
                    }));
                })
            })
        ]
    }));
}
function CommercialPortfolio({ query , weddingurl , natureurl , dataa  }) {
    const fadein = {
        hidden: {
            opacity: 0,
            y: '10rem'
        },
        visible: {
            opacity: 1,
            y: '0rem',
            transition: {
                duration: 0.5
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 1
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        aos__WEBPACK_IMPORTED_MODULE_3___default().init({
            duration: 500
        });
    }, []);
    const { 0: openMenu , 1: setOpenMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const onGettingOpenMenuHandler = (action)=>{
        console.log(action);
        setOpenMenu(action);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
        className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),
        variants: fadein,
        initial: "hidden",
        animate: "visible",
        exit: "exit",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navbar__WEBPACK_IMPORTED_MODULE_2__/* .TopNav */ .t, {
                OpenMenu: onGettingOpenMenuHandler
            }),
            openMenu && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal__WEBPACK_IMPORTED_MODULE_5__/* .MenuModal */ .H, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_heading),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: "commercial"
                }, "Indoor")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_content1),
                children: dataa.map((u)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: u,
                        className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_image)
                    }));
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_content2),
                children: dataa.map((u)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: u,
                        className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_image)
                    }));
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_content3),
                children: dataa.map((u)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: u,
                        className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_image)
                    }));
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_content4),
                children: dataa.map((u)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: u,
                        className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_image)
                    }));
                })
            })
        ]
    }));
}
function ProductPortfolio({ query , weddingurl , natureurl , dataa  }) {
    const fadein = {
        hidden: {
            opacity: 0,
            y: '10rem'
        },
        visible: {
            opacity: 1,
            y: '0rem',
            transition: {
                duration: 0.5
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 1
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        aos__WEBPACK_IMPORTED_MODULE_3___default().init({
            duration: 500
        });
    }, []);
    const { 0: openMenu , 1: setOpenMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const onGettingOpenMenuHandler = (action)=>{
        console.log(action);
        setOpenMenu(action);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
        className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),
        variants: fadein,
        initial: "hidden",
        animate: "visible",
        exit: "exit",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navbar__WEBPACK_IMPORTED_MODULE_2__/* .TopNav */ .t, {
                OpenMenu: onGettingOpenMenuHandler
            }),
            openMenu && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal__WEBPACK_IMPORTED_MODULE_5__/* .MenuModal */ .H, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_heading),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: "product"
                }, "Indoor")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_content1),
                children: dataa.map((u)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: u,
                        className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_image)
                    }));
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_content2),
                children: dataa.map((u)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: u,
                        className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_image)
                    }));
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_content3),
                children: dataa.map((u)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: u,
                        className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_image)
                    }));
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_content4),
                children: dataa.map((u)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: u,
                        className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_image)
                    }));
                })
            })
        ]
    }));
}
function Portfolio({ query , weddingurl , natureurl , dataa  }) {
    const fadein = {
        hidden: {
            opacity: 0,
            y: '10rem'
        },
        visible: {
            opacity: 1,
            y: '0rem',
            transition: {
                duration: 0.5
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 1
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        aos__WEBPACK_IMPORTED_MODULE_3___default().init({
            duration: 500
        });
    }, []);
    const { 0: openMenu , 1: setOpenMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const onGettingOpenMenuHandler = (action)=>{
        console.log(action);
        setOpenMenu(action);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
        className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),
        variants: fadein,
        initial: "hidden",
        animate: "visible",
        exit: "exit",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navbar__WEBPACK_IMPORTED_MODULE_2__/* .TopNav */ .t, {
                OpenMenu: onGettingOpenMenuHandler
            }),
            openMenu && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal__WEBPACK_IMPORTED_MODULE_5__/* .MenuModal */ .H, {
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_heading),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "portfolio"
                    }, "Wedding"),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().wedding_options),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: "wedding"
                            }, "weeding"),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: "indoor"
                            }, "model"),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: "commercial"
                            }, "nature")
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                "data-aos": "fade-up",
                className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_content1),
                children: dataa.map((u)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: u,
                        className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_image)
                    }));
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                "data-aos": "fade-up",
                className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_content2),
                children: dataa.map((u)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: u,
                        className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_image)
                    }));
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                "data-aos": "fade-up",
                className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_content3),
                children: dataa.map((u)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: u,
                        className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_image)
                    }));
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                "data-aos": "fade-up",
                className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_content4),
                children: dataa.map((u)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: u,
                        className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_7___default().portfolio_image)
                    }));
                })
            })
        ]
    }));
}

});

/***/ }),

/***/ 4449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i2": () => (/* binding */ wedding_url)
/* harmony export */ });
/* unused harmony exports Bridal_url, landscape_url, model_url, nature_url, portrait_url */
const Bridal_url = {
    link: [
        "http://images.pexels.com/photos/1229414/pexels-photo-1229414.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/1721944/pexels-photo-1721944.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/3863802/pexels-photo-3863802.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/1533648/pexels-photo-1533648.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/5411883/pexels-photo-5411883.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/931178/pexels-photo-931178.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/931158/pexels-photo-931158.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/931179/pexels-photo-931179.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/5600018/pexels-photo-5600018.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/712651/pexels-photo-712651.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/948185/pexels-photo-948185.jpeg?auto=compress&cs=tinysrgb&h=350"
    ]
};
const landscape_url = {
    link: [
        "http://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/3484061/pexels-photo-3484061.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/273935/pexels-photo-273935.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/1757363/pexels-photo-1757363.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&h=350"
    ]
};
const model_url = {
    link: [
        "http://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/3778145/pexels-photo-3778145.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/4519122/pexels-photo-4519122.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/4519118/pexels-photo-4519118.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/1921168/pexels-photo-1921168.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/982585/pexels-photo-982585.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/1193942/pexels-photo-1193942.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/36469/woman-person-flowers-wreaths.jpg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/206434/pexels-photo-206434.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&h=350"
    ]
};
const nature_url = {
    link: [
        "http://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/2469122/pexels-photo-2469122.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/2627945/pexels-photo-2627945.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/2524874/pexels-photo-2524874.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/1257860/pexels-photo-1257860.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/2724664/pexels-photo-2724664.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/3064079/pexels-photo-3064079.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/3156381/pexels-photo-3156381.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/3214944/pexels-photo-3214944.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/3225529/pexels-photo-3225529.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&h=350"
    ]
};
const portrait_url = {
    link: [
        "http://images.pexels.com/photos/3405555/pexels-photo-3405555.png?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/4298629/pexels-photo-4298629.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/5611966/pexels-photo-5611966.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/4075524/pexels-photo-4075524.png?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/6934325/pexels-photo-6934325.png?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/4823732/pexels-photo-4823732.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/4764224/pexels-photo-4764224.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/4654851/pexels-photo-4654851.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/5794559/pexels-photo-5794559.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/4045599/pexels-photo-4045599.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/2531356/pexels-photo-2531356.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/4655426/pexels-photo-4655426.jpeg?auto=compress&cs=tinysrgb&h=350"
    ]
};
const wedding_url = {
    link: [
        "http://images.pexels.com/photos/758898/pexels-photo-758898.png?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/3916019/pexels-photo-3916019.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/3014937/pexels-photo-3014937.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/3491999/pexels-photo-3491999.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/1185244/pexels-photo-1185244.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/3354636/pexels-photo-3354636.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/936225/pexels-photo-936225.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/4611741/pexels-photo-4611741.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/3818650/pexels-photo-3818650.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/948185/pexels-photo-948185.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&h=350",
        "http://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&h=350"
    ]
};


/***/ })

};
;