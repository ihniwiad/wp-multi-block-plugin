/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/_functions/add-class-names.js":
/*!*******************************************!*\
  !*** ./src/_functions/add-class-names.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addClassNames: () => (/* binding */ addClassNames)
/* harmony export */ });
// add class names

function addClassNames(attributes, classNamesString) {
  const {
    belowNavbar,
    touchFooter,
    display,
    marginBefore,
    marginAfter,
    marginLeft,
    marginRight,
    resMargin1Breakpoint,
    resMargin1Position,
    resMargin1Size,
    resMargin2Breakpoint,
    resMargin2Position,
    resMargin2Size,
    paddingBefore,
    paddingAfter,
    paddingLeft,
    paddingRight,
    bgColor,
    textColor,
    textSize,
    rounded,
    textAlign,
    resTextAlignBreakpoint,
    resTextAlign,
    textShadow,
    fontWeight,
    inverseTextColor,
    headingInheritTextColor,
    headingInheritFontWeight,
    width,
    height,
    imgThumbnail,
    borderState,
    border,
    hoverShadow,
    hoverMove,
    disabled,
    verticalAlign,
    speechBubble,
    isAlert,
    state,
    objectFit,
    overflow,
    multilayer,
    zIndex,
    isBannerInner,
    isTop0,
    isBottom0,
    isLeft0,
    isRight0,
    position
  } = attributes;
  const classNames = typeof classNamesString != 'undefined' && classNamesString.trim().length > 0 ? classNamesString.split(' ') : [];
  if (!!belowNavbar) {
    classNames.push('below-navbar-content');
  }
  if (!!touchFooter) {
    classNames.push('mb-n-footer-space');
  }
  if (!!display) {
    classNames.push('d-' + display);
  }
  if (!!marginBefore && marginBefore === marginAfter && marginBefore === marginLeft && marginBefore === marginRight) {
    // all
    classNames.push('m-' + marginBefore);
  } else {
    // top & bottom
    if (!!marginBefore && marginBefore === marginAfter) {
      classNames.push('my-' + marginBefore);
    } else {
      if (!!marginBefore) {
        classNames.push('mt-' + marginBefore);
      }
      if (!!marginAfter) {
        classNames.push('mb-' + marginAfter);
      }
    }

    // left & right
    if (!!marginLeft && marginLeft === marginRight) {
      classNames.push('mx-' + marginLeft);
    } else {
      if (!!marginLeft) {
        classNames.push('ml-' + marginLeft);
      }
      if (!!marginRight) {
        classNames.push('mr-' + marginRight);
      }
    }
  }
  if (!!resMargin1Breakpoint && !!resMargin1Position && !!resMargin1Size) {
    // examples: `my-sm-3`, `my-0
    classNames.push('m' + (resMargin1Position === 'all' ? '' : resMargin1Position) + '-' + (resMargin1Breakpoint === 'xs' ? '' : resMargin1Breakpoint + '-') + resMargin1Size);
  }
  if (!!resMargin2Breakpoint && !!resMargin2Position && !!resMargin2Size) {
    // examples: `my-sm-3`, `my-0
    classNames.push('m' + (resMargin2Position === 'all' ? '' : resMargin2Position) + '-' + (resMargin2Breakpoint === 'xs' ? '' : resMargin2Breakpoint + '-') + resMargin2Size);
  }
  if (!!paddingBefore && paddingBefore === paddingAfter && paddingBefore === paddingLeft && paddingBefore === paddingRight) {
    // all
    classNames.push('p-' + paddingBefore);
  } else {
    // top & bottom
    if (!!paddingBefore && paddingBefore === paddingAfter) {
      classNames.push('py-' + paddingBefore);
    } else {
      // top
      if (!!paddingBefore) {
        classNames.push('pt-' + paddingBefore);
      }
      // bottom
      if (!!paddingAfter) {
        classNames.push('pb-' + paddingAfter);
      }
    }

    // left & right
    if (!!paddingLeft && paddingLeft === paddingRight) {
      classNames.push('px-' + paddingLeft);
    } else {
      // left
      if (!!paddingLeft) {
        classNames.push('pl-' + paddingLeft);
      }
      // right
      if (!!paddingRight) {
        classNames.push('pr-' + paddingRight);
      }
    }
  }
  if (!!bgColor) {
    classNames.push('bg-' + bgColor);
  }
  if (!!textColor) {
    classNames.push('text-' + textColor);
  }
  if (!!textSize) {
    classNames.push(textSize);
  }
  if (!!textShadow) {
    classNames.push('text-shadow-' + textShadow);
  }
  if (!!fontWeight) {
    classNames.push('font-weight-' + fontWeight);
  }
  if (!!inverseTextColor) {
    classNames.push('text-inverse');
  }
  if (!!headingInheritTextColor) {
    classNames.push('heading-inherit-text');
  }
  if (!!headingInheritFontWeight) {
    classNames.push('heading-inherit-font-weight');
  }
  if (!!rounded) {
    if (rounded == true || rounded == 'rounded') {
      classNames.push('rounded');
    } else {
      classNames.push('rounded-' + rounded);
    }
  }
  if (!!textAlign) {
    classNames.push('text-' + textAlign);
  }
  if (!!resTextAlignBreakpoint && !!resTextAlign) {
    classNames.push('text-' + resTextAlignBreakpoint + '-' + resTextAlign);
  }
  if (!!width) {
    classNames.push('w-' + width);
  }
  if (!!height) {
    classNames.push('h-' + height);
  }
  if (!!imgThumbnail) {
    classNames.push('img-thumbnail');
  }
  if (!!border) {
    if (border == 'true') {
      classNames.push('border');
    } else if (border == 'x') {
      classNames.push('border-left');
      classNames.push('border-right');
    } else if (border == 'y') {
      classNames.push('border-top');
      classNames.push('border-bottom');
    } else if (border == 'u') {
      classNames.push('border-left');
      classNames.push('border-right');
      classNames.push('border-bottom');
    } else if (border == 'inverted-u') {
      classNames.push('border-left');
      classNames.push('border-right');
      classNames.push('border-top');
    } else {
      // TODO: what about multipla values, e.g. top and bottom?
      classNames.push('border-' + border);
    }
  }
  if (!!borderState) {
    classNames.push('border-' + borderState);
  }
  if (!!hoverShadow) {
    classNames.push('hover-shadow');
  }
  if (!!hoverMove) {
    classNames.push('hover-move');
  }
  if (!!disabled) {
    classNames.push('disabled');
  }
  if (!!verticalAlign) {
    classNames.push('align-' + verticalAlign);
  }
  if (!!speechBubble) {
    classNames.push('speech-bubble');
    if (speechBubble != 'md') {
      classNames.push('speech-bubble-' + speechBubble);
    }
  }
  if (!!isAlert) {
    classNames.push('alert');
    if (!!state) {
      classNames.push('alert-' + state);
    }
  }
  if (!!objectFit) {
    classNames.push('object-fit-' + objectFit);
  }
  if (!!overflow) {
    classNames.push('overflow-' + overflow);
  }
  if (!!multilayer) {
    classNames.push('multilayer-' + multilayer);
  }
  if (!!zIndex) {
    classNames.push('z-' + zIndex);
  }
  if (!!isBannerInner) {
    classNames.push('banner-inner');
  }
  if (!!isTop0) {
    classNames.push('top-0');
  }
  if (!!isBottom0) {
    classNames.push('bottom-0');
  }
  if (!!isLeft0) {
    classNames.push('left-0');
  }
  if (!!isRight0) {
    classNames.push('right-0');
  }
  if (!!position) {
    classNames.push('position-' + position);
  }
  return classNames.join(' ');
}

