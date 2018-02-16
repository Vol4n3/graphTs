/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Axe_1 = __webpack_require__(1);
const Point_1 = __webpack_require__(3);
class Chart {
    constructor(IdElement, contextId = "2d") {
        this.IdElement = IdElement;
        this.contextId = contextId;
        this.elements = [];
        this.init();
    }
    addAxe() {
        const p1 = new Point_1.Point(20, 0);
        const p2 = new Point_1.Point(20, 100);
        const axe = new Axe_1.Axe(p1, p2);
        this.add(axe);
        this.draw();
    }
    add(item) {
        return this.elements.push(item);
    }
    remove(uid) {
        console.warn('not implemented');
    }
    init() {
        this.container = document.getElementById(this.IdElement);
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext(this.contextId);
        this.container.appendChild(this.canvas);
        window.addEventListener('resize', this.resize.bind(this));
        this.resize();
        this.addAxe();
    }
    resize() {
        this.canvas.width = this.container.clientWidth;
        this.canvas.height = this.container.clientHeight;
        this.draw();
    }
    draw() {
        const lengthElements = this.elements.length;
        let ctx = this.context;
        for (let i = 0; i < lengthElements; i++) {
            ctx.beginPath();
            this.elements[i].draw2D(ctx);
            ctx.closePath();
        }
    }
    ;
}
exports.Chart = Chart;
window.Chart = Chart;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Segment_1 = __webpack_require__(2);
class Axe extends Segment_1.Segment {
    constructor(p1, p2) {
        super(p1, p2);
    }
}
exports.Axe = Axe;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Segment {
    constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
        this.classType = "Segment";
        this.width = 1;
    }
    draw2D(ctx) {
        ctx.lineWidth = this.width;
        ctx.moveTo(this.p1.x, this.p1.y);
        ctx.lineTo(this.p2.x, this.p2.y);
        ctx.stroke();
    }
}
exports.Segment = Segment;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Point {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.classType = "Point";
        this.radius = 1;
    }
    draw2D(ctx) {
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}
exports.Point = Point;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWMzNjNiMTliYmQ4YWNkYjVjY2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50L0F4ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvU2VnbWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvUG9pbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDNURBLHFDQUFrQztBQUNsQyx1Q0FBdUM7QUFRdkM7SUFNSSxZQUFvQixTQUFpQixFQUFVLFlBQTRCLElBQUk7UUFBM0QsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQXVCO1FBRnhFLGFBQVEsR0FBZ0IsRUFBRSxDQUFDO1FBRzlCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU0sTUFBTTtRQUNULE1BQU0sRUFBRSxHQUFHLElBQUksYUFBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QixNQUFNLEVBQUUsR0FBRyxJQUFJLGFBQUssQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUIsTUFBTSxHQUFHLEdBQUcsSUFB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RSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNqQixDQUFDO0NBQ0o7QUFkRCwwQkFjQzs7Ozs7Ozs7OztBQ2ZEO0lBS0ksWUFBbUIsQ0FBQyxFQUFTLENBQUMsRUFBUyxDQUFFO1FBQXRCLE1BQUMsR0FBRCxDQUFDO1FBQVMsTUFBQyxHQUFELENBQUM7UUFBUyxNQUFDLEdBQUQsQ0FBQyxDQUFDO1FBSnpDLGNBQVMsR0FBRSxPQUFPLENBQUM7UUFFWixXQUFNLEdBQVcsQ0FBQyxDQUFDO0lBSTFCLENBQUM7SUFDRCxNQUFNLENBQUMsR0FBNkI7UUFDaEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyRCxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZixDQUFDO0NBQ0o7QUFaRCxzQkFZQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlYzM2M2IxOWJiZDhhY2RiNWNjZCIsImltcG9ydCB7SURyYXdhYmxlfSBmcm9tIFwiLi90eXBpbmdcIjtcclxuaW1wb3J0IHtBeGV9IGZyb20gXCIuL2VsZW1lbnQvQXhlXCI7XHJcbmltcG9ydCB7UG9pbnR9IGZyb20gXCIuL2dlb21ldHJ5L1BvaW50XCI7XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgICBpbnRlcmZhY2UgV2luZG93IHtcclxuICAgICAgICBDaGFydDogYW55O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhcnQge1xyXG4gICAgcHVibGljIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgICBwdWJsaWMgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIHB1YmxpYyBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7XHJcbiAgICBwdWJsaWMgZWxlbWVudHM6IElEcmF3YWJsZVtdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBJZEVsZW1lbnQ6IHN0cmluZywgcHJpdmF0ZSBjb250ZXh0SWQ6IFwid2ViZ2xcIiB8IFwiMmRcIiA9IFwiMmRcIikge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRBeGUoKSB7XHJcbiAgICAgICAgY29uc3QgcDEgPSBuZXcgUG9pbnQoMjAsIDApO1xyXG4gICAgICAgIGNvbnN0IHAyID0gbmV3IFBvaW50KDIwLCAxMDApO1xyXG4gICAgICAgIGNvbnN0IGF4ZSA9IG5ldyBBeGUocDEsIHAyKTtcclxuICAgICAgICB0aGlzLmFkZChheGUpO1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGQoaXRlbTogSURyYXdhYmxlKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50cy5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmUodWlkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ25vdCBpbXBsZW1lbnRlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuSWRFbGVtZW50KTtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQodGhpcy5jb250ZXh0SWQpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcclxuICAgICAgICB0aGlzLmFkZEF4ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzaXplKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5jb250YWluZXIuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZHJhdygpIHtcclxuICAgICAgICBjb25zdCBsZW5ndGhFbGVtZW50cyA9IHRoaXMuZWxlbWVudHMubGVuZ3RoO1xyXG4gICAgICAgIGxldCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IDxDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ+dGhpcy5jb250ZXh0O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoRWxlbWVudHM7IGkrKykge1xyXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHNbaV0uZHJhdzJEKGN0eCk7XHJcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG53aW5kb3cuQ2hhcnQgPSBDaGFydDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHMiLCJpbXBvcnQge1NlZ21lbnR9IGZyb20gXCIuLi9nZW9tZXRyeS9TZWdtZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXhlIGV4dGVuZHMgU2VnbWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwMSwgcDIpIHtcclxuICAgICAgICBzdXBlcihwMSwgcDIpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VsZW1lbnQvQXhlLnRzIiwiaW1wb3J0IHtQb2ludH0gZnJvbSBcIi4vUG9pbnRcIjtcclxuaW1wb3J0IHtJRHJhd2FibGV9IGZyb20gXCIuLi90eXBpbmdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWdtZW50IGltcGxlbWVudHMgSURyYXdhYmxlIHtcclxuICAgIGNsYXNzVHlwZT0gXCJTZWdtZW50XCI7XHJcbiAgICB1aWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyID0gMTtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwMTogUG9pbnQsIHB1YmxpYyBwMjogUG9pbnQpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdzJEKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLnAxLngsIHRoaXMucDEueSk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLnAyLngsIHRoaXMucDIueSk7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nZW9tZXRyeS9TZWdtZW50LnRzIiwiaW1wb3J0IHtJRHJhd2FibGV9IGZyb20gXCIuLi90eXBpbmdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQb2ludCBpbXBsZW1lbnRzIElEcmF3YWJsZXtcclxuICAgIGNsYXNzVHlwZT0gXCJQb2ludFwiO1xyXG4gICAgdWlkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcmFkaXVzOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB4LCBwdWJsaWMgeSwgcHVibGljIHo/KSB7XHJcblxyXG4gICAgfVxyXG4gICAgZHJhdzJEKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dlb21ldHJ5L1BvaW50LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==