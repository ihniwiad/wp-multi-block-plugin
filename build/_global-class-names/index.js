/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************************!*\
  !*** ./src/_global-class-names/index.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);


// Our filter function
function setBlockCustomClassName(className, blockName) {
  /*
  return blockName === 'core/code' ?
      'text-danger' :
      className;
      */

  // [ original-wp-class-name, add-class-name, replace-original-class-name (default: false) ]
  const classNamesMap = [
    // [ 'has-text-align-left', 'text-left' ],
    // [ 'has-text-align-center', 'text-center' ],
    // [ 'has-text-align-right', 'text-right' ],
    // [ 'wp-block-columns', 'row' ],
    // [ 'wp-block-column', 'col-md', false ],
    // [ 'wp-block-button__link', 'btn btn-outline-primary', true ],
  ];
  let done = false;
  const classNames = className.split(' ');
  for (let i = 0; i < classNamesMap.length; i++) {
    if (classNames.includes(classNamesMap[i][0])) {
      done = true;
      if (classNamesMap[i][2] === true) {
        // remove wp class name
        const index = classNames.indexOf(classNamesMap[i][0]);
        classNames.splice(index, 1);
      }
      if (!classNames.includes(classNamesMap[i][1])) {
        // add (if not already set)
        classNames.push(classNamesMap[i][1]);
      }
      return classNames.join(' ');
      break;
    }
  }
  if (!done) {
    return className;
  }

  /*
  // successful tested
   const classNames = className.split(' ');
   if ( classNames.includes( 'wp-block-code' ) ) {
      classNames.push( 'text-danger' );
      return classNames.join( ' ' );
  }
  else {
      return className;
  }
  */

  /*
  if ( blockName === 'core/code' ) {
      return 'text-danger';
  }
  else {
      return className;
  }
  */
}

// Adding the filter
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('blocks.getBlockDefaultClassName', 'bsx-blocks/set-custom-class-names', setBlockCustomClassName);
})();

/******/ })()
;
//# sourceMappingURL=index.js.map