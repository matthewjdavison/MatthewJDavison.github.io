var windowHeight = document.getElementById('windowHeight');
var windowWidth = document.getElementById('windowWidth');

var windowInnerHeight = document.getElementById('windowInnerHeight');
var windowInnerWidth = document.getElementById('windowInnerWidth');

var bodyHeight = document.getElementById('bodyHeight');
var bodyWidth = document.getElementById('bodyWidth');


var bodyInnerHeight = document.getElementById('bodyInnerHeight');
var bodyInnerWidth = document.getElementById('bodyInnerWidth');
console.log(bodyInnerWidth)


windowHeight.innerHTML = 'Window Height: ' + window.screen.height + 'px';
windowWidth.innerHTML = 'Window Width: ' + window.screen.width + 'px';

windowInnerHeight.innerHTML = 'Window Inner Height: ' + window.innerHeight + 'px';
windowInnerWidth.innerHTML = 'Window Inner Width: ' + window.innerWidth + 'px';

var windowHeightDiv = document.getElementById('windowHeightDiv');
var innerWindowHeightDiv = document.getElementById('innerWindowHeightDiv');

