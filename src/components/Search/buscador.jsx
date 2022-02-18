import React from "react";


const Buscador = ({texto, setTexto}) => {
 
  const handleInputChange = ({target}) => {
      setTexto(target.value);
  };
  const handleSubmit = (e) => {
      e.preventDefault();
 
  };
  
  
     return (
     <div className="buscador">
         <form onSubmit={handleSubmit}>
             <input className="buscador-input" type="text" name ="buscar" placeholder="Busca aquí..." value={texto} onChange={handleInputChange}
             />
         </form>
         
         </div>
   )
 }
 

export default Buscador;