/***/ }),

/***/ "./src/_functions/icon.js":
/*!********************************!*\
  !*** ./src/_functions/icon.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XXXXX: () => (/* binding */ XXXXX),
/* harmony export */   badge: () => (/* binding */ badge),
/* harmony export */   banner: () => (/* binding */ banner),
/* harmony export */   bannerColumnRow: () => (/* binding */ bannerColumnRow),
/* harmony export */   bannerContainerWithHeading: () => (/* binding */ bannerContainerWithHeading),
/* harmony export */   bannerEmpty: () => (/* binding */ bannerEmpty),
/* harmony export */   bannerStaticContainerWithHeading: () => (/* binding */ bannerStaticContainerWithHeading),
/* harmony export */   button: () => (/* binding */ button),
/* harmony export */   buttonLabel: () => (/* binding */ buttonLabel),
/* harmony export */   buttons: () => (/* binding */ buttons),
/* harmony export */   buttonsLabelTextLink: () => (/* binding */ buttonsLabelTextLink),
/* harmony export */   buttonsOneButton: () => (/* binding */ buttonsOneButton),
/* harmony export */   buttonsTextLink: () => (/* binding */ buttonsTextLink),
/* harmony export */   buttonsTwoButtons: () => (/* binding */ buttonsTwoButtons),
/* harmony export */   checkList: () => (/* binding */ checkList),
/* harmony export */   checkListItem: () => (/* binding */ checkListItem),
/* harmony export */   container: () => (/* binding */ container),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   groups: () => (/* binding */ groups),
/* harmony export */   groupsLazyimgHeadingParagraph: () => (/* binding */ groupsLazyimgHeadingParagraph),
/* harmony export */   groupsLazyimgParagraphButton: () => (/* binding */ groupsLazyimgParagraphButton),
/* harmony export */   icon: () => (/* binding */ icon),
/* harmony export */   iconList: () => (/* binding */ iconList),
/* harmony export */   iconListItem: () => (/* binding */ iconListItem),
/* harmony export */   imgGallery: () => (/* binding */ imgGallery),
/* harmony export */   lazyImg: () => (/* binding */ lazyImg),
/* harmony export */   rowWithCols: () => (/* binding */ rowWithCols),
/* harmony export */   rowWithColsCol: () => (/* binding */ rowWithColsCol),
/* harmony export */   rowWithCols_1_1: () => (/* binding */ rowWithCols_1_1),
/* harmony export */   rowWithCols_1_1_1: () => (/* binding */ rowWithCols_1_1_1),
/* harmony export */   rowWithCols_1_2: () => (/* binding */ rowWithCols_1_2),
/* harmony export */   rowWithCols_1_2_1: () => (/* binding */ rowWithCols_1_2_1),
/* harmony export */   rowWithCols_2_1: () => (/* binding */ rowWithCols_2_1),
/* harmony export */   rowWithCols_custom: () => (/* binding */ rowWithCols_custom),
/* harmony export */   rowsCol: () => (/* binding */ rowsCol),
/* harmony export */   rowsColFlexStatic: () => (/* binding */ rowsColFlexStatic),
/* harmony export */   rowsColStaticFlex: () => (/* binding */ rowsColStaticFlex),
/* harmony export */   rowsRow: () => (/* binding */ rowsRow),
/* harmony export */   section: () => (/* binding */ section),
/* harmony export */   sectionBadgeHeadingTextButtonImgColumns: () => (/* binding */ sectionBadgeHeadingTextButtonImgColumns),
/* harmony export */   sectionBgHeadingIconHeadingTextColumns: () => (/* binding */ sectionBgHeadingIconHeadingTextColumns),
/* harmony export */   sectionContainerHeading: () => (/* binding */ sectionContainerHeading),
/* harmony export */   sectionContainerHeadingTextGallery: () => (/* binding */ sectionContainerHeadingTextGallery),
/* harmony export */   sectionContainerRoundedColoredBanner: () => (/* binding */ sectionContainerRoundedColoredBanner),
/* harmony export */   sectionEmpty: () => (/* binding */ sectionEmpty),
/* harmony export */   sectionHeadingListColumns: () => (/* binding */ sectionHeadingListColumns),
/* harmony export */   sectionImgBadgeHeadingTextButtonColumns: () => (/* binding */ sectionImgBadgeHeadingTextButtonColumns),
/* harmony export */   slider: () => (/* binding */ slider),
/* harmony export */   uiIconCarretLeft: () => (/* binding */ uiIconCarretLeft),
/* harmony export */   uiIconCarretRight: () => (/* binding */ uiIconCarretRight),
/* harmony export */   uiIconTrash: () => (/* binding */ uiIconTrash),
/* harmony export */   uiPlaceholderVideo: () => (/* binding */ uiPlaceholderVideo),
/* harmony export */   video: () => (/* binding */ video),
/* harmony export */   wrapper: () => (/* binding */ wrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const badge = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M14.5,7.5c0,0,0,0-9,0C4.12,7.5,3,8.62,3,10c0,1.38,1.12,2.5,2.5,2.5c9,0,9,0,9,0c1.38,0,2.5-1.12,2.5-2.5 C17,8.62,15.88,7.5,14.5,7.5z M14.5,10.5c0,0,0,0-9,0v0C5.22,10.5,5,10.28,5,10c0-0.28,0.22-0.5,0.5-0.5c9,0,9,0,9,0 c0.28,0,0.5,0.22,0.5,0.5C15,10.27,14.78,10.5,14.5,10.5z"
}));
const banner = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M17,5H3C1.9,5,1,5.9,1,7v6c0,1.11,0.9,2,2,2h14c1.1,0,2-0.89,2-2V7C19,5.9,18.1,5,17,5z M4.5,7C5.33,7,6,7.67,6,8.5 C6,9.33,5.33,10,4.5,10C3.67,10,3,9.33,3,8.5C3,7.67,3.67,7,4.5,7z M17,13H3l-0.02-1L7,10l2,1l5-3l3,2V13z"
}));
const bannerEmpty = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"
}));
const bannerContainerWithHeading = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"
}));
const bannerStaticContainerWithHeading = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"
}));
const bannerColumnRow = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"
}));
const buttons = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M16,7H4C2.9,7,2,7.9,2,9v2c0,1.11,0.9,2,2,2h12c1.1,0,2-0.89,2-2V9C18,7.9,17.1,7,16,7z M13,11c0,0,0,0-6,0v0 c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1c6,0,6,0,6,0c0.55,0,1,0.45,1,1C14,10.55,13.55,11,13,11z"
}));
const button = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M16,7H4C2.9,7,2,7.9,2,9v2c0,1.11,0.9,2,2,2h12c1.1,0,2-0.89,2-2V9C18,7.9,17.1,7,16,7z M15,11H5V9h10V11z"
}));
const buttonLabel = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M4,3v3.5h1v-1c0-0.55,0.45-1,1-1h3.25V15c0,0.55-0.45,1-1,1h-1v1h5.5v-1h-1c-0.55,0-1-0.45-1-1V4.5H14c0.55,0,1,0.45,1,1v1 h1V3H4z"
}));
const buttonsOneButton = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M30,20H18c-1.1,0-2,0.9-2,2v4c0,1.11,0.9,2,2,2h12c1.1,0,2-0.89,2-2v-4C32,20.9,31.1,20,30,20z M29,25.5H19v-3h10V25.5z"
}));
const buttonsTwoButtons = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M21,20H9c-1.1,0-2,0.9-2,2v4c0,1.11,0.9,2,2,2h12c1.1,0,2-0.89,2-2v-4C23,20.9,22.1,20,21,20z M20,25.5H10v-3h10V25.5z M39,20H27c-1.1,0-2,0.9-2,2v4c0,1.11,0.9,2,2,2h12c1.1,0,2-0.89,2-2v-4C41,20.9,40.1,20,39,20z M38,25.5H28v-3h10V25.5z"
}));
const buttonsTextLink = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M19,20c0-0.55,0.45-1,1-1h2.5v7c0,0.55-0.45,1-1,1h-1v1h7v-1h-1c-0.55,0-1-0.45-1-1v-7H28c0.55,0,1,0.45,1,1v1h1v-5H18v5h1 V20z M17,30v2h14v-2H17z"
}));
const buttonsLabelTextLink = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M27,21c0-0.55,0.45-1,1-1h2.5v7c0,0.55-0.45,1-1,1h-1v1h7v-1h-1c-0.55,0-1-0.45-1-1v-7H36c0.55,0,1,0.45,1,1v1h1v-5H26v5h1 V21z M10,22h1v-1c0-0.55,0.45-1,1-1h2.5v7c0,0.55-0.45,1-1,1h-1v1h7v-1h-1c-0.55,0-1-0.45-1-1v-7H20c0.55,0,1,0.45,1,1v1h1v-5H10V22 z M25,31v2h14v-2H25z"
}));
const checkList = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M10,3v3h8V3H10z M5.79,2.79L4,4.58L3.71,4.29c-0.39-0.39-1.03-0.39-1.42,0c-0.39,0.39-0.39,1.02,0,1.41h0l1,1 C3.48,6.9,3.73,7,4,7s0.52-0.1,0.71-0.29l2.5-2.5c0.39-0.39,0.39-1.02,0-1.41C6.82,2.4,6.18,2.4,5.79,2.79z M10,12h8V9h-8V12z M3.29,12.71C3.48,12.89,3.73,13,4,13c0.27,0,0.52-0.1,0.71-0.29l2.5-2.5c0.39-0.39,0.39-1.02,0-1.41c-0.39-0.39-1.02-0.39-1.41,0 L4,10.58l-0.29-0.29c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41L3.29,12.71z M10,18h8v-3h-8V18z M5.79,14.79L4,16.58 l-0.29-0.29c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41l1,1C3.48,18.89,3.73,19,4,19c0.27,0,0.52-0.1,0.71-0.29 l2.5-2.5c0.39-0.39,0.39-1.02,0-1.41C6.82,14.4,6.18,14.4,5.79,14.79z"
}));
const checkListItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M10,12h8V9h-8V12z M3.29,12.71C3.48,12.89,3.73,13,4,13c0.27,0,0.52-0.1,0.71-0.29l2.5-2.5c0.39-0.39,0.39-1.02,0-1.41 c-0.39-0.39-1.02-0.39-1.41,0L4,10.58l-0.29-0.29c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41L3.29,12.71z"
}));
const imgGallery = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M8,10L6,9l-2,1v2.99h9V9l-2-1L8,10z M7,8c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2S5,4.9,5,6C5,7.1,5.9,8,7,8z M18.71,4.29 C18.52,4.1,18.27,4,18,4h-2V2c0-0.27-0.1-0.52-0.29-0.71C15.52,1.1,15.27,1,15,1H2C1.74,1,1.48,1.11,1.29,1.29C1.11,1.48,1,1.74,1,2 v13c0,0.26,0.11,0.52,0.29,0.71C1.48,15.89,1.74,16,2,16h2v2c0,0.26,0.11,0.52,0.29,0.71C4.48,18.89,4.74,19,5,19h13 c0.27,0,0.52-0.1,0.71-0.29C18.9,18.52,19,18.27,19,18V5C19,4.73,18.9,4.48,18.71,4.29z M3,14V3h11v11H3z M17,17H6v-1h9 c0.27,0,0.52-0.1,0.71-0.29C15.9,15.52,16,15.27,16,15V6h1V17z"
}));
const container = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M6,5H4v2h2V5z M6,9H4v2h2V9z M4,15h2v-2H4V15z M16,5h-2v2h2V5z M16,9h-2v2h2V9z M14,15h2v-2h-2V15z M2,4h16 c0.55,0,1-0.45,1-1c0-0.55-0.45-1-1-1H2C1.45,2,1,2.45,1,3C1,3.55,1.45,4,2,4z M18,16H2c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h16 c0.55,0,1-0.45,1-1C19,16.45,18.55,16,18,16z"
}));
const groups = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M7,7h6c0.55,0,1-0.45,1-1V4c0-0.55-0.45-1-1-1H7C6.45,3,6,3.45,6,4v2C6,6.55,6.45,7,7,7z M13,13H7c-0.55,0-1,0.45-1,1v2 c0,0.55,0.45,1,1,1h6c0.55,0,1-0.45,1-1v-2C14,13.45,13.55,13,13,13z M9.5,11V9c0-0.55-0.45-1-1-1H3C2.45,8,2,8.45,2,9v2 c0,0.55,0.45,1,1,1h5.5C9.05,12,9.5,11.55,9.5,11z M17,8h-5.5c-0.55,0-1,0.45-1,1v2c0,0.55,0.45,1,1,1H17c0.55,0,1-0.45,1-1V9 C18,8.45,17.55,8,17,8z"
}));
const groupsLazyimgParagraphButton = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"
}));
const groupsLazyimgHeadingParagraph = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"
}));
const icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M10,3c-3.87,0-7,3.13-7,7c0,3.87,3.13,7,7,7c3.87,0,7-3.13,7-7C17,6.13,13.87,3,10,3z M13.08,9.08l-3.75,3.75 c-0.19,0.19-0.44,0.29-0.71,0.29c-0.27,0-0.52-0.1-0.71-0.29l-1.5-1.5c-0.39-0.39-0.39-1.02,0-1.41c0.39-0.39,1.02-0.39,1.42,0 l0.79,0.79l3.04-3.04c0.39-0.39,1.02-0.39,1.41,0C13.47,8.06,13.47,8.69,13.08,9.08z"
}));
const iconList = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M10,3v3h8V3H10z M4.75,1.88L3.9,3.61L2,3.88l1.37,1.34L3.05,7.12l1.7-0.89l1.7,0.89L6.13,5.22L7.5,3.88L5.6,3.61L4.75,1.88z M10,12h8V9h-8V12z M5.79,8.79L4,10.58l-0.29-0.29c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41l1,1 C3.48,12.89,3.73,13,4,13c0.27,0,0.52-0.1,0.71-0.29l2.5-2.5c0.39-0.39,0.39-1.02,0-1.41C6.82,8.4,6.18,8.4,5.79,8.79z M10,18h8v-3 h-8V18z M6.71,14.54c-0.39-0.39-1.02-0.39-1.41,0l-0.54,0.54l-0.54-0.54c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.42 l0.54,0.54l-0.54,0.54c-0.39,0.39-0.39,1.02,0,1.41c0.2,0.2,0.45,0.29,0.71,0.29c0.26,0,0.51-0.1,0.71-0.29l0.54-0.54l0.54,0.54 c0.19,0.2,0.45,0.29,0.71,0.29s0.51-0.1,0.71-0.29c0.39-0.39,0.39-1.02,0-1.41L6.16,16.5l0.54-0.54C7.1,15.57,7.1,14.93,6.71,14.54z "
}));
const iconListItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M10,9v3h8V9H10z M4.8,7.9L3.9,9.6L2,9.9l1.4,1.3L3,13.1l1.7-0.9l1.7,0.9l-0.3-1.9l1.4-1.3L5.6,9.6L4.8,7.9z"
}));
const lazyImg = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M18.71,1.29C18.52,1.11,18.26,1,18,1H2C1.74,1,1.48,1.11,1.29,1.29C1.11,1.48,1,1.74,1,2v16c0,0.26,0.11,0.52,0.29,0.71 C1.48,18.89,1.74,19,2,19h16c0.26,0,0.52-0.11,0.71-0.29C18.89,18.52,19,18.26,19,18V2C19,1.74,18.89,1.48,18.71,1.29z M3,17V3h14 l0,14H3z M9,12l-2-1l-3,2v2.98h12V11l-3-2L9,12z M7.5,9C8.88,9,10,7.88,10,6.5S8.88,4,7.5,4S5,5.12,5,6.5S6.12,9,7.5,9z"
}));
const rowsCol = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M1.29,1.29C1.11,1.48,1,1.74,1,2v16c0,0.26,0.11,0.52,0.29,0.71C1.48,18.89,1.74,19,2,19h16c0.26,0,0.52-0.11,0.71-0.29  C18.89,18.52,19,18.26,19,18V2c0-0.26-0.11-0.52-0.29-0.71C18.52,1.11,18.26,1,18,1H2C1.74,1,1.48,1.11,1.29,1.29z M3,8h14v4H3V8z M3,17v-3h14v3H3z M17,6H3V3l14,0V6z"
}));
const rowsRow = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M1.29,1.29C1.11,1.48,1,1.74,1,2v16c0,0.26,0.11,0.52,0.29,0.71C1.48,18.89,1.74,19,2,19h16c0.26,0,0.52-0.11,0.71-0.29  C18.89,18.52,19,18.26,19,18V2c0-0.26-0.11-0.52-0.29-0.71C18.52,1.11,18.26,1,18,1H2C1.74,1,1.48,1.11,1.29,1.29z M3,8h14v4H3V8z M3,17v-3h14v3H3z M17,6H3V3l14,0V6z"
}));
const rowsColFlexStatic = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9v-5h30V34z M39,27H9 V14h30V27z"
}));
const rowsColStaticFlex = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M39,36H9c-1.1,0-2-0.9-2-2V14c0-1.1,0.9-2,2-2h30c1.1,0,2,0.9,2,2v20C41,35.1,40.1,36,39,36z M39,14H9v5h30V14z M39,21H9v13 h30V21z"
}));
const rowWithCols = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M18.71,1.29C18.52,1.11,18.26,1,18,1H2C1.74,1,1.48,1.11,1.29,1.29C1.11,1.48,1,1.74,1,2v16c0,0.26,0.11,0.52,0.29,0.71 C1.48,18.89,1.74,19,2,19h16c0.26,0,0.52-0.11,0.71-0.29C18.89,18.52,19,18.26,19,18V2C19,1.74,18.89,1.48,18.71,1.29z M12,3v14H8V3 H12z M3,3h3v14H3V3z M14,17V3h3l0,14H14z"
}));
const rowWithColsCol = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M18.71,1.29C18.52,1.11,18.26,1,18,1H2C1.74,1,1.48,1.11,1.29,1.29C1.11,1.48,1,1.74,1,2v16c0,0.26,0.11,0.52,0.29,0.71 C1.48,18.89,1.74,19,2,19h16c0.26,0,0.52-0.11,0.71-0.29C18.89,18.52,19,18.26,19,18V2C19,1.74,18.89,1.48,18.71,1.29z M12,3v14H8V3 H12z M3,3h3v14H3V3z M14,17V3h3l0,14H14z"
}));
const rowWithCols_1_1_1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"
}));
const rowWithCols_1_1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H25V34H39ZM23 34H9V14H23V34Z"
}));
const rowWithCols_1_2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H20V34H39ZM18 34H9V14H18V34Z"
}));
const rowWithCols_2_1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H30V34H39ZM28 34H9V14H28V34Z"
}));
const rowWithCols_1_2_1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM31 34H17V14h14v20zm2 0V14h6v20h-6zm-18 0H9V14h6v20z"
}));
const rowWithCols_custom = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"
}));
const section = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M14,4h-3v2h3V4z M8.29,5.71C8.48,5.9,8.73,6,9,6h0V3.59L7.71,2.29C7.52,2.1,7.26,2,7,2H6v2h0.58L8.29,5.71z M19,7V5 c0-0.27-0.1-0.52-0.29-0.71C18.52,4.1,18.27,4,18,4h-2v2h1v9L3,15v-2H1v3c0,0.26,0.11,0.52,0.29,0.71C1.48,16.89,1.74,17,2,17h2v-2 h2v2h3v-2h2v2h3v-2h2v2h2c0.27,0,0.52-0.1,0.71-0.29C18.89,16.52,19,16.27,19,16v-2h-2v-2h2V9h-2V7H19z M3,4h1V2H2 C1.74,2,1.48,2.11,1.29,2.29C1.11,2.48,1,2.74,1,3v3h2V4z M3,8H1v3h2V8z"
}));
const sectionEmpty = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M38.96,30h2l0.01-3h-2L38.96,30z M23,18h3v-2h-3V18z M28,36h3v-2h-3V36z M33,36h3v-2h-3V36z M23,36h3v-2h-3V36z M40.71,16.29C40.52,16.1,40.27,16,40,16h-2v2h1l0,2h2L41,17C41,16.73,40.9,16.48,40.71,16.29z M13,36h3v-2h-3V36z M33,18h3v-2h-3 V18z M18,36h3v-2h-3V36z M28,18h3v-2h-3V18z M9,33H7v2c0,0.26,0.1,0.52,0.29,0.71C7.48,35.89,7.74,36,8,36h3v-2H9V33z M9,23H7v3h2 V23z M9,18H7v3h2V18z M38.95,34H38v2h1.95c0.55,0,1-0.45,1-1l0.01-3h-2L38.95,34z M15.58,14L17,12.59l-0.29-0.29 C16.52,12.11,16.26,12,16,12h-4v2L15.58,14L15.58,14z M9,28H7v3h2V28z M38.98,25h2l0.01-3h-2L38.98,25z M18.41,14L17,15.41 l2.29,2.29C19.48,17.9,19.73,18,20,18h1v-2h-0.59L18.41,14z M9,14h1v-2H8c-0.26,0-0.52,0.1-0.71,0.29C7.11,12.48,7,12.74,7,13v3h2 V14z"
}));
const sectionContainerHeading = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M13,24h22v-3H13V24z M9,23H7v3h2V23z M9,28H7v3h2V28z M9,33H7v2c0,0.26,0.1,0.52,0.29,0.71C7.48,35.89,7.74,36,8,36h3v-2H9 V33z M9,18H7v3h2V18z M9,14h1v-2H8c-0.26,0-0.52,0.1-0.71,0.29C7.11,12.48,7,12.74,7,13v3h2V14z M31,16h-3v2h3V16z M26,16h-3v2h3V16 z M19.29,17.71C19.48,17.9,19.73,18,20,18h1v-2h-0.59l-2-2L17,15.41L19.29,17.71z M15.58,14L17,12.59l-0.29-0.29 C16.52,12.11,16.26,12,16,12h-4v2L15.58,14L15.58,14z M23,36h3v-2h-3V36z M38.96,30h2l0.01-3h-2L38.96,30z M38.95,34H38v2h1.95 c0.55,0,1-0.45,1-1l0.01-3h-2L38.95,34z M38.98,25h2l0.01-3h-2L38.98,25z M33,18h3v-2h-3V18z M33,36h3v-2h-3V36z M13,36h3v-2h-3V36z M40.71,16.29C40.52,16.1,40.27,16,40,16h-2v2h1l0,2h2L41,17C41,16.73,40.9,16.48,40.71,16.29z M18,36h3v-2h-3V36z M28,36h3v-2h-3 V36z"
}));
const sectionContainerHeadingTextGallery = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M35,20H13v3h22V20z M9,23H7v3h2V23z M9,28H7v3h2V28z M9,18H7v3h2V18z M26,16h-3v2h3V16z M9,14h1v-2H8 c-0.26,0-0.52,0.1-0.71,0.29C7.11,12.48,7,12.74,7,13v3h2V14z M31,16h-3v2h3V16z M19.29,17.71C19.48,17.9,19.73,18,20,18h1v-2h-0.59 l-2-2L17,15.41L19.29,17.71z M9,33H7v2c0,0.26,0.1,0.52,0.29,0.71C7.48,35.89,7.74,36,8,36h3v-2H9V33z M38.95,34H38v2h1.95 c0.55,0,1-0.45,1-1l0.01-3h-2L38.95,34z M38.96,30h2l0.01-3h-2L38.96,30z M15.58,14L17,12.59l-0.29-0.29C16.52,12.11,16.26,12,16,12 h-4v2L15.58,14L15.58,14z M38.98,25h2l0.01-3h-2L38.98,25z M33,18h3v-2h-3V18z M40.71,16.29C40.52,16.1,40.27,16,40,16h-2v2h1l0,2h2 L41,17C41,16.73,40.9,16.48,40.71,16.29z M18,36h3v-2h-3V36z M13,36h3v-2h-3V36z M33,36h3v-2h-3V36z M23,36h3v-2h-3V36z M28,36h3v-2 h-3V36z M35,31v-3h-6v3H35z M21,31h6v-3h-6V31z M13,31h6v-3h-6V31z M35,24H13v1h22V24z M35,26H13v1h22V26z"
}));
const sectionContainerRoundedColoredBanner = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M9,23H7v3h2V23z M9,28H7v3h2V28z M9,18H7v3h2V18z M31,16h-3v2h3V16z M9,14h1v-2H8c-0.26,0-0.52,0.1-0.71,0.29 C7.11,12.48,7,12.74,7,13v3h2V14z M26,16h-3v2h3V16z M9,33H7v2c0,0.26,0.1,0.52,0.29,0.71C7.48,35.89,7.74,36,8,36h3v-2H9V33z M19.29,17.71C19.48,17.9,19.73,18,20,18h1v-2h-0.59l-2-2L17,15.41L19.29,17.71z M15.58,14L17,12.59l-0.29-0.29 C16.52,12.11,16.26,12,16,12h-4v2L15.58,14L15.58,14z M38.96,30h2l0.01-3h-2L38.96,30z M38.95,34H38v2h1.95c0.55,0,1-0.45,1-1 l0.01-3h-2L38.95,34z M40.71,16.29C40.52,16.1,40.27,16,40,16h-2v2h1l0,2h2L41,17C41,16.73,40.9,16.48,40.71,16.29z M38.98,25h2 l0.01-3h-2L38.98,25z M33,18h3v-2h-3V18z M18,36h3v-2h-3V36z M13,36h3v-2h-3V36z M23,36h3v-2h-3V36z M28,36h3v-2h-3V36z M33,36h3v-2 h-3V36z M13,22v5c0,0.55,0.45,1,1,1h20c0.55,0,1-0.45,1-1v-5c0-0.55-0.45-1-1-1H14C13.45,21,13,21.45,13,22z M26,27h-4v-1h4V27z M20,22h8v1h-8V22z M15,24h18v1H15V24z"
}));
const sectionImgBadgeHeadingTextButtonColumns = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", null);
const sectionBadgeHeadingTextButtonImgColumns = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", null);
const sectionHeadingListColumns = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", null);
const sectionBgHeadingIconHeadingTextColumns = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", null);
const slider = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M10,17c-0.55,0-1,0.45-1,1s0.45,1,1,1c0.55,0,1-0.45,1-1S10.55,17,10,17z M7,17c-0.55,0-1,0.45-1,1s0.45,1,1,1 c0.55,0,1-0.45,1-1S7.55,17,7,17z M13,17c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1S13.55,17,13,17z M12.61,11.57 c-0.23-0.56-0.1-1.21,0.33-1.63L14.88,8l-1.94-1.94c-0.43-0.43-0.56-1.07-0.33-1.63S13.39,3.5,14,3.5h2V2c0-0.55-0.45-1-1-1H5 C4.45,1,4,1.45,4,2v1.5h2c0.61,0,1.15,0.37,1.39,0.93c0.23,0.56,0.1,1.21-0.33,1.63L5.12,8l1.94,1.94 c0.43,0.43,0.56,1.07,0.33,1.63C7.15,12.13,6.61,12.5,6,12.5H4V14c0,0.55,0.45,1,1,1h10c0.55,0,1-0.45,1-1v-1.5h-2 C13.39,12.5,12.85,12.13,12.61,11.57z M3,8l3-3H3L0,8l3,3h3L3,8z M17,5h-3l3,3l-3,3h3l3-3L17,5z"
}));
const uiIconCarretLeft = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M14 5l-5 5 5 5-1 2-7-7 7-7z"
}));
const uiIconCarretRight = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M6 15l5-5-5-5 1-2 7 7-7 7z"
}));
const uiIconTrash = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12 4h3c.6 0 1 .4 1 1v1H3V5c0-.6.5-1 1-1h3c.2-1.1 1.3-2 2.5-2s2.3.9 2.5 2zM8 4h3c-.2-.6-.9-1-1.5-1S8.2 3.4 8 4zM4 7h11l-.9 10.1c0 .5-.5.9-1 .9H5.9c-.5 0-.9-.4-1-.9L4 7z"
}));
const uiPlaceholderVideo = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "360",
  height: "240",
  viewBox: "0 0 360 240",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  d: "M0,0v240h360V0H0z M160,160V80l69.28,40L160,160z"
}));
const video = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M17,4H3C1.9,4,1,5.07,1,6.4v7.2C1,14.93,1.9,16,3,16h14c1.1,0,2-1.07,2-2.4V6.4C19,5.07,18.1,4,17,4z M8,13V7l5.2,3L8,13z"
})));
const wrapper = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M11,5h3V3h-3V5z M3,9H1v3h2V9z M6,5h3V3H6V5z M6,17h3v-2H6V17z M18.71,3.29C18.52,3.1,18.27,3,18,3h-2v2h1v1h2V4 C19,3.73,18.9,3.48,18.71,3.29z M17,11h2V8h-2V11z M3,14H1v2c0,0.26,0.11,0.52,0.29,0.71C1.48,16.89,1.74,17,2,17h2v-2H3V14z M17,15 h-1v2h2c0.27,0,0.52-0.1,0.71-0.29C18.9,16.52,19,16.27,19,16v-3h-2V15z M11,17h3v-2h-3V17z M1.29,3.29C1.11,3.48,1,3.74,1,4v3h2V5 h1V3H2C1.74,3,1.48,3.11,1.29,3.29z"
}));
const XXXXX = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", null);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"
})));

