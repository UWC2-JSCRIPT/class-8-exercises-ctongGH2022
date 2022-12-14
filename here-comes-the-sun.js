/**
 * Cecilia Tong
 * Class 8 Exercise & Homework
 * Dec 6, 2022
 * HERE COMES THE SUN
 */

let rgbStart = 0; //set initial value
const animate = function () {
    rgbStart++; //increment by 1
    if (rgbStart < 255) { //if == 255, will stop calling requestAnimarionFrame
        document.getElementsByTagName('body')[0].style.backgroundColor = `rgb(${rgbStart},${rgbStart},${rgbStart})`
        requestAnimationFrame(animate);
    }
    //this is just to see the background color value display on console
    console.log(`backgroundColor : rgb(${rgbStart},${rgbStart},${rgbStart})`);
}
requestAnimationFrame(animate);