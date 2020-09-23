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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/arrowArrays/cebuana.js":
/*!************************************!*\
  !*** ./src/arrowArrays/cebuana.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nlet cebuana = [\n    [7688, \"ArrowRight\"]\n    , [7683, \"ArrowLeft\"]\n    , [9298, \"ArrowRight\"]\n    , [9623, \"ArrowDown\"]\n    , [10493, \"ArrowLeft\"]\n    , [10853, \"ArrowDown\"]\n    , [11730, \"ArrowUp\"]\n    , [12113, \"ArrowDown\"]\n    , [12917, \"ArrowUp\"]\n    , [13328, \"ArrowLeft\"]\n    , [14170, \"ArrowUp\"]\n    , [14529, \"ArrowRight\"]\n    , [15381, \"ArrowRight\"]\n    , [15767, \"ArrowDown\"]\n    , [16641, \"ArrowLeft\"]\n    , [16998, \"ArrowDown\"]\n    , [17856, \"ArrowUp\"]\n    , [18132, \"ArrowLeft\"]\n    , [18439, \"ArrowDown\"]\n    , [19084, \"ArrowRight\"]\n    , [19345, \"ArrowDown\"]\n    , [19675, \"ArrowUp\"]\n    , [20322, \"ArrowUp\"]\n    , [20572, \"ArrowLeft\"]\n    , [20884, \"ArrowDown\"]\n    , [21529, \"ArrowUp\"]\n    , [21784, \"ArrowLeft\"]\n    , [22117, \"ArrowDown\"]\n    , [22763, \"ArrowUp\"]\n    , [23067, \"ArrowUp\"]\n    , [23347, \"ArrowDown\"]\n    , [23969, \"ArrowDown\"]\n    , [24260, \"ArrowDown\"]\n    , [24534, \"ArrowUp\"]\n    , [25176, \"ArrowRight\"]\n    , [25488, \"ArrowLeft\"]\n    , [25792, \"ArrowLeft\"]\n    , [26411, \"ArrowLeft\"]\n    , [26693, \"ArrowRight\"]\n    , [26977, \"ArrowRight\"]\n    , [27620, \"ArrowRight\"]\n    , [28210, \"ArrowRight\"]\n    , [28852, \"ArrowRight\"]\n    , [29470, \"ArrowLeft\"]\n    , [30115, \"ArrowLeft\"]\n    , [30703, \"ArrowLeft\"]\n    , [31299, \"ArrowUp\"]\n    , [31911, \"ArrowDown\"]\n    , [32508, \"ArrowUp\"]\n    , [33173, \"ArrowUp\"]\n    , [33457, \"ArrowRight\"]\n    , [33743, \"ArrowDown\"]\n    , [34356, \"ArrowDown\"]\n    , [34356, \"ArrowRight\"]\n    , [34711, \"ArrowDown\"]\n    , [34667, \"ArrowRight\"]\n    , [34927, \"ArrowLeft\"]\n    , [35571, \"ArrowDown\"]\n    , [36209, \"ArrowLeft\"]\n    , [36823, \"ArrowLeft\"]\n    , [36826, \"ArrowUp\"]\n    , [37108, \"ArrowLeft\"]\n    , [37107, \"ArrowUp\"]\n    , [37426, \"ArrowUp\"]\n    , [38058, \"ArrowDown\"]\n    , [38674, \"ArrowDown\"]\n    , [39239, \"ArrowDown\"]\n    , [39858, \"ArrowDown\"]\n    , [40477, \"ArrowLeft\"]\n    , [41172, \"ArrowLeft\"]\n    , [41686, \"ArrowLeft\"]\n    , [42330, \"ArrowLeft\"]\n    , [42945, \"ArrowRight\"]\n    , [43569, \"ArrowUp\"]\n    , [44129, \"ArrowRight\"]\n    , [44768, \"ArrowUp\"]\n    , [45416, \"ArrowRight\"]\n    , [46007, \"ArrowDown\"]\n    , [46652, \"ArrowLeft\"]\n    , [47264, \"ArrowLeft\"]\n    , [47523, \"ArrowDown\"]\n    , [47829, \"ArrowLeft\"]\n    , [48111, \"ArrowDown\"]\n    , [48422, \"ArrowLeft\"]\n    , [49348, \"ArrowUp\"]\n    , [49656, \"ArrowRight\"]\n    , [49966, \"ArrowUp\"]\n    , [50293, \"ArrowRight\"]\n    , [50586, \"ArrowUp\"]\n    , [50938, \"ArrowRight\"]\n    , [51505, \"ArrowRight\"]\n    , [51768, \"ArrowRight\"]\n    , [52125, \"ArrowUp\"]\n    , [52718, \"ArrowUp\"]\n    , [53341, \"ArrowUp\"]\n    , [53976, \"ArrowUp\"]\n    , [54591, \"ArrowUp\"]\n    , [54849, \"ArrowDown\"]\n    , [55131, \"ArrowUp\"]\n    , [55750, \"ArrowUp\"]\n\n    , [56034, \"ArrowLeft\"]\n    , [56394, \"ArrowLeft\"]\n    , [57032, \"ArrowUp\"]\n    , [57629, \"ArrowDown\"]\n    , [57886, \"ArrowUp\"]\n    , [58226, \"ArrowDown\"]\n    , [58859, \"ArrowRight\"]\n    , [59118, \"ArrowDown\"]\n    , [59403, \"ArrowLeft\"]\n    , [60093, \"ArrowUp\"]\n    , [60683, \"ArrowDown\"]\n    , [61308, \"ArrowDown\"]\n    , [61944, \"ArrowLeft\"]\n    , [62589, \"ArrowLeft\"]\n    , [63184, \"ArrowLeft\"]\n    , [63720, \"ArrowLeft\"]\n    , [64335, \"ArrowRight\"]\n    , [65641, \"ArrowUp\"]\n    , [65600, \"ArrowRight\"]\n    , [66243, \"ArrowUp\"]\n    , [66197, \"ArrowRight\"]\n    , [66785, \"ArrowUp\"]\n    , [67114, \"ArrowDown\"]\n    , [67385, \"ArrowUp\"]\n    , [68016, \"ArrowUp\"]\n    , [68283, \"ArrowLeft\"]\n    , [68610, \"ArrowUp\"]\n    , [69279, \"ArrowUp\"]\n    , [69581, \"ArrowRight\"]\n    , [69895, \"ArrowUp\"]\n    , [70463, \"ArrowDown\"]\n    , [70769, \"ArrowUp\"]\n    , [71072, \"ArrowDown\"]\n    , [71699, \"ArrowRight\"]\n    , [71975, \"ArrowDown\"]\n    , [72303, \"ArrowLeft\"]\n    , [72900, \"ArrowLeft\"]\n    , [73181, \"ArrowDown\"]\n    , [73492, \"ArrowRight\"]\n    , [74145, \"ArrowRight\"]\n    , [74417, \"ArrowUp\"]\n    , [74751, \"ArrowLeft\"]\n    , [75377, \"ArrowLeft\"]\n    , [75629, \"ArrowUp\"]\n    , [75959, \"ArrowRight\"]\n    , [76603, \"ArrowUp\"]\n    , [76885, \"ArrowRight\"]\n    , [77217, \"ArrowDown\"]\n    , [77809, \"ArrowUp\"]\n    , [78099, \"ArrowLeft\"]\n    , [78431, \"ArrowDown\"]\n    , [79070, \"ArrowRight\"]\n    , [79353, \"ArrowRight\"]\n    , [79663, \"ArrowLeft\"]\n    , [80279, \"ArrowUp\"]\n    , [80546, \"ArrowUp\"]\n    , [80869, \"ArrowDown\"]\n    , [81487, \"ArrowDown\"]\n    , [81792, \"ArrowDown\"]\n    , [82104, \"ArrowUp\"]\n    , [82725, \"ArrowUp\"]\n    , [83015, \"ArrowUp\"]\n    , [83314, \"ArrowLeft\"]\n    , [83932, \"ArrowLeft\"]\n    , [84265, \"ArrowLeft\"]\n    , [84625, \"ArrowRight\"]\n    , [85169, \"ArrowRight\"]\n    , [85499, \"ArrowDown\"]\n    , [85788, \"ArrowLeft\"]\n    , [86403, \"ArrowUp\"]\n    , [86986, \"ArrowUp\"]\n    , [87608, \"ArrowUp\"]\n    , [88204, \"ArrowUp\"]\n    , [88816, \"ArrowDown\"]\n    , [89458, \"ArrowDown\"]\n    , [90055, \"ArrowDown\"]\n    , [90669, \"ArrowLeft\"]\n    , [90669, \"ArrowDown\"]\n    , [91001, \"ArrowDown\"]\n    , [91005, \"ArrowLeft\"]\n    , [91310, \"ArrowUp\"]\n    , [91850, \"ArrowRight\"]\n    , [92493, \"ArrowUp\"]\n    , [93108, \"ArrowRight\"]\n    , [93699, \"ArrowUp\"]\n    , [94295, \"ArrowRight\"]\n    , [94961, \"ArrowUp\"]\n    , [95553, \"ArrowRight\"]\n    , [95555, \"ArrowUp\"]\n    , [95862, \"ArrowRight\"]\n    , [95891, \"ArrowUp\"]\n    , [96177, \"ArrowUp\"]\n    , [96762, \"ArrowUp\"]\n    , [97400, \"ArrowUp\"]\n    , [98018, \"ArrowUp\"]\n    , [98637, \"ArrowDown\"]\n    , [98900, \"ArrowDown\"]\n    , [99179, \"ArrowDown\"]\n    , [99846, \"ArrowUp\"]\n    , [100132, \"ArrowUp\"]\n\n    , [100440, \"ArrowUp\"]\n    , [101054, \"ArrowUp\"]\n    , [101364, \"ArrowLeft\"]\n    , [101653, \"ArrowDown\"]\n    , [102264, \"ArrowDown\"]\n    , [102545, \"ArrowUp\"]\n    , [102867, \"ArrowDown\"]\n    , [103548, \"ArrowUp\"]\n    , [103832, \"ArrowRight\"]\n    , [104137, \"ArrowUp\"]\n    , [104425, \"ArrowRight\"]\n    , [104740, \"ArrowUp\"]\n    , [105067, \"ArrowRight\"]\n    , [105374, \"ArrowUp\"]\n    , [105686, \"ArrowUp\"]\n    , [105991, \"ArrowDown\"]\n\n];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (cebuana);\n\n//# sourceURL=webpack:///./src/arrowArrays/cebuana.js?");

/***/ }),