/***/ }),

/***/ "./src/check-list-item/edit.js":
/*!*************************************!*\
  !*** ./src/check-list-item/edit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hooks */ "./src/check-list-item/hooks/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./src/check-list-item/utils.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./editor.scss */ "./src/check-list-item/editor.scss");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */







/**
 * Internal dependencies
 */
// import { useOnEnter } from './use-enter';



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

const name = 'bsx-blocks/check-list-item';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
function Edit({
  attributes,
  setAttributes,
  onReplace,
  clientId,
  mergeBlocks
}) {
  const {
    className,
    content
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps)(blockProps, {
    renderAppender: false
    // __unstableDisableDropZone: true,
  });

  // const useEnterRef = useEnter( { content, clientId } );
  // const useSpaceRef = useSpace( clientId );
  // const onSplit = useSplit( clientId );

  const useEnterRef = (0,_hooks__WEBPACK_IMPORTED_MODULE_8__.useEnter)({
    content,
    clientId
  });
  const onSplit = (0,_hooks__WEBPACK_IMPORTED_MODULE_8__.useSplit)(clientId);
  const onMerge = (0,_hooks__WEBPACK_IMPORTED_MODULE_8__.useMerge)(clientId, mergeBlocks);

  // console.log( 'edit() content: \n' + JSON.stringify( content, null, 2 ) );

  // const onChangeContent = ( value ) => {
  //     setAttributes( { content: value } );
  // };

  const itemClassNames = (0,_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_7__.addClassNames)({}, className);

  // return (
  //     <li { ...innerBlocksProps }>
  //             <RichText
  //                 ref={ useMergeRefs( [ useEnterRef, useSpaceRef ] ) }
  //                 identifier="content"
  //                 tagName="span"
  //                 onChange={ ( nextContent ) =>
  //                     setAttributes( { content: nextContent } )
  //                 }
  //                 value={ content }
  //                 aria-label={ __( 'List text' ) }
  //                 placeholder={ __( 'List' ) }
  // onSplit={ onSplit }
  // onMerge={ onMerge }
  //             />
  //             { innerBlocksProps.children }
  //     </li>
  // );

  // it seems to require a parent element for the rich text editor to 
  // work properly in the backend (be able to select parent list element
  // or select a new block via JavaScript)

  // return (
  //     <>
  //         <RichText
  //             ref={ useMergeRefs( [ useEnterRef ] ) }
  //             identifier="content"
  //             tagName="li"
  //             onChange={ ( nextContent ) =>
  //                 setAttributes( { content: nextContent } )
  //             }
  //             value={ content }
  //             aria-label={ __( 'List text' ) }
  //             placeholder={ __( 'List' ) }
  //             onSplit={ onSplit }
  //             onMerge={ onMerge }
  //             onReplace={
  //                 onReplace
  //                     ? ( blocks, ...args ) => {
  //                             onReplace(
  //                                 convertToChecklistItems( blocks ),
  //                                 ...args
  //                             );
  //                       }
  //                     : undefined
  //             }
  //         />
  //     </>
  // );

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    ...innerBlocksProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    ref: (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useMergeRefs)([useEnterRef]),
    identifier: "content",
    tagName: "span",
    onChange: nextContent => setAttributes({
      content: nextContent
    }),
    value: content,
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('List text'),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('List'),
    onSplit: onSplit,
    onMerge: onMerge,
    onReplace: onReplace ? (blocks, ...args) => {
      onReplace((0,_utils__WEBPACK_IMPORTED_MODULE_9__.convertToChecklistItems)(blocks), ...args);
    } : undefined
  }), innerBlocksProps.children);
}

