"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./modules/checkbox.js":
/*!*****************************!*\
  !*** ./modules/checkbox.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/index.js */ \"./src/index.js\");\n\n\nfunction checkbox() {\n  const x = document.getElementsByClassName('list')[0];\n  x.addEventListener('click', (e) => {\n    if (e.target.classList.contains('checkbox')) {\n      if (e.target.checked) {\n        for (let i = 0; i < _src_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length; i += 1) {\n          if (_src_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].description === e.target.nextSibling.innerHTML) {\n            _src_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].completed = true;\n            e.target.nextSibling.classList.add('overline');\n          }\n        }\n        localStorage.setItem('task', JSON.stringify(_src_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n      }\n      else {\n        for (let i = 0; i < _src_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length; i += 1) {\n          if (_src_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].description === e.target.nextSibling.innerHTML) {\n            _src_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].completed = false;\n            e.target.nextSibling.classList.remove('overline');\n          }\n        }\n        localStorage.setItem('task', JSON.stringify(_src_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n      }\n    }\n  })\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkbox);\n\n//# sourceURL=webpack://to-do-list/./modules/checkbox.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbody {\\n  width: 100%;\\n  min-height: 100vh;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n.overline {\\n  text-decoration: line-through;\\n}\\n\\n.wrapper {\\n  width: 500px;\\n  border: 1px solid grey;\\n}\\n\\n.header {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 10px 10px;\\n}\\n\\n.refresh-icon {\\n  width: 20px;\\n  height: 20px;\\n}\\n\\n.add-bar {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 10px 12px;\\n  border-top: 1px solid grey;\\n}\\n\\n.add-bar-text {\\n  border: 0;\\n  padding: 5px 5px;\\n  width: 400px;\\n}\\n\\n.enter-icon {\\n  width: 15px;\\n  height: 15px;\\n}\\n\\n.clear {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 20px 0;\\n  border-top: 1px solid grey;\\n  background-color: #e4e4e4;\\n}\\n\\n.clear-text {\\n  text-decoration: underline;\\n  color: #5e5d5d;\\n  padding: 10px 10px;\\n}\\n\\n.list-wrapper {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 15px 10px;\\n  border-top: 1px solid grey;\\n}\\n\\n.list-content {\\n  display: flex;\\n}\\n\\n.more-icon {\\n  height: 16px;\\n  width: 16px;\\n  margin-right: 10px;\\n}\\n\\n.trash {\\n  height: 15px;\\n  width: 15px;\\n}\\n\\n.list-text {\\n  margin-left: 5px;\\n  font-size: 16px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _img_refresh_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/refresh.png */ \"./img/refresh.png\");\n/* harmony import */ var _img_enter_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/enter.png */ \"./img/enter.png\");\n/* harmony import */ var _img_more_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/more.png */ \"./img/more.png\");\n/* harmony import */ var _img_trash_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/trash.png */ \"./img/trash.png\");\n/* harmony import */ var _modules_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/checkbox */ \"./modules/checkbox.js\");\n\n\n\n\n\n\n\nconst header = document.querySelector('.header');\nconst addBar = document.querySelector('.add-bar');\nconst list = document.querySelector('.list');\nconst addInput = document.querySelector('.add-bar-text');\n\nconst refreshIcon = new Image();\nconst enterIcon = new Image();\nrefreshIcon.src = _img_refresh_png__WEBPACK_IMPORTED_MODULE_1__;\nenterIcon.src = _img_enter_png__WEBPACK_IMPORTED_MODULE_2__;\nrefreshIcon.classList.add('refresh-icon');\nenterIcon.classList.add('enter-icon');\n\nheader.appendChild(refreshIcon);\naddBar.appendChild(enterIcon);\n\nlet listArr = [];\n\nconst listWrapperArr = [];\nconst listContentArr = [];\nconst listImgArr = [];\nconst listMoreArr = [];\nconst listTrashArr = [];\nconst listCheckboxArr = [];\nconst listTextArr = [];\nconst taskInfo = [];\n\nfunction displayList() {\n  listArr.sort((x, y) => (\n    x.index - y.index\n  ));\n  for (let i = 0; i < listArr.length; i += 1) {\n    listWrapperArr[i] = document.createElement('li');\n    listWrapperArr[i].classList.add('list-wrapper');\n    list.appendChild(listWrapperArr[i]);\n\n    listContentArr[i] = document.createElement('div');\n    listContentArr[i].classList.add('list-content');\n    listWrapperArr[i].appendChild(listContentArr[i]);\n    listImgArr[i] = document.createElement('div');\n    listImgArr[i].classList.add('list-images');\n    listWrapperArr[i].appendChild(listImgArr[i]);\n\n    listMoreArr[i] = document.createElement('img');\n    listMoreArr[i].src = _img_more_png__WEBPACK_IMPORTED_MODULE_3__;\n    listMoreArr[i].classList.add('more-icon');\n    listImgArr[i].appendChild(listMoreArr[i]);\n    listTrashArr[i] = document.createElement('img');\n    listTrashArr[i].src = _img_trash_png__WEBPACK_IMPORTED_MODULE_4__;\n    listTrashArr[i].classList.add('trash');\n    listImgArr[i].appendChild(listTrashArr[i]);\n\n    listCheckboxArr[i] = document.createElement('input');\n    listCheckboxArr[i].type = 'checkbox';\n    listCheckboxArr[i].classList.add('checkbox');\n    listContentArr[i].appendChild(listCheckboxArr[i]);\n    listTextArr[i] = document.createElement('p');\n    listTextArr[i].classList.add('list-text');\n    listTextArr[i].innerHTML = listArr[i].description;\n    listContentArr[i].appendChild(listTextArr[i]);\n\n    if (listArr[i].completed === true) {\n      listCheckboxArr[i].checked = true;\n      listTextArr[i].classList.add('overline');\n    };\n\n    listArr[i].index = parseFloat([i]) + 1;\n  }\n  localStorage.setItem('task', JSON.stringify(listArr));\n}\n\nfunction localCheck() {\n  if (!localStorage.getItem('task')) {\n    localStorage.setItem('task', JSON.stringify(taskInfo));\n  }\n}\n\nfunction getInfo() {\n  const obtainedInfo = JSON.parse(localStorage.getItem('task'));\n  for (let i = 0; i < obtainedInfo.length; i += 1) {\n    listArr.push(obtainedInfo[i]);\n  }\n}\n\nfunction addTask() {\n  addInput.addEventListener('keypress', (event) => {\n    if (event.key === 'Enter') {\n      if (addInput.value !== '') {\n        const newTask = {};\n        newTask.description = addInput.value;\n        newTask.completed = false;\n        newTask.index = listArr.length + 1;\n        listArr.push(newTask);\n        localStorage.setItem('task', JSON.stringify(listArr));\n        addInput.value = '';\n\n        const newListWrapper = document.createElement('li');\n        newListWrapper.classList.add('list-wrapper');\n        list.appendChild(newListWrapper);\n\n        const newListContent = document.createElement('div');\n        newListContent.classList.add('list-content');\n        newListWrapper.appendChild(newListContent);\n        const newListImg = document.createElement('div');\n        newListImg.classList.add('list-images');\n        newListWrapper.appendChild(newListImg);\n\n        const newListMore = document.createElement('img');\n        newListMore.src = _img_more_png__WEBPACK_IMPORTED_MODULE_3__;\n        newListMore.classList.add('more-icon');\n        newListImg.appendChild(newListMore);\n        const newListTrash = document.createElement('img');\n        newListTrash.src = _img_trash_png__WEBPACK_IMPORTED_MODULE_4__;\n        newListTrash.classList.add('trash');\n        newListImg.appendChild(newListTrash);\n\n        const newListCheckbox = document.createElement('input');\n        newListCheckbox.type = 'checkbox';\n        newListCheckbox.classList.add('checkbox');\n        newListContent.appendChild(newListCheckbox);\n        const newListText = document.createElement('p');\n        newListText.classList.add('list-text');\n        newListText.innerHTML = newTask.description;\n        newListContent.appendChild(newListText);\n      }\n    }\n  });\n}\n\nfunction removeFunction() {\n  const x = document.getElementsByClassName('list')[0];\n  x.addEventListener('click', (e) => {\n    if (e.target.src === _img_trash_png__WEBPACK_IMPORTED_MODULE_4__) {\n      const removing = e.target.parentElement.parentElement.firstChild.firstChild.nextSibling;\n      for (let i = 0; i < listArr.length; i += 1) {\n        if (listArr[i].description === removing.innerHTML) {\n          listArr.splice([i], 1);\n          for (let i = 0; i < listArr.length; i += 1) {\n            listArr[i].index = parseFloat([i]) + 1;\n          }\n          localStorage.setItem('task', JSON.stringify(listArr));\n        }\n      }\n      e.target.parentElement.parentElement.remove();\n    }\n  });\n}\n\nfunction editFunction() {\n  list.addEventListener('click', (y) => {\n    if (y.target.src === _img_more_png__WEBPACK_IMPORTED_MODULE_3__) {\n      const editedText = y.target.parentElement.parentElement.firstChild.lastChild;\n      const previousText = editedText.innerHTML;\n      const editedBox = y.target.parentElement.parentElement.firstChild.firstChild;\n      const editedImg = y.target;\n      editedText.classList.toggle('hidden');\n      editedBox.classList.toggle('hidden');\n      editedImg.classList.toggle('hidden');\n\n      const editInput = document.createElement('input');\n      editInput.type = 'text';\n      editInput.placeholder = 'Add to your list...';\n      editInput.classList.add('edit-input');\n      editInput.value = editedText.innerHTML;\n      y.target.parentElement.parentElement.firstChild.appendChild(editInput);\n\n      editInput.addEventListener('keypress', (event) => {\n        if (event.key === 'Enter') {\n          if (editInput.value !== '') {\n            editedText.innerHTML = editInput.value;\n            editInput.remove();\n            editedText.classList.toggle('hidden');\n            editedBox.classList.toggle('hidden');\n            editedImg.classList.toggle('hidden');\n            for (let i = 0; i < listArr.length; i += 1) {\n              if (listArr[i].description === previousText) {\n                listArr[i].description = editedText.innerHTML;\n              }\n            }\n            localStorage.setItem('task', JSON.stringify(listArr));\n          }\n        }\n      });\n    }\n  });\n}\n\nfunction clearAll() {\n  const clear = document.querySelector('.clear-text');\n  clear.addEventListener('click', () => {\n    listArr = listArr.filter(x => x.completed === false);\n    list.innerHTML = '';\n    displayList();\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listArr);\n\nlocalCheck();\ngetInfo();\ndisplayList();\naddTask();\nremoveFunction();\neditFunction();\n(0,_modules_checkbox__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\nclearAll();\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./img/enter.png":
/*!***********************!*\
  !*** ./img/enter.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7ee2076b8a7d004b80c0.png\";\n\n//# sourceURL=webpack://to-do-list/./img/enter.png?");

/***/ }),

/***/ "./img/more.png":
/*!**********************!*\
  !*** ./img/more.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"245801a824c12f13225b.png\";\n\n//# sourceURL=webpack://to-do-list/./img/more.png?");

/***/ }),

/***/ "./img/refresh.png":
/*!*************************!*\
  !*** ./img/refresh.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5c58059a56ddabb0b34f.png\";\n\n//# sourceURL=webpack://to-do-list/./img/refresh.png?");

/***/ }),

/***/ "./img/trash.png":
/*!***********************!*\
  !*** ./img/trash.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c73108f70c07756e1b1f.png\";\n\n//# sourceURL=webpack://to-do-list/./img/trash.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);