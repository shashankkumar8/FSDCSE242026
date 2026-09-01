const root =document.getElementById('container');
const button = document.getElementById('btn');
const disp = document.getElementById('disp');
const loader = document.getElementById('loader');
async function fetchdata(){

try{
    const serverdata = await fetch('https://fakestoreapi.com/products/');
    const jsondata = await serverdata.json();
    //console.log(jsondata[0].title);
    disp.innerHTML=`${jsondata[0].title}`;
    loader.innerHTML=`<h2 style='color:blue;'>Data fetched successfully</h2>`;
    let table=`<table border='1' style='border-collapse:collapse;'>
    ${jsondata.map((item)=>{
        return `<tr>
        <td><img src="${item.image}" alt="${item.title}" style="width: 100px; height: auto;"></td>
        <td>${item.title}</td>
        <td>${item.description}</td>
        <td>${item.price}</td>
        
        </tr>`;
    }).join('')}
    </table>`;
    disp.innerHTML=table;
    loader.innerHTML='';


}catch(err){
    console.log("Error: "+err);
}
finally{
loader.innerHTML='';
}

}
button.addEventListener('click',fetchdata);