/***/ }),

/***/ "./src/check-list-item/hooks/index.js":
/*!********************************************!*\
  !*** ./src/check-list-item/hooks/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEnter: () => (/* reexport safe */ _use_enter__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   useMerge: () => (/* reexport safe */ _use_merge__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   useSplit: () => (/* reexport safe */ _use_split__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _use_enter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-enter */ "./src/check-list-item/hooks/use-enter.js");
/* harmony import */ var _use_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-split */ "./src/check-list-item/hooks/use-split.js");
/* harmony import */ var _use_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-merge */ "./src/check-list-item/hooks/use-merge.js");




/***/ }),

/***/ "./src/check-list-item/hooks/use-enter.js":
/*!************************************************!*\
  !*** ./src/check-list-item/hooks/use-enter.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useEnter)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */
// import useOutdentListItem from './use-outdent-list-item';

function useEnter(props) {
  // console.log( '—— useEnter()' )
  const {
    replaceBlocks,
    selectionChange
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.store);
  const {
    getBlock,
    getBlockRootClientId,
    getBlockIndex,
    getBlockName
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.store);
  const propsRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(props);
  propsRef.current = props;
  // const outdentListItem = useOutdentListItem();
  return (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.useRefEffect)(element => {
    // console.log( '—— useEnter() return' )
    function onKeyDown(event) {
      if (event.defaultPrevented || event.keyCode !== _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3__.ENTER) {
        return;
      }
      // console.log( 'ENTER pressed in block' )
      // console.log( 'propsRef: \n' + JSON.stringify( propsRef, null, 2 ) );
      // console.log( 'props: \n' + JSON.stringify( props, null, 2 ) );
      const {
        content,
        clientId
      } = propsRef.current;
      if (content.length) {
        return;
      }
      event.preventDefault();
      // const canOutdent =
      // 	getBlockName(
      // 		getBlockRootClientId(
      // 			getBlockRootClientId( propsRef.current.clientId )
      // 		)
      // 	) === 'bsx-blocks/check-list-item';
      // if ( canOutdent ) {
      // 	// outdentListItem();
      // 	return;
      // }
      // Here we are in top level list so we need to split.
      const topParentListBlock = getBlock(getBlockRootClientId(clientId));
      const blockIndex = getBlockIndex(clientId);
      const head = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.cloneBlock)({
        ...topParentListBlock,
        innerBlocks: topParentListBlock.innerBlocks.slice(0, blockIndex)
      });
      const middle = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.getDefaultBlockName)());
      // Last list item might contain a `list` block innerBlock
      // In that case append remaining innerBlocks blocks.
      const after = [...(topParentListBlock.innerBlocks[blockIndex].innerBlocks[0]?.innerBlocks || []), ...topParentListBlock.innerBlocks.slice(blockIndex + 1)];
      const tail = after.length ? [(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.cloneBlock)({
        ...topParentListBlock,
        innerBlocks: after
      })] : [];
      replaceBlocks(topParentListBlock.clientId, [head, middle, ...tail], 1);
      // We manually change the selection here because we are replacing
      // a different block than the selected one.
      selectionChange(middle.clientId);
    }
    element.addEventListener('keydown', onKeyDown);
    return () => {
      element.removeEventListener('keydown', onKeyDown);
    };
  }, []);
}

