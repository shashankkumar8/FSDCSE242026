const container=document.getElementById('root');
console.log(container);

const root=REACTDOM.createRoot(container);
const h1=React.createElement('h1',{style:{color:'brown', backgroundColor:'lightgray'}},'Hello React');
const h2=React.createElement('h2',{style:{color:'red',backgroundColor:'cyan'}},'ABES Engineering College ');
const img=React.createElement('img',{src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6g1k7r3n4x5J8z2Z0X1Y2Z3Y4Z5Y6Z7Z8Z9Z0&usqp=CAU',alt:'ABES Logo',style:{width:'100px',height:'100px'}});
const div=React.createElement('div',{style:{border:'2px solid red'}},h1,h2,img);
root.render(div);  \
const h21=<h2>hello world </h2>;
const h22=<h2>abes engfineering college</h2>;
const div=<div>{h21},{h22}</div>;
const wrapper=<div style={{border:'2px solid red'}}>
{div}
<h2> hey,using JSX</h2>
</div>
root.render(wrapper);