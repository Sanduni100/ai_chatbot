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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nfunction AuthProvider({ children }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [ready, setReady] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const storedToken = window.localStorage.getItem(\"token\");\n        const storedUser = window.localStorage.getItem(\"user\");\n        if (storedToken && storedUser) {\n            setToken(storedToken);\n            setUser(JSON.parse(storedUser));\n        }\n        setReady(true);\n    }, []);\n    const login = (nextToken, nextUser)=>{\n        window.localStorage.setItem(\"token\", nextToken);\n        window.localStorage.setItem(\"user\", JSON.stringify(nextUser));\n        setToken(nextToken);\n        setUser(nextUser);\n    };\n    const logout = ()=>{\n        window.localStorage.removeItem(\"token\");\n        window.localStorage.removeItem(\"user\");\n        setToken(null);\n        setUser(null);\n        router.push(\"/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            token,\n            ready,\n            login,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Raveesha Sanduni\\\\Downloads\\\\ai-chatbot\\\\ai-chatbot\\\\frontend\\\\context\\\\AuthContext.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\nconst useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0F1dGhDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1RTtBQUMvQjtBQUV4QyxNQUFNSyw0QkFBY0wsb0RBQWFBLENBQUM7QUFFM0IsU0FBU00sYUFBYSxFQUFFQyxRQUFRLEVBQUU7SUFDdkMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ08sT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNTLE9BQU9DLFNBQVMsR0FBR1YsK0NBQVFBLENBQUM7SUFDbkMsTUFBTVcsU0FBU1Ysc0RBQVNBO0lBRXhCRixnREFBU0EsQ0FBQztRQUNSLE1BQU1hLGNBQWNDLE9BQU9DLFlBQVksQ0FBQ0MsT0FBTyxDQUFDO1FBQ2hELE1BQU1DLGFBQWFILE9BQU9DLFlBQVksQ0FBQ0MsT0FBTyxDQUFDO1FBQy9DLElBQUlILGVBQWVJLFlBQVk7WUFDN0JSLFNBQVNJO1lBQ1ROLFFBQVFXLEtBQUtDLEtBQUssQ0FBQ0Y7UUFDckI7UUFDQU4sU0FBUztJQUNYLEdBQUcsRUFBRTtJQUVMLE1BQU1TLFFBQVEsQ0FBQ0MsV0FBV0M7UUFDeEJSLE9BQU9DLFlBQVksQ0FBQ1EsT0FBTyxDQUFDLFNBQVNGO1FBQ3JDUCxPQUFPQyxZQUFZLENBQUNRLE9BQU8sQ0FBQyxRQUFRTCxLQUFLTSxTQUFTLENBQUNGO1FBQ25EYixTQUFTWTtRQUNUZCxRQUFRZTtJQUNWO0lBRUEsTUFBTUcsU0FBUztRQUNiWCxPQUFPQyxZQUFZLENBQUNXLFVBQVUsQ0FBQztRQUMvQlosT0FBT0MsWUFBWSxDQUFDVyxVQUFVLENBQUM7UUFDL0JqQixTQUFTO1FBQ1RGLFFBQVE7UUFDUkssT0FBT2UsSUFBSSxDQUFDO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ3hCLFlBQVl5QixRQUFRO1FBQUNDLE9BQU87WUFBRXZCO1lBQU1FO1lBQU9FO1lBQU9VO1lBQU9LO1FBQU87a0JBQzlEcEI7Ozs7OztBQUdQO0FBRU8sTUFBTXlCLFVBQVUsSUFBTS9CLGlEQUFVQSxDQUFDSSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWktY2hhdGJvdC1mcm9udGVuZC8uL2NvbnRleHQvQXV0aENvbnRleHQuanM/MTM5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcmVhZHksIHNldFJlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdG9yZWRUb2tlbiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICBjb25zdCBzdG9yZWRVc2VyID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XG4gICAgaWYgKHN0b3JlZFRva2VuICYmIHN0b3JlZFVzZXIpIHtcbiAgICAgIHNldFRva2VuKHN0b3JlZFRva2VuKTtcbiAgICAgIHNldFVzZXIoSlNPTi5wYXJzZShzdG9yZWRVc2VyKSk7XG4gICAgfVxuICAgIHNldFJlYWR5KHRydWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgbG9naW4gPSAobmV4dFRva2VuLCBuZXh0VXNlcikgPT4ge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBuZXh0VG9rZW4pO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KG5leHRVc2VyKSk7XG4gICAgc2V0VG9rZW4obmV4dFRva2VuKTtcbiAgICBzZXRVc2VyKG5leHRVc2VyKTtcbiAgfTtcblxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xuICAgIHNldFRva2VuKG51bGwpO1xuICAgIHNldFVzZXIobnVsbCk7XG4gICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIHRva2VuLCByZWFkeSwgbG9naW4sIGxvZ291dCB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJ0b2tlbiIsInNldFRva2VuIiwicmVhZHkiLCJzZXRSZWFkeSIsInJvdXRlciIsInN0b3JlZFRva2VuIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInN0b3JlZFVzZXIiLCJKU09OIiwicGFyc2UiLCJsb2dpbiIsIm5leHRUb2tlbiIsIm5leHRVc2VyIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJwdXNoIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/AuthContext.js\n");

/***/ }),

