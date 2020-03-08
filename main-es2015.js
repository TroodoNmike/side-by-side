(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./framework/angular-app/src/app/app.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./framework/angular-app/src/app/app.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-hello-world></app-hello-world>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./framework/angular-app/src/app/hello-world/hello-world.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./framework/angular-app/src/app/hello-world/hello-world.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>I am component</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./framework/angular-app/src/app/hello-world/hello-world.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./framework/angular-app/src/app/hello-world/hello-world.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-hello-world',\n  templateUrl: './hello-world.component.html',\n})\nexport class HelloWorldComponent {\n\n}\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./framework/angular-app/src/app/hello-world/hello-world.module.ts":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./framework/angular-app/src/app/hello-world/hello-world.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { HelloWorldComponent } from './hello-world.component';\n\n@NgModule({\n  declarations: [\n    HelloWorldComponent\n  ],\n  exports: [\n    HelloWorldComponent\n  ],\n  imports: [\n    CommonModule\n  ]\n})\nexport class HelloWorldModule {\n}\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./framework/react-app/src/App.js":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./framework/react-app/src/App.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from 'react';\nimport './App.css';\nimport HelloWorld from \"./components/HelloWorld\";\n\nfunction App() {\n  return (\n    <div className=\"align-center\">\n      <HelloWorld />\n    </div>\n  );\n}\n\nexport default App;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./framework/react-app/src/components/HelloWorld.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./framework/react-app/src/components/HelloWorld.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { Component } from 'react';\n\nclass HelloWorld extends Component {\n\n    render() {\n        return (\n            <p>I am component</p>\n        );\n\n    }\n}\n\nexport default HelloWorld;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./framework/vuejs-app/src/App.vue":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./framework/vuejs-app/src/App.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<template>\n  <div>\n    <HelloWorld />\n  </div>\n</template>\n\n<script>\nimport HelloWorld from './components/HelloWorld.vue'\n\nexport default {\n  name: 'App',\n  components: {\n    HelloWorld\n  }\n}\n</script>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./framework/vuejs-app/src/components/HelloWorld.vue":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./framework/vuejs-app/src/components/HelloWorld.vue ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<template>\n    <p>I am component</p>\n</template>\n\n<script>\nexport default {\n  name: 'HelloWorld',\n}\n</script>\n");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _framework_framework_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./framework/framework.component */ "./src/app/framework/framework.component.ts");
/* harmony import */ var _shared_code_code_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/code/code.component */ "./src/shared/code/code.component.ts");




