let flag=0;


const a=document.querySelector("#balb");
const btn =document.querySelector("button");
btn.addEventListener("click",function(){
 if(flag==0){
    a.style.backgroundColor="yellow";
    console.log("Light On");
    flag=1
 }
 else{
    a.style.backgroundColor="white";
    console.log("Light off");
    flag=0
 }
})