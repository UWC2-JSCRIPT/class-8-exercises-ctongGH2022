/**
 * Cecilia Tong
 * Class 8 Exercise & Homework
 * Dec 6, 2022
 * HELLO DARKNESS
 */

//get DOM reference to the body tag
const body = document.getElementsByTagName("body")[0];

//bkgr color start with rgb(255,255,255)
let colorStart = 255;

//interval 500ms = .5s
const interval = 500;

//setInterval function
let bgColor = setInterval(function () {
    if (colorStart > 0) {
        body.style.backgroundColor = `rgb(${colorStart}, ${colorStart}, ${colorStart})`;
        colorStart--; //darken the body backgroundColor by 1
    }
    else {
        clearInterval(bgColor); //Stop when bkgr color gets to zero
    }
}, interval); //end setInterval()