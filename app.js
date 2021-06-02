"use strict";
var select = function (el, all) {
    if (all === void 0) { all = false; }
    el = el.trim();
    var element;
    if (all) {
        element = Array.from(document.querySelectorAll(el));
    }
    else {
        element = document.querySelector(el);
    }
    if (element === null || element === undefined || element.length === 0) {
        console.log('element not available ');
    }
    else {
        return element;
    }
};
var inputText = select('#inputText');
var trimmedText = select('#trimmedText');
// let ltrim = select('#ltrim');
// let rtrim  = select ('#rtrim');
// let removeSpace = select('#removeSpace');
// let lineTrim = select('#lineTrim');
var checkBoxes = select('[type="checkbox"]', true);
var checkVariables = {
    ltrimValue: false,
    rtrimValue: false,
    removeSpace: false,
    // lineTrim:false,
};
var inputTextFunction = function () {
    var inputTextValue = inputText.value;
    inputTextValue = checkVariables.ltrimValue ? ltrimFunction(inputTextValue) : inputTextValue;
    inputTextValue = checkVariables.rtrimValue ? rtrimFunction(inputTextValue) : inputTextValue;
    inputTextValue = checkVariables.removeSpace ? removeSpaceFunction(inputTextValue) : inputTextValue;
    trimmedText.value = inputTextValue;
};
var updateVariables = function (e) {
    var target = e.target;
    switch (target.id) {
        case "ltrim":
            checkVariables.ltrimValue = target.checked;
            break;
        case "rtrim":
            checkVariables.rtrimValue = target.checked;
            break;
        case "removeSpace":
            checkVariables.removeSpace = target.checked;
            break;
        // case "lineTrim":
        //     checkVariables.lineTrim = target.checked;
        // break;
    }
};
var ltrimFunction = function (e) {
    return (e.trimStart());
};
var rtrimFunction = function (e) {
    return (e.trimEnd());
};
var removeSpaceFunction = function (e) {
    return (e.replaceAll(/ +/g, ' '));
};
inputText.addEventListener('input', function () {
    inputTextFunction();
});
checkBoxes.forEach(function (eachElement) {
    eachElement.addEventListener('change', function (e) {
        updateVariables(e);
        inputTextFunction();
    });
});
