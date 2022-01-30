(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6210:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "homepage_main__8zUAZ",
	"menu_main": "homepage_menu_main__sLq_s",
	"header": "homepage_header__8ZPfL",
	"header_title": "homepage_header_title__5Os8t",
	"small_image": "homepage_small_image__chG3_",
	"large_image": "homepage_large_image__P_DA0",
	"work": "homepage_work__kOXnC",
	"wedding_work": "homepage_wedding_work__YsMez",
	"commercial_work": "homepage_commercial_work__Jc_y7",
	"product_work": "homepage_product_work__Qew8e",
	"indoor_work": "homepage_indoor_work__fSmct",
	"work_image": "homepage_work_image__6H2ex",
	"work_heading": "homepage_work_heading__eQK61",
	"article": "homepage_article__CaxjP",
	"article_image": "homepage_article_image__bqPVO",
	"article_content": "homepage_article_content___4EVq",
	"article_bold": "homepage_article_bold__W5H6M",
	"article_normal": "homepage_article_normal__BLQ4V",
	"photos": "homepage_photos__Ttdml",
	"photo1": "homepage_photo1__xnjMZ",
	"photo2": "homepage_photo2__nZX8w",
	"photo3": "homepage_photo3__byjjI",
	"photo4": "homepage_photo4__HF4UH",
	"photo5": "homepage_photo5__Ci5aG",
	"photo6": "homepage_photo6__f7o3F",
	"footer": "homepage_footer__Q8bq_",
	"footer_contact": "homepage_footer_contact__fbmNQ",
	"footer_email": "homepage_footer_email__uZRv6",
	"footer_content_h3": "homepage_footer_content_h3__MEJ6A",
	"portfolio_button": "homepage_portfolio_button__KQ39Q",
	"top_nav": "homepage_top_nav__ZdZaw",
	"primary_button": "homepage_primary_button__Q00At",
	"primary_round_button": "homepage_primary_round_button__7PfJQ",
	"slide-fwd-center": "homepage_slide-fwd-center__jkJB7"
};


/***/ }),

/***/ 9762:
/***/ ((module) => {

// Exports
module.exports = {
	"services": "services_services__epBNt",
	"servicesHeading": "services_servicesHeading__Gscx9",
	"servicesCard": "services_servicesCard__vSRf6",
	"card": "services_card__exTfa",
	"card_image": "services_card_image__2p1Ij",
	"card_heading": "services_card_heading__8UiFb",
	"card_content": "services_card_content__QQjt_"
};


/***/ }),

