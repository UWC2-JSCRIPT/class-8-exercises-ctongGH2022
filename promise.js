/**
 * Cecilia Tong
 * Class 8 Exercise & Homework
 * Dec 6, 2022
 * PROMISE
 */

// let myPromise = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve();
//   }, 1000);
// });

// myPromise
//   .then(function() {
//     return 99;
//   })
//   .then(function(number) {
//     console.log(number);
//   });

//create a new promise with passed in function after 1s, call Math.random()
let myPromise = new Promise(function (myResolve, myReject) {
  setTimeout(function () {
    const mathRandom = Math.random();
    console.log(`Math.random() : ${mathRandom}`);
    if (mathRandom > 0.5) {
      myResolve('success');
    }
    else { // <= 0.5
      myReject('fail');
    }
  }, 1000)
  console.log('complete'); //in either case
}); //end myPromise

//
myPromise
  .then(value => { console.log(value) }) //success
  .catch(err => { console.log(err) });   //catch error