/***/ "./src/arrowArrays/danzaKaduro.js":
/*!****************************************!*\
  !*** ./src/arrowArrays/danzaKaduro.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet danzaKaduro = [];\n\ndanzaKaduro = danzaKaduro.concat(\n    [[12345, \"ArrowRight\"], [13345, \"ArrowRight\"], [14345, \"ArrowRight\"]]\n);\n\ndanzaKaduro = danzaKaduro.concat(\n    [[12345, \"ArrowRight\"], [13345, \"ArrowRight\"], [14345, \"ArrowRight\"],\n    [12345, \"ArrowRight\"], [13345, \"ArrowRight\"], [14345, \"ArrowRight\"]]\n);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (danzaKaduro);\n\n\n//# sourceURL=webpack:///./src/arrowArrays/danzaKaduro.js?");

/***/ }),

/***/ "./src/arrowArrays/soldTheWorld.js":
/*!*****************************************!*\
  !*** ./src/arrowArrays/soldTheWorld.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet soldTheWorld = [];\n\nsoldTheWorld = soldTheWorld.concat(\n    [[12345, \"ArrowRight\"], [13345, \"ArrowRight\"], [14345, \"ArrowRight\"]]\n);\n\nsoldTheWorld = soldTheWorld.concat(\n    [[12345, \"ArrowRight\"], [13345, \"ArrowRight\"], [14345, \"ArrowRight\"],\n    [12345, \"ArrowRight\"], [13345, \"ArrowRight\"], [14345, \"ArrowRight\"]]\n);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (soldTheWorld);\n\n\n\n//# sourceURL=webpack:///./src/arrowArrays/soldTheWorld.js?");

/***/ }),