/***/ 8222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/homepage.module.css
var homepage_module = __webpack_require__(6210);
var homepage_module_default = /*#__PURE__*/__webpack_require__.n(homepage_module);
// EXTERNAL MODULE: ./src/components/Modal.jsx
var Modal = __webpack_require__(9929);
// EXTERNAL MODULE: ./src/utilscomponents/Button.jsx
var utilscomponents_Button = __webpack_require__(3863);
// EXTERNAL MODULE: ./src/components/Navbar.jsx
var Navbar = __webpack_require__(6446);
// EXTERNAL MODULE: external "aos"
var external_aos_ = __webpack_require__(9783);
var external_aos_default = /*#__PURE__*/__webpack_require__.n(external_aos_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./styles/services.module.css
var services_module = __webpack_require__(9762);
var services_module_default = /*#__PURE__*/__webpack_require__.n(services_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/Services.jsx








function Card({ image , heading , subheading , description , key , link  }) {
    (0,external_react_.useEffect)(()=>{
        external_aos_default().init({
            duration: 500
        });
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: link,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (services_module_default()).card,
            "data-aos": "fade-right",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (services_module_default()).card_image,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: image
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (services_module_default()).card_heading,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: heading
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            children: subheading
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (services_module_default()).card_content,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: description
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            children: "Explore Work"
                        })
                    ]
                })
            ]
        }, key)
    }));
}
function Services() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (services_module_default()).services,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (services_module_default()).servicesHeading,
                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: "I offer my clients a wide range of services in various directions. Someone thinks that a professional photographer should be focused on one type of photography, but for my practice I have gained enough experience to feel confident in several different directions."
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (services_module_default()).servicesCard,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Card, {
                        link: "/portfoliowork/wedding",
                        image: "model1.jpg",
                        heading: "emotion captured in time",
                        subheading: "Wedding Photography",
                        description: "Marriage is one of the most important and emotional events in our life. Therefore, choosing a photographer for this purpose should be approached very responsibly. I have a lot of experience to working on weddings and don't miss anything. "
                    }, "1"),
                    /*#__PURE__*/ jsx_runtime_.jsx(Card, {
                        link: "/portfoliowork/commercial",
                        image: "photographer1.jpg",
                        heading: "help selling something",
                        subheading: "Commercial works",
                        description: "If we are talking about high-quality promotional photos, then you can not talk about savings, but you need to approach the matter with all responsibility and seriousness. After all, future sales directly depend on the quality of the finished photos."
                    }, "2"),
                    /*#__PURE__*/ jsx_runtime_.jsx(Card, {
                        link: "/portfoliowork/indoor",
                        image: "model3.jpg",
                        heading: "pictures tell memories",
                        subheading: "Indoor photography",
                        description: "If you are a beginner model and you do not have portfolio of enough quality so this service is for you. Together we can create you professional models portfolio. The work takes place both in the studio and in nature, depending on the wishes of the client."
                    }, "3"),
                    /*#__PURE__*/ jsx_runtime_.jsx(Card, {
                        link: "/portfoliowork/product",
                        image: "big.jpg",
                        heading: "products too have memories",
                        subheading: "Product Photography",
                        description: "If we are talking about high-quality promotional photos, then you can not talk about savings, but you need to approach the matter with all responsibility and seriousness. After all, future sales directly depend on the quality of the finished photos."
                    }, "4")
                ]
            })
        ]
    }));
}
/* harmony default export */ const components_Services = (Services);

;// CONCATENATED MODULE: external "@mui/material/Box"
const Box_namespaceObject = require("@mui/material/Box");
;// CONCATENATED MODULE: external "@mui/material/Drawer"
const Drawer_namespaceObject = require("@mui/material/Drawer");
;// CONCATENATED MODULE: external "@mui/material/Button"
const Button_namespaceObject = require("@mui/material/Button");
;// CONCATENATED MODULE: external "@mui/material/List"
const List_namespaceObject = require("@mui/material/List");
;// CONCATENATED MODULE: external "@mui/material/Divider"
const Divider_namespaceObject = require("@mui/material/Divider");
;// CONCATENATED MODULE: external "@mui/material/ListItem"
const ListItem_namespaceObject = require("@mui/material/ListItem");
;// CONCATENATED MODULE: external "@mui/material/ListItemIcon"
const ListItemIcon_namespaceObject = require("@mui/material/ListItemIcon");
;// CONCATENATED MODULE: external "@mui/material/ListItemText"
const ListItemText_namespaceObject = require("@mui/material/ListItemText");
;// CONCATENATED MODULE: ./src/components/sidebar.jsx










