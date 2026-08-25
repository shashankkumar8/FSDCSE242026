//console.log("Hello I am using JS");



//const sum=(a,b)=>{
  //  return math.sqrt(a)+math.sqrt(b);}
//console.log(sum(4,9));

//IIFE (Immediately Invoked Function Expression)
//(function() {
  //  console.log("This is an IIFE");
//})();


// let a = 23;
// if(a<20){
//     let a=40;
//     console.log("value of a inside if block: "+a);
// }
// console.log("value of a outside if block: "+a);

// function sum(a,b){
//     return a+b;
// }


// function msgWithSum(clbk,msg){
//     const result = clbk(40,50);
//     console.log("hii "+msg+" and your result is: "+result);
// }
// msgWithSum(sum,"Rahul");




// function login(error,msg){
//     if(error){
//         console.log("Error: "+msg);
//     }else{
//         console.log("Success: "+msg);
//     }
// }
// function loginhandler(username,password,clbk){
//     if(username==="shashank" && password==="2344"){
//         clbk(null,"Login Successful");
//     }else{
//         clbk("username or password is incorrect",null);
//     }
// }
// loginhandler("shashank","2344",login);

// console.log("one");
// for(i=0;i<100000;i++){
//     console.log("i: "+i);
// }
// //setTimeout(()=>{console.log("two")},1000);
// console.log("three");

const container = document.getElementById("container");
const button=document.getElementById("btn");
const h1=document.createElement("h1");
console.log(h1);
h1.innerText='ABES engineering college';
console.log(container);
console.log(button);
function ping(){
    try{

    
 //   console.log("ping");
 container.innerHTML+="<h2 style='color:blue;'>Welcome to DOM</h2>";
 h1.style.backgroundColor="yellow";
 h1.style.color="red";
 container.appendChild(h1);
 const img=document.createElement("img");
 img.src="https://picsum.photos/500/300";
 img.style.width="100%";
 img.setAttribute("height","300px");
 img.setAttribute("height","200px");
 container.appendChild(img);

}

catch(err){ 
    loader.innerHTML+="<h2 style='color:red;'>Error: "+err+"</h2>";
}

}
button.addEventListener("click", ping);