/***/ "./src/arrowQueue.js":
/*!***************************!*\
  !*** ./src/arrowQueue.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function ArrowQueue(context) {\n    this.arrows = [];\n}\n\nArrowQueue.prototype.spawn = function spawn(direction, bpm) {\n    let arrow = {\n        direction: direction,\n        pos: 600,\n        spd: bpm / 3.4,\n    }\n    this.arrows.push(arrow);\n\n}\n\nArrowQueue.prototype.move = function move(context) {\n    if (this.arrows[0]) {\n        this.arrows.forEach( arrow => {\n            arrow.pos -= arrow.spd;\n            if (arrow.pos <= -100) {\n                // debugger;\n                this.arrows.splice(this.arrows.indexOf(arrow),1);\n                //draw 'missed' using context\n            }\n        });\n    }\n}\n\nArrowQueue.prototype.judge = function judge(key) {\n    if (this.arrows[0] && this.arrows[0] === key) {\n        let timeDifference = Math.abs(this.arrows[0].pos - 10);\n        let continueCombo = false;\n        switch (true) {\n            case (timeDifference < 44):\n                // Perfect\n                this.comboCount += 1;\n                continueCombo = true;\n                break;\n            case (timeDifference < 104):\n                // Great\n                this.comboCount += 1;\n                continueCombo = true;\n                break;\n            case (timeDifference < 138):\n                // Good\n                break;\n            case (timeDifference < 184):\n                // Boo\n                break;\n            default:\n                continueCombo = true;\n                break;\n        }\n\n        if (continueCombo) {\n            if (this.comboCount > 3) {\n\n            } else {\n\n            }\n            \n        } else {\n            this.comboCount = 0;\n        }\n    }\n}\n\nmodule.exports = ArrowQueue;\n\n//# sourceURL=webpack:///./src/arrowQueue.js?");

/***/ }),

