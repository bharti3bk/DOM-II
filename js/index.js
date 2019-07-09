 /****** Event Listener for Nav *********/

function homePopUp(home){
    home.style.height = "64px";
    home.style.width = "64px";
}    
function homePopDown(home){
    home.style.height = "32px";
    home.style.width = "32px";
}

const nav = document.querySelectorAll('nav a')
nav.addEventListener("mouseover" , homePopUp(this));
nav.addEventListener("mouseout" , homePopDown(this));


 /****** Event Listeners for Paragraph *********/

 document.querySelector('.intro p').addEventListener('dblclick' , function (event) {
    event.target.style.visibility = 'hidden';
}) 

document.querySelector('.text-content p').addEventListener('mouseleave' , function (event) {
    event.target.style.color = 'Green';
  
 })
   
 const mywindow = document.querySelector('.intro p');
window.addEventListener('resize', function (event) {
mywindow.style.fontSize = '100px'
})      

/****** Event Listener for body *********/

 document.querySelector('body').addEventListener('keydown' , function (event){
    console.log("you have pressed the key");
})  


document.querySelector('body').addEventListener('keyup' , function (event){
   event.targrt.style.background = 'aqua'; 
})
 
/****** Event Listener for headings *********/

document.querySelector('.logo-heading').addEventListener('pageshow' , function(event) {
    event.target.style.color = "lightpink";
})

document.querySelector('.destination h4').addEventListener('select' ,function (event) {
 window.alert("You have selected me ");

})  







