"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/openai/chat/route";
exports.ids = ["app/api/openai/chat/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fopenai%2Fchat%2Froute&page=%2Fapi%2Fopenai%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fopenai%2Fchat%2Froute.ts&appDir=%2FUsers%2Fkalaidhamu%2FDownloads%2FMarketResearch%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkalaidhamu%2FDownloads%2FMarketResearch&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fopenai%2Fchat%2Froute&page=%2Fapi%2Fopenai%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fopenai%2Fchat%2Froute.ts&appDir=%2FUsers%2Fkalaidhamu%2FDownloads%2FMarketResearch%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkalaidhamu%2FDownloads%2FMarketResearch&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_kalaidhamu_Downloads_MarketResearch_src_app_api_openai_chat_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/openai/chat/route.ts */ \"(rsc)/./src/app/api/openai/chat/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/openai/chat/route\",\n        pathname: \"/api/openai/chat\",\n        filename: \"route\",\n        bundlePath: \"app/api/openai/chat/route\"\n    },\n    resolvedPagePath: \"/Users/kalaidhamu/Downloads/MarketResearch/src/app/api/openai/chat/route.ts\",\n    nextConfigOutput,\n    userland: _Users_kalaidhamu_Downloads_MarketResearch_src_app_api_openai_chat_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/openai/chat/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZvcGVuYWklMkZjaGF0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZvcGVuYWklMkZjaGF0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGb3BlbmFpJTJGY2hhdCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmthbGFpZGhhbXUlMkZEb3dubG9hZHMlMkZNYXJrZXRSZXNlYXJjaCUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZrYWxhaWRoYW11JTJGRG93bmxvYWRzJTJGTWFya2V0UmVzZWFyY2gmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDMkI7QUFDeEc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJrZXQtcmVzZWFyY2gvP2MzMjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2thbGFpZGhhbXUvRG93bmxvYWRzL01hcmtldFJlc2VhcmNoL3NyYy9hcHAvYXBpL29wZW5haS9jaGF0L3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9vcGVuYWkvY2hhdC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL29wZW5haS9jaGF0XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9vcGVuYWkvY2hhdC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9rYWxhaWRoYW11L0Rvd25sb2Fkcy9NYXJrZXRSZXNlYXJjaC9zcmMvYXBwL2FwaS9vcGVuYWkvY2hhdC9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9vcGVuYWkvY2hhdC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fopenai%2Fchat%2Froute&page=%2Fapi%2Fopenai%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fopenai%2Fchat%2Froute.ts&appDir=%2FUsers%2Fkalaidhamu%2FDownloads%2FMarketResearch%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkalaidhamu%2FDownloads%2FMarketResearch&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/openai/chat/route.ts":
/*!******************************************!*\
  !*** ./src/app/api/openai/chat/route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n\nasync function POST(req) {\n    const startTime = Date.now();\n    try {\n        const { prompt } = await req.json();\n        if (!prompt) {\n            return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Missing prompt\", {\n                status: 400\n            });\n        }\n        console.log(\"Starting analysis with prompt length:\", prompt.length);\n        // Extract product name and context from the prompt\n        const productMatch = prompt.match(/Product\\/Service:\\s*([^\\n]+)/);\n        const contextMatch = prompt.match(/Context:\\s*([^\\n]+)/);\n        if (!productMatch || !contextMatch) {\n            throw new Error(\"Invalid prompt format\");\n        }\n        const productName = productMatch[1].trim();\n        const context = contextMatch[1].trim();\n        console.log(\"Sending to backend:\", {\n            productName,\n            context\n        });\n        // Call backend service with increased timeout and retry logic\n        const controller = new AbortController();\n        const timeoutId = setTimeout(()=>controller.abort(), 600000) // 10 minute timeout\n        ;\n        try {\n            const response = await fetch(\"http://localhost:8000/analyze\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    product_name: productName,\n                    context: context\n                }),\n                signal: controller.signal\n            });\n            clearTimeout(timeoutId);\n            if (!response.ok) {\n                const errorData = await response.text();\n                console.error(\"Backend error response:\", errorData);\n                throw new Error(`Backend service error: ${errorData}`);\n            }\n            // Create a ReadableStream to stream the response\n            const stream = new ReadableStream({\n                async start (controller) {\n                    try {\n                        const reader = response.body?.getReader();\n                        if (!reader) throw new Error(\"No reader available\");\n                        while(true){\n                            const { done, value } = await reader.read();\n                            if (done) break;\n                            controller.enqueue(value);\n                        }\n                    } catch (error) {\n                        console.error(\"Streaming error:\", error);\n                        controller.error(error);\n                    } finally{\n                        controller.close();\n                    }\n                }\n            });\n            console.log(\"Analysis completed in:\", Date.now() - startTime, \"ms\");\n            return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"](stream, {\n                headers: {\n                    \"Content-Type\": \"text/event-stream\",\n                    \"Cache-Control\": \"no-cache\",\n                    \"Connection\": \"keep-alive\"\n                }\n            });\n        } catch (error) {\n            if (error.name === \"AbortError\") {\n                throw new Error(\"Request timed out after 10 minutes\");\n            }\n            throw error;\n        } finally{\n            clearTimeout(timeoutId);\n        }\n    } catch (error) {\n        console.error(\"API Error:\", {\n            message: error.message,\n            responseTime: Date.now() - startTime,\n            stack: error.stack\n        });\n        return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"](JSON.stringify({\n            error: \"An error occurred during analysis\",\n            details: error.message\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTVksT0FBTztZQUN0QkMsY0FBYzlDLEtBQUtDLEdBQUcsS0FBS0Y7WUFDM0JnRCxPQUFPZCxNQUFNYyxLQUFLO1FBQ3BCO1FBRUEsT0FBTyxJQUFJbkQsa0ZBQVlBLENBQ3JCNkIsS0FBS0MsU0FBUyxDQUFDO1lBQ2JPLE9BQU87WUFDUGUsU0FBU2YsTUFBTVksT0FBTztRQUN4QixJQUNBO1lBQUV6QyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL21hcmtldC1yZXNlYXJjaC8uL3NyYy9hcHAvYXBpL29wZW5haS9jaGF0L3JvdXRlLnRzP2NkZmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogUmVxdWVzdCkge1xuICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpXG4gIFxuICB0cnkge1xuICAgIGNvbnN0IHsgcHJvbXB0IH0gPSBhd2FpdCByZXEuanNvbigpXG5cbiAgICBpZiAoIXByb21wdCkge1xuICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoJ01pc3NpbmcgcHJvbXB0JywgeyBzdGF0dXM6IDQwMCB9KVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdTdGFydGluZyBhbmFseXNpcyB3aXRoIHByb21wdCBsZW5ndGg6JywgcHJvbXB0Lmxlbmd0aClcblxuICAgIC8vIEV4dHJhY3QgcHJvZHVjdCBuYW1lIGFuZCBjb250ZXh0IGZyb20gdGhlIHByb21wdFxuICAgIGNvbnN0IHByb2R1Y3RNYXRjaCA9IHByb21wdC5tYXRjaCgvUHJvZHVjdFxcL1NlcnZpY2U6XFxzKihbXlxcbl0rKS8pXG4gICAgY29uc3QgY29udGV4dE1hdGNoID0gcHJvbXB0Lm1hdGNoKC9Db250ZXh0OlxccyooW15cXG5dKykvKVxuXG4gICAgaWYgKCFwcm9kdWN0TWF0Y2ggfHwgIWNvbnRleHRNYXRjaCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHByb21wdCBmb3JtYXQnKVxuICAgIH1cblxuICAgIGNvbnN0IHByb2R1Y3ROYW1lID0gcHJvZHVjdE1hdGNoWzFdLnRyaW0oKVxuICAgIGNvbnN0IGNvbnRleHQgPSBjb250ZXh0TWF0Y2hbMV0udHJpbSgpXG5cbiAgICBjb25zb2xlLmxvZygnU2VuZGluZyB0byBiYWNrZW5kOicsIHsgcHJvZHVjdE5hbWUsIGNvbnRleHQgfSlcblxuICAgIC8vIENhbGwgYmFja2VuZCBzZXJ2aWNlIHdpdGggaW5jcmVhc2VkIHRpbWVvdXQgYW5kIHJldHJ5IGxvZ2ljXG4gICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxuICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4gY29udHJvbGxlci5hYm9ydCgpLCA2MDAwMDApIC8vIDEwIG1pbnV0ZSB0aW1lb3V0XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FuYWx5emUnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHByb2R1Y3RfbmFtZTogcHJvZHVjdE5hbWUsXG4gICAgICAgICAgY29udGV4dDogY29udGV4dFxuICAgICAgICB9KSxcbiAgICAgICAgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCxcbiAgICAgIH0pXG5cbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpXG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgY29uc3QgZXJyb3JEYXRhID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0JhY2tlbmQgZXJyb3IgcmVzcG9uc2U6JywgZXJyb3JEYXRhKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJhY2tlbmQgc2VydmljZSBlcnJvcjogJHtlcnJvckRhdGF9YClcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIGEgUmVhZGFibGVTdHJlYW0gdG8gc3RyZWFtIHRoZSByZXNwb25zZVxuICAgICAgY29uc3Qgc3RyZWFtID0gbmV3IFJlYWRhYmxlU3RyZWFtKHtcbiAgICAgICAgYXN5bmMgc3RhcnQoY29udHJvbGxlcikge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSByZXNwb25zZS5ib2R5Py5nZXRSZWFkZXIoKVxuICAgICAgICAgICAgaWYgKCFyZWFkZXIpIHRocm93IG5ldyBFcnJvcignTm8gcmVhZGVyIGF2YWlsYWJsZScpXG5cbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgZG9uZSwgdmFsdWUgfSA9IGF3YWl0IHJlYWRlci5yZWFkKClcbiAgICAgICAgICAgICAgaWYgKGRvbmUpIGJyZWFrXG4gICAgICAgICAgICAgIGNvbnRyb2xsZXIuZW5xdWV1ZSh2YWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignU3RyZWFtaW5nIGVycm9yOicsIGVycm9yKVxuICAgICAgICAgICAgY29udHJvbGxlci5lcnJvcihlcnJvcilcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgY29udHJvbGxlci5jbG9zZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBjb25zb2xlLmxvZygnQW5hbHlzaXMgY29tcGxldGVkIGluOicsIERhdGUubm93KCkgLSBzdGFydFRpbWUsICdtcycpXG4gICAgICBcbiAgICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKHN0cmVhbSwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L2V2ZW50LXN0cmVhbScsXG4gICAgICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUnLFxuICAgICAgICAgICdDb25uZWN0aW9uJzogJ2tlZXAtYWxpdmUnLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBpZiAoZXJyb3IubmFtZSA9PT0gJ0Fib3J0RXJyb3InKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWVzdCB0aW1lZCBvdXQgYWZ0ZXIgMTAgbWludXRlcycpXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJvclxuICAgIH0gZmluYWxseSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSBFcnJvcjonLCB7XG4gICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgcmVzcG9uc2VUaW1lOiBEYXRlLm5vdygpIC0gc3RhcnRUaW1lLFxuICAgICAgc3RhY2s6IGVycm9yLnN0YWNrXG4gICAgfSlcbiAgICBcbiAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcbiAgICAgIEpTT04uc3RyaW5naWZ5KHsgXG4gICAgICAgIGVycm9yOiAnQW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIGFuYWx5c2lzJyxcbiAgICAgICAgZGV0YWlsczogZXJyb3IubWVzc2FnZSBcbiAgICAgIH0pLCBcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgIClcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIlBPU1QiLCJyZXEiLCJzdGFydFRpbWUiLCJEYXRlIiwibm93IiwicHJvbXB0IiwianNvbiIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJwcm9kdWN0TWF0Y2giLCJtYXRjaCIsImNvbnRleHRNYXRjaCIsIkVycm9yIiwicHJvZHVjdE5hbWUiLCJ0cmltIiwiY29udGV4dCIsImNvbnRyb2xsZXIiLCJBYm9ydENvbnRyb2xsZXIiLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwiYWJvcnQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicHJvZHVjdF9uYW1lIiwic2lnbmFsIiwiY2xlYXJUaW1lb3V0Iiwib2siLCJlcnJvckRhdGEiLCJ0ZXh0IiwiZXJyb3IiLCJzdHJlYW0iLCJSZWFkYWJsZVN0cmVhbSIsInN0YXJ0IiwicmVhZGVyIiwiZ2V0UmVhZGVyIiwiZG9uZSIsInZhbHVlIiwicmVhZCIsImVucXVldWUiLCJjbG9zZSIsIm5hbWUiLCJtZXNzYWdlIiwicmVzcG9uc2VUaW1lIiwic3RhY2siLCJkZXRhaWxzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/openai/chat/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fopenai%2Fchat%2Froute&page=%2Fapi%2Fopenai%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fopenai%2Fchat%2Froute.ts&appDir=%2FUsers%2Fkalaidhamu%2FDownloads%2FMarketResearch%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkalaidhamu%2FDownloads%2FMarketResearch&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();