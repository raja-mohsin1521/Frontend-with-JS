let firstbimg=document.getElementsByClassName('firstcontainer')[0]
let secondbimg=document.getElementsByClassName('secondcontainer')[0]
let fourthbimg=document.getElementsByClassName('fourthcontainer')[0]
window.addEventListener("scroll",function (){
   
    let x= window.pageYOffset*0.7
    let y= window.pageYOffset*0.347
    let z= window.pageYOffset*0.336
    firstbimg.style.backgroundPositionY=x+"px";
   
    secondbimg.style.backgroundPositionY=y+"px";
    fourthbimg.style.backgroundPositionY="-100px";
    fourthbimg.style.backgroundPositionY=z+"px";
})



let closebtn=document.getElementById('closebtn')
let togglebtn=document.getElementById('togglebtn')
let sidebar=document.getElementsByClassName('sidebar')[0]

closebtn.addEventListener("click",closetab)
togglebtn.addEventListener("click",opentab)
function closetab(){
    sidebar.style.width='0vw';
}
function opentab(){
    sidebar.style.width='100vw';
}