/***/ }),

/***/ "./src/check-list-item/hooks/use-merge.js":
/*!************************************************!*\
  !*** ./src/check-list-item/hooks/use-merge.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useMerge)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */
// import useOutdentListItem from './use-outdent-list-item';

function useMerge(clientId, onMerge) {
  const registry = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useRegistry)();
  const {
    getPreviousBlockClientId,
    getNextBlockClientId,
    getBlockOrder,
    getBlockRootClientId,
    getBlockName
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store);
  const {
    mergeBlocks,
    moveBlocksToPosition
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store);
  // const outdentListItem = useOutdentListItem();

  function getTrailingId(id) {
    // console.log( 'useMerge() getTrailingId()' )
    const order = getBlockOrder(id);
    if (!order.length) {
      return id;
    }
    return getTrailingId(order[order.length - 1]);
  }
  function getParentListItemId(id) {
    // console.log( 'useMerge() getParentListItemId()' )
    const listId = getBlockRootClientId(id);
    const parentListItemId = getBlockRootClientId(listId);
    if (!parentListItemId) return;
    if (getBlockName(parentListItemId) !== 'bsx-blocks/check-list-item') return;
    return parentListItemId;
  }

  /**
   * Return the next list item with respect to the given list item. If none,
   * return the next list item of the parent list item if it exists.
   *
   * @param {string} id A list item client ID.
   * @return {string?} The client ID of the next list item.
   */
  function _getNextId(id) {
    // console.log( 'useMerge() _getNextId()' )
    const next = getNextBlockClientId(id);
    if (next) return next;
    const parentListItemId = getParentListItemId(id);
    if (!parentListItemId) return;
    return _getNextId(parentListItemId);
  }

  /**
   * Given a client ID, return the client ID of the list item on the next
   * line, regardless of indentation level.
   *
   * @param {string} id The client ID of the current list item.
   * @return {string?} The client ID of the next list item.
   */
  function getNextId(id) {
    // console.log( 'useMerge() getNextId()' )
    const order = getBlockOrder(id);

    // If the list item does not have a nested list, return the next list
    // item.
    if (!order.length) {
      return _getNextId(id);
    }

    // Get the first list item in the nested list.
    return getBlockOrder(order[0])[0];
  }
  return forward => {
    // console.log( 'useMerge() return' )
    function mergeWithNested(clientIdA, clientIdB) {
      registry.batch(() => {
        // When merging a sub list item with a higher next list item, we
        // also need to move any nested list items. Check if there's a
        // listed list, and append its nested list items to the current
        // list.
        const [nestedListClientId] = getBlockOrder(clientIdB);
        if (nestedListClientId) {
          moveBlocksToPosition(getBlockOrder(nestedListClientId), nestedListClientId, getBlockRootClientId(clientIdA));
        }
        mergeBlocks(clientIdA, clientIdB);
      });
    }
    if (forward) {
      const nextBlockClientId = getNextId(clientId);
      if (!nextBlockClientId) {
        onMerge(forward);
        return;
      }
      if (getParentListItemId(nextBlockClientId)) {
        // outdentListItem( nextBlockClientId );
      } else {
        mergeWithNested(clientId, nextBlockClientId);
      }
    } else {
      // Merging is only done from the top level. For lowel levels, the
      // list item is outdented instead.
      const previousBlockClientId = getPreviousBlockClientId(clientId);
      if (getParentListItemId(clientId)) {
        // outdentListItem( clientId );
      } else if (previousBlockClientId) {
        const trailingId = getTrailingId(previousBlockClientId);
        mergeWithNested(trailingId, clientId);
      } else {
        onMerge(forward);
      }
    }
  };
}