/***/ "./src/game_util.js":
/*!**************************!*\
  !*** ./src/game_util.js ***!
  \**************************/
/*! exports provided: screenFade, playSelectMusic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"screenFade\", function() { return screenFade; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playSelectMusic\", function() { return playSelectMusic; });\nfunction screenFade() {\n  let bgFade = document.createElement(\"div\");\n  bgFade.id = \"fader\";\n  document.getElementById(\"gameScreen\").appendChild(bgFade);\n  \n}\n\nfunction playSelectMusic() {\n  let fXSelectMusic = document.createElement(\"audio\");\n  fXSelectMusic.id = \"fXSelectMusic\";\n  fXSelectMusic.src = \"./dist/assets/sounds/selectMusic.ogg\";\n  document.getElementById(\"gameScreen\").appendChild(fXSelectMusic);\n  fXSelectMusic.play();\n  fXSelectMusic.addEventListener(\"ended\", function() {\n      fXSelectMusic.remove();\n  }, {once: true} );\n}\n\n// import * as level_util from \"./level\";\n\n// export default class EventListener_Revolution {\n//   constructor(canvas){\n//     this.ctx = canvas.getContext(\"2d\");\n//     this.dimensions = { width: canvas.width, height: canvas.height };\n//     this.displayMenu.bind(this);\n//     this.displayMenu();\n    \n//   }\n  \n//   displayMenu(){\n\n//     this.ctx.beginPath();\n//     this.ctx.rect(250, 350, 200, 100);\n//     this.ctx.fillStyle = 'green';\n//     this.ctx.fill();\n//     this.ctx.lineWidth = 2;\n//     this.ctx.strokeStyle = '#000000';\n//     this.ctx.stroke();\n//     this.ctx.closePath();\n//     this.ctx.font = '40pt Kremlin Pro Web';\n//     this.ctx.fillStyle = '#222222';\n//     this.ctx.fillText('Start', 300, 415);\n    \n//     //var canvas = document.getElementById('dance-game');\n\n//   }\n\n//   play(canvas, eLF, chosenSong){ level_util.dibujar(canvas, eLF, chosenSong); }\n  \n// }\n\n\n//# sourceURL=webpack:///./src/game_util.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_util */ \"./src/game_util.js\");\n/* harmony import */ var _songList_v1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./songList_v1 */ \"./src/songList_v1.js\");\n\n\n\nlet parentDiv = document.getElementById(\"gameScreen\");\n\nlet fXSelect = document.createElement(\"audio\");\nfXSelect.id = \"fXSelect\";\nfXSelect.src = \"./dist/assets/sounds/select.ogg\";\ndocument.getElementById(\"audioChannel\").appendChild(fXSelect);\nfXSelect.addEventListener(\"ended\", function () { fXSelect.load(); });\n\nlet introText1 = document.createElement(\"div\");\nintroText1.id = \"theIntro1\";\nintroText1.innerText = \"eventListener Revolution\";\n\nlet introText2 = document.createElement(\"div\");\nintroText2.id = \"theIntro2\";\nintroText2.innerText = \"click to begin\";\n\nsetTimeout(function () { parentDiv.appendChild(introText1); }, 1500);\nsetTimeout(function () { parentDiv.appendChild(introText2); }, 4500);\nparentDiv.addEventListener('click', loadMenu, {once: true} );\n\n\nfunction loadMenu(evt = null) {\n    fXSelect.play();\n    _game_util__WEBPACK_IMPORTED_MODULE_0__[\"screenFade\"]();\n    setTimeout( function() {\n        if (introText1) { introText1.remove(); }\n        if (introText2) { introText2.remove(); }\n        _game_util__WEBPACK_IMPORTED_MODULE_0__[\"playSelectMusic\"]();\n        let bgSongList = document.createElement(\"img\");\n        bgSongList.id = \"menuBackground\"\n        bgSongList.src = \"./dist/assets/gui/bg.png\";\n        parentDiv.appendChild(bgSongList);\n        bgSongList.addEventListener( \"animationend\", () => {\n            Object(_songList_v1__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(parentDiv)}, {once: true} \n        );\n\n    }, 2000);\n\n}\n\n\n    // setTimeout(() => {\n    //     trackList.forEach((track) => {\n    //         debugger\n    //         track.className = \"trackSelectable\";\n    //     });\n    // })\n\n\n// Testing Codes\n\n{/* <script>\nvar currentPlayer;\nfunction EvalSound(soundobj) {\n\n var thissound=document.getElementById(soundobj);\n if(currentPlayer  && currentPlayer != thissound) {\n  currentPlayer.pause(); \n }\n if (thissound.paused)\n        thissound.play();\n    else\n    thissound.pause();\n    thissound.currentTime = 0;\n     currentPlayer = thissound;\n}\n</script> */}\n\n// function initButtonTest(evt) {\n//     fXSelect.play();\n//     const offset = canvas.getBoundingClientRect();\n//     let rect = {\n//         x: 250 + offset.x,\n//         y: 350 + offset.y,\n//         width: 200,\n//         height: 100\n//     };\n//     const pos = {\n//         x: evt.clientX,\n//         y: evt.clientY\n//     };\n    \n\n//     if (pos.x > rect.x &&\n//         pos.x < rect.x + rect.width &&\n//         pos.y < rect.y + rect.height &&\n//         pos.y > rect.y) {\n\n\n//         game.play(canvas, initButtonTest, \"testSong\");\n\n//     } else {\n//         console.log(\"Outside\");\n//     }\n// }\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return dibujar; });\nconst ArrowQueue = __webpack_require__(/*! ./arrowQueue */ \"./src/arrowQueue.js\");\nconst soldTheWorld = __webpack_require__(/*! ./arrowArrays/soldTheWorld */ \"./src/arrowArrays/soldTheWorld.js\");\nconst danzaKaduro = __webpack_require__(/*! ./arrowArrays/danzaKaduro */ \"./src/arrowArrays/danzaKaduro.js\");\nconst cebuana = __webpack_require__(/*! ./arrowArrays/cebuana */ \"./src/arrowArrays/cebuana.js\");\n\nfunction dibujar(chosenSong) {\n    document.getElementById(\"fader2\").remove();\n    let parentDiv = document.getElementById(\"gameScreen\");\n    let canvas = document.createElement(\"canvas\");\n    canvas.width = 800;\n    canvas.height = 600;\n    parentDiv.appendChild(canvas);\n\n    let verdict = document.createElement(\"img\");\n    verdict.src = \"./dist/assets/gui/judge.png\";\n    verdict.id = \"verdict\";\n    parentDiv.appendChild(verdict);\n    parentDiv.insertBefore(verdict, canvas);\n\n    let comboScore = document.createElement(\"div\");\n    comboScore.innerText = \"0 combo\";\n    comboScore.id = \"comboScore\";\n    parentDiv.appendChild(comboScore);\n\n    let context = canvas.getContext(\"2d\");\n    let particles = [];\n    let newVideo = document.createElement(\"video\");\n    newVideo.id = \"playing\";\n    newVideo.controls = false;\n    newVideo.muted = false;\n    newVideo.width = \"800\";\n    newVideo.height = \"600\";\n    let speed = 0;\n    let stageQueue = [];\n    let comboCount = 0;\n\n    switch (chosenSong) {\n        case \"trackNirvana\":\n            newVideo.src = \"./dist/assets/songs/soldTheWorld.mp4\";\n            stageQueue = soldTheWorld.default;\n            speed = 20;\n            break;\n        case \"trackDanzaKaduro\":\n            newVideo.src = \"./dist/assets/songs/danzaKaduro.mp4\";\n            stageQueue = danzaKaduro.default;\n            speed = 20;\n            break;\n        case \"trackCebuana\":\n            newVideo.src = \"./dist/assets/songs/cebuana.mp4\";\n            stageQueue = cebuana.default;\n            speed = 20;\n            break;\n    }\n\n    parentDiv.appendChild(newVideo);\n    parentDiv.insertBefore(newVideo, canvas);\n    let stageArrow = new Image();\n    let queueArrow = new Image();\n    stageArrow.src = \"./dist/assets/gui/arrows/aStage.png\";\n    queueArrow.src = \"./dist/assets/gui/arrows/aNote.png\";\n\n    function Particle( x, y ) {\n        this.x = x;\n        this.y = y;\n        this.coordinates = [];\n        this.coordinateCount = 7;\n        while( this.coordinateCount-- ) {\n            this.coordinates.push( [ this.x, this.y ] );\n        }\n\n        this.angle = Math.random() * Math.PI * 2;\n        this.speed = 1 + Math.random() * 9 ;\n        this.friction = 0.95;\n        this.gravity = 1;\n        this.hue = 70 + Math.random() * 100;\n        this.brightness = 50 + Math.random() * 30\n        this.alpha = 1;\n        this.decay = 0.01 + Math.random() * 0.015;\n    }\n\n    Particle.prototype.update = function( index ) {\n        this.coordinates.pop();\n        this.coordinates.unshift( [ this.x, this.y ] );\n        this.speed *= this.friction;\n        this.x += Math.cos( this.angle ) * this.speed;\n        this.y += Math.sin( this.angle ) * this.speed + this.gravity;\n        this.alpha -= this.decay;\n        if( this.alpha <= this.decay ) { particles.splice( index, 1 ); }\n    }\n\n    Particle.prototype.draw = function() {\n        context.beginPath();\n        context.lineWidth = 3;\n        context.moveTo( this.coordinates[ this.coordinates.length - 1 ][ 0 ], \n            this.coordinates[ this.coordinates.length - 1 ][ 1 ] );\n            context.lineTo( this.x, this.y );\n            context.strokeStyle = 'hsla(' + this.hue + ', 100%, ' \n            + this.brightness + '%, ' + this.alpha + ')';\n        context.stroke();\n    }\n\n    function createParticles( x, y ) {\n        var particleCount = 50;\n        while( particleCount-- ) { \n            particles.push( \n                new Particle( x, y ) \n            ); \n        }\n    }\n\n    newVideo.play();\n    newVideo.onplaying = () => { animate(); };\n    \n    function animate() {\n        let origin = Date.now();\n        let theQueue = new ArrowQueue(context);\n        console.log(Date.now() - origin);\n        document.addEventListener(\"keydown\", registerPress);\n        let numColumns = 5;\n        let numRows = 20;\n        let frameWidth = stageArrow.width / numColumns;;\n        let frameHeight = stageArrow.height / numRows;;\n        let currentFrame = 0;\n        let maxFrame = numColumns * numRows - 1;\n        let column = currentFrame % numColumns;\n        let row = Math.floor(currentFrame / numColumns);\n        function registerPress(evt) {\n            evt.preventDefault();\n            theQueue.judge(evt.key);\n            switch (evt.key) {\n                case \"ArrowLeft\": createParticles(218, 69); break;\n                case \"ArrowDown\": createParticles(342, 69); break;\n                case \"ArrowUp\": createParticles(458, 69); break;\n                case \"ArrowRight\": createParticles(587, 69); break;\n                default: break;\n            }\n\n            // console.log([(Date.now() - origin) / 1000, evt.key]);\n        }\n\n\n        function drawGameObject(type, direction, pos = 0) {\n            if (type === \"stageArrow\" || \"queueArrow\") {\n                let arrowParams = [];\n\n                switch (direction) {\n                    case \"ArrowLeft\":\n                        arrowParams.push([206, 69, Math.PI * 3 / 2, -59, -42]);\n                        arrowParams.push([pos * -1,0]);\n                        break;\n                    case \"ArrowDown\":\n                        arrowParams.push([335, 69, Math.PI, -66, -59]);\n                        arrowParams.push([0,pos * -1]);\n                        break;\n                    case \"ArrowUp\":\n                        arrowParams.push([400, 10, 0, 0, 0]);\n                        arrowParams.push([0,pos]);\n                        break;\n                    case \"ArrowRight\":\n                        arrowParams.push([592, 69, Math.PI / 2, -59, -44]);\n                        arrowParams.push([pos,0]);\n                        break;\n                    default:\n                }\n\n                context.save();\n                context.translate(arrowParams[0][0], arrowParams[0][1]);\n                context.rotate(arrowParams[0][2]);\n                context.translate(arrowParams[0][3], arrowParams[0][4]);\n                context.drawImage(\n                    type, column * frameWidth, row * frameHeight,\n                    frameWidth, frameHeight, arrowParams[1][0], arrowParams[1][1], \n                    frameWidth, frameHeight);\n                context.restore();\n            } else {\n\n            }\n        }\n\n        let stageLoop = setInterval(function() {\n            // console.log((Date.now() - origin) / 1000);\n            currentFrame++;\n            if (currentFrame > maxFrame) { currentFrame = 0; }\n            column = currentFrame % numColumns;\n            row = Math.floor(currentFrame / numColumns);\n            context.clearRect(0, 0, canvas.width, canvas.height);\n            \n            drawGameObject(stageArrow, \"ArrowLeft\");\n            drawGameObject(stageArrow, \"ArrowDown\");\n            drawGameObject(stageArrow, \"ArrowUp\");\n            drawGameObject(stageArrow, \"ArrowRight\");\n            \n            let i = particles.length;\n            while( i-- ) { particles[i].draw(); particles[i].update( i ); }\n            // debugger\n            theQueue.move(context);\n            if (stageQueue[0]) {\n                while (Date.now() - origin >= stageQueue[0][0]) {\n                    theQueue.spawn(stageQueue[0][1], speed);\n                    stageQueue.shift();\n                    if (!stageQueue[0]) {break;}\n                }\n            }\n\n            if (theQueue.arrows[0]) {\n                theQueue.arrows.forEach( arrow => {\n                    drawGameObject(queueArrow, arrow.direction, arrow.pos);\n                })\n            }  \n        }, speed);\n\n        newVideo.onended = function () { clearInterval(stageLoop); }\n    }\n}\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ }),

