//console.log("Hello I am using JS");


import math from 'mathjs';
const sum=(a,b)=>{
    return math.sqrt(a)+math.sqrt(b);}
console.log(sum(4,9));

//IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("This is an IIFE");
})();


let a = 23;
if(a<20){
    let a=40;
    console.log("value of a inside if block: "+a);
}
console.log("value of a outside if block: "+a);

function sum(a,b){
    return a+b;
}


function msgWithSum(clbk,msg){
    const result = clbk(40,50);
    console.log("hii "+msg+" and your result is: "+result);
}
msgWithSum(sum,"Rahul");




function login(error,msg){
    if(error){
        console.log("Error: "+msg);
    }else{
        console.log("Success: "+msg);
    }
}
function loginhandler(username,password,clbk){
    if(username==="shashank" && password==="2344"){
        clbk(null,"Login Successful");
    }else{
        clbk("username or password is incorrect",null);
    }
}
loginhandler("shashank","2344",login);