function Sidebar() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false
    });
    const toggleDrawer = (anchor, open)=>(event)=>{
            if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                return;
            }
            setState({
                ...state,
                [anchor]: open
            });
        }
    ;
    const list = (anchor)=>/*#__PURE__*/ _jsxs(Box, {
            sx: {
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250
            },
            role: "presentation",
            onClick: toggleDrawer(anchor, false),
            onKeyDown: toggleDrawer(anchor, false),
            children: [
                /*#__PURE__*/ _jsx(List, {
                    children: [
                        'Inbox',
                        'Starred',
                        'Send email',
                        'Drafts'
                    ].map((text, index)=>/*#__PURE__*/ _jsxs(ListItem, {
                            button: true,
                            children: [
                                /*#__PURE__*/ _jsx(ListItemIcon, {
                                }),
                                /*#__PURE__*/ _jsx(ListItemText, {
                                    primary: text
                                })
                            ]
                        }, text)
                    )
                }),
                /*#__PURE__*/ _jsx(Divider, {
                }),
                /*#__PURE__*/ _jsx(List, {
                    children: [
                        'All mail',
                        'Trash',
                        'Spam'
                    ].map((text, index)=>/*#__PURE__*/ _jsxs(ListItem, {
                            button: true,
                            children: [
                                /*#__PURE__*/ _jsx(ListItemIcon, {
                                }),
                                /*#__PURE__*/ _jsx(ListItemText, {
                                    primary: text
                                })
                            ]
                        }, text)
                    )
                })
            ]
        })
    ;
    return(/*#__PURE__*/ _jsx("div", {
        children: [
            'left',
            'right',
            'top',
            'bottom'
        ].map((anchor)=>/*#__PURE__*/ _jsxs(React.Fragment, {
                children: [
                    /*#__PURE__*/ _jsx(Button, {
                        onClick: toggleDrawer(anchor, true),
                        children: anchor
                    }),
                    /*#__PURE__*/ _jsx(Drawer, {
                        anchor: anchor,
                        open: state[anchor],
                        onClose: toggleDrawer(anchor, false),
                        children: list(anchor)
                    })
                ]
            }, anchor)
        )
    }));
};

// EXTERNAL MODULE: external "@material-ui/icons/Instagram"
var Instagram_ = __webpack_require__(6765);
var Instagram_default = /*#__PURE__*/__webpack_require__.n(Instagram_);
// EXTERNAL MODULE: external "@material-ui/icons/Facebook"
var Facebook_ = __webpack_require__(7055);
var Facebook_default = /*#__PURE__*/__webpack_require__.n(Facebook_);
// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__(7501);
// EXTERNAL MODULE: external "@material-ui/icons/WhatsApp"
var WhatsApp_ = __webpack_require__(9723);
var WhatsApp_default = /*#__PURE__*/__webpack_require__.n(WhatsApp_);
// EXTERNAL MODULE: external "@material-ui/icons/Twitter"
var Twitter_ = __webpack_require__(2294);
var Twitter_default = /*#__PURE__*/__webpack_require__.n(Twitter_);
;// CONCATENATED MODULE: ./src/components/HomePage.jsx
















