const root = document.getElementById("container");
const button=document.getElementById("btn");
const disp=document.getElementById("disp");
const loader=document.getElementById("loader");
async function fetchData() {
    //alert("hiiii")    
    try{
        loader.innerHTML='<h2>Loading...</h2>';
        const serverData=await fetch("https://fakestoreapi.com/products");
        const jsondata=await serverData.json();
        //disp.innerHTML=`${jsondata[0].title}`;
       /// console.log(jsondata[0].title);
       let table=`<table border=1>
       ${
        jsondata.map((ele)=>(
            `<tr>
            <td><img src=${ele.image} width=100 height=100></img></td>
            <td>${ele.title}</td>
            <td>${ele.description}</td>
            <td>${ele.price}</td>
            <td>${ele.category}</td>
            </tr>`
        ))
       }
       </table>`
       disp.innerHTML=table;

    }catch(e){
        console.log("Error is"+e);
    }
    finally{
        loader.innerHTML='';
    }
}
button.addEventListener("click", fetchData);