class AppComponent {
    constructor() {
        this.title = 'compare';
        this.data0 = __webpack_require__(/*! raw-loader!./../../framework/angular-app/src/app/app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./framework/angular-app/src/app/app.component.html").default;
        this.data = __webpack_require__(/*! raw-loader!./../../framework/angular-app/src/app/hello-world/hello-world.component */ "./node_modules/raw-loader/dist/cjs.js!./framework/angular-app/src/app/hello-world/hello-world.component.ts").default;
        this.datab = __webpack_require__(/*! raw-loader!./../../framework/angular-app/src/app/hello-world/hello-world.component.html */ "./node_modules/raw-loader/dist/cjs.js!./framework/angular-app/src/app/hello-world/hello-world.component.html").default;
        this.datac = __webpack_require__(/*! raw-loader!./../../framework/angular-app/src/app/hello-world/hello-world.module */ "./node_modules/raw-loader/dist/cjs.js!./framework/angular-app/src/app/hello-world/hello-world.module.ts").default;
        this.data2 = __webpack_require__(/*! raw-loader!./../../framework/vuejs-app/src/App.vue */ "./node_modules/raw-loader/dist/cjs.js!./framework/vuejs-app/src/App.vue").default;
        this.data2b = __webpack_require__(/*! raw-loader!./../../framework/vuejs-app/src/components/HelloWorld.vue */ "./node_modules/raw-loader/dist/cjs.js!./framework/vuejs-app/src/components/HelloWorld.vue").default;
        this.data3 = __webpack_require__(/*! raw-loader!./../../framework/react-app/src/App.js */ "./node_modules/raw-loader/dist/cjs.js!./framework/react-app/src/App.js").default;
        this.data3b = __webpack_require__(/*! raw-loader!./../../framework/react-app/src/components/HelloWorld.js */ "./node_modules/raw-loader/dist/cjs.js!./framework/react-app/src/components/HelloWorld.js").default;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 83, vars: 16, consts: [[1, "container-fluid", "mt-5", "pt-3"], [1, "row"], [1, "col-4"], [1, "card"], [1, "card-body", "pt-3", "p-0"], ["url", "angular-app", "description", "<app-hello-world></app-hello-world>"], ["width", "40", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], [1, "nav", "nav-tabs", "mx-3"], [1, "nav-item"], ["data-toggle", "tab", "href", "#home0", 1, "nav-link", "active"], [1, "nav-item", "dropdown"], ["data-toggle", "dropdown", "href", "#", "role", "button", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "dropdown-menu"], ["data-toggle", "tab", "href", "#home", 1, "dropdown-item"], ["data-toggle", "tab", "href", "#menu1", 1, "dropdown-item"], ["data-toggle", "tab", "href", "#menu2", 1, "dropdown-item"], [1, "tab-content"], ["id", "home0", 1, "tab-pane", "active"], [3, "code", "lang"], ["id", "home", 1, "tab-pane", "fade"], ["id", "menu1", 1, "tab-pane", "fade"], ["id", "menu2", 1, "tab-pane", "fade"], [1, "col-4", "px-0"], ["url", "vuejs-app", "description", "<HelloWorld />"], ["width", "40", "alt", "Vue.js logo", "src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAKRlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgExAAIAAAAfAAAAWodpAAQAAAABAAAAegAAAAAAAABIAAAAAQAAAEgAAAABQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAUKADAAQAAAABAAAAUAAAAABIW3d1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEEmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iPgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjk5NkJCOEY5NzYxNjExRTVBODRFOEZCMTY0OTE2MkQ4PC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOjY1NkExMjc5NzY5MjExRTM5MTg5OEQ5MEJGOENFNDc2PC9zdFJlZjpp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"], ["data-toggle", "tab", "href", "#vue1", 1, "nav-link", "active"], ["data-toggle", "tab", "href", "#vue2", 1, "nav-link"], ["id", "vue1", 1, "tab-pane", "active"], ["id", "vue2", 1, "tab-pane", "fade"], ["url", "react-app", "description", "<HelloWorld />"], ["width", "40", "alt", "Vue.js logo", "src", "assets/react-logo.svg"], ["data-toggle", "tab", "href", "#react1", 1, "nav-link", "active"], ["data-toggle", "tab", "href", "#react2", 1, "nav-link"], ["id", "react1", 1, "tab-pane", "active"], ["id", "react2", 1, "tab-pane", "fade"], [1, "navbar", "fixed-top", "navbar-light", "bg-light"], ["href", "#", 1, "navbar-brand"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills"], ["id", "pills-home-tab", "data-toggle", "pill", "href", "#pills-home", "role", "tab", "aria-controls", "pills-home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "pills-profile-tab", "data-toggle", "pill", "href", "#pills-profile", "role", "tab", "aria-controls", "pills-profile", "aria-selected", "false", 1, "nav-link"], ["id", "pills-contact-tab", "data-toggle", "pill", "href", "#pills-contact", "role", "tab", "aria-controls", "pills-contact", "aria-selected", "false", 1, "nav-link"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-framework", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "ANGULAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "app.component.html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Hello World");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "hello-world.component.ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "hello-world.component.html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "hello-world.module.ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-code", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-code", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-code", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-code", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "app-framework", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Vue.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "App.vue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "HelloWorld.vue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "app-code", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "app-code", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "app-framework", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "React");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "App.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "HelloWorld.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "app-code", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "app-code", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "nav", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Side by side code comparison");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "ul", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Basic Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Basic use of Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Basic Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.data0)("lang", "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.data)("lang", "typescript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.datab)("lang", "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.datac)("lang", "typescript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.data2)("lang", "javascript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.data2b)("lang", "javascript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.data3)("lang", "javascript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.data3b)("lang", "javascript");
    } }, directives: [_framework_framework_component__WEBPACK_IMPORTED_MODULE_1__["FrameworkComponent"], _shared_code_code_component__WEBPACK_IMPORTED_MODULE_2__["CodeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_code_code_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/code/code.module */ "./src/shared/code/code.module.ts");
/* harmony import */ var _framework_framework_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./framework/framework.module */ "./src/app/framework/framework.module.ts");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _shared_code_code_module__WEBPACK_IMPORTED_MODULE_3__["CodeModule"],
            _framework_framework_module__WEBPACK_IMPORTED_MODULE_4__["FrameworkModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _shared_code_code_module__WEBPACK_IMPORTED_MODULE_3__["CodeModule"],
        _framework_framework_module__WEBPACK_IMPORTED_MODULE_4__["FrameworkModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _shared_code_code_module__WEBPACK_IMPORTED_MODULE_3__["CodeModule"],
                    _framework_framework_module__WEBPACK_IMPORTED_MODULE_4__["FrameworkModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/framework/framework.component.ts":
/*!**************************************************!*\
  !*** ./src/app/framework/framework.component.ts ***!
  \**************************************************/
/*! exports provided: FrameworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameworkComponent", function() { return FrameworkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



const _c0 = ["*"];
class FrameworkComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
}
FrameworkComponent.ɵfac = function FrameworkComponent_Factory(t) { return new (t || FrameworkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
FrameworkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FrameworkComponent, selectors: [["app-framework"]], inputs: { url: "url", description: "description" }, ngContentSelectors: _c0, decls: 8, vars: 2, consts: [[1, "text-center", "mb-2"], [1, "text-center", "mb-3"], [1, "text-center"], ["width", "100%", "height", "65", "type", "text/html", 3, "data"]], template: function FrameworkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Basic Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "pre", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "object", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Could not load");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.sanitizer.bypassSecurityTrustResourceUrl(ctx.url), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrameworkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-framework',
                templateUrl: './framework.component.html'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, { url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/framework/framework.module.ts":
/*!***********************************************!*\
  !*** ./src/app/framework/framework.module.ts ***!
  \***********************************************/
/*! exports provided: FrameworkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameworkModule", function() { return FrameworkModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _framework_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./framework.component */ "./src/app/framework/framework.component.ts");
/* harmony import */ var _shared_code_code_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/code/code.module */ "./src/shared/code/code.module.ts");





class FrameworkModule {
}
FrameworkModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FrameworkModule });
FrameworkModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FrameworkModule_Factory(t) { return new (t || FrameworkModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_code_code_module__WEBPACK_IMPORTED_MODULE_3__["CodeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FrameworkModule, { declarations: [_framework_component__WEBPACK_IMPORTED_MODULE_2__["FrameworkComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_code_code_module__WEBPACK_IMPORTED_MODULE_3__["CodeModule"]], exports: [_framework_component__WEBPACK_IMPORTED_MODULE_2__["FrameworkComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrameworkModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_framework_component__WEBPACK_IMPORTED_MODULE_2__["FrameworkComponent"]],
                exports: [
                    _framework_component__WEBPACK_IMPORTED_MODULE_2__["FrameworkComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_code_code_module__WEBPACK_IMPORTED_MODULE_3__["CodeModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/shared/code/code-highlight.service.ts":
/*!***************************************************!*\
  !*** ./src/shared/code/code-highlight.service.ts ***!
  \***************************************************/
/*! exports provided: CodeHighlightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeHighlightService", function() { return CodeHighlightService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs/components/prism-typescript */ "./node_modules/prismjs/components/prism-typescript.js");
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs/components/prism-bash */ "./node_modules/prismjs/components/prism-bash.js");
/* harmony import */ var prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_3__);






// Prism tries to highlight the whole document on DOMContentLoad.
// Unfortunately with webpack the only way of disabling it
// is by simply forcing it to highlight no elements -> []
prismjs__WEBPACK_IMPORTED_MODULE_1__["hooks"].add('before-highlightall', (env) => {
    env['elements'] = [];
});
class CodeHighlightService {
    highlight(code, lang) {
        return prismjs__WEBPACK_IMPORTED_MODULE_1__["highlight"](code, prismjs__WEBPACK_IMPORTED_MODULE_1___default.a.languages.typescript, prismjs__WEBPACK_IMPORTED_MODULE_1__["languages"][lang]);
    }
}
CodeHighlightService.ɵfac = function CodeHighlightService_Factory(t) { return new (t || CodeHighlightService)(); };
CodeHighlightService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CodeHighlightService, factory: CodeHighlightService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CodeHighlightService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/shared/code/code.component.ts":
/*!*******************************************!*\
  !*** ./src/shared/code/code.component.ts ***!
  \*******************************************/
/*! exports provided: CodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeComponent", function() { return CodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _code_highlight_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code-highlight.service */ "./src/shared/code/code-highlight.service.ts");



const _c0 = ["code"];
class CodeComponent {
    constructor(service) {
        this.service = service;
        this.code = '';
        this.lang = '';
    }
    ngAfterViewInit() {
        this.codeEl.nativeElement.innerHTML = this.service.highlight(this.code, this.lang);
    }
}
CodeComponent.ɵfac = function CodeComponent_Factory(t) { return new (t || CodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_code_highlight_service__WEBPACK_IMPORTED_MODULE_1__["CodeHighlightService"])); };
CodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CodeComponent, selectors: [["app-code"]], viewQuery: function CodeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.codeEl = _t.first);
    } }, inputs: { code: "code", lang: "lang" }, decls: 3, vars: 6, consts: [["code", ""]], template: function CodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("language-", ctx.lang, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("language-", ctx.lang, "");
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-code',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <pre class="language-{{ lang }}"><code #code class="language-{{ lang }}"></code></pre>
  `
            }]
    }], function () { return [{ type: _code_highlight_service__WEBPACK_IMPORTED_MODULE_1__["CodeHighlightService"] }]; }, { codeEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['code']
        }], code: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lang: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/shared/code/code.module.ts":
/*!****************************************!*\
  !*** ./src/shared/code/code.module.ts ***!
  \****************************************/
/*! exports provided: CodeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeModule", function() { return CodeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _code_highlight_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code-highlight.service */ "./src/shared/code/code-highlight.service.ts");
/* harmony import */ var _code_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code.component */ "./src/shared/code/code.component.ts");





class CodeModule {
}
CodeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CodeModule });
CodeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CodeModule_Factory(t) { return new (t || CodeModule)(); }, providers: [
        _code_highlight_service__WEBPACK_IMPORTED_MODULE_2__["CodeHighlightService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CodeModule, { declarations: [_code_component__WEBPACK_IMPORTED_MODULE_3__["CodeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_code_component__WEBPACK_IMPORTED_MODULE_3__["CodeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CodeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _code_component__WEBPACK_IMPORTED_MODULE_3__["CodeComponent"]
                ],
                exports: [
                    _code_component__WEBPACK_IMPORTED_MODULE_3__["CodeComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                providers: [
                    _code_highlight_service__WEBPACK_IMPORTED_MODULE_2__["CodeHighlightService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/michalklik/Workspace/angular/compare/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map