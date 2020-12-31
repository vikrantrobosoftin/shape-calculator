/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("let selectedShape;\n\nconst setRadioValue = () => {\n  let selectedShape = document.getElementsByName(\"area\");\n  for (i = 0; i < selectedShape.length; i++) {\n    if (selectedShape[i].checked) {\n      document.getElementById(\"step-1\").style.display = \"none\";\n      document.getElementById(\"step-2\").style.display = \"block\";\n      document.getElementById(`${selectedShape[i].value}-form`).style.display =\n        \"block\";\n      this.selectedShape = selectedShape[i].value;\n    }\n  }\n};\n\n//calculate the All areas to this factory Method\nvar shapeFactory = function (...args) {\n  // console.log(args)\n  var shape = {};\n  shape.length = args[0];\n  shape.width = args[1];\n  shape.diameter = args[0];\n  shape.side = args[0];\n  shape.aAxis = args[0];\n  shape.bAxis = args[1];\n\n  shape.printRecArea = function () {\n    return this.length * this.width;\n  };\n  shape.printCircleArea = function () {\n    return Math.PI * this.diameter;\n  };\n  shape.printsquareArea = function () {\n    return this.side * this.side;\n  };\n  shape.printEllipseArea = function () {\n    return Math.PI * this.aAxis * this.bAxis;\n  };\n  return shape;\n};\n// render the Rectangle function\nfunction renderRec() {\n  let height = document.getElementById(\"rect-value-1\").value;\n  let width = document.getElementById(\"rect-value-2\").value;\n  let areaOfRec = shapeFactory(height, width);\n  let value = areaOfRec.printRecArea();\n  console.log(height, width, value);\n  document.getElementById(\"step-2\").style.display = \"none\";\n  document.getElementById(\"step-3\").style.display = \"block\";\n  document.getElementById(\n    \"result-para\"\n  ).innerHTML = `You have calculated the area of a <b>rectangle</b> with height of ${height} and width of ${width}. Below is your result`;\n  document.getElementById(\"result-heading\").innerHTML = `The area is ${value}`;\n}\n// render the Cilrcle  function\nfunction rederCircle() {\n  let diameter = document.getElementById(\"circle-value\").value;\n  let areaOfCircle = shapeFactory(diameter);\n  let areaResult = areaOfCircle.printCircleArea();\n  console.log(areaOfCircle.printCircleArea());\n  document.getElementById(\"step-2\").style.display = \"none\";\n  document.getElementById(\"step-3\").style.display = \"block\";\n  document.getElementById(\n    \"result-para\"\n  ).innerHTML = `You have calculated the area of a <b>circle</b> with diameter of ${diameter}. Below is your result`;\n  document.getElementById(\n    \"result-heading\"\n  ).innerHTML = `The area is ${areaResult}`;\n}\n// render the Square  function\nfunction renderSquare() {\n  let side = document.getElementById(\"square-value\").value;\n  let areaOfSquare = shapeFactory(side);\n  let areaResult = areaOfSquare.printsquareArea();\n  document.getElementById(\"step-2\").style.display = \"none\";\n  document.getElementById(\"step-3\").style.display = \"block\";\n  document.getElementById(\n    \"result-para\"\n  ).innerHTML = `You have calculated the area of a <b>square</b> with side of ${side}. Below is your result`;\n  document.getElementById(\n    \"result-heading\"\n  ).innerHTML = `The area is ${areaResult}`;\n}\n// render the Ellipse  function\nfunction renderEllipse() {\n  let aAxis = document.getElementById(\"ellipse-value-1\").value;\n  let bAxis = document.getElementById(\"ellipse-value-2\").value;\n  let areaOfEllipse = shapeFactory(aAxis, bAxis);\n  let areaResult = areaOfEllipse.printEllipseArea();\n  console.log(aAxis, bAxis, areaResult);\n  document.getElementById(\"step-2\").style.display = \"none\";\n  document.getElementById(\"step-3\").style.display = \"block\";\n  document.getElementById(\n    \"result-para\"\n  ).innerHTML = `You have calculated the area of a <b>ellipse</b> with A-axis of ${aAxis} and B-axis of ${bAxis}. Below is your result`;\n  document.getElementById(\n    \"result-heading\"\n  ).innerHTML = `The area is ${areaResult}`;\n}\n\n//calculator logics.\nfunction onApplyValue() {\n  switch (this.selectedShape) {\n    case \"rectangle\":\n      renderRec();\n      break;\n    case \"circle\":\n      rederCircle();\n      break;\n    case \"square\":\n      renderSquare();\n      break;\n    case \"ellipse\":\n      renderEllipse();\n      break;\n    default:\n      return null;\n  }\n}\n// clear function\nfunction onClear() {\n  let selectedShape = document.getElementsByName(\"area\");\n  for (let i = 0; i < selectedShape.length; i++) {\n    document.getElementById(`${selectedShape[i].value}-form`).style.display =\n      \"none\";\n    selectedShape[i].checked = false;\n  }\n  document.getElementById(\"step-1\").style.display = \"block\";\n  document.getElementById(\"step-2\").style.display = \"none\";\n  document.getElementById(\"step-3\").style.display = \"none\";\n}\n\n\n//# sourceURL=webpack://wp-shape-calculator/./src/index.js?");
/******/ })()
;