/***/ }),

/***/ "./src/check-list-item/hooks/use-split.js":
/*!************************************************!*\
  !*** ./src/check-list-item/hooks/use-split.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useSplit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/**
 * WordPress dependencies
 */




function useSplit(clientId) {
  // console.log( 'useSplit()' )

  // We can not rely on the isAfterOriginal parameter of the callback,
  // because if the value after the split is empty isAfterOriginal is false
  // while the value is in fact after the original. So to avoid that issue we use
  // a flag where the first execution of the callback is false (it is the before value)
  // and the second execution is true, it is the after value.
  const isAfter = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const {
    getBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(value => {
    // console.log( '—— useSplit() callback' )
    // console.log( 'value: ' + JSON.stringify( value, null, 2 ) );
    // console.log( 'isAfter.current: ' + JSON.stringify( isAfter.current, null, 2 ) );
    const block = getBlock(clientId);
    // console.log( 'block: ' + JSON.stringify( block, null, 2 ) );

    // remember: returned content will be recieved by onReplace function and so converted by convertToChecklistItems()

    if (isAfter.current) {
      // console.log( '——-- clone block' )
      return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.cloneBlock)(block, {
        content: value
      });
    }
    isAfter.current = true;
    // console.log( '——-- create block' )
    return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.createBlock)(block.name, {
      ...block.attributes,
      content: value
    });
  }, [clientId, getBlock]);
}

