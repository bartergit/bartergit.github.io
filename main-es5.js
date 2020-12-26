function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["about"]],
      decls: 162,
      vars: 0,
      consts: [[1, "container"], ["id", "me"], ["src", "assets/img/me.jpg"], ["href", "https://github.com/bartergit?tab=repositories"], ["href", "https://t.me/B1arter"], ["href", "mailto: aivanpozdnyakov@gmail.com"], [1, "tech"], ["href", "https://github.com/bartergit/chat-app"], ["href", "http://barter-chat-app-with-cringe.herokuapp.com/"], ["href", "https://github.com/bartergit/algorithms"], ["href", "https://github.com/bartergit/tetris-typescript"], ["href", "https://codepen.io/bartercodepen/full/zYKGreQ"], ["href", "https://github.com/bartergit/computational-geometry"], ["href", "https://docs.google.com/presentation/d/154AXvU_-pWtsDzvZ8GumDt0AqSuFoj-jOV43zLAFnNU/edit?usp=sharing"], ["href", "https://github.com/bartergit/svelte-snake"], ["href", "https://codepen.io/bartercodepen/full/wvzGqQa"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Ivan Pozdnyakov");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contacts and links");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "GitHub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Telegram");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Gmail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Technologies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Languages:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Python: my core language, I have the most experience in it. Self educated with books, articles, videos and stuff. Most of my student projects and pet-projects are made in Python. Love Python :3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "C++. Very first language. It was taught in university for 2 years. I know the principals, but have a little development experience.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Javascript. Mostly front-end, some knowledge about Svelte, Angular (this page for example) and React. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Other: I had university courses in Java, C#, PHP, Wolfram.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Other:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "SQL basics. I actually designed a whole small database in pair with my group mate.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Familiar with Continuous Integration (Jenkinks).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Dockers essentials. Very basics. I'm familiar with Linux too.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "I had my struggles with backend servers like Heroku, Google VM and so on.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "My pet-projects:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Chat app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Github");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Try!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Languages: Python, JS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Chat app, hosted on heroku. Developed with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "flask");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " as server, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "svelte");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " as front-end (javascript library) and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "psql");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " database (pure, without ORM). ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Socket-io");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " is used on both client and server side to emitting messages. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Algorithms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Github");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Languages: Python, Go, C++ ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Scripts for my algorithms classes. The following algorithms are implemented: binary and interpolation search, quick sort, merge sort, hybrid sort, algorithms for building, traversing and balancing a binary search tree, various hashing algorithms, solution of the Haino tower problem in the general case, Conway's Game of Life, construction of eulerian cycles, determining if a graph is bipartite, finding the shortest paths (Dijkstra, Floyd), stable matching problem solution, branch-and-bound solution to the traveling salesman problem (Little's algorithm), minimal spanning tree (Prim's, Kruskal's algorithms), erastofen sieve, binary search, and some others! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Tetris game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Github");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Try!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Language: Typescript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Simple tetris app on pure typescript with canvas usage. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Computation geometry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Github");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Language: Python");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Some geometric algorithm visualization with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "matplotlib");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, ", for example, different building convex hull approaches, detecting collision, detecting the 2 closest points (Divide and conquer), triangulation and some others. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Text generator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Github");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Presentation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Language: Python");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Text generator with Markov chains usage and Pymorphy2 morphological analyzer. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Snake game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Github");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Try!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Language: JS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " Simple svelte application on Svelte. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "English");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Not sure, somewhere in between B1-B2. I watch TV shows in English and try to be better! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Advantages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Sociable");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Love to learn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Open-minded");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Good at googling stuff");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Disadvantages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Too hard working");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Too handsome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Too boastful");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "I'm currently studying at BSU MMF for the 3rd course. My specialty is \"Web-programming and Internet technologies\". I'm In full time education, but trust me, it will not be a problem, if you want to offer me a job.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "I have completed several online courses, done some freelance tasks for Upwork. I'm looking forward to a new experience! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');\nh1[_ngcontent-%COMP%] {\n  font-size: 200%;\n  font-weight: 500;\n  \n  font-family: \"Cascadia Mono\";\n  margin-top: 28px;\n}\n#me[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\nh2[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-family: \"Cascadia Mono\";\n  margin-bottom: 0px;\n}\nli[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  \n  font-size: 110%;\n}\np[_ngcontent-%COMP%] {\n  margin: 0px;\n}\nli[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\nimg[_ngcontent-%COMP%] {\n  width: 25%;\n  float: left;\n  margin-right: 30px;\n}\n.tech[_ngcontent-%COMP%] {\n  margin: 0px;\n}\na[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  margin-bottom: 5px;\n  font-size: 20px;\n  font-family: \"Cascadia Mono\";\n  text-decoration: none;\n  border-bottom: 1px solid#2ea44f;\n  box-shadow: inset 0 -3px 0#2ea44f;\n  color: inherit;\n  transition: background 0.1s cubic-bezier(.33, .66, .66, 1);\n}\na[_ngcontent-%COMP%]:hover {\n  background: #2ea44f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9GQUFvRjtBQUNwRjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQiwrQkFBK0I7RUFDL0IsaUNBQWlDO0VBQ2pDLGNBQWM7RUFDZCwwREFBMEQ7QUFDNUQ7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcbmgxIHtcbiAgZm9udC1zaXplOiAyMDAlO1xuICBmb250LXdlaWdodDogNTAwO1xuICAvKiBtYXJnaW4tdG9wOiA1MHB4OyAqL1xuICBmb250LWZhbWlseTogXCJDYXNjYWRpYSBNb25vXCI7XG4gIG1hcmdpbi10b3A6IDI4cHg7XG59XG5cbiNtZSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbmgyIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IFwiQ2FzY2FkaWEgTW9ub1wiO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbmxpLCBwIHtcbiAgLyogZm9udC1mYW1pbHk6ICdSb2JvdG8nOyAqL1xuICBmb250LXNpemU6IDExMCU7XG59XG5cbnAge1xuICBtYXJnaW46IDBweDtcbn1cblxubGkge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG5pbWcge1xuICB3aWR0aDogMjUlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuXG4udGVjaCB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5hIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiQ2FzY2FkaWEgTW9ub1wiO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCMyZWE0NGY7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTNweCAwIzJlYTQ0ZjtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xcyBjdWJpYy1iZXppZXIoLjMzLCAuNjYsIC42NiwgMSk7XG59XG5cbmE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMmVhNDRmO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'about',
          templateUrl: './about.html',
          styleUrls: ['./about.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
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


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _visualizer_vis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./visualizer/vis */
    "./src/app/visualizer/vis.ts");
    /* harmony import */


    var _maze_maze__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./maze/maze */
    "./src/app/maze/maze.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.page = "maze";
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 7,
      vars: 0,
      consts: [["mat-align-tabs", "center", "animationDuration", "0ms"], ["label", "Sort visualization"], ["label", "Maze generation"], ["label", "About me"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "visualizer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "maze-generator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-tab", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "about");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTab"], _visualizer_vis__WEBPACK_IMPORTED_MODULE_2__["Visualizer"], _maze_maze__WEBPACK_IMPORTED_MODULE_3__["Maze"], _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: "./app.html",
          styleUrls: ['app.css']
        }]
      }], function () {
        return [];
      }, null);
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


    var _visualizer_vis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./visualizer/vis */
    "./src/app/visualizer/vis.ts");
    /* harmony import */


    var _maze_maze__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./maze/maze */
    "./src/app/maze/maze.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _comp_comp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./comp/comp.component */
    "./src/app/comp/comp.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js"); // import { NgxGistModule } from 'ngx-gist/dist/ngx-gist.module';


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
      providers: [{
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
        useValue: {
          appearance: 'fill'
        }
      }],
      imports: [[_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _visualizer_vis__WEBPACK_IMPORTED_MODULE_3__["Visualizer"], _maze_maze__WEBPACK_IMPORTED_MODULE_4__["Maze"], _comp_comp_component__WEBPACK_IMPORTED_MODULE_11__["CompComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"]],
        imports: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _visualizer_vis__WEBPACK_IMPORTED_MODULE_3__["Visualizer"], _maze_maze__WEBPACK_IMPORTED_MODULE_4__["Maze"], _comp_comp_component__WEBPACK_IMPORTED_MODULE_11__["CompComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"]],
          imports: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]],
          providers: [{
            provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
            useValue: {
              appearance: 'fill'
            }
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/comp/comp.component.ts":
  /*!****************************************!*\
    !*** ./src/app/comp/comp.component.ts ***!
    \****************************************/

  /*! exports provided: CompComponent */

  /***/
  function srcAppCompCompComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompComponent", function () {
      return CompComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CompComponent = /*#__PURE__*/function () {
      function CompComponent() {
        _classCallCheck(this, CompComponent);
      }

      _createClass(CompComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CompComponent;
    }();

    CompComponent.ɵfac = function CompComponent_Factory(t) {
      return new (t || CompComponent)();
    };

    CompComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CompComponent,
      selectors: [["app-comp"]],
      decls: 2,
      vars: 0,
      template: function CompComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " comp works! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-comp',
          template: "\n    <p>\n      comp works!\n    </p>\n  ",
          styles: []
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/draw.ts":
  /*!*************************!*\
    !*** ./src/app/draw.ts ***!
    \*************************/

  /*! exports provided: Draw */

  /***/
  function srcAppDrawTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Draw", function () {
      return Draw;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["canvas"];

    var Draw = /*#__PURE__*/function () {
      function Draw(fps) {
        _classCallCheck(this, Draw);

        this.time = {
          start: 0,
          elapsed: 0,
          fps: 1000 / fps
        };
      }

      _createClass(Draw, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ctx = this.canvas.nativeElement.getContext("2d");
          this.time.start = performance.now(); // this.animate();
        }
      }, {
        key: "animate",
        value: function animate() {
          this.time.elapsed += performance.now() - this.time.start;
          this.draw(Math.min(this.time.elapsed / this.time.fps, 1));

          if (this.time.elapsed >= this.time.fps) {
            this.time.elapsed = 0;
            this.update(); //update
          }

          this.time.start = performance.now();
          this.requestId = requestAnimationFrame(this.animate.bind(this));
        }
      }]);

      return Draw;
    }();

    Draw.ɵfac = function Draw_Factory(t) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"]();
    };

    Draw.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: Draw,
      viewQuery: function Draw_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        }
      }
    });
    /***/
  },

  /***/
  "./src/app/maze/generators/AldousBroder.ts":
  /*!*************************************************!*\
    !*** ./src/app/maze/generators/AldousBroder.ts ***!
    \*************************************************/

  /*! exports provided: AldousBroder */

  /***/
  function srcAppMazeGeneratorsAldousBroderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AldousBroder", function () {
      return AldousBroder;
    });
    /* harmony import */


    var _help__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./help */
    "./src/app/maze/generators/help.ts");

    function getNearCells(grid, cell) {
      var freeCells = [];
      var i = cell[0];
      var j = cell[1];

      if (i + 1 < grid.length) {
        freeCells.push([i + 1, j]);
      }

      if (j + 1 < grid[0].length) {
        freeCells.push([i, j + 1]);
      }

      if (i - 1 >= 0) {
        freeCells.push([i - 1, j]);
      }

      if (j - 1 >= 0) {
        freeCells.push([i, j - 1]);
      }

      if (freeCells.length == 0) return null;
      return freeCells[Object(_help__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, freeCells.length)];
    }

    function AldousBroder(N) {
      var steps = [];
      var grid = new Array(N);

      for (var i = 0; i < N; i++) {
        grid[i] = new Array(N);
      }

      grid[0][0] = true;
      var cell = [0, 0];
      var totalNumber = grid.length * grid[0].length - 1;

      while (totalNumber != 0) {
        var new_cell = getNearCells(grid, cell);

        if (!grid[new_cell[0]][new_cell[1]]) {
          grid[new_cell[0]][new_cell[1]] = true;
          steps.push([cell, new_cell, true]);
          totalNumber--;
        }

        cell = new_cell;
      }

      return steps;
    }
    /***/

  },

  /***/
  "./src/app/maze/generators/binaryTree.ts":
  /*!***********************************************!*\
    !*** ./src/app/maze/generators/binaryTree.ts ***!
    \***********************************************/

  /*! exports provided: binaryTree */

  /***/
  function srcAppMazeGeneratorsBinaryTreeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "binaryTree", function () {
      return binaryTree;
    });
    /* harmony import */


    var _help__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./help */
    "./src/app/maze/generators/help.ts");

    function getNearCells(grid, cell) {
      var freeCells = [];
      var i = cell[0];
      var j = cell[1];

      if (i + 1 < grid.length && grid[i + 1][j] != null) {
        freeCells.push([i + 1, j]);
      }

      if (j + 1 < grid[0].length && grid[i][j + 1] != null) {
        freeCells.push([i, j + 1]);
      }

      if (i - 1 >= 0 && grid[i - 1][j] != null) {
        freeCells.push([i - 1, j]);
      }

      if (j - 1 >= 0 && grid[i][j - 1] != null) {
        freeCells.push([i, j - 1]);
      }

      if (freeCells.length == 0) return null;
      return freeCells[Object(_help__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, freeCells.length)];
    }

    function binaryTree(N) {
      var steps = [];
      var grid = new Array(N);

      for (var i = 0; i < N; i++) {
        grid[i] = new Array(N);
      }

      grid[0][0] = true;
      steps.push([[0, 0], [0, 0], false]); //start -> end, color, progressive: boolean

      for (var _i = 0; _i < N; _i++) {
        for (var j = 0; j < N; j++) {
          if (_i == 0 && j == 0) {
            continue;
          } else {
            var connected = getNearCells(grid, [_i, j]);
            steps.push([[_i, j], [_i, j], false]);
            steps.push([[_i, j], connected, true]);
            grid[_i][j] = true;
          }
        }
      }

      return steps;
    }
    /***/

  },

  /***/
  "./src/app/maze/generators/help.ts":
  /*!*****************************************!*\
    !*** ./src/app/maze/generators/help.ts ***!
    \*****************************************/

  /*! exports provided: getRandomInt */

  /***/
  function srcAppMazeGeneratorsHelpTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getRandomInt", function () {
      return getRandomInt;
    });

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    }
    /***/

  },

  /***/
  "./src/app/maze/generators/randomizedDepthFirstSearch.ts":
  /*!***************************************************************!*\
    !*** ./src/app/maze/generators/randomizedDepthFirstSearch.ts ***!
    \***************************************************************/

  /*! exports provided: randomizedDepthFirstSearch */

  /***/
  function srcAppMazeGeneratorsRandomizedDepthFirstSearchTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "randomizedDepthFirstSearch", function () {
      return randomizedDepthFirstSearch;
    });
    /* harmony import */


    var _help__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./help */
    "./src/app/maze/generators/help.ts");

    function getNearCells(grid, cell) {
      var freeCells = [];
      var i = cell[0];
      var j = cell[1];

      if (i + 1 < grid.length && grid[i + 1][j] == null) {
        freeCells.push([i + 1, j]);
      }

      if (j + 1 < grid[0].length && grid[i][j + 1] == null) {
        freeCells.push([i, j + 1]);
      }

      if (i - 1 >= 0 && grid[i - 1][j] == null) {
        freeCells.push([i - 1, j]);
      }

      if (j - 1 >= 0 && grid[i][j - 1] == null) {
        freeCells.push([i, j - 1]);
      }

      if (freeCells.length == 0) return null;
      return freeCells[Object(_help__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, freeCells.length)];
    }

    function recursiveFunction(grid, cell, steps, n) {
      var i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var nearCell = getNearCells(grid, cell);
      i++;

      if (nearCell == null) {
        if (i > 2 * n * n) {
          return;
        } else {
          steps.push([cell, grid[cell[0]][cell[1]], false]);
          recursiveFunction(grid, grid[cell[0]][cell[1]], steps, n, i);
        }
      } else {
        grid[nearCell[0]][nearCell[1]] = cell;
        steps.push([cell, nearCell, true]);
        recursiveFunction(grid, nearCell, steps, n, i);
      }
    }

    function randomizedDepthFirstSearch(N) {
      var steps = [];
      var grid = new Array(N);

      for (var i = 0; i < N; i++) {
        grid[i] = new Array(N);
      }

      recursiveFunction(grid, [0, 0], steps, N);
      return steps;
    }
    /***/

  },

  /***/
  "./src/app/maze/generators/recursionDivision.ts":
  /*!******************************************************!*\
    !*** ./src/app/maze/generators/recursionDivision.ts ***!
    \******************************************************/

  /*! exports provided: recursionDivision */

  /***/
  function srcAppMazeGeneratorsRecursionDivisionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "recursionDivision", function () {
      return recursionDivision;
    });
    /* harmony import */


    var _help__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./help */
    "./src/app/maze/generators/help.ts");

    function recursiveDivide(x1, x2, y1, y2, flag, steps) {
      var height = y2 - y1;
      var width = x2 - x1;
      if (height < 1) return;
      if (width < 1) return;
      flag = !flag;

      if (flag) {
        var h = Object(_help__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(x1, x2);
        var w = Object(_help__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(y1, y2);
        steps.push([[h, y1 - 1], [h, w], true]);
        steps.push([[h, w + 1], [h, y2], true]);
        recursiveDivide(x1, h, y1, y2, flag, steps);
        recursiveDivide(h + 1, x2, y1, y2, flag, steps);
      } else {
        var _h = Object(_help__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(x1, x2);

        var _w = Object(_help__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(y1, y2);

        steps.push([[x1 - 1, _w], [_h, _w], true]);
        steps.push([[_h + 1, _w], [x2, _w], true]);
        recursiveDivide(x1, x2, y1, _w, flag, steps);
        recursiveDivide(x1, x2, _w + 1, y2, flag, steps);
      }
    }

    function recursionDivision(N) {
      var steps = [];
      recursiveDivide(0, N, 0, N, true, steps);
      return steps;
    }
    /***/

  },

  /***/
  "./src/app/maze/maze.ts":
  /*!******************************!*\
    !*** ./src/app/maze/maze.ts ***!
    \******************************/

  /*! exports provided: Maze */

  /***/
  function srcAppMazeMazeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Maze", function () {
      return Maze;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../draw */
    "./src/app/draw.ts");
    /* harmony import */


    var _generators_recursionDivision__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./generators/recursionDivision */
    "./src/app/maze/generators/recursionDivision.ts");
    /* harmony import */


    var _generators_AldousBroder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./generators/AldousBroder */
    "./src/app/maze/generators/AldousBroder.ts");
    /* harmony import */


    var _generators_binaryTree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./generators/binaryTree */
    "./src/app/maze/generators/binaryTree.ts");
    /* harmony import */


    var _generators_randomizedDepthFirstSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./generators/randomizedDepthFirstSearch */
    "./src/app/maze/generators/randomizedDepthFirstSearch.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function Maze_mat_option_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var genFunc_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", genFunc_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", genFunc_r2.name, " ");
      }
    }

    var Maze = /*#__PURE__*/function (_draw__WEBPACK_IMPORT) {
      _inherits(Maze, _draw__WEBPACK_IMPORT);

      var _super = _createSuper(Maze);

      function Maze() {
        var _this;

        _classCallCheck(this, Maze);

        _this = _super.call(this, 7);
        _this.WIDTH = 500;
        _this.defaultColor = "blue";
        _this.activeColor = "red";
        _this.backgroundColor = "white";
        _this.N = 25;
        _this.ind = 0;
        _this.generationFunctions = [_generators_recursionDivision__WEBPACK_IMPORTED_MODULE_2__["recursionDivision"], _generators_AldousBroder__WEBPACK_IMPORTED_MODULE_3__["AldousBroder"], _generators_binaryTree__WEBPACK_IMPORTED_MODULE_4__["binaryTree"], _generators_randomizedDepthFirstSearch__WEBPACK_IMPORTED_MODULE_5__["randomizedDepthFirstSearch"]];
        _this.currentFunc = _this.generationFunctions[0];
        return _this;
      }

      _createClass(Maze, [{
        key: "changeN",
        value: function changeN() {
          this.N = Math.max(this.N, 5);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(Maze.prototype), "ngOnInit", this).call(this);

          this.ctx.canvas.width = this.WIDTH;
          this.ctx.canvas.height = this.WIDTH;
          this.steps = this.currentFunc(this.N); // this.animate();
        }
      }, {
        key: "beginGeneration",
        value: function beginGeneration() {
          this.ctx.fillStyle = this.backgroundColor;
          this.ctx.fillRect(0, 0, this.WIDTH, this.WIDTH);
          this.steps = this.currentFunc(this.N);
          this.ind = 0;
          this.animate();
        }
      }, {
        key: "do",
        value: function _do() {
          console.log(3);
        }
      }, {
        key: "update",
        value: function update() {
          if (this.ind < this.steps.length - 1) this.ind++;
        }
      }, {
        key: "drawCircle",
        value: function drawCircle(x, y, radius) {
          this.ctx.beginPath();
          this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
          this.ctx.stroke();
        }
      }, {
        key: "drawLine",
        value: function drawLine(x1, y1, x2, y2) {
          this.ctx.beginPath();
          this.ctx.moveTo(x1, y1);
          this.ctx.lineTo(x2, y2);
          this.ctx.stroke();
        }
      }, {
        key: "draw",
        value: function draw(progress) {
          this.ctx.fillStyle = this.backgroundColor; // this.ctx.fillRect(0, 0, this.WIDTH, this.WIDTH);

          this.ctx.fillStyle = this.steps[this.ind][2] ? this.defaultColor : this.activeColor;
          var tunnel_width = this.WIDTH / (this.N * 2 + 1);
          var offset = this.WIDTH / (this.N + 1);
          var item = this.steps[this.ind][1];
          var i = this.steps[this.ind][0][0];
          var j = this.steps[this.ind][0][1];
          var sign1 = i > item[0] ? 1 : -1;
          var sign2 = j > item[1] ? 1 : -1;

          if (item[0] != i) {
            this.ctx.fillRect(offset * (i + 1) + sign1 * tunnel_width / 2, offset * (j + 1) + sign2 * tunnel_width / 2, (offset * (item[0] - i) - sign1 * tunnel_width) * progress, tunnel_width);
          } else {
            this.ctx.fillRect(offset * (i + 1) + sign1 * tunnel_width / 2, offset * (j + 1) + sign2 * tunnel_width / 2, tunnel_width, (offset * (item[1] - j) - sign2 * tunnel_width) * progress);
          }
        }
      }]);

      return Maze;
    }(_draw__WEBPACK_IMPORTED_MODULE_1__["Draw"]);

    Maze.ɵfac = function Maze_Factory(t) {
      return new (t || Maze)();
    };

    Maze.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Maze,
      selectors: [["maze-generator"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 21,
      vars: 4,
      consts: [[1, "container"], [1, "inner-container"], [2, "border", "3px solid black"], ["canvas", ""], [1, "vertical"], ["appearance", "fill"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "n", "matInput", "", "type", "number", "min", "5", 3, "ngModel", "change", "ngModelChange"], [1, "small-container"], ["invert", "", "min", "1", "max", "600", "step", "1", 3, "value", "valueChange"], ["mat-raised-button", "", "color", "warn", 3, "click"], [3, "value"]],
      template: function Maze_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "canvas", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Generation type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function Maze_Template_mat_select_valueChange_9_listener($event) {
            return ctx.currentFunc = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, Maze_mat_option_10_Template, 2, 2, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "N");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Maze_Template_input_change_14_listener() {
            return ctx.changeN();
          })("ngModelChange", function Maze_Template_input_ngModelChange_14_listener($event) {
            return ctx.N = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Speed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-slider", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function Maze_Template_mat_slider_valueChange_18_listener($event) {
            return ctx.time.fps = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Maze_Template_button_click_19_listener() {
            return ctx.beginGeneration();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Begin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.currentFunc);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.generationFunctions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.N);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.time.fps);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSlider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]],
      styles: [".mat-slider[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\nb[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.small-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 45%;\n  margin-right: 20px;\n}\n\n.mat-form-field[_ngcontent-%COMP%]:last-child {\n  width: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF6ZS9tYXplLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL21hemUvbWF6ZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXNsaWRlciB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmIge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5zbWFsbC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogNDUlO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5tYXQtZm9ybS1maWVsZDpsYXN0LWNoaWxkIHtcbiAgd2lkdGg6IDIwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Maze, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'maze-generator',
          templateUrl: './maze.html',
          styleUrls: ['maze.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/visualizer/sorter.ts":
  /*!**************************************!*\
    !*** ./src/app/visualizer/sorter.ts ***!
    \**************************************/

  /*! exports provided: Sorter */

  /***/
  function srcAppVisualizerSorterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Sorter", function () {
      return Sorter;
    });

    var Sorter = /*#__PURE__*/function () {
      function Sorter() {
        _classCallCheck(this, Sorter);
      }

      _createClass(Sorter, null, [{
        key: "swap",
        value: function swap(array, i, j) {
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }, {
        key: "getRandomInt",
        value: function getRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
        }
      }, {
        key: "bubbleSort",
        value: function bubbleSort(originalArray) {
          var array = originalArray.slice();
          var steps = [];

          for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < array.length - i - 1; j++) {
              var cond = array[j + 1] < array[j];

              if (cond) {
                Sorter.swap(array, j, j + 1);
                steps.push([j, j + 1, false]);
              }

              steps.push([j, j + 1, cond]);
            }
          }

          return steps;
        }
      }, {
        key: "insertionSort",
        value: function insertionSort(originalArray) {
          var array = originalArray.slice();
          var steps = [];

          for (var i = 1; i < array.length; i++) {
            var j = i;
            steps.push([-1, i, false]);
            var value = array[i];

            while (j > 0 && array[j - 1] > value) {
              array[j] = array[j - 1];
              steps.push([i, j, false]);
              steps.push([j, j - 1, true]);
              j--;
            }

            array[j] = value;
          }

          return steps;
        }
      }, {
        key: "selectionSort",
        value: function selectionSort(originalArray) {
          var array = originalArray.slice();
          var steps = [];

          for (var i = 0; i < array.length; i++) {
            var minimal_ind = i;

            for (var j = i; j < array.length; j++) {
              steps.push([j, minimal_ind, false]);

              if (array[j] < array[minimal_ind]) {
                minimal_ind = j;
              }
            }

            Sorter.swap(array, minimal_ind, i);
            steps.push([minimal_ind, i, true]);
          }

          return steps;
        }
      }, {
        key: "merge",
        value: function merge(array, start, end, steps) {
          var result = [];
          var middle = (start + end) / 2 | 0;
          var i = start;
          var j = middle + 1;

          while (i <= middle && j <= end) {
            if (array[i] < array[j]) {
              result.push(array[i]);
              i += 1;
            } else {
              result.push(array[j]);
              j += 1;
            }
          }

          while (i <= middle) {
            result.push(array[i]);
            i += 1;
          }

          while (j <= end) {
            result.push(array[j]);
            j += 1;
          }

          var ind = 0;

          for (var _i2 = start; _i2 <= end; _i2++) {
            steps.push([-1, _i2, false]);
            array[_i2] = result[ind];
            Sorter.tempArray.push(array.slice());
            ind++;
          }

          return [start, end];
        }
      }, {
        key: "mergeSortRecursive",
        value: function mergeSortRecursive(array, start, end, steps) {
          if (end - start < 1) {
            return [start, end];
          } else {
            var middle = (start + end) / 2 | 0;
            return Sorter.merge(array, Sorter.mergeSortRecursive(array, start, middle, steps)[0], Sorter.mergeSortRecursive(array, middle + 1, end, steps)[1], steps);
          }
        }
      }, {
        key: "mergeSort",
        value: function mergeSort(array) {
          var steps = [];
          Sorter.tempArray = [];
          Sorter.mergeSortRecursive(array.slice(), 0, array.length - 1, steps);
          return steps;
        }
      }]);

      return Sorter;
    }();

    Sorter.tempArray = [];
    /***/
  },

  /***/
  "./src/app/visualizer/vis.ts":
  /*!***********************************!*\
    !*** ./src/app/visualizer/vis.ts ***!
    \***********************************/

  /*! exports provided: Visualizer */

  /***/
  function srcAppVisualizerVisTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Visualizer", function () {
      return Visualizer;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _sorter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./sorter */
    "./src/app/visualizer/sorter.ts");
    /* harmony import */


    var _draw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../draw */
    "./src/app/draw.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function Visualizer_mat_option_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var sortType_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", sortType_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sortType_r2.name, " ");
      }
    }

    var Visualizer = /*#__PURE__*/function (_draw__WEBPACK_IMPORT2) {
      _inherits(Visualizer, _draw__WEBPACK_IMPORT2);

      var _super2 = _createSuper(Visualizer);

      function Visualizer() {
        var _this2;

        _classCallCheck(this, Visualizer);

        _this2 = _super2.call(this, 7);
        _this2.sortTypes = [_sorter__WEBPACK_IMPORTED_MODULE_1__["Sorter"].bubbleSort, _sorter__WEBPACK_IMPORTED_MODULE_1__["Sorter"].insertionSort, _sorter__WEBPACK_IMPORTED_MODULE_1__["Sorter"].selectionSort, _sorter__WEBPACK_IMPORTED_MODULE_1__["Sorter"].mergeSort];
        _this2.currentSort = _this2.sortTypes[3];
        _this2.n = 100;
        _this2.steps = [];
        _this2.ind = 0;

        _this2.generateArray();

        _this2.WIDTH = 500;
        _this2.HEIGHT = 250;
        _this2.defaultColor = "blue";
        _this2.activeColor = "red";
        _this2.backgroundColor = "black";
        return _this2;
      }

      _createClass(Visualizer, [{
        key: "shuffle",
        value: function shuffle() {
          if (this.steps.length == 0) {
            for (var i = 0; i < 30; i++) {
              _sorter__WEBPACK_IMPORTED_MODULE_1__["Sorter"].swap(this.array, _sorter__WEBPACK_IMPORTED_MODULE_1__["Sorter"].getRandomInt(0, this.array.length), _sorter__WEBPACK_IMPORTED_MODULE_1__["Sorter"].getRandomInt(0, this.array.length));
            }
          }
        }
      }, {
        key: "generateArray",
        value: function generateArray() {
          this.stop();
          this.n = Math.max(this.n, 5);
          this.array = _toConsumableArray(Array(this.n).keys()).map(function (x) {
            return x + 1;
          });
          this.shuffle();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(Visualizer.prototype), "ngOnInit", this).call(this);

          this.ctx.canvas.width = this.WIDTH;
          this.ctx.canvas.height = this.HEIGHT;
          this.animate();
        }
      }, {
        key: "beginSort",
        value: function beginSort() {
          this.steps = this.currentSort(this.array);
          this.ind = 0;
          this.animate();
        }
      }, {
        key: "stop",
        value: function stop() {
          this.ind = 0;
          this.steps = [];
        }
      }, {
        key: "update",
        value: function update() {
          if (this.ind <= this.steps.length - 1) {
            if (this.currentSort == _sorter__WEBPACK_IMPORTED_MODULE_1__["Sorter"].mergeSort) {
              this.array = _sorter__WEBPACK_IMPORTED_MODULE_1__["Sorter"].tempArray[this.ind];
            } else if (this.steps[this.ind][2]) {
              _sorter__WEBPACK_IMPORTED_MODULE_1__["Sorter"].swap(this.array, this.steps[this.ind][0], this.steps[this.ind][1]);
            }

            this.ind++;
          } else {
            this.ind = 0;
            this.steps = [];
          }
        }
      }, {
        key: "offset",
        value: function offset() {
          return this.ctx.canvas.width / (3 / 2 * this.array.length + 1 / 2);
        }
      }, {
        key: "calclulatePos",
        value: function calclulatePos(i, offset) {
          return offset / 2 * (i + 1) + i * offset;
        }
      }, {
        key: "draw",
        value: function draw(progress) {
          this.ctx.fillStyle = this.backgroundColor;
          this.ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);
          this.ctx.fillStyle = this.defaultColor;
          var bottomOffset = 10;
          var offset = this.WIDTH / (3 / 2 * this.array.length + 1 / 2);
          var maxHeight = (this.HEIGHT - bottomOffset * 2) / Math.max.apply(null, this.array);

          for (var i = 0; i < this.array.length; i++) {
            if (this.ind > this.steps.length - 1 || i != this.steps[this.ind][0] && i != this.steps[this.ind][1]) {
              this.ctx.fillRect(this.calclulatePos(i, offset), this.HEIGHT - bottomOffset, offset, -maxHeight * this.array[i]);
            } else if (this.steps[this.ind][2]) {
              this.ctx.fillStyle = this.activeColor;
              var another = i == this.steps[this.ind][0] ? this.steps[this.ind][1] : this.steps[this.ind][0];
              var pos = this.calclulatePos(i, offset) + (this.calclulatePos(another, offset) - this.calclulatePos(i, offset)) * progress;
              this.ctx.fillRect(pos, this.HEIGHT - bottomOffset, offset, -maxHeight * this.array[i]);
              this.ctx.fillStyle = this.defaultColor;
            } else {
              this.ctx.fillStyle = this.activeColor;
              this.ctx.fillRect(this.calclulatePos(i, offset), this.HEIGHT - bottomOffset, offset, -maxHeight * this.array[i]);
              this.ctx.fillStyle = this.defaultColor;
            }
          }
        }
      }]);

      return Visualizer;
    }(_draw__WEBPACK_IMPORTED_MODULE_2__["Draw"]);

    Visualizer.ɵfac = function Visualizer_Factory(t) {
      return new (t || Visualizer)();
    };

    Visualizer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Visualizer,
      selectors: [["visualizer"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 26,
      vars: 4,
      consts: [[1, "container"], [1, "inner-container"], ["canvas", ""], [1, "vertical"], ["appearance", "fill"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "n", "matInput", "", "type", "number", "min", "5", 3, "ngModel", "change", "ngModelChange"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["invert", "", "min", "0.01", "max", "700", "step", "1", 3, "value", "valueChange"], [3, "value"]],
      template: function Visualizer_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "canvas", null, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sort type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function Visualizer_Template_mat_select_valueChange_9_listener($event) {
            return ctx.currentSort = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, Visualizer_mat_option_10_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "N");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Visualizer_Template_input_change_14_listener() {
            return ctx.generateArray();
          })("ngModelChange", function Visualizer_Template_input_ngModelChange_14_listener($event) {
            return ctx.n = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Visualizer_Template_button_click_16_listener() {
            return ctx.shuffle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Shuffle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Visualizer_Template_button_click_18_listener() {
            return ctx.beginSort();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Begin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Visualizer_Template_button_click_20_listener() {
            return ctx.stop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Stop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Speed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-slider", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function Visualizer_Template_mat_slider_valueChange_25_listener($event) {
            return ctx.time.fps = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.currentSort);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sortTypes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.n);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.time.fps);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSlider"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]],
      styles: ["mat-slider[_ngcontent-%COMP%] {\n  width: 270px;\n}\n\nb[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\nform[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 45%;\n  margin-right: 20px;\n}\n\n.mat-form-field[_ngcontent-%COMP%]:last-child {\n  width: 30%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzdWFsaXplci92aXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Zpc3VhbGl6ZXIvdmlzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zbGlkZXIge1xuICB3aWR0aDogMjcwcHg7XG59XG5cbmIge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbmZvcm0ge1xuICB3aWR0aDogNTAlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogNDUlO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5tYXQtZm9ybS1maWVsZDpsYXN0LWNoaWxkIHtcbiAgd2lkdGg6IDMwJTtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Visualizer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'visualizer',
          templateUrl: 'vis.html',
          styleUrls: ['vis.css']
        }]
      }], function () {
        return [];
      }, null);
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

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
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
    /*! C:\git\bartergit.github.io\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map