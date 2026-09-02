const root =document .getElementById('container');
const button = document.getElementById('btn');  
const h2 = document.createElement('h2');
const img = document.createElement('img');
const div=document.createElement('div');

console.log(root);
function showdata(){    
try{
    h2.innerText="welcome to dom";
    h2.style.color="red";
    h2.style.backgroundColor="cyan";
    img.src="abes-logo.png";
    img.setAttribute('height',200);
    img.setAttribute('width',200);
    div.setAttribute('class','box');
    div.style.border="dotted";


    root.appendChild(img);
    root.appendChild(h2);
    root.appendChild(div);
    }

    catch(e){
        console.log(e);
    }


    finally{

    }
}
button.addEventListener('click',showdata);