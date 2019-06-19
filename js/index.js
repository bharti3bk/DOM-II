
document.querySelectorAll('nav a').forEach( a => 
a.addEventListener('mouseover', function (event) {
    event.target.style.color = 'Red';
}));  

document.querySelectorAll('nav a').forEach( a => 
    a.addEventListener('mouseleave', function (event) {
        event.target.style.color = 'Black';
}));

 document.querySelector('.intro p').addEventListener('dblclick' , function (event) {
    event.target.style.visibility = 'hidden';
})  

 document.querySelector('h2').addEventListener('click' , function (event) {
     window.alert("Hey There");
 })    

 window.addEventListener('scroll', function(event) {
     console.log("you are scrolling");   
 }) 

 window.addEventListener('pageshow' , function(event) {
     event.target.activeElement.style.backgroundColor = "pink";
 })


 document.querySelector('header img').addEventListener('click' , function (event){
    const img = event.target;
    img.style.border = "2px solid black";
})


 document.querySelector('.destination h4').addEventListener('select' ,function (event) {
  window.alert("You have selected me ");
})  

const mywindow = document.querySelector('.intro p');
window.addEventListener('resize', function (event) {
mywindow.style.fontSize = '100px'
})     












