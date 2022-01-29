webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/HomePage.jsx":
/*!*************************************!*\
  !*** ./src/components/HomePage.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/homepage.module.css */ "./styles/homepage.module.css");
/* harmony import */ var _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ "./src/components/Modal.jsx");
/* harmony import */ var _utilscomponents_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilscomponents/Button */ "./src/utilscomponents/Button.jsx");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navbar */ "./src/components/Navbar.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Services */ "./src/components/Services.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar */ "./src/components/sidebar.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "E:\\dynamicStudio-PortfolioSite\\site\\src\\components\\HomePage.jsx",
    _s = $RefreshSig$();












function HomePage() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  console.log(router);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      openMenu = _useState[0],
      setOpenMenu = _useState[1];

  var onGettingOpenMenuHandler = function onGettingOpenMenuHandler(action) {
    console.log(action);
    setOpenMenu(action);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("main", {
    className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a[openMenu == true ? 'menu_main' : 'main'],
    children: [openMenu && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_Modal__WEBPACK_IMPORTED_MODULE_2__["MenuModal"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_Navbar__WEBPACK_IMPORTED_MODULE_4__["TopNav"], {
      OpenMenu: onGettingOpenMenuHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_Navbar__WEBPACK_IMPORTED_MODULE_4__["RightNav"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("header", {
      className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
        src: "big.jpg",
        className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.large_image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 14
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a['header_title'],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h1", {
          children: "Dynamic"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 57
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 14
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a['small_image'],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
          src: "small-removebg.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 14
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 14
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_Services__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("section", {
      className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.article,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.article_image,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
          src: "photographer2.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 18
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.article_content,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("article", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
            className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.article_bold,
            children: "Awkward introduction? Clammy handshake? Nah, let\u2019s go in for a virtual bear hug and a quick two-minute spiel about who I am, because who I am is your new hyper-talented mate \u2013 a creative director and visual connoisseur with a background and degree in commercial and photojournalistic photography."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
            className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.article_normal,
            children: "As a multidisciplinary visual creator, I have a keen focus on film and an insatiable obsession with storytelling. I started out shooting weddings, where I learned the mystic and lesser-studied art of making people feel comfortable in front of a camera; from there I branched out into commercial work before founding my own production company, f\u0113lan films (derived from the origin of the word \u2018FEELING\u2019...you feel?)."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
            className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.article_normal,
            children: "Collaboration is the lifeblood of the moving image and a large part of why I adore what I do. Our team learned so much through creating content for top-tier clients that we felt downright professorial and accepted our humble duty to share the f\u0113lan genius with the masses. Corduroy jackets and mismatched elbow patches donned, we created Moments in a Minute \u2013 a complete guide to creating meaningful, impactful content that grabs people by the eyeballs for sixty seconds and refuses to let go."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
            className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.article_normal,
            children: "I love creating films in Melbourne, Sydney, all over Australia and the rest of the world. However, I also teach, work on live stream events, capture commercial and wedding photography and anything else with a heart that beats to the rhythm of filmmaking. And for the next few months I\u2019m a Byron Bay commercial director, focused on creating awesome content for a dazzling array of clients."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
            className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.article_normal,
            children: "So that\u2019s Andy in a nutshell. If you want to learn more about me (especially how I ended up inside a gigantic nut), take a peek around the rest of my site."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("section", {
      className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.photos,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
        src: "https://images.pexels.com/photos/1229414/pexels-photo-1229414.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.photo1
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
        src: "https://images.pexels.com/photos/948185/pexels-photo-948185.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.photo2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
        src: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.photo3
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
        src: "https://images.pexels.com/photos/1921168/pexels-photo-1921168.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.photo4
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
        src: "https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.photo5
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
        src: "model3.jpg",
        className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.photo6
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
        className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.portfolio_button,
        children: "View Portfolio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("footer", {
      className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h2", {
        className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer_email,
        children: "shashankumar@gmail.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
        src: "footer.jpg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h3", {
        className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer_content_h3,
        children: "The Dynamics Studio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, this);
}

_s(HomePage, "9gLFOx9Uh61B4asW7bnyEh5lAPo=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSG9tZVBhZ2UuanN4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwib3Blbk1lbnUiLCJzZXRPcGVuTWVudSIsIm9uR2V0dGluZ09wZW5NZW51SGFuZGxlciIsImFjdGlvbiIsInN0eWxlcyIsImhlYWRlciIsImxhcmdlX2ltYWdlIiwiYXJ0aWNsZSIsImFydGljbGVfaW1hZ2UiLCJhcnRpY2xlX2NvbnRlbnQiLCJhcnRpY2xlX2JvbGQiLCJhcnRpY2xlX25vcm1hbCIsInBob3RvcyIsInBob3RvMSIsInBob3RvMiIsInBob3RvMyIsInBob3RvNCIsInBob3RvNSIsInBob3RvNiIsInBvcnRmb2xpb19idXR0b24iLCJmb290ZXIiLCJmb290ZXJfZW1haWwiLCJmb290ZXJfY29udGVudF9oMyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFDaEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsTUFBWjs7QUFDQSxrQkFBK0JJLHNEQUFRLEVBQXZDO0FBQUEsTUFBTUMsUUFBTjtBQUFBLE1BQWdCQyxXQUFoQjs7QUFDQSxNQUFNQyx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLENBQUNDLE1BQUQsRUFBWTtBQUN6Q04sV0FBTyxDQUFDQyxHQUFSLENBQVlLLE1BQVo7QUFDQUYsZUFBVyxDQUFDRSxNQUFELENBQVg7QUFDSCxHQUhEOztBQUlBLHNCQUNJO0FBQU0sYUFBUyxFQUFFQyxrRUFBTSxDQUFDSixRQUFRLElBQUksSUFBWixHQUFrQixXQUFsQixHQUE4QixNQUEvQixDQUF2QjtBQUFBLGVBQ0lB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LGlCQUFTLEVBQUdiLGtFQUFNLENBQUNjO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOSixlQU9JO0FBQVMsaUJBQVMsRUFBRWQsa0VBQU0sQ0FBQ2UsZ0JBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0JKLGVBb0NJO0FBQVEsZUFBUyxFQUFFZixrRUFBTSxDQUFDZ0IsTUFBMUI7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUVoQixrRUFBTSxDQUFDaUIsWUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUssV0FBRyxFQUFHO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0k7QUFBSSxpQkFBUyxFQUFFakIsa0VBQU0sQ0FBQ2tCLGlCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTRDSDs7R0FwRFE1QixRO1VBQ1VFLHFEOzs7S0FEVkYsUTtBQXNETUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTU4MmViZjcyNzg4MDdjZmE1NDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2hvbWVwYWdlLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IE1lbnVNb2RhbCB9IGZyb20gJy4vTW9kYWwnO1xyXG5pbXBvcnQgeyBQcmltYXJ5QnV0dG9uIH0gZnJvbSAnLi4vdXRpbHNjb21wb25lbnRzL0J1dHRvbic7XHJcbmltcG9ydCB7IFRvcE5hdiwgUmlnaHROYXYgfSBmcm9tICcuL05hdmJhcic7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFNlcnZpY2VzIGZyb20gJy4vU2VydmljZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vc2lkZWJhcic7XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIpXHJcbiAgICBjb25zdFtvcGVuTWVudSwgc2V0T3Blbk1lbnVdID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3Qgb25HZXR0aW5nT3Blbk1lbnVIYW5kbGVyID0gKGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbilcclxuICAgICAgICBzZXRPcGVuTWVudShhY3Rpb24pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzW29wZW5NZW51ID09IHRydWU/ICdtZW51X21haW4nOidtYWluJ119PlxyXG4gICAgICAgICAgIHtvcGVuTWVudSAmJiA8TWVudU1vZGFsIC8+fVxyXG4gICAgICAgICAgICA8VG9wTmF2IE9wZW5NZW51ID0ge29uR2V0dGluZ09wZW5NZW51SGFuZGxlcn0gLz5cclxuICAgICAgICAgICAgPFJpZ2h0TmF2IC8+XHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgICAgIDxpbWcgc3JjPSdiaWcuanBnJyBjbGFzc05hbWU9e3N0eWxlcy5sYXJnZV9pbWFnZX0gLz5cclxuICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZSA9IHtzdHlsZXNbJ2hlYWRlcl90aXRsZSddfT48aDE+RHluYW1pYzwvaDE+PC9kaXY+XHJcbiAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e3N0eWxlc1snc21hbGxfaW1hZ2UnXX0+XHJcbiAgICAgICAgICAgICA8aW1nIHNyYz0nc21hbGwtcmVtb3ZlYmcucG5nJy8+XHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgIDxTZXJ2aWNlcyAvPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7c3R5bGVzLmFydGljbGVfaW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgIDxpbWcgc3JjID0gJ3Bob3RvZ3JhcGhlcjIuanBnJyAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtzdHlsZXMuYXJ0aWNsZV9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZV9ib2xkfT5Bd2t3YXJkIGludHJvZHVjdGlvbj8gQ2xhbW15IGhhbmRzaGFrZT8gTmFoLCBsZXTigJlzIGdvIGluIGZvciBhIHZpcnR1YWwgYmVhciBodWcgYW5kIGEgcXVpY2sgdHdvLW1pbnV0ZSBzcGllbCBhYm91dCB3aG8gSSBhbSwgYmVjYXVzZSB3aG8gSSBhbSBpcyB5b3VyIG5ldyBoeXBlci10YWxlbnRlZCBtYXRlIOKAkyBhIGNyZWF0aXZlIGRpcmVjdG9yIGFuZCB2aXN1YWwgY29ubm9pc3NldXIgd2l0aCBhIGJhY2tncm91bmQgYW5kIGRlZ3JlZSBpbiBjb21tZXJjaWFsIGFuZCBwaG90b2pvdXJuYWxpc3RpYyBwaG90b2dyYXBoeS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGVfbm9ybWFsfT5BcyBhIG11bHRpZGlzY2lwbGluYXJ5IHZpc3VhbCBjcmVhdG9yLCBJIGhhdmUgYSBrZWVuIGZvY3VzIG9uIGZpbG0gYW5kIGFuIGluc2F0aWFibGUgb2JzZXNzaW9uIHdpdGggc3Rvcnl0ZWxsaW5nLiBJIHN0YXJ0ZWQgb3V0IHNob290aW5nIHdlZGRpbmdzLCB3aGVyZSBJIGxlYXJuZWQgdGhlIG15c3RpYyBhbmQgbGVzc2VyLXN0dWRpZWQgYXJ0IG9mIG1ha2luZyBwZW9wbGUgZmVlbCBjb21mb3J0YWJsZSBpbiBmcm9udCBvZiBhIGNhbWVyYTsgZnJvbSB0aGVyZSBJIGJyYW5jaGVkIG91dCBpbnRvIGNvbW1lcmNpYWwgd29yayBiZWZvcmUgZm91bmRpbmcgbXkgb3duIHByb2R1Y3Rpb24gY29tcGFueSwgZsSTbGFuIGZpbG1zIChkZXJpdmVkIGZyb20gdGhlIG9yaWdpbiBvZiB0aGUgd29yZCDigJhGRUVMSU5H4oCZLi4ueW91IGZlZWw/KS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGVfbm9ybWFsfT5Db2xsYWJvcmF0aW9uIGlzIHRoZSBsaWZlYmxvb2Qgb2YgdGhlIG1vdmluZyBpbWFnZSBhbmQgYSBsYXJnZSBwYXJ0IG9mIHdoeSBJIGFkb3JlIHdoYXQgSSBkby4gT3VyIHRlYW0gbGVhcm5lZCBzbyBtdWNoIHRocm91Z2ggY3JlYXRpbmcgY29udGVudCBmb3IgdG9wLXRpZXIgY2xpZW50cyB0aGF0IHdlIGZlbHQgZG93bnJpZ2h0IHByb2Zlc3NvcmlhbCBhbmQgYWNjZXB0ZWQgb3VyIGh1bWJsZSBkdXR5IHRvIHNoYXJlIHRoZSBmxJNsYW4gZ2VuaXVzIHdpdGggdGhlIG1hc3Nlcy4gQ29yZHVyb3kgamFja2V0cyBhbmQgbWlzbWF0Y2hlZCBlbGJvdyBwYXRjaGVzIGRvbm5lZCwgd2UgY3JlYXRlZCBNb21lbnRzIGluIGEgTWludXRlIOKAkyBhIGNvbXBsZXRlIGd1aWRlIHRvIGNyZWF0aW5nIG1lYW5pbmdmdWwsIGltcGFjdGZ1bCBjb250ZW50IHRoYXQgZ3JhYnMgcGVvcGxlIGJ5IHRoZSBleWViYWxscyBmb3Igc2l4dHkgc2Vjb25kcyBhbmQgcmVmdXNlcyB0byBsZXQgZ28uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlX25vcm1hbH0+SSBsb3ZlIGNyZWF0aW5nIGZpbG1zIGluIE1lbGJvdXJuZSwgU3lkbmV5LCBhbGwgb3ZlciBBdXN0cmFsaWEgYW5kIHRoZSByZXN0IG9mIHRoZSB3b3JsZC4gSG93ZXZlciwgSSBhbHNvIHRlYWNoLCB3b3JrIG9uIGxpdmUgc3RyZWFtIGV2ZW50cywgY2FwdHVyZSBjb21tZXJjaWFsIGFuZCB3ZWRkaW5nIHBob3RvZ3JhcGh5IGFuZCBhbnl0aGluZyBlbHNlIHdpdGggYSBoZWFydCB0aGF0IGJlYXRzIHRvIHRoZSByaHl0aG0gb2YgZmlsbW1ha2luZy4gQW5kIGZvciB0aGUgbmV4dCBmZXcgbW9udGhzIEnigJltIGEgQnlyb24gQmF5IGNvbW1lcmNpYWwgZGlyZWN0b3IsIGZvY3VzZWQgb24gY3JlYXRpbmcgYXdlc29tZSBjb250ZW50IGZvciBhIGRhenpsaW5nIGFycmF5IG9mIGNsaWVudHMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlX25vcm1hbH0+U28gdGhhdOKAmXMgQW5keSBpbiBhIG51dHNoZWxsLiBJZiB5b3Ugd2FudCB0byBsZWFybiBtb3JlIGFib3V0IG1lIChlc3BlY2lhbGx5IGhvdyBJIGVuZGVkIHVwIGluc2lkZSBhIGdpZ2FudGljIG51dCksIHRha2UgYSBwZWVrIGFyb3VuZCB0aGUgcmVzdCBvZiBteSBzaXRlLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiAgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9zfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjID0gJ2h0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzEyMjk0MTQvcGV4ZWxzLXBob3RvLTEyMjk0MTQuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwJyBjbGFzc05hbWU9eyhzdHlsZXMucGhvdG8xKX0gLz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjID0gJ2h0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzk0ODE4NS9wZXhlbHMtcGhvdG8tOTQ4MTg1LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MSZ3PTUwMCcgY2xhc3NOYW1lPXsoc3R5bGVzLnBob3RvMil9IC8+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYyA9ICdodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8xNjgwMTcyL3BleGVscy1waG90by0xNjgwMTcyLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZoPTc1MCZ3PTEyNjAnIGNsYXNzTmFtZT17KHN0eWxlcy5waG90bzMpfSAvPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmMgPSAnaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMTkyMTE2OC9wZXhlbHMtcGhvdG8tMTkyMTE2OC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTMmaD03NTAmdz0xMjYwJyBjbGFzc05hbWU9eyhzdHlsZXMucGhvdG80KX0gLz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjID0gJ2h0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzExNzIyMDcvcGV4ZWxzLXBob3RvLTExNzIyMDcuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0yJmg9NjUwJnc9OTQwJyBjbGFzc05hbWU9eyhzdHlsZXMucGhvdG81KX0gLz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjID0gJ21vZGVsMy5qcGcnIGNsYXNzTmFtZT17KHN0eWxlcy5waG90bzYpfSAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPXtzdHlsZXMucG9ydGZvbGlvX2J1dHRvbn0+VmlldyBQb3J0Zm9saW88L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyX2VtYWlsfT5zaGFzaGFua3VtYXJAZ21haWwuY29tPC9oMj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjID0gJ2Zvb3Rlci5qcGcnIC8+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyX2NvbnRlbnRfaDN9PlRoZSBEeW5hbWljcyBTdHVkaW88L2gzPlxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=