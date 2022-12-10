/**
 * Cecilia Tong
 * Class 8 Exercise & Homework
 * Dec 6, 2022
 * REMOVE NOTICE
 */

//function to remove the maintenance notice
const removeNotice = function (){
    document.getElementById("maintenance-notice").style.display = "none"
}

//set to remove the maintenance notice after 5s
setTimeout(removeNotice,5000);