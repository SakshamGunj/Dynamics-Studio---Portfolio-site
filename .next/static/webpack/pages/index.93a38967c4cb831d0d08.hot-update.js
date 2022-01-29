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
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar */ "./src/components/sidebar.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "E:\\dynamicStudio-PortfolioSite\\site\\src\\components\\HomePage.jsx",
    _s = $RefreshSig$();











function HomePage() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var onOpenPortfolioHandler = function onOpenPortfolioHandler() {
    router.push('/portfoliowork');
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      openMenu = _useState[0],
      setOpenMenu = _useState[1];

  var onGettingOpenMenuHandler = function onGettingOpenMenuHandler(action) {
    console.log(action);
    setOpenMenu(action);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("main", {
    className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a[openMenu == true ? 'menu_main' : 'main'],
    children: [openMenu && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_Modal__WEBPACK_IMPORTED_MODULE_2__["MenuModal"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_Navbar__WEBPACK_IMPORTED_MODULE_4__["TopNav"], {
      OpenMenu: onGettingOpenMenuHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_Navbar__WEBPACK_IMPORTED_MODULE_4__["RightNav"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("header", {
      className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
        src: "big.jpg",
        className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.large_image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 14
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a['header_title'],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h1", {
          children: "Dynamic"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 57
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 14
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a['small_image'],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
          src: "small-removebg.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 14
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 14
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_Services__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("section", {
      className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.article,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.article_image,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
          src: "photographer2.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 18
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.article_content,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("article", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
            className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.article_bold,
            children: "Awkward introduction? Clammy handshake? Nah, let\u2019s go in for a virtual bear hug and a quick two-minute spiel about who I am, because who I am is your new hyper-talented mate \u2013 a creative director and visual connoisseur with a background and degree in commercial and photojournalistic photography."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
            className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.article_normal,
            children: "As a multidisciplinary visual creator, I have a keen focus on film and an insatiable obsession with storytelling. I started out shooting weddings, where I learned the mystic and lesser-studied art of making people feel comfortable in front of a camera; from there I branched out into commercial work before founding my own production company, f\u0113lan films (derived from the origin of the word \u2018FEELING\u2019...you feel?)."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
            className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.article_normal,
            children: "Collaboration is the lifeblood of the moving image and a large part of why I adore what I do. Our team learned so much through creating content for top-tier clients that we felt downright professorial and accepted our humble duty to share the f\u0113lan genius with the masses. Corduroy jackets and mismatched elbow patches donned, we created Moments in a Minute \u2013 a complete guide to creating meaningful, impactful content that grabs people by the eyeballs for sixty seconds and refuses to let go."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
            className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.article_normal,
            children: "I love creating films in Melbourne, Sydney, all over Australia and the rest of the world. However, I also teach, work on live stream events, capture commercial and wedding photography and anything else with a heart that beats to the rhythm of filmmaking. And for the next few months I\u2019m a Byron Bay commercial director, focused on creating awesome content for a dazzling array of clients."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
            className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.article_normal,
            children: "So that\u2019s Andy in a nutshell. If you want to learn more about me (especially how I ended up inside a gigantic nut), take a peek around the rest of my site."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("section", {
      className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.photos,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
        src: "https://images.pexels.com/photos/1229414/pexels-photo-1229414.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.photo1
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
        src: "https://images.pexels.com/photos/948185/pexels-photo-948185.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.photo2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
        src: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.photo3
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
        src: "https://images.pexels.com/photos/1921168/pexels-photo-1921168.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.photo4
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
        src: "https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.photo5
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
        src: "model3.jpg",
        className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.photo6
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
        onClick: onOpenPortfolioHandler,
        className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.portfolio_button,
        children: "View Portfolio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("footer", {
      className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h2", {
        className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer_email,
        children: "shashankumar@gmail.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
        src: "footer.jpg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h3", {
        className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer_content_h3,
        children: "The Dynamics Studio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSG9tZVBhZ2UuanN4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwib25PcGVuUG9ydGZvbGlvSGFuZGxlciIsInB1c2giLCJ1c2VTdGF0ZSIsIm9wZW5NZW51Iiwic2V0T3Blbk1lbnUiLCJvbkdldHRpbmdPcGVuTWVudUhhbmRsZXIiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiaGVhZGVyIiwibGFyZ2VfaW1hZ2UiLCJhcnRpY2xlIiwiYXJ0aWNsZV9pbWFnZSIsImFydGljbGVfY29udGVudCIsImFydGljbGVfYm9sZCIsImFydGljbGVfbm9ybWFsIiwicGhvdG9zIiwicGhvdG8xIiwicGhvdG8yIiwicGhvdG8zIiwicGhvdG80IiwicGhvdG81IiwicGhvdG82IiwicG9ydGZvbGlvX2J1dHRvbiIsImZvb3RlciIsImZvb3Rlcl9lbWFpbCIsImZvb3Rlcl9jb250ZW50X2gzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQ2hCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixHQUFNO0FBQ2pDRixVQUFNLENBQUNHLElBQVAsQ0FBWSxnQkFBWjtBQUNILEdBRkQ7O0FBR0Esa0JBQStCQyxzREFBUSxFQUF2QztBQUFBLE1BQU1DLFFBQU47QUFBQSxNQUFnQkMsV0FBaEI7O0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixDQUFDQyxNQUFELEVBQVk7QUFDekNDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBQ0FGLGVBQVcsQ0FBQ0UsTUFBRCxDQUFYO0FBQ0gsR0FIRDs7QUFJQSxzQkFDSTtBQUFN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RUFBR1osa0VBQU0sQ0FBQ2E7QUFBL0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKLGVBTUk7QUFBSyxXQUFHLEVBQUcsWUFBWDtBQUF3QixpQkFBUyxFQUFHYixrRUFBTSxDQUFDYztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkosZUFPSTtBQUFRLGVBQU8sRUFBRXZCLHNCQUFqQjtBQUF5QyxpQkFBUyxFQUFFUyxrRUFBTSxDQUFDZSxnQkFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEzQkosZUFvQ0k7QUFBUSxlQUFTLEVBQUVmLGtFQUFNLENBQUNnQixNQUExQjtBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBRWhCLGtFQUFNLENBQUNpQixZQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBSyxXQUFHLEVBQUc7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFHSTtBQUFJLGlCQUFTLEVBQUVqQixrRUFBTSxDQUFDa0IsaUJBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNENIOztHQXREUTlCLFE7VUFDVUUscUQ7OztLQURWRixRO0FBd0RNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45M2EzODk2N2M0Y2I4MzFkMGQwOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvaG9tZXBhZ2UubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgTWVudU1vZGFsIH0gZnJvbSAnLi9Nb2RhbCc7XHJcbmltcG9ydCB7IFByaW1hcnlCdXR0b24gfSBmcm9tICcuLi91dGlsc2NvbXBvbmVudHMvQnV0dG9uJztcclxuaW1wb3J0IHsgVG9wTmF2LCBSaWdodE5hdiB9IGZyb20gJy4vTmF2YmFyJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgU2VydmljZXMgZnJvbSAnLi9TZXJ2aWNlcyc7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vc2lkZWJhcic7XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBvbk9wZW5Qb3J0Zm9saW9IYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvcG9ydGZvbGlvd29yaycpXHJcbiAgICB9XHJcbiAgICBjb25zdFtvcGVuTWVudSwgc2V0T3Blbk1lbnVdID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3Qgb25HZXR0aW5nT3Blbk1lbnVIYW5kbGVyID0gKGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbilcclxuICAgICAgICBzZXRPcGVuTWVudShhY3Rpb24pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzW29wZW5NZW51ID09IHRydWU/ICdtZW51X21haW4nOidtYWluJ119PlxyXG4gICAgICAgICAgIHtvcGVuTWVudSAmJiA8TWVudU1vZGFsIC8+fVxyXG4gICAgICAgICAgICA8VG9wTmF2IE9wZW5NZW51ID0ge29uR2V0dGluZ09wZW5NZW51SGFuZGxlcn0gLz5cclxuICAgICAgICAgICAgPFJpZ2h0TmF2IC8+XHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgICAgIDxpbWcgc3JjPSdiaWcuanBnJyBjbGFzc05hbWU9e3N0eWxlcy5sYXJnZV9pbWFnZX0gLz5cclxuICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZSA9IHtzdHlsZXNbJ2hlYWRlcl90aXRsZSddfT48aDE+RHluYW1pYzwvaDE+PC9kaXY+XHJcbiAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e3N0eWxlc1snc21hbGxfaW1hZ2UnXX0+XHJcbiAgICAgICAgICAgICA8aW1nIHNyYz0nc21hbGwtcmVtb3ZlYmcucG5nJy8+XHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgIDxTZXJ2aWNlcyAvPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7c3R5bGVzLmFydGljbGVfaW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgIDxpbWcgc3JjID0gJ3Bob3RvZ3JhcGhlcjIuanBnJyAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtzdHlsZXMuYXJ0aWNsZV9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZV9ib2xkfT5Bd2t3YXJkIGludHJvZHVjdGlvbj8gQ2xhbW15IGhhbmRzaGFrZT8gTmFoLCBsZXTigJlzIGdvIGluIGZvciBhIHZpcnR1YWwgYmVhciBodWcgYW5kIGEgcXVpY2sgdHdvLW1pbnV0ZSBzcGllbCBhYm91dCB3aG8gSSBhbSwgYmVjYXVzZSB3aG8gSSBhbSBpcyB5b3VyIG5ldyBoeXBlci10YWxlbnRlZCBtYXRlIOKAkyBhIGNyZWF0aXZlIGRpcmVjdG9yIGFuZCB2aXN1YWwgY29ubm9pc3NldXIgd2l0aCBhIGJhY2tncm91bmQgYW5kIGRlZ3JlZSBpbiBjb21tZXJjaWFsIGFuZCBwaG90b2pvdXJuYWxpc3RpYyBwaG90b2dyYXBoeS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGVfbm9ybWFsfT5BcyBhIG11bHRpZGlzY2lwbGluYXJ5IHZpc3VhbCBjcmVhdG9yLCBJIGhhdmUgYSBrZWVuIGZvY3VzIG9uIGZpbG0gYW5kIGFuIGluc2F0aWFibGUgb2JzZXNzaW9uIHdpdGggc3Rvcnl0ZWxsaW5nLiBJIHN0YXJ0ZWQgb3V0IHNob290aW5nIHdlZGRpbmdzLCB3aGVyZSBJIGxlYXJuZWQgdGhlIG15c3RpYyBhbmQgbGVzc2VyLXN0dWRpZWQgYXJ0IG9mIG1ha2luZyBwZW9wbGUgZmVlbCBjb21mb3J0YWJsZSBpbiBmcm9udCBvZiBhIGNhbWVyYTsgZnJvbSB0aGVyZSBJIGJyYW5jaGVkIG91dCBpbnRvIGNvbW1lcmNpYWwgd29yayBiZWZvcmUgZm91bmRpbmcgbXkgb3duIHByb2R1Y3Rpb24gY29tcGFueSwgZsSTbGFuIGZpbG1zIChkZXJpdmVkIGZyb20gdGhlIG9yaWdpbiBvZiB0aGUgd29yZCDigJhGRUVMSU5H4oCZLi4ueW91IGZlZWw/KS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGVfbm9ybWFsfT5Db2xsYWJvcmF0aW9uIGlzIHRoZSBsaWZlYmxvb2Qgb2YgdGhlIG1vdmluZyBpbWFnZSBhbmQgYSBsYXJnZSBwYXJ0IG9mIHdoeSBJIGFkb3JlIHdoYXQgSSBkby4gT3VyIHRlYW0gbGVhcm5lZCBzbyBtdWNoIHRocm91Z2ggY3JlYXRpbmcgY29udGVudCBmb3IgdG9wLXRpZXIgY2xpZW50cyB0aGF0IHdlIGZlbHQgZG93bnJpZ2h0IHByb2Zlc3NvcmlhbCBhbmQgYWNjZXB0ZWQgb3VyIGh1bWJsZSBkdXR5IHRvIHNoYXJlIHRoZSBmxJNsYW4gZ2VuaXVzIHdpdGggdGhlIG1hc3Nlcy4gQ29yZHVyb3kgamFja2V0cyBhbmQgbWlzbWF0Y2hlZCBlbGJvdyBwYXRjaGVzIGRvbm5lZCwgd2UgY3JlYXRlZCBNb21lbnRzIGluIGEgTWludXRlIOKAkyBhIGNvbXBsZXRlIGd1aWRlIHRvIGNyZWF0aW5nIG1lYW5pbmdmdWwsIGltcGFjdGZ1bCBjb250ZW50IHRoYXQgZ3JhYnMgcGVvcGxlIGJ5IHRoZSBleWViYWxscyBmb3Igc2l4dHkgc2Vjb25kcyBhbmQgcmVmdXNlcyB0byBsZXQgZ28uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlX25vcm1hbH0+SSBsb3ZlIGNyZWF0aW5nIGZpbG1zIGluIE1lbGJvdXJuZSwgU3lkbmV5LCBhbGwgb3ZlciBBdXN0cmFsaWEgYW5kIHRoZSByZXN0IG9mIHRoZSB3b3JsZC4gSG93ZXZlciwgSSBhbHNvIHRlYWNoLCB3b3JrIG9uIGxpdmUgc3RyZWFtIGV2ZW50cywgY2FwdHVyZSBjb21tZXJjaWFsIGFuZCB3ZWRkaW5nIHBob3RvZ3JhcGh5IGFuZCBhbnl0aGluZyBlbHNlIHdpdGggYSBoZWFydCB0aGF0IGJlYXRzIHRvIHRoZSByaHl0aG0gb2YgZmlsbW1ha2luZy4gQW5kIGZvciB0aGUgbmV4dCBmZXcgbW9udGhzIEnigJltIGEgQnlyb24gQmF5IGNvbW1lcmNpYWwgZGlyZWN0b3IsIGZvY3VzZWQgb24gY3JlYXRpbmcgYXdlc29tZSBjb250ZW50IGZvciBhIGRhenpsaW5nIGFycmF5IG9mIGNsaWVudHMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlX25vcm1hbH0+U28gdGhhdOKAmXMgQW5keSBpbiBhIG51dHNoZWxsLiBJZiB5b3Ugd2FudCB0byBsZWFybiBtb3JlIGFib3V0IG1lIChlc3BlY2lhbGx5IGhvdyBJIGVuZGVkIHVwIGluc2lkZSBhIGdpZ2FudGljIG51dCksIHRha2UgYSBwZWVrIGFyb3VuZCB0aGUgcmVzdCBvZiBteSBzaXRlLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiAgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9zfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjID0gJ2h0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzEyMjk0MTQvcGV4ZWxzLXBob3RvLTEyMjk0MTQuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwJyBjbGFzc05hbWU9eyhzdHlsZXMucGhvdG8xKX0gLz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjID0gJ2h0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzk0ODE4NS9wZXhlbHMtcGhvdG8tOTQ4MTg1LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MSZ3PTUwMCcgY2xhc3NOYW1lPXsoc3R5bGVzLnBob3RvMil9IC8+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYyA9ICdodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8xNjgwMTcyL3BleGVscy1waG90by0xNjgwMTcyLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZoPTc1MCZ3PTEyNjAnIGNsYXNzTmFtZT17KHN0eWxlcy5waG90bzMpfSAvPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmMgPSAnaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMTkyMTE2OC9wZXhlbHMtcGhvdG8tMTkyMTE2OC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTMmaD03NTAmdz0xMjYwJyBjbGFzc05hbWU9eyhzdHlsZXMucGhvdG80KX0gLz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjID0gJ2h0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzExNzIyMDcvcGV4ZWxzLXBob3RvLTExNzIyMDcuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0yJmg9NjUwJnc9OTQwJyBjbGFzc05hbWU9eyhzdHlsZXMucGhvdG81KX0gLz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjID0gJ21vZGVsMy5qcGcnIGNsYXNzTmFtZT17KHN0eWxlcy5waG90bzYpfSAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbk9wZW5Qb3J0Zm9saW9IYW5kbGVyfSBjbGFzc05hbWU9e3N0eWxlcy5wb3J0Zm9saW9fYnV0dG9ufT5WaWV3IFBvcnRmb2xpbzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJfZW1haWx9PnNoYXNoYW5rdW1hckBnbWFpbC5jb208L2gyPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmMgPSAnZm9vdGVyLmpwZycgLz5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJfY29udGVudF9oM30+VGhlIER5bmFtaWNzIFN0dWRpbzwvaDM+XHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==