exports.id = 929;
exports.ids = [929];
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
	"modal": "modal_modal__Yg_Sp",
	"photo_wrapper": "modal_photo_wrapper__3KTP2",
	"portfolio_heading": "modal_portfolio_heading__MyCab",
	"menu_modal": "modal_menu_modal__KqUYD",
	"menu_modal_content": "modal_menu_modal_content__m2GH4",
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
/* unused harmony export PortfolioModal */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_modal_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1029);
/* harmony import */ var _styles_modal_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_modal_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_bridal_page1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4449);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6446);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);








function PortfolioModal(props) {
    const { 0: openMenu , 1: setOpenMenu  } = useState(false);
    const onGettingOpenMenuHandler = (e)=>{
        setOpenMenu(true);
    };
    const router = useRouter();
    console.log(router);
    const { 0: portfolioOption , 1: setPortfolioOption  } = useState('ALL');
    const portfolioChangeHandler = (e)=>{
        props.portfolioOption(e.target.outerText);
        setPortfolioOption(e.target.outerText);
    };
    return(/*#__PURE__*/ _jsxs("div", {
        className: styles.modal,
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: styles.portfolio_heading,
                children: [
                    /*#__PURE__*/ _jsx("h3", {
                        onClick: portfolioChangeHandler,
                        children: "ALL"
                    }, "All"),
                    /*#__PURE__*/ _jsx("h3", {
                        onClick: portfolioChangeHandler,
                        children: "WEDDING"
                    }, "weeding"),
                    /*#__PURE__*/ _jsx("h3", {
                        onClick: portfolioChangeHandler,
                        children: "MODEL"
                    }, "model"),
                    /*#__PURE__*/ _jsx("h3", {
                        onClick: portfolioChangeHandler,
                        children: "NATURE"
                    }, "nature")
                ]
            }),
            portfolioOption === 'ALL' && /*#__PURE__*/ _jsx("div", {
                className: styles.photo_wrapper,
                children: wedding_url.link.map((u)=>{
                    return(/*#__PURE__*/ _jsx("img", {
                        src: u
                    }));
                })
            }),
            portfolioOption === 'WEDDING' && /*#__PURE__*/ _jsx("div", {
                className: styles.photo_wrapper,
                children: wedding_url.link.map((u)=>{
                    return(/*#__PURE__*/ _jsx("img", {
                        src: u
                    }));
                })
            }),
            portfolioOption === 'MODEL' && /*#__PURE__*/ _jsx("div", {
                className: styles.photo_wrapper,
                children: model_url.link.map((u)=>{
                    return(/*#__PURE__*/ _jsx("img", {
                        src: u
                    }));
                })
            }),
            portfolioOption === 'NATURE' && /*#__PURE__*/ _jsx("div", {
                className: styles.photo_wrapper,
                children: nature_url.link.map((u)=>{
                    return(/*#__PURE__*/ _jsx("img", {
                        src: u
                    }));
                })
            }),
            portfolioOption === 'PORTRAIT' && /*#__PURE__*/ _jsx("div", {
                className: styles.photo_wrapper,
                children: portrait_url.link.map((u)=>{
                    return(/*#__PURE__*/ _jsx("img", {
                        src: u
                    }));
                })
            })
        ]
    }));
}
function MenuModal() {
    const { 0: openMenu , 1: setOpenMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_modal_module_css__WEBPACK_IMPORTED_MODULE_6___default().menu_modal),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "footer.jpg"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_modal_module_css__WEBPACK_IMPORTED_MODULE_6___default().menu_modal_content),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            children: "HomePage"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        href: "/portfolio",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: (_styles_modal_module_css__WEBPACK_IMPORTED_MODULE_6___default())[router.pathname == '/portfolio' && 'link'],
                            children: "Portfolio"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            children: "Contact"
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
/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1787);
/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utilscomponents_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3863);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4176);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6765);
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7055);
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2294);
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_6__);









function TopNav(props) {
    const { 0: menu , 1: openMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const menuOpenHandler = ()=>{
        openMenu(!menu);
        props.openMenu(menu);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().top_nav),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().primary_round_button),
                    onClick: menuOpenHandler,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_3___default()), {
                        style: {
                            fontSize: '3rem'
                        }
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    children: "Shashank kumar"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utilscomponents_Button__WEBPACK_IMPORTED_MODULE_2__/* .PrimaryButton */ .K, {
                content: "Get in touch"
            })
        ]
    }));
}
function RightNav() {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().right_nav),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_4___default()), {
                style: {
                    fontSize: '3.5rem',
                    fill: 'white'
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_5___default()), {
                style: {
                    fontSize: '3.5rem',
                    fill: 'rgb(212, 0, 255)'
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_6___default()), {
                style: {
                    fontSize: '3.5rem',
                    fill: 'white'
                }
            })
        ]
    }));
}


/***/ }),

/***/ 4449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cY": () => (/* binding */ nature_url),
/* harmony export */   "i2": () => (/* binding */ wedding_url)
/* harmony export */ });
/* unused harmony exports Bridal_url, landscape_url, model_url, portrait_url */
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
        "httpsssssss://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&h=350"
    ]
};


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