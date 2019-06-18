
const nav = document.querySelectorAll('nav a')

nav[0].addEventListener('mouseover', function (event) {
    event.target.style.color = 'Red';
});  

const paragraph = document.querySelector('.intro p') 

paragraph.addEventListener('dblclick' , function (event) {
    event.target.style.visibility = 'hidden';
})  

const fourthHeading = document.querySelector('.destination h4')
fourthHeading.addEventListener('select' ,function (event) {
   event.target.style.color = 'Red';
})  

const resizing = window.addEventListener('resize', function (event) {
 event.target.style.fontSize = '100px;';
})  

const maincontainer = document.querySelector('.container').addEventListener('keydown' , function(event) {
    alert("Hey There !");
})






