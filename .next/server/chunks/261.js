exports.id = 261;
exports.ids = [261];
exports.modules = {

/***/ 3855:
/***/ ((module) => {

// Exports
module.exports = {
	"primary_button": "button_primary_button__FqWHM"
};


/***/ }),

/***/ 1029:
/***/ ((module) => {

// Exports
module.exports = {
	"menu_modal": "modal_menu_modal__KqUYD",
	"startup": "modal_startup__oQthL",
	"menu_modal_content": "modal_menu_modal_content__m2GH4",
	"menu_modal_content2": "modal_menu_modal_content2__fvdbu",
	"link": "modal_link__2uSYl"
};


/***/ }),

/***/ 1787:
/***/ ((module) => {

// Exports
module.exports = {
	"top_nav": "navbar_top_nav__y6PsK",
	"right_nav": "navbar_right_nav__kqJ_l",
	"primary_round_button": "navbar_primary_round_button__Zi4_q"
};


/***/ }),

/***/ 9929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ MenuModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_modal_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1029);
/* harmony import */ var _styles_modal_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_modal_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);






function MenuModal() {
    const { 0: openMenu , 1: setOpenMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_modal_module_css__WEBPACK_IMPORTED_MODULE_4___default().menu_modal),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "footer.jpg"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_modal_module_css__WEBPACK_IMPORTED_MODULE_4___default().menu_modal_content),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            children: "HomePage"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/portfoliowork",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: (_styles_modal_module_css__WEBPACK_IMPORTED_MODULE_4___default())[router.pathname == '/portfoliowork' && 'link'],
                            children: "Portfolio"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            children: "Contact"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_modal_module_css__WEBPACK_IMPORTED_MODULE_4___default().menu_modal_content2),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/portfoliowork/wedding",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            children: "Wedding work ↗"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/portfoliowork/indoor",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            children: "indoor work ↗"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/portfoliowork/commercial",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            children: "commercial work ↗"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/portfoliowork/product",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            children: "product work ↗"
                        })
                    })
                ]
            })
        ]
    }));
}


/***/ }),

/***/ 6446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ TopNav),
/* harmony export */   "L": () => (/* binding */ RightNav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1787);
/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utilscomponents_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3863);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4176);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6765);
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7055);
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7501);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9723);
/* harmony import */ var _material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2294);
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_8__);











function TopNav(props) {
    const { 0: menu , 1: openMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const menuOpenHandler = ()=>{
        props.OpenMenu(true);
        openMenu(true);
    };
    const menuCloseHandler = ()=>{
        props.OpenMenu(false);
        openMenu(false);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_9___default().top_nav),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    menu == true && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_9___default().primary_round_button),
                        onClick: menuCloseHandler,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6___default()), {
                            style: {
                                fontSize: '3rem'
                            }
                        })
                    }),
                    menu == false && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_9___default().primary_round_button),
                        onClick: menuOpenHandler,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_3___default()), {
                            style: {
                                fontSize: '3rem'
                            }
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utilscomponents_Button__WEBPACK_IMPORTED_MODULE_2__/* .PrimaryButton */ .K, {
                content: "Get in touch"
            })
        ]
    }));
}
function RightNav() {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_9___default().right_nav),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_4___default()), {
                style: {
                    fontSize: '3rem',
                    fill: 'white'
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_5___default()), {
                style: {
                    fontSize: '3rem',
                    fill: 'white'
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_8___default()), {
                style: {
                    fontSize: '3rem',
                    fill: 'white'
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_7___default()), {
                style: {
                    fontSize: '3rem',
                    fill: 'white'
                }
            })
        ]
    }));
}


/***/ }),

/***/ 3863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ PrimaryButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_button_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3855);
/* harmony import */ var _styles_button_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_button_module_css__WEBPACK_IMPORTED_MODULE_2__);



function PrimaryButton({ content  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_button_module_css__WEBPACK_IMPORTED_MODULE_2___default().primary_button),
        children: content
    }));
}


/***/ })

};
;