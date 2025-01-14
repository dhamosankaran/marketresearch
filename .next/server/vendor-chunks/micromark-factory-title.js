"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-factory-title";
exports.ids = ["vendor-chunks/micromark-factory-title"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-factory-title/dev/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark-factory-title/dev/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   factoryTitle: () => (/* binding */ factoryTitle)\n/* harmony export */ });\n/* harmony import */ var micromark_factory_space__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-factory-space */ \"(ssr)/./node_modules/micromark-factory-space/dev/index.js\");\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-character */ \"(ssr)/./node_modules/micromark-util-character/dev/index.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/micromark-util-symbol/lib/codes.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/micromark-util-symbol/lib/types.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/micromark-util-symbol/lib/constants.js\");\n/**\n * @import {\n *   Code,\n *   Effects,\n *   State,\n *   TokenType\n * } from 'micromark-util-types'\n */ \n\n\n/**\n * Parse titles.\n *\n * ###### Examples\n *\n * ```markdown\n * \"a\"\n * 'b'\n * (c)\n * \"a\n * b\"\n * 'a\n *     b'\n * (a\\)b)\n * ```\n *\n * @param {Effects} effects\n *   Context.\n * @param {State} ok\n *   State switched to when successful.\n * @param {State} nok\n *   State switched to when unsuccessful.\n * @param {TokenType} type\n *   Type of the whole title (`\"a\"`, `'b'`, `(c)`).\n * @param {TokenType} markerType\n *   Type for the markers (`\"`, `'`, `(`, and `)`).\n * @param {TokenType} stringType\n *   Type for the value (`a`).\n * @returns {State}\n *   Start state.\n */ function factoryTitle(effects, ok, nok, type, markerType, stringType) {\n    /** @type {NonNullable<Code>} */ let marker;\n    return start;\n    /**\n   * Start of title.\n   *\n   * ```markdown\n   * > | \"a\"\n   *     ^\n   * ```\n   *\n   * @type {State}\n   */ function start(code) {\n        if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.quotationMark || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.apostrophe || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.leftParenthesis) {\n            effects.enter(type);\n            effects.enter(markerType);\n            effects.consume(code);\n            effects.exit(markerType);\n            marker = code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.leftParenthesis ? micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.rightParenthesis : code;\n            return begin;\n        }\n        return nok(code);\n    }\n    /**\n   * After opening marker.\n   *\n   * This is also used at the closing marker.\n   *\n   * ```markdown\n   * > | \"a\"\n   *      ^\n   * ```\n   *\n   * @type {State}\n   */ function begin(code) {\n        if (code === marker) {\n            effects.enter(markerType);\n            effects.consume(code);\n            effects.exit(markerType);\n            effects.exit(type);\n            return ok;\n        }\n        effects.enter(stringType);\n        return atBreak(code);\n    }\n    /**\n   * At something, before something else.\n   *\n   * ```markdown\n   * > | \"a\"\n   *      ^\n   * ```\n   *\n   * @type {State}\n   */ function atBreak(code) {\n        if (code === marker) {\n            effects.exit(stringType);\n            return begin(marker);\n        }\n        if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof) {\n            return nok(code);\n        }\n        // Note: blank lines can’t exist in content.\n        if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.markdownLineEnding)(code)) {\n            // To do: use `space_or_tab_eol_with_options`, connect.\n            effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.lineEnding);\n            effects.consume(code);\n            effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.lineEnding);\n            return (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_3__.factorySpace)(effects, atBreak, micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.linePrefix);\n        }\n        effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.chunkString, {\n            contentType: micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.constants.contentTypeString\n        });\n        return inside(code);\n    }\n    /**\n   *\n   *\n   * @type {State}\n   */ function inside(code) {\n        if (code === marker || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.markdownLineEnding)(code)) {\n            effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.chunkString);\n            return atBreak(code);\n        }\n        effects.consume(code);\n        return code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.backslash ? escape : inside;\n    }\n    /**\n   * After `\\`, at a special character.\n   *\n   * ```markdown\n   * > | \"a\\*b\"\n   *      ^\n   * ```\n   *\n   * @type {State}\n   */ function escape(code) {\n        if (code === marker || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.backslash) {\n            effects.consume(code);\n            return inside;\n        }\n        return inside(code);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWZhY3RvcnktdGl0bGUvZGV2L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7O0NBT0MsR0FFbUQ7QUFDTztBQUNFO0FBRTdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0E4QkMsR0FDTSxTQUFTSyxhQUFhQyxPQUFPLEVBQUVDLEVBQUUsRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsVUFBVTtJQUN6RSw4QkFBOEIsR0FDOUIsSUFBSUM7SUFFSixPQUFPQztJQUVQOzs7Ozs7Ozs7R0FTQyxHQUNELFNBQVNBLE1BQU1DLElBQUk7UUFDakIsSUFDRUEsU0FBU1osd0RBQUtBLENBQUNhLGFBQWEsSUFDNUJELFNBQVNaLHdEQUFLQSxDQUFDYyxVQUFVLElBQ3pCRixTQUFTWix3REFBS0EsQ0FBQ2UsZUFBZSxFQUM5QjtZQUNBWCxRQUFRWSxLQUFLLENBQUNUO1lBQ2RILFFBQVFZLEtBQUssQ0FBQ1I7WUFDZEosUUFBUWEsT0FBTyxDQUFDTDtZQUNoQlIsUUFBUWMsSUFBSSxDQUFDVjtZQUNiRSxTQUFTRSxTQUFTWix3REFBS0EsQ0FBQ2UsZUFBZSxHQUFHZix3REFBS0EsQ0FBQ21CLGdCQUFnQixHQUFHUDtZQUNuRSxPQUFPUTtRQUNUO1FBRUEsT0FBT2QsSUFBSU07SUFDYjtJQUVBOzs7Ozs7Ozs7OztHQVdDLEdBQ0QsU0FBU1EsTUFBTVIsSUFBSTtRQUNqQixJQUFJQSxTQUFTRixRQUFRO1lBQ25CTixRQUFRWSxLQUFLLENBQUNSO1lBQ2RKLFFBQVFhLE9BQU8sQ0FBQ0w7WUFDaEJSLFFBQVFjLElBQUksQ0FBQ1Y7WUFDYkosUUFBUWMsSUFBSSxDQUFDWDtZQUNiLE9BQU9GO1FBQ1Q7UUFFQUQsUUFBUVksS0FBSyxDQUFDUDtRQUNkLE9BQU9ZLFFBQVFUO0lBQ2pCO0lBRUE7Ozs7Ozs7OztHQVNDLEdBQ0QsU0FBU1MsUUFBUVQsSUFBSTtRQUNuQixJQUFJQSxTQUFTRixRQUFRO1lBQ25CTixRQUFRYyxJQUFJLENBQUNUO1lBQ2IsT0FBT1csTUFBTVY7UUFDZjtRQUVBLElBQUlFLFNBQVNaLHdEQUFLQSxDQUFDc0IsR0FBRyxFQUFFO1lBQ3RCLE9BQU9oQixJQUFJTTtRQUNiO1FBRUEsNENBQTRDO1FBQzVDLElBQUliLDRFQUFrQkEsQ0FBQ2EsT0FBTztZQUM1Qix1REFBdUQ7WUFDdkRSLFFBQVFZLEtBQUssQ0FBQ2Qsd0RBQUtBLENBQUNxQixVQUFVO1lBQzlCbkIsUUFBUWEsT0FBTyxDQUFDTDtZQUNoQlIsUUFBUWMsSUFBSSxDQUFDaEIsd0RBQUtBLENBQUNxQixVQUFVO1lBQzdCLE9BQU96QixxRUFBWUEsQ0FBQ00sU0FBU2lCLFNBQVNuQix3REFBS0EsQ0FBQ3NCLFVBQVU7UUFDeEQ7UUFFQXBCLFFBQVFZLEtBQUssQ0FBQ2Qsd0RBQUtBLENBQUN1QixXQUFXLEVBQUU7WUFBQ0MsYUFBYXpCLDREQUFTQSxDQUFDMEIsaUJBQWlCO1FBQUE7UUFDMUUsT0FBT0MsT0FBT2hCO0lBQ2hCO0lBRUE7Ozs7R0FJQyxHQUNELFNBQVNnQixPQUFPaEIsSUFBSTtRQUNsQixJQUFJQSxTQUFTRixVQUFVRSxTQUFTWix3REFBS0EsQ0FBQ3NCLEdBQUcsSUFBSXZCLDRFQUFrQkEsQ0FBQ2EsT0FBTztZQUNyRVIsUUFBUWMsSUFBSSxDQUFDaEIsd0RBQUtBLENBQUN1QixXQUFXO1lBQzlCLE9BQU9KLFFBQVFUO1FBQ2pCO1FBRUFSLFFBQVFhLE9BQU8sQ0FBQ0w7UUFDaEIsT0FBT0EsU0FBU1osd0RBQUtBLENBQUM2QixTQUFTLEdBQUdDLFNBQVNGO0lBQzdDO0lBRUE7Ozs7Ozs7OztHQVNDLEdBQ0QsU0FBU0UsT0FBT2xCLElBQUk7UUFDbEIsSUFBSUEsU0FBU0YsVUFBVUUsU0FBU1osd0RBQUtBLENBQUM2QixTQUFTLEVBQUU7WUFDL0N6QixRQUFRYSxPQUFPLENBQUNMO1lBQ2hCLE9BQU9nQjtRQUNUO1FBRUEsT0FBT0EsT0FBT2hCO0lBQ2hCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJrZXQtcmVzZWFyY2gvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWZhY3RvcnktdGl0bGUvZGV2L2luZGV4LmpzPzJhNGYiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAaW1wb3J0IHtcbiAqICAgQ29kZSxcbiAqICAgRWZmZWN0cyxcbiAqICAgU3RhdGUsXG4gKiAgIFRva2VuVHlwZVxuICogfSBmcm9tICdtaWNyb21hcmstdXRpbC10eXBlcydcbiAqL1xuXG5pbXBvcnQge2ZhY3RvcnlTcGFjZX0gZnJvbSAnbWljcm9tYXJrLWZhY3Rvcnktc3BhY2UnXG5pbXBvcnQge21hcmtkb3duTGluZUVuZGluZ30gZnJvbSAnbWljcm9tYXJrLXV0aWwtY2hhcmFjdGVyJ1xuaW1wb3J0IHtjb2RlcywgY29uc3RhbnRzLCB0eXBlc30gZnJvbSAnbWljcm9tYXJrLXV0aWwtc3ltYm9sJ1xuXG4vKipcbiAqIFBhcnNlIHRpdGxlcy5cbiAqXG4gKiAjIyMjIyMgRXhhbXBsZXNcbiAqXG4gKiBgYGBtYXJrZG93blxuICogXCJhXCJcbiAqICdiJ1xuICogKGMpXG4gKiBcImFcbiAqIGJcIlxuICogJ2FcbiAqICAgICBiJ1xuICogKGFcXCliKVxuICogYGBgXG4gKlxuICogQHBhcmFtIHtFZmZlY3RzfSBlZmZlY3RzXG4gKiAgIENvbnRleHQuXG4gKiBAcGFyYW0ge1N0YXRlfSBva1xuICogICBTdGF0ZSBzd2l0Y2hlZCB0byB3aGVuIHN1Y2Nlc3NmdWwuXG4gKiBAcGFyYW0ge1N0YXRlfSBub2tcbiAqICAgU3RhdGUgc3dpdGNoZWQgdG8gd2hlbiB1bnN1Y2Nlc3NmdWwuXG4gKiBAcGFyYW0ge1Rva2VuVHlwZX0gdHlwZVxuICogICBUeXBlIG9mIHRoZSB3aG9sZSB0aXRsZSAoYFwiYVwiYCwgYCdiJ2AsIGAoYylgKS5cbiAqIEBwYXJhbSB7VG9rZW5UeXBlfSBtYXJrZXJUeXBlXG4gKiAgIFR5cGUgZm9yIHRoZSBtYXJrZXJzIChgXCJgLCBgJ2AsIGAoYCwgYW5kIGApYCkuXG4gKiBAcGFyYW0ge1Rva2VuVHlwZX0gc3RyaW5nVHlwZVxuICogICBUeXBlIGZvciB0aGUgdmFsdWUgKGBhYCkuXG4gKiBAcmV0dXJucyB7U3RhdGV9XG4gKiAgIFN0YXJ0IHN0YXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmFjdG9yeVRpdGxlKGVmZmVjdHMsIG9rLCBub2ssIHR5cGUsIG1hcmtlclR5cGUsIHN0cmluZ1R5cGUpIHtcbiAgLyoqIEB0eXBlIHtOb25OdWxsYWJsZTxDb2RlPn0gKi9cbiAgbGV0IG1hcmtlclxuXG4gIHJldHVybiBzdGFydFxuXG4gIC8qKlxuICAgKiBTdGFydCBvZiB0aXRsZS5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IFwiYVwiXG4gICAqICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gY29kZXMucXVvdGF0aW9uTWFyayB8fFxuICAgICAgY29kZSA9PT0gY29kZXMuYXBvc3Ryb3BoZSB8fFxuICAgICAgY29kZSA9PT0gY29kZXMubGVmdFBhcmVudGhlc2lzXG4gICAgKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKHR5cGUpXG4gICAgICBlZmZlY3RzLmVudGVyKG1hcmtlclR5cGUpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdChtYXJrZXJUeXBlKVxuICAgICAgbWFya2VyID0gY29kZSA9PT0gY29kZXMubGVmdFBhcmVudGhlc2lzID8gY29kZXMucmlnaHRQYXJlbnRoZXNpcyA6IGNvZGVcbiAgICAgIHJldHVybiBiZWdpblxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZnRlciBvcGVuaW5nIG1hcmtlci5cbiAgICpcbiAgICogVGhpcyBpcyBhbHNvIHVzZWQgYXQgdGhlIGNsb3NpbmcgbWFya2VyLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgXCJhXCJcbiAgICogICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBiZWdpbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG1hcmtlcikge1xuICAgICAgZWZmZWN0cy5lbnRlcihtYXJrZXJUeXBlKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQobWFya2VyVHlwZSlcbiAgICAgIGVmZmVjdHMuZXhpdCh0eXBlKVxuICAgICAgcmV0dXJuIG9rXG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcihzdHJpbmdUeXBlKVxuICAgIHJldHVybiBhdEJyZWFrKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogQXQgc29tZXRoaW5nLCBiZWZvcmUgc29tZXRoaW5nIGVsc2UuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBcImFcIlxuICAgKiAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGF0QnJlYWsoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBtYXJrZXIpIHtcbiAgICAgIGVmZmVjdHMuZXhpdChzdHJpbmdUeXBlKVxuICAgICAgcmV0dXJuIGJlZ2luKG1hcmtlcilcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gY29kZXMuZW9mKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgLy8gTm90ZTogYmxhbmsgbGluZXMgY2Fu4oCZdCBleGlzdCBpbiBjb250ZW50LlxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIC8vIFRvIGRvOiB1c2UgYHNwYWNlX29yX3RhYl9lb2xfd2l0aF9vcHRpb25zYCwgY29ubmVjdC5cbiAgICAgIGVmZmVjdHMuZW50ZXIodHlwZXMubGluZUVuZGluZylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KHR5cGVzLmxpbmVFbmRpbmcpXG4gICAgICByZXR1cm4gZmFjdG9yeVNwYWNlKGVmZmVjdHMsIGF0QnJlYWssIHR5cGVzLmxpbmVQcmVmaXgpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcih0eXBlcy5jaHVua1N0cmluZywge2NvbnRlbnRUeXBlOiBjb25zdGFudHMuY29udGVudFR5cGVTdHJpbmd9KVxuICAgIHJldHVybiBpbnNpZGUoY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBpbnNpZGUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBtYXJrZXIgfHwgY29kZSA9PT0gY29kZXMuZW9mIHx8IG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgZWZmZWN0cy5leGl0KHR5cGVzLmNodW5rU3RyaW5nKVxuICAgICAgcmV0dXJuIGF0QnJlYWsoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gY29kZSA9PT0gY29kZXMuYmFja3NsYXNoID8gZXNjYXBlIDogaW5zaWRlXG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgYFxcYCwgYXQgYSBzcGVjaWFsIGNoYXJhY3Rlci5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IFwiYVxcKmJcIlxuICAgKiAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGVzY2FwZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG1hcmtlciB8fCBjb2RlID09PSBjb2Rlcy5iYWNrc2xhc2gpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGluc2lkZVxuICAgIH1cblxuICAgIHJldHVybiBpbnNpZGUoY29kZSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbImZhY3RvcnlTcGFjZSIsIm1hcmtkb3duTGluZUVuZGluZyIsImNvZGVzIiwiY29uc3RhbnRzIiwidHlwZXMiLCJmYWN0b3J5VGl0bGUiLCJlZmZlY3RzIiwib2siLCJub2siLCJ0eXBlIiwibWFya2VyVHlwZSIsInN0cmluZ1R5cGUiLCJtYXJrZXIiLCJzdGFydCIsImNvZGUiLCJxdW90YXRpb25NYXJrIiwiYXBvc3Ryb3BoZSIsImxlZnRQYXJlbnRoZXNpcyIsImVudGVyIiwiY29uc3VtZSIsImV4aXQiLCJyaWdodFBhcmVudGhlc2lzIiwiYmVnaW4iLCJhdEJyZWFrIiwiZW9mIiwibGluZUVuZGluZyIsImxpbmVQcmVmaXgiLCJjaHVua1N0cmluZyIsImNvbnRlbnRUeXBlIiwiY29udGVudFR5cGVTdHJpbmciLCJpbnNpZGUiLCJiYWNrc2xhc2giLCJlc2NhcGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-factory-title/dev/index.js\n");

/***/ })

};
;