/***/ "./src/songList_v1.js":
/*!****************************!*\
  !*** ./src/songList_v1.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return displaySongList_v1; });\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n\n// import design from './designMode/listen';\n\nfunction displaySongList_v1(parentDiv) {\n\n    document.getElementById(\"fader\").remove();\n    \n    let menuTitle = document.createElement(\"div\");\n    menuTitle.id = \"txtSelectMusic\";\n    menuTitle.innerText = \"Select Music\";\n    parentDiv.appendChild(menuTitle);\n\n    let fXClick = document.createElement(\"audio\");\n    fXClick.id = \"fXClick\";\n    fXClick.src = \"./dist/assets/sounds/click.ogg\";\n    document.getElementById(\"audioChannel\").appendChild(fXClick);\n    \n    let subTxt = document.createElement(\"div\");\n    subTxt.id = \"txtSubTxt\";\n    subTxt.innerText = \"Hover to preview and click to begin!\";\n    parentDiv.appendChild(subTxt);\n\n    let trackList = [];\n    setTimeout( () => {\n        trackList.push(createTrack(\"nirvana\", \"trackNirvana\"));\n    }, 750);\n\n    setTimeout( () => {\n        trackList.push(createTrack(\"danzaKaduro\", \"trackDanzaKaduro\"));\n    }, 1500);\n\n    setTimeout( () => {\n        trackList.push(createTrack(\"cebuana\", \"trackCebuana\"));\n        trackList[trackList.length - 1].addEventListener(\"animationend\", \n            makeSelection(), {once: true});\n    }, 2250);\n    \n    function createTrack(tSrc, tID) {\n        let newTrack = document.createElement(\"img\");\n        let newPrev = document.createElement(\"audio\");\n        newTrack.src = \"./dist/assets/gui/banners/\" + tSrc + \".png\";\n        newPrev.src = \"./dist/assets/songs/previews/\" + tSrc + \".ogg\";\n        newTrack.className = \"trackImg\";\n        newTrack.id = tID;\n        newTrack.preload = \"auto\";\n        newTrack.muted = true;\n        newPrev.id = tID + \"a\";\n        newPrev.loop = true;\n        parentDiv.appendChild(newTrack);\n        document.getElementById(\"audioChannel\").appendChild(newPrev);\n        newTrack.onmouseover = () => { newPrev.play(); };\n        newTrack.onmouseout = () => { newPrev.pause(); newPrev.load(); };\n        return newTrack;\n    }\n    \n    function makeSelection() {\n        setTimeout( () => {\n            subTxt.style.animationName = \"intro4\";\n            trackList.forEach( (track) => {\n                track.onclick = () => { beginStage(track.id); };\n                track.classList.remove(\"trackImg\");\n                track.className = \"trackSelectable\";\n                document.getElementById(track.id+\"a\").muted = false;\n            });\n        }, 750);\n    }\n\n    function beginStage(trackID) {\n        document.getElementById(\"fXSelect\").play();\n        let bgfade2 = document.createElement(\"div\");\n        bgfade2.id = \"fader2\";\n        parentDiv.appendChild(bgfade2);\n        setTimeout( () => {\n            let del = parentDiv.firstElementChild;\n            while (parentDiv.childNodes.length > 1) {\n                if (del.id == \"fader2\") { continue; }\n                parentDiv.removeChild(del);\n                del = parentDiv.firstElementChild;\n            }\n            let clearPrevs = document.getElementById(\"audioChannel\");\n            del = clearPrevs.lastElementChild;\n            while (clearPrevs.childNodes.length > 1) {\n                if (del.id == \"fXSelect\") { continue; }\n                clearPrevs.removeChild(del);\n                del = clearPrevs.lastElementChild;\n            }\n            Object(_level__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(trackID);\n            // design(trackID);\n        }, 3000)\n    }\n}\n\n    // function deleteChild() { \n    //     var e = document.querySelector(\"ul\"); \n        \n    //     //e.firstElementChild can be used. \n    //     var child = e.lastElementChild;  \n    //     while (child) { \n    //         e.removeChild(child); \n    //         child = e.lastElementChild; \n    //     } \n    // } \n\n\n    // let nirvana = document.createElement(\"img\");\n    // nirvana.src = \"./dist/assets/gui/banners/nirvana.png\";\n    // nirvana.className = \"trackImg\";\n    // nirvana.id = \"trackNirvana\";\n    \n    // let danzaKaduro = document.createElement(\"img\");\n    // danzaKaduro.src = \"./dist/assets/gui/banners/danzaKaduro.png\";\n    // danzaKaduro.className = \"trackImg\";\n    // danzaKaduro.id = \"trackDanzaKaduro\";\n    \n    // let cebuana = document.createElement(\"img\");\n    // cebuana.src = \"./dist/assets/gui/banners/cebuana.png\";\n    // cebuana.className = \"trackImg\";\n    // cebuana.id = \"trackCebuana\";\n\n    // parentDiv.appendChild(nirvana);\n\n    // setTimeout(function () { parentDiv.appendChild(danzaKaduro); }, 2000);\n\n    // setTimeout(function () { parentDiv.appendChild(cebuana); }, 4000);\n\n//# sourceURL=webpack:///./src/songList_v1.js?");

/***/ })

/******/ });