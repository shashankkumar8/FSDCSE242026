const container=document.getElementById('root');
console.log(container);

const root=REACTDOM.createRoot(container);
const h2=React.createElement('h2',{style:{color:'red',backgroundColor:'cyan'}},'Hello React');
root.render(h2);    