function HomePage() {
    (0,external_react_.useEffect)(()=>{
        external_aos_default().init({
            duration: 500
        });
    }, []);
    const router = (0,router_.useRouter)();
    const onOpenPortfolioHandler = ()=>{
        router.push('/portfoliowork');
    };
    const { 0: openMenu , 1: setOpenMenu  } = (0,external_react_.useState)();
    const onGettingOpenMenuHandler = (action)=>{
        console.log(action);
        setOpenMenu(action);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: (homepage_module_default())[openMenu == true ? 'menu_main' : 'main'],
        children: [
            openMenu && /*#__PURE__*/ jsx_runtime_.jsx(Modal/* MenuModal */.H, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* TopNav */.t, {
                OpenMenu: onGettingOpenMenuHandler
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* RightNav */.L, {
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: (homepage_module_default()).header,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "big.jpg",
                        className: (homepage_module_default()).large_image
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (homepage_module_default()).header_title,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            "data-aos": "fade-up",
                            children: "Dynamic"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (homepage_module_default()).small_image,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "small-removebg.png"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Services, {
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: (homepage_module_default()).article,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (homepage_module_default()).article_image,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "photographer2.jpg"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (homepage_module_default()).article_content,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                            "data-aos": "fade-up",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (homepage_module_default()).article_bold,
                                    children: "Awkward introduction? Clammy handshake? Nah, let’s go in for a virtual bear hug and a quick two-minute spiel about who I am, because who I am is your new hyper-talented mate – a creative director and visual connoisseur with a background and degree in commercial and photojournalistic photography."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (homepage_module_default()).article_normal,
                                    children: "As a multidisciplinary visual creator, I have a keen focus on film and an insatiable obsession with storytelling. I started out shooting weddings, where I learned the mystic and lesser-studied art of making people feel comfortable in front of a camera; from there I branched out into commercial work before founding my own production company, fēlan films (derived from the origin of the word ‘FEELING’...you feel?)."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (homepage_module_default()).article_normal,
                                    children: "Collaboration is the lifeblood of the moving image and a large part of why I adore what I do. Our team learned so much through creating content for top-tier clients that we felt downright professorial and accepted our humble duty to share the fēlan genius with the masses. Corduroy jackets and mismatched elbow patches donned, we created Moments in a Minute – a complete guide to creating meaningful, impactful content that grabs people by the eyeballs for sixty seconds and refuses to let go."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (homepage_module_default()).article_normal,
                                    children: "I love creating films in Melbourne, Sydney, all over Australia and the rest of the world. However, I also teach, work on live stream events, capture commercial and wedding photography and anything else with a heart that beats to the rhythm of filmmaking. And for the next few months I’m a Byron Bay commercial director, focused on creating awesome content for a dazzling array of clients."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (homepage_module_default()).article_normal,
                                    children: "So that’s Andy in a nutshell. If you want to learn more about me (especially how I ended up inside a gigantic nut), take a peek around the rest of my site."
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: (homepage_module_default()).photos,
                "data-aos": "fade-up",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "https://images.pexels.com/photos/1229414/pexels-photo-1229414.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                        className: (homepage_module_default()).photo1
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "https://images.pexels.com/photos/948185/pexels-photo-948185.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                        className: (homepage_module_default()).photo2
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                        className: (homepage_module_default()).photo3
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "https://images.pexels.com/photos/1921168/pexels-photo-1921168.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                        className: (homepage_module_default()).photo4
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                        className: (homepage_module_default()).photo5
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "model3.jpg",
                        className: (homepage_module_default()).photo6
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        "data-aos": "fade-up",
                        onClick: onOpenPortfolioHandler,
                        className: (homepage_module_default()).portfolio_button,
                        children: "View Portfolio"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
                className: (homepage_module_default()).footer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        "data-aos": "fade-up",
                        className: (homepage_module_default()).footer_email,
                        children: "shashankumar@gmail.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "footer.jpg"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: (homepage_module_default()).footer_content_h3,
                        children: "The Dynamics Studio @2021"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (homepage_module_default()).footer_contact,
                        "data-aos": "fade-up",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Instagram_default()), {
                                style: {
                                    fontSize: '3rem',
                                    fill: 'white'
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Facebook_default()), {
                                style: {
                                    fontSize: '3rem',
                                    fill: 'white'
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Twitter_default()), {
                                style: {
                                    fontSize: '3rem',
                                    fill: 'white'
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((WhatsApp_default()), {
                                style: {
                                    fontSize: '3rem',
                                    fill: 'white'
                                }
                            })
                        ]
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const components_HomePage = (HomePage);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
;// CONCATENATED MODULE: ./pages/index.js




const getStaticProps = async ()=>{
    return {
        props: {
            url: 'big.jpg'
        }
    };
};
function index() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("head", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charset: "UTF-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        "http-equiv": "X-UA-Compatible",
                        content: "IE=edge"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Homepage"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_HomePage, {
            })
        ]
    }));
}
/* harmony default export */ const pages = (index);


/***/ }),

/***/ 7501:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ 7055:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Facebook");

/***/ }),

/***/ 6765:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Instagram");

/***/ }),

/***/ 4176:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ 2294:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Twitter");

/***/ }),

/***/ 9723:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/WhatsApp");

/***/ }),

/***/ 9783:
/***/ ((module) => {

"use strict";
module.exports = require("aos");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,261], () => (__webpack_exec__(8222)));
module.exports = __webpack_exports__;

})();