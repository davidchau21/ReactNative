// This is more of a thinking challenge than a coding challenge 
// Your tasks:
// 1. Take the IIFE below and at the end of the function, attach an event listener that
// changes the color of the selected h1 element ('header') to blue, each time
// the body element is clicked. Do not select the h1 element again!
// 2. And now explain to yourself (or someone around you) why this worked! Take all
// the time you need. Think about when exactly the callback function is executed,
// and what that means for the variables involved in this example.
// (function () {
// const header = document.querySelector('h1');
// header.style.color = 'red';
// })();

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
  
    // Attach an event listener to the body element
    document.body.addEventListener('click', function () {
      header.style.color = 'blue';
    });
  })();
  