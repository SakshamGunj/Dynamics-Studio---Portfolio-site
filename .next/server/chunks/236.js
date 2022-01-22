exports.id = 236;
exports.ids = [236];
exports.modules = {

/***/ 1001:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "portfolio_main__bicQR",
	"portfolio_heading": "portfolio_portfolio_heading__Wilep",
	"wedding_options": "portfolio_wedding_options__YIZt1",
	"portfolio_content1": "portfolio_portfolio_content1__VCQ7h",
	"portfolio_content2": "portfolio_portfolio_content2__VeZrS",
	"portfolio_content3": "portfolio_portfolio_content3__j1aK0",
	"portfolio_content4": "portfolio_portfolio_content4__t_53D",
	"portfolio_image": "portfolio_portfolio_image__WDO2_"
};


/***/ }),

/***/ 1236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1001);
/* harmony import */ var _styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6446);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9929);
/* harmony import */ var _store_bridal_page1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4449);



//import wedding from '../../public/store/wedding_page1.json'



function Portfolio({ query  }) {
    const imageZoomHandler = (e)=>{
        console.log(e.target.currentSrc);
    };
    const { 0: portfolioOption , 1: setPortfolioOption  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('ALL');
    const { 0: menu , 1: openMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const imageSliderHandler = ()=>{
        console.log('slided');
    };
    const onGettingPortfolioOptionHandler = (option)=>{
        setPortfolioOption(option);
    };
    const onGettingOpenMenuHandler = (action)=>{
        openMenu(action);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navbar__WEBPACK_IMPORTED_MODULE_2__/* .TopNav */ .t, {
                openMenu: onGettingOpenMenuHandler
            }),
            menu && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal__WEBPACK_IMPORTED_MODULE_3__/* .MenuModal */ .H, {
            }),
            query == 'indoor' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_5___default().portfolio_heading),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: "indoor"
                }, "Indoor")
            }),
            query == 'commercial' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_5___default().portfolio_heading),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: "commercial"
                }, "Commercial")
            }),
            query == 'product' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_5___default().portfolio_heading),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: "product"
                }, "Product")
            }),
            query == 'wedding' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_5___default().portfolio_heading),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "wedding"
                    }, "Wedding"),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_5___default().wedding_options),
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
                className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_5___default().portfolio_content1),
                children: _store_bridal_page1__WEBPACK_IMPORTED_MODULE_4__/* .wedding_url.link.map */ .i2.link.map((u)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: u,
                        className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_5___default().portfolio_image),
                        onClick: imageZoomHandler
                    }));
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_5___default().portfolio_content2),
                children: _store_bridal_page1__WEBPACK_IMPORTED_MODULE_4__/* .nature_url.link.map */ .cY.link.map((u)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: u,
                        className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_5___default().portfolio_image),
                        onClick: imageZoomHandler
                    }));
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_5___default().portfolio_content3),
                children: _store_bridal_page1__WEBPACK_IMPORTED_MODULE_4__/* .wedding_url.link.map */ .i2.link.map((u)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: u,
                        className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_5___default().portfolio_image),
                        onClick: imageZoomHandler
                    }));
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_5___default().portfolio_content4),
                children: _store_bridal_page1__WEBPACK_IMPORTED_MODULE_4__/* .nature_url.link.map */ .cY.link.map((u)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: u,
                        className: (_styles_portfolio_module_css__WEBPACK_IMPORTED_MODULE_5___default().portfolio_image),
                        onClick: imageZoomHandler
                    }));
                })
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolio);


/***/ })

};
;