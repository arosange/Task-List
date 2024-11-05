import React, {useState} from "react";
import "./Contenedor.css";

function Contador(){

   const[count,setCount]= useState(0);

   const incrementar= ()=>{
      setCount(count+1);
   }

   const disminuir= ()=>{
      setCount(count-1);
   }

   const reset= ()=>{
      setCount(0);
   }

   return (
      <div className="contenedor">
      <p>Ficha: {count}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={disminuir}>Disminuir</button>
      <button onClick={reset}>Reset</button>
      </div>
   );
   }

export default Contador;

  /*
  import React, {useState} from "react";

function Contador(){

   const[count,setCount]= useState(0);

  return( <div> 
    <p>Usted ha hecho click {count} veces</p>
   <button onClick={()=>setCount(count+1)}>Presionar</button>
   <button onClick={()=>setCount(count-1)}>Disminuir</button>
   <button onClick={()=>setCount(0)}>Reset</button>
   </div>
   );
}
export default Contador;
*/