/***/ }),

/***/ "./src/check-list-item/save.js":
/*!*************************************!*\
  !*** ./src/check-list-item/save.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
function save({
  attributes
}) {
  const {
    content
  } = attributes;

  // console.log( 'save() content: \n' + content )

  /*
      <li class={ className } { ...useBlockProps.save() }>
          {
              content && ! RichText.isEmpty( content ) && (
                  <RichText.Content value={ content } />
              )
          }
      </li>
  */

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    value: content
  }));
}

/***/ }),

/***/ "./src/check-list-item/utils.js":
/*!**************************************!*\
  !*** ./src/check-list-item/utils.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertToChecklistItems: () => (/* binding */ convertToChecklistItems)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

function convertBlockToChecklist(block) {
  const list = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.switchToBlockType)(block, 'bsx-blocks/check-list');
  if (list) {
    return list;
  }
  const paragraph = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.switchToBlockType)(block, 'core/paragraph');
  if (!paragraph) {
    return null;
  }
  return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.switchToBlockType)(paragraph, 'bsx-blocks/check-list');
}
function convertToChecklistItems(blocks) {
  const listItems = [];
  for (let block of blocks) {
    console.log('convertToChecklistItems(), iterate blocks, block: ' + JSON.stringify(block, null, 2));
    if (typeof block !== 'undefined' && typeof block.name !== 'undefined') {
      if (block.name === 'bsx-blocks/check-list-item') {
        console.log("block.name === 'bsx-blocks/check-list-item'");
        listItems.push(block);
      } else if (block.name === 'bsx-blocks/check-list') {
        console.log(block.name === 'bsx-blocks/check-list');
        listItems.push(...block.innerBlocks);
      } else if (block.name === 'core/paragraph') {
        console.log("block.name === 'core/paragraph'");
        // make each line a single check list item
        const lines = block.attributes.content.split('<br>');
        for (let line of lines) {
          console.log('-- add: ' + line);
          const item = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('bsx-blocks/check-list-item', {
            content: line
          });
          console.log('-- item: ' + JSON.stringify(item, null, 2));
          listItems.push(item);
          console.log('-- listItems: ' + JSON.stringify(listItems, null, 2));
        }
      } else if (block = convertBlockToChecklist(block)) {
        console.log('block = convertBlockToChecklist( block )');
        for (const {
          innerBlocks
        } of block) {
          listItems.push(...innerBlocks);
        }
      } else {
        console.log('else');
      }
    } else {
      // skip, do nothing
    }
  }
  return listItems;
}

