
const nav = document.querySelectorAll('nav a')
nav[0].addEventListener('mouseover', function (event) {
    event.target.style.color = 'Red';
});  

 document.querySelector('.intro p').addEventListener('dblclick' , function (event) {
    event.target.style.visibility = 'hidden';
})  

 document.querySelector('h2').addEventListener('click' , function (event) {
     window.alert("Hey There");
 })     

 document.querySelector('.text-content p').addEventListener('mouseleave' , function (event) {
    event.target.style.color = 'Green';
  
 })    

 window.addEventListener('scroll', function(event) {
     window.alert("you are scrolling");   
 })  

 document.querySelector('body').addEventListener('keydown' , function (event){
     console.log("you have pressed the key");
 })  

 document.querySelector('.logo-heading').addEventListener('pageshow' , function(event) {
     event.target.style.color = "lightpink";
 })


 document.querySelector('body').addEventListener('keyup' , function (event){
    event.targrt.style.background = 'aqua'; 
})


 document.querySelector('.destination h4').addEventListener('select' ,function (event) {
  window.alert("You have selected me ");

})  

const mywindow = document.querySelector('.intro p');
window.addEventListener('resize', function (event) {
mywindow.style.fontSize = '100px'
})     