/***/ "./context/ThemeContext.js":
/*!*********************************!*\
  !*** ./context/ThemeContext.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider),\n/* harmony export */   useTheme: () => (/* binding */ useTheme)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    theme: \"light\",\n    toggleTheme: ()=>{}\n});\nfunction ThemeProvider({ children }) {\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"light\");\n    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const stored = window.localStorage.getItem(\"theme\");\n        const preferred = stored || (window.matchMedia(\"(prefers-color-scheme: dark)\").matches ? \"dark\" : \"light\");\n        setTheme(preferred);\n        setMounted(true);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!mounted) return;\n        document.documentElement.classList.toggle(\"dark\", theme === \"dark\");\n        window.localStorage.setItem(\"theme\", theme);\n    }, [\n        theme,\n        mounted\n    ]);\n    const toggleTheme = ()=>setTheme((prev)=>prev === \"light\" ? \"dark\" : \"light\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            theme,\n            toggleTheme\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Raveesha Sanduni\\\\Downloads\\\\ai-chatbot\\\\ai-chatbot\\\\frontend\\\\context\\\\ThemeContext.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\nconst useTheme = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1RoZW1lQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXVFO0FBRXZFLE1BQU1JLDZCQUFlSixvREFBYUEsQ0FBQztJQUFFSyxPQUFPO0lBQVNDLGFBQWEsS0FBTztBQUFFO0FBRXBFLFNBQVNDLGNBQWMsRUFBRUMsUUFBUSxFQUFFO0lBQ3hDLE1BQU0sQ0FBQ0gsT0FBT0ksU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNPLFNBQVNDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUM7SUFFdkNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVUsU0FBU0MsT0FBT0MsWUFBWSxDQUFDQyxPQUFPLENBQUM7UUFDM0MsTUFBTUMsWUFDSkosVUFBV0MsQ0FBQUEsT0FBT0ksVUFBVSxDQUFDLGdDQUFnQ0MsT0FBTyxHQUFHLFNBQVMsT0FBTTtRQUN4RlQsU0FBU087UUFDVEwsV0FBVztJQUNiLEdBQUcsRUFBRTtJQUVMVCxnREFBU0EsQ0FBQztRQUNSLElBQUksQ0FBQ1EsU0FBUztRQUNkUyxTQUFTQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVFqQixVQUFVO1FBQzVEUSxPQUFPQyxZQUFZLENBQUNTLE9BQU8sQ0FBQyxTQUFTbEI7SUFDdkMsR0FBRztRQUFDQTtRQUFPSztLQUFRO0lBRW5CLE1BQU1KLGNBQWMsSUFBTUcsU0FBUyxDQUFDZSxPQUFVQSxTQUFTLFVBQVUsU0FBUztJQUUxRSxxQkFDRSw4REFBQ3BCLGFBQWFxQixRQUFRO1FBQUNDLE9BQU87WUFBRXJCO1lBQU9DO1FBQVk7a0JBQUlFOzs7Ozs7QUFFM0Q7QUFFTyxNQUFNbUIsV0FBVyxJQUFNMUIsaURBQVVBLENBQUNHLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haS1jaGF0Ym90LWZyb250ZW5kLy4vY29udGV4dC9UaGVtZUNvbnRleHQuanM/NjYzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHsgdGhlbWU6ICdsaWdodCcsIHRvZ2dsZVRoZW1lOiAoKSA9PiB7fSB9KTtcblxuZXhwb3J0IGZ1bmN0aW9uIFRoZW1lUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoJ2xpZ2h0Jyk7XG4gIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlZCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKTtcbiAgICBjb25zdCBwcmVmZXJyZWQgPVxuICAgICAgc3RvcmVkIHx8ICh3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXMgPyAnZGFyaycgOiAnbGlnaHQnKTtcbiAgICBzZXRUaGVtZShwcmVmZXJyZWQpO1xuICAgIHNldE1vdW50ZWQodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbW91bnRlZCkgcmV0dXJuO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrJywgdGhlbWUgPT09ICdkYXJrJyk7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIHRoZW1lKTtcbiAgfSwgW3RoZW1lLCBtb3VudGVkXSk7XG5cbiAgY29uc3QgdG9nZ2xlVGhlbWUgPSAoKSA9PiBzZXRUaGVtZSgocHJldikgPT4gKHByZXYgPT09ICdsaWdodCcgPyAnZGFyaycgOiAnbGlnaHQnKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHRoZW1lLCB0b2dnbGVUaGVtZSB9fT57Y2hpbGRyZW59PC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCB1c2VUaGVtZSA9ICgpID0+IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVGhlbWVDb250ZXh0IiwidGhlbWUiLCJ0b2dnbGVUaGVtZSIsIlRoZW1lUHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldFRoZW1lIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJzdG9yZWQiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHJlZmVycmVkIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInNldEl0ZW0iLCJwcmV2IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/ThemeContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_pages_app_js_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_inter___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"pages\\\\_app.js\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"],\"variable\":\"--font-inter\"}],\"variableName\":\"inter\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"pages\\\\\\\\_app.js\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"variable\\\":\\\"--font-inter\\\"}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_pages_app_js_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_inter___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_pages_app_js_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_inter___WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_font_google_target_css_path_pages_app_js_import_Manrope_arguments_subsets_latin_variable_font_manrope_variableName_manrope___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"pages\\\\_app.js\",\"import\":\"Manrope\",\"arguments\":[{\"subsets\":[\"latin\"],\"variable\":\"--font-manrope\"}],\"variableName\":\"manrope\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"pages\\\\\\\\_app.js\\\",\\\"import\\\":\\\"Manrope\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"variable\\\":\\\"--font-manrope\\\"}],\\\"variableName\\\":\\\"manrope\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_pages_app_js_import_Manrope_arguments_subsets_latin_variable_font_manrope_variableName_manrope___WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_pages_app_js_import_Manrope_arguments_subsets_latin_variable_font_manrope_variableName_manrope___WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/ThemeContext */ \"./context/ThemeContext.js\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_1__]);\nreact_toastify__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\nfunction ToastWithTheme() {\n    const { theme } = (0,_context_ThemeContext__WEBPACK_IMPORTED_MODULE_4__.useTheme)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_1__.ToastContainer, {\n        position: \"top-right\",\n        autoClose: 3500,\n        theme: theme === \"dark\" ? \"dark\" : \"light\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Raveesha Sanduni\\\\Downloads\\\\ai-chatbot\\\\ai-chatbot\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: `${(next_font_google_target_css_path_pages_app_js_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_inter___WEBPACK_IMPORTED_MODULE_6___default().variable)} ${(next_font_google_target_css_path_pages_app_js_import_Manrope_arguments_subsets_latin_variable_font_manrope_variableName_manrope___WEBPACK_IMPORTED_MODULE_7___default().variable)} font-body`,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_ThemeContext__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__.AuthProvider, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Raveesha Sanduni\\\\Downloads\\\\ai-chatbot\\\\ai-chatbot\\\\frontend\\\\pages\\\\_app.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ToastWithTheme, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Raveesha Sanduni\\\\Downloads\\\\ai-chatbot\\\\ai-chatbot\\\\frontend\\\\pages\\\\_app.js\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Raveesha Sanduni\\\\Downloads\\\\ai-chatbot\\\\ai-chatbot\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Raveesha Sanduni\\\\Downloads\\\\ai-chatbot\\\\ai-chatbot\\\\frontend\\\\pages\\\\_app.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Raveesha Sanduni\\\\Downloads\\\\ai-chatbot\\\\ai-chatbot\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9NQTtBQUNBQztBQVAwQztBQUNEO0FBQ2hCO0FBQ21DO0FBQ1o7QUFLdEQsU0FBU0s7SUFDUCxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHSCwrREFBUUE7SUFDMUIscUJBQ0UsOERBQUNGLDBEQUFjQTtRQUNiTSxVQUFTO1FBQ1RDLFdBQVc7UUFDWEYsT0FBT0EsVUFBVSxTQUFTLFNBQVM7Ozs7OztBQUd6QztBQUVlLFNBQVNHLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbEQscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVcsQ0FBQyxFQUFFZCw0S0FBYyxDQUFDLENBQUMsRUFBRUMsa0xBQWdCLENBQUMsVUFBVSxDQUFDO2tCQUMvRCw0RUFBQ0UsZ0VBQWFBO3NCQUNaLDRFQUFDRSw4REFBWUE7O2tDQUNYLDhEQUFDTTt3QkFBVyxHQUFHQyxTQUFTOzs7Ozs7a0NBQ3hCLDhEQUFDTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haS1jaGF0Ym90LWZyb250ZW5kLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEludGVyLCBNYW5yb3BlIH0gZnJvbSAnbmV4dC9mb250L2dvb2dsZSc7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCB1c2VUaGVtZSB9IGZyb20gJy4uL2NvbnRleHQvVGhlbWVDb250ZXh0JztcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvQXV0aENvbnRleHQnO1xuXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogWydsYXRpbiddLCB2YXJpYWJsZTogJy0tZm9udC1pbnRlcicgfSk7XG5jb25zdCBtYW5yb3BlID0gTWFucm9wZSh7IHN1YnNldHM6IFsnbGF0aW4nXSwgdmFyaWFibGU6ICctLWZvbnQtbWFucm9wZScgfSk7XG5cbmZ1bmN0aW9uIFRvYXN0V2l0aFRoZW1lKCkge1xuICBjb25zdCB7IHRoZW1lIH0gPSB1c2VUaGVtZSgpO1xuICByZXR1cm4gKFxuICAgIDxUb2FzdENvbnRhaW5lclxuICAgICAgcG9zaXRpb249XCJ0b3AtcmlnaHRcIlxuICAgICAgYXV0b0Nsb3NlPXszNTAwfVxuICAgICAgdGhlbWU9e3RoZW1lID09PSAnZGFyaycgPyAnZGFyaycgOiAnbGlnaHQnfVxuICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7aW50ZXIudmFyaWFibGV9ICR7bWFucm9wZS52YXJpYWJsZX0gZm9udC1ib2R5YH0+XG4gICAgICA8VGhlbWVQcm92aWRlcj5cbiAgICAgICAgPEF1dGhQcm92aWRlcj5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPFRvYXN0V2l0aFRoZW1lIC8+XG4gICAgICAgIDwvQXV0aFByb3ZpZGVyPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImludGVyIiwibWFucm9wZSIsIlRvYXN0Q29udGFpbmVyIiwiVGhlbWVQcm92aWRlciIsInVzZVRoZW1lIiwiQXV0aFByb3ZpZGVyIiwiVG9hc3RXaXRoVGhlbWUiLCJ0aGVtZSIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZGl2IiwiY2xhc3NOYW1lIiwidmFyaWFibGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-toastify"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();