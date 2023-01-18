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
exports.id = "pages/api/users/email/[email]";
exports.ids = ["pages/api/users/email/[email]"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: [\n            true,\n            \"Name is required\"\n        ]\n    },\n    surname: {\n        type: String\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"email is required\"\n        ],\n        trim: true\n    },\n    username: {\n        type: String,\n        required: [\n            true,\n            \"Username is required\"\n        ],\n        unique: true,\n        trim: true\n    },\n    age: {\n        type: Number,\n        required: [\n            true,\n            \"Age is required\"\n        ]\n    },\n    public_id: {\n        type: String\n    }\n}, {\n    timestamps: false,\n    versionKey: false\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", userSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUMsTUFBTUcsVUFBVSxHQUFHLElBQUlILDRDQUFNLENBQUM7SUFDN0JJLElBQUksRUFBRTtRQUNMQyxJQUFJLEVBQUVDLE1BQU07UUFDWkMsUUFBUSxFQUFHO1lBQUMsSUFBSTtZQUFFLGtCQUFrQjtTQUFDO0tBQ3JDO0lBQ0RDLE9BQU8sRUFBRTtRQUNSSCxJQUFJLEVBQUVDLE1BQU07S0FDWjtJQUNERyxLQUFLLEVBQUU7UUFDTkosSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRztZQUFDLElBQUk7WUFBRSxtQkFBbUI7U0FBQztRQUN0Q0csSUFBSSxFQUFFLElBQUk7S0FDVjtJQUNEQyxRQUFRLEVBQUU7UUFDVE4sSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRztZQUFDLElBQUk7WUFBRSxzQkFBc0I7U0FBQztRQUN6Q0ssTUFBTSxFQUFFLElBQUk7UUFDWkYsSUFBSSxFQUFFLElBQUk7S0FDVjtJQUNERyxHQUFHLEVBQUU7UUFDSlIsSUFBSSxFQUFFUyxNQUFNO1FBQ1pQLFFBQVEsRUFBRztZQUFDLElBQUk7WUFBRSxpQkFBaUI7U0FBQztLQUNwQztJQUNEUSxTQUFTLEVBQUU7UUFDVlYsSUFBSSxFQUFFQyxNQUFNO0tBQ1o7Q0FDRCxFQUFFO0lBQ0ZVLFVBQVUsRUFBRSxLQUFLO0lBQ2pCQyxVQUFVLEVBQUUsS0FBSztDQUNqQixDQUFDO0FBRUYsaUVBQWVmLGlEQUFXLElBQUlELCtDQUFLLENBQUMsTUFBTSxFQUFFRSxVQUFVLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pd2ViLy4vbW9kZWxzL1VzZXIuanM/NzM2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NjaGVtYSwgbW9kZWwsIG1vZGVsc30gZnJvbSAnbW9uZ29vc2UnXHJcblxyXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcblx0bmFtZToge1xyXG5cdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0cmVxdWlyZWQgOiBbdHJ1ZSwgJ05hbWUgaXMgcmVxdWlyZWQnXSxcclxuXHR9LFxyXG5cdHN1cm5hbWU6IHtcclxuXHRcdHR5cGU6IFN0cmluZ1xyXG5cdH0sXHJcblx0ZW1haWw6IHtcclxuXHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdHJlcXVpcmVkIDogW3RydWUsICdlbWFpbCBpcyByZXF1aXJlZCddLFxyXG5cdFx0dHJpbTogdHJ1ZVxyXG5cdH0sXHJcblx0dXNlcm5hbWU6IHtcclxuXHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdHJlcXVpcmVkIDogW3RydWUsICdVc2VybmFtZSBpcyByZXF1aXJlZCddLFxyXG5cdFx0dW5pcXVlOiB0cnVlLFxyXG5cdFx0dHJpbTogdHJ1ZVxyXG5cdH0sXHJcblx0YWdlOiB7XHJcblx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRyZXF1aXJlZCA6IFt0cnVlLCAnQWdlIGlzIHJlcXVpcmVkJ10sXHJcblx0fSxcclxuXHRwdWJsaWNfaWQ6IHtcclxuXHRcdHR5cGU6IFN0cmluZ1xyXG5cdH1cclxufSwge1xyXG5cdHRpbWVzdGFtcHM6IGZhbHNlLFx0Ly8gbW9uZ29vc2UgZ3VhcmRhIGN1YW5kbyBzZSBjcmVhIG8gc2UgYWN0dWFsaXphIGFsZ3VuIHVzdWFyaW8sIGNyZWF0ZWRBdC91cGRhdGVBdFxyXG5cdHZlcnNpb25LZXk6IGZhbHNlXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb2RlbHMuVXNlciB8fCBtb2RlbCgnVXNlcicsIHVzZXJTY2hlbWEpIl0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vZGVsIiwibW9kZWxzIiwidXNlclNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJzdXJuYW1lIiwiZW1haWwiLCJ0cmltIiwidXNlcm5hbWUiLCJ1bmlxdWUiLCJhZ2UiLCJOdW1iZXIiLCJwdWJsaWNfaWQiLCJ0aW1lc3RhbXBzIiwidmVyc2lvbktleSIsIlVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/User.js\n");

/***/ }),

