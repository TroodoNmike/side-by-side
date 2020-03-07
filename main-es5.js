function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./framework/angular-app/src/app/hello-world/hello-world.component.ts":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./framework/angular-app/src/app/hello-world/hello-world.component.ts ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsFrameworkAngularAppSrcAppHelloWorldHelloWorldComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-hello-world',\n  templateUrl: './hello-world.component.html',\n})\nexport class HelloWorldComponent {\n\n}\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./framework/react-app/src/components/HelloWorld.js":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./framework/react-app/src/components/HelloWorld.js ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsFrameworkReactAppSrcComponentsHelloWorldJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "import React, { Component } from 'react';\n\nclass HelloWorld extends Component {\n\n    render() {\n        return (\n            <p>I am component</p>\n        );\n\n    }\n}\n\nexport default HelloWorld;\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./framework/vuejs-app/src/components/HelloWorld.vue":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./framework/vuejs-app/src/components/HelloWorld.vue ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsFrameworkVuejsAppSrcComponentsHelloWorldVue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<template>\n    <p>I am component</p>\n</template>\n\n<script>\nexport default {\n  name: 'HelloWorld',\n}\n</script>\n";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_code_code_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/code/code.component */
    "./src/shared/code/code.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'compare';
      this.data = __webpack_require__(
      /*! raw-loader!./../../framework/angular-app/src/app/hello-world/hello-world.component */
      "./node_modules/raw-loader/dist/cjs.js!./framework/angular-app/src/app/hello-world/hello-world.component.ts").default;
      this.data2 = __webpack_require__(
      /*! raw-loader!./../../framework/vuejs-app/src/components/HelloWorld.vue */
      "./node_modules/raw-loader/dist/cjs.js!./framework/vuejs-app/src/components/HelloWorld.vue").default;
      this.data3 = __webpack_require__(
      /*! raw-loader!./../../framework/react-app/src/components/HelloWorld.js */
      "./node_modules/raw-loader/dist/cjs.js!./framework/react-app/src/components/HelloWorld.js").default;
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 13,
      vars: 6,
      consts: [[1, "d-flex", "flex-row", "align-items-stretch"], [1, "w-100"], ["data", "angular-app", "width", "100%", "height", "330", "type", "text/html"], [3, "code", "lang"], ["data", "vuejs-app", "width", "100%", "height", "330", "type", "text/html"], ["data", "react-app", "width", "100%", "height", "330", "type", "text/html"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "object", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Could not load");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ngbd-code", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "object", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Could not load");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ngbd-code", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "object", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Could not load");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "ngbd-code", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.data)("lang", "typescript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.data2)("lang", "javascript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.data3)("lang", "javascript");
        }
      },
      directives: [_shared_code_code_component__WEBPACK_IMPORTED_MODULE_1__["NgbdCodeComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _shared_code_code_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/code/code.module */
    "./src/shared/code/code.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _shared_code_code_module__WEBPACK_IMPORTED_MODULE_3__["NgbdCodeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _shared_code_code_module__WEBPACK_IMPORTED_MODULE_3__["NgbdCodeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _shared_code_code_module__WEBPACK_IMPORTED_MODULE_3__["NgbdCodeModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  "./src/shared/code/code-highlight.service.ts":
  /*!***************************************************!*\
    !*** ./src/shared/code/code-highlight.service.ts ***!
    \***************************************************/

  /*! exports provided: CodeHighlightService */

  /***/
  function srcSharedCodeCodeHighlightServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CodeHighlightService", function () {
      return CodeHighlightService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! prismjs */
    "./node_modules/prismjs/prism.js");
    /* harmony import */


    var prismjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! prismjs/components/prism-typescript */
    "./node_modules/prismjs/components/prism-typescript.js");
    /* harmony import */


    var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! prismjs/components/prism-bash */
    "./node_modules/prismjs/components/prism-bash.js");
    /* harmony import */


    var prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_3__); // Prism tries to highlight the whole document on DOMContentLoad.
    // Unfortunately with webpack the only way of disabling it
    // is by simply forcing it to highlight no elements -> []


    prismjs__WEBPACK_IMPORTED_MODULE_1__["hooks"].add('before-highlightall', function (env) {
      env['elements'] = [];
    });

    var CodeHighlightService =
    /*#__PURE__*/
    function () {
      function CodeHighlightService() {
        _classCallCheck(this, CodeHighlightService);
      }

      _createClass(CodeHighlightService, [{
        key: "highlight",
        value: function highlight(code, lang) {
          return prismjs__WEBPACK_IMPORTED_MODULE_1__["highlight"](code, prismjs__WEBPACK_IMPORTED_MODULE_1___default.a.languages.typescript, prismjs__WEBPACK_IMPORTED_MODULE_1__["languages"][lang]);
        }
      }]);

      return CodeHighlightService;
    }();

    CodeHighlightService.ɵfac = function CodeHighlightService_Factory(t) {
      return new (t || CodeHighlightService)();
    };

    CodeHighlightService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CodeHighlightService,
      factory: CodeHighlightService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CodeHighlightService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/shared/code/code.component.ts":
  /*!*******************************************!*\
    !*** ./src/shared/code/code.component.ts ***!
    \*******************************************/

  /*! exports provided: NgbdCodeComponent */

  /***/
  function srcSharedCodeCodeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbdCodeComponent", function () {
      return NgbdCodeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _code_highlight_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./code-highlight.service */
    "./src/shared/code/code-highlight.service.ts");

    var _c0 = ["code"];

    var NgbdCodeComponent =
    /*#__PURE__*/
    function () {
      function NgbdCodeComponent(_service) {
        _classCallCheck(this, NgbdCodeComponent);

        this._service = _service;
        this.code = '';
        this.lang = '';
      }

      _createClass(NgbdCodeComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.codeEl.nativeElement.innerHTML = this._service.highlight(this.code, this.lang);
        }
      }]);

      return NgbdCodeComponent;
    }();

    NgbdCodeComponent.ɵfac = function NgbdCodeComponent_Factory(t) {
      return new (t || NgbdCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_code_highlight_service__WEBPACK_IMPORTED_MODULE_1__["CodeHighlightService"]));
    };

    NgbdCodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgbdCodeComponent,
      selectors: [["ngbd-code"]],
      viewQuery: function NgbdCodeComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.codeEl = _t.first);
        }
      },
      inputs: {
        code: "code",
        lang: "lang"
      },
      decls: 3,
      vars: 6,
      consts: [["code", ""]],
      template: function NgbdCodeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code", null, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("language-", ctx.lang, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("language-", ctx.lang, "");
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbdCodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ngbd-code',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          template: "\n    <pre class=\"language-{{ lang }}\"><code #code class=\"language-{{ lang }}\"></code></pre>\n  "
        }]
      }], function () {
        return [{
          type: _code_highlight_service__WEBPACK_IMPORTED_MODULE_1__["CodeHighlightService"]
        }];
      }, {
        codeEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['code']
        }],
        code: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        lang: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/shared/code/code.module.ts":
  /*!****************************************!*\
    !*** ./src/shared/code/code.module.ts ***!
    \****************************************/

  /*! exports provided: NgbdCodeModule */

  /***/
  function srcSharedCodeCodeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbdCodeModule", function () {
      return NgbdCodeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _code_highlight_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./code-highlight.service */
    "./src/shared/code/code-highlight.service.ts");
    /* harmony import */


    var _code_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./code.component */
    "./src/shared/code/code.component.ts");

    var NgbdCodeModule = function NgbdCodeModule() {
      _classCallCheck(this, NgbdCodeModule);
    };

    NgbdCodeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NgbdCodeModule
    });
    NgbdCodeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NgbdCodeModule_Factory(t) {
        return new (t || NgbdCodeModule)();
      },
      providers: [_code_highlight_service__WEBPACK_IMPORTED_MODULE_2__["CodeHighlightService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgbdCodeModule, {
        declarations: [_code_component__WEBPACK_IMPORTED_MODULE_3__["NgbdCodeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_code_component__WEBPACK_IMPORTED_MODULE_3__["NgbdCodeComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbdCodeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_code_component__WEBPACK_IMPORTED_MODULE_3__["NgbdCodeComponent"]],
          exports: [_code_component__WEBPACK_IMPORTED_MODULE_3__["NgbdCodeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          providers: [_code_highlight_service__WEBPACK_IMPORTED_MODULE_2__["CodeHighlightService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/michalklik/Workspace/angular/compare/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map