/***/ }),

/***/ "./src/check-list-item/editor.scss":
/*!*****************************************!*\
  !*** ./src/check-list-item/editor.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/keycodes":
/*!**********************************!*\
  !*** external ["wp","keycodes"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["keycodes"];

/***/ }),

/***/ "./src/check-list-item/block.json":
/*!****************************************!*\
  !*** ./src/check-list-item/block.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"bsx-blocks/check-list-item","version":"0.1.0","title":"BSX Check List Item","category":"text","parent":["bsx-blocks/check-list"],"allowedBlocks":[],"description":"Create a check list item.","example":{},"textdomain":"bsx-blocks","attributes":{"content":{"type":"string","source":"html","selector":"li","__experimentalRole":"content"}},"supports":{"anchor":false,"className":false,"__experimentalSelector":"li","__unstablePasteTextInline":true,"interactivity":{"clientNavigation":true}},"editorScript":"file:./index.js","editorStyle":"file:./index.css"}');

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
/*!**************************************!*\
  !*** ./src/check-list-item/index.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../_functions/icon */ "./src/_functions/icon.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/check-list-item/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/check-list-item/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/check-list-item/block.json");
/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
// import './style.scss';

/**
 * Internal dependencies
 */





/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  icon: _functions_icon__WEBPACK_IMPORTED_MODULE_1__.checkListItem,
  merge(attributes, attributesToMerge) {
    return {
      ...attributes,
      content: attributes.content + attributesToMerge.content
    };
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map