/***/ "(api)/./pages/api/users/email/[email].js":
/*!******************************************!*\
  !*** ./pages/api/users/email/[email].js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/mongoose */ \"(api)/./utils/mongoose.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/User */ \"(api)/./models/User.js\");\n\n\n(0,_utils_mongoose__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { method , query: { email  } ,  } = req;\n    switch(method){\n        case \"GET\":\n            try {\n                const user = await _models_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({\n                    email: email\n                });\n                if (!user.length) return res.status(200).json([]);\n                return res.status(200).json([\n                    user[0]\n                ]);\n            } catch (error) {\n                return res.status(400).json({\n                    msg: error.message\n                });\n            }\n        default:\n            return res.status(400).json({\n                msg: \"This method is not supported\"\n            });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvZW1haWwvW2VtYWlsXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBdUQ7QUFDYjtBQUUxQ0EsMkRBQWMsRUFBRTtBQUVoQixpRUFBZSxPQUFPRSxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUNsQyxNQUFNLEVBQ0xDLE1BQU0sR0FDTkMsS0FBSyxFQUFFLEVBQUNDLEtBQUssR0FBQyxLQUNkLEdBQUdKLEdBQUc7SUFFUCxPQUFPRSxNQUFNO1FBQ1osS0FBSyxLQUFLO1lBQ1QsSUFBRztnQkFDRSxNQUFNRyxJQUFJLEdBQUcsTUFBTU4seURBQVMsQ0FBQztvQkFBQ0ssS0FBSyxFQUFFQSxLQUFLO2lCQUFDLENBQUM7Z0JBQ2hELElBQUcsQ0FBQ0MsSUFBSSxDQUFDRSxNQUFNLEVBQUUsT0FBT04sR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQ2hELE9BQU9SLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQUNKLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQUMsQ0FBQztZQUV2QyxFQUFDLE9BQU1LLEtBQUssRUFBQztnQkFDWixPQUFPVCxHQUFHLENBQUNPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUFDRSxHQUFHLEVBQUVELEtBQUssQ0FBQ0UsT0FBTztpQkFBQyxDQUFDO1lBQ2xELENBQUM7UUFFRjtZQUNDLE9BQU9YLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUNFLEdBQUcsRUFBRSw4QkFBOEI7YUFBQyxDQUFDO0tBQ25FO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2l3ZWIvLi9wYWdlcy9hcGkvdXNlcnMvZW1haWwvW2VtYWlsXS5qcz9kNDJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZWN0TW9uZ29EQiBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbHMvbW9uZ29vc2VcIlxyXG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vLi4vLi4vLi4vbW9kZWxzL1VzZXJcIlxyXG5cclxuY29ubmVjdE1vbmdvREIoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcblx0Y29uc3Qge1xyXG5cdFx0bWV0aG9kLFxyXG5cdFx0cXVlcnk6IHtlbWFpbH0sXHJcblx0fSA9IHJlcTtcclxuXHJcblx0c3dpdGNoKG1ldGhvZCl7XHRcdFxyXG5cdFx0Y2FzZSAnR0VUJzpcclxuXHRcdFx0dHJ5e1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmQoe2VtYWlsOiBlbWFpbH0pXHJcblx0XHRcdFx0aWYoIXVzZXIubGVuZ3RoKSByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oW10pXHJcblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKFt1c2VyWzBdXSlcclxuXHJcblx0XHRcdH1jYXRjaChlcnJvcil7XHJcblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHttc2c6IGVycm9yLm1lc3NhZ2V9KVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHttc2c6IFwiVGhpcyBtZXRob2QgaXMgbm90IHN1cHBvcnRlZFwifSlcclxuXHR9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJjb25uZWN0TW9uZ29EQiIsIlVzZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJxdWVyeSIsImVtYWlsIiwidXNlciIsImZpbmQiLCJsZW5ndGgiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJtc2ciLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/email/[email].js\n");

/***/ }),

/***/ "(api)/./utils/mongoose.js":
/*!***************************!*\
  !*** ./utils/mongoose.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectMongoDB = async ()=>{\n    try {\n        const { connection  } = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://user:user@cluster0next.eqjmrqe.mongodb.net/?retryWrites=true&w=majority\");\n        if (connection.readyState == 1) {\n            console.log(\"MongoDB is connected\");\n        }\n    } catch (err) {\n        return Promise.reject(err);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongoDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9tb25nb29zZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFFL0IsTUFBTUMsY0FBYyxHQUFHLFVBQVc7SUFDakMsSUFBRztRQUNGLE1BQU0sRUFBQ0MsVUFBVSxHQUFDLEdBQUcsTUFBTUYsdURBQWdCLENBQUNJLHVGQUF1QixDQUFDO1FBRXBFLElBQUdGLFVBQVUsQ0FBQ0ssVUFBVSxJQUFJLENBQUMsRUFBRTtZQUM5QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7UUFDcEMsQ0FBQztJQUVGLEVBQUMsT0FBTUMsR0FBRyxFQUFDO1FBQ1YsT0FBT0MsT0FBTyxDQUFDQyxNQUFNLENBQUNGLEdBQUcsQ0FBQztJQUMzQixDQUFDO0FBQ0YsQ0FBQztBQUVELGlFQUFlVCxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaXdlYi8uL3V0aWxzL21vbmdvb3NlLmpzPzhkNjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG5cclxuY29uc3QgY29ubmVjdE1vbmdvREIgPSBhc3luYygpID0+IHtcclxuXHR0cnl7XHJcblx0XHRjb25zdCB7Y29ubmVjdGlvbn0gPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJMKVxyXG5cdFx0XHJcblx0XHRpZihjb25uZWN0aW9uLnJlYWR5U3RhdGUgPT0gMSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIk1vbmdvREIgaXMgY29ubmVjdGVkXCIpXHJcblx0XHR9XHJcblx0XHJcblx0fWNhdGNoKGVycil7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdE1vbmdvREIiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0TW9uZ29EQiIsImNvbm5lY3Rpb24iLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJMIiwicmVhZHlTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJQcm9taXNlIiwicmVqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/mongoose.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/email/[email].js"));
module.exports = __webpack_exports__;

})();