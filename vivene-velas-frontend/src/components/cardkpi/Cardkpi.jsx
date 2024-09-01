import React from "react"

function Cardkpi({velaVendia, qtd, }) {
    return (
        <div className="four-cards-container">
      <div className="card orange-card">
        <p className="card-title font-secundaria">Vela mais vendida</p>
        <h3 className="card-content font-padrao">{velaVendia}</h3>
        <div className="card-icon"> {/* Ícone aqui */} </div>
      </div>
      
      <div className="card green-card">
        <p className="card-title font-secundaria">Qtde de velas vendidas na semana</p>
        <h3 className="card-content font-padrao">{qtd} velas</h3>
        <div className="card-icon"> {/* Ícone aqui */} </div>
      </div>
      
      <div className="card yellow-card">
        <p className="card-title font-secundaria">Título</p>
        <h3 className="card-content font-padrao">Conteúdo</h3>
      </div>
      
      <div className="card red-card">
        <p className="card-title font-secundaria">Próxima Entrega</p>
        <h3 className="card-content font-padrao">Conteúdo</h3>
      </div>
    </div>
  );
}

export default Cardkpi