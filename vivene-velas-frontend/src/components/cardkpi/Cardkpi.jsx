import React from "react"

function Cardkpi({titulo, conteudo}) {
    return (
        <div className="four-cards-container">
      <div className="card orange-card">
        <p className="card-title">Vela mais vendida</p>
        <h3 className="card-content">Vela de Laranja</h3>
        <div className="card-icon"> {/* Ícone aqui */} </div>
      </div>
      
      <div className="card green-card">
        <p className="card-title">Qtde de velas vendidas na semana</p>
        <h3 className="card-content">70 velas</h3>
        <div className="card-icon"> {/* Ícone aqui */} </div>
      </div>
      
      <div className="card yellow-card">
        <p className="card-title">Título</p>
        <h3 className="card-content">Conteúdo</h3>
      </div>
      
      <div className="card red-card">
        <p className="card-title">Título</p>
        <h3 className="card-content">Conteúdo</h3>
      </div>
    </div>
  );
}

export default Cardkpi