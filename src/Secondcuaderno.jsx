import React from 'react'

export default function Secondcuaderno() {
  const onclick=()=>{
    alert("error")
  }
  return (
    <div className='twoframe'>
        <h1>Sistema del plantel </h1>
      
 <br />
        
        <button onClick={onclick} className='button'>Desplegar Pagina</button> <hr />
        <h1> Eventos</h1>
       <br /> <button className='button'>Desplegar Bitacora</button>

        </div>
  )
}
