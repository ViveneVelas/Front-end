import React from "react"

function Cardkpi({ velaVendia, qtd, }) {
  return (
    <div className="four-cards-container">

      <div className="card_kpi orange-card">
        <p className="card-title font-secundaria">Vela mais vendida</p>
        <h3 className="card-content font-padrao h3-nine">{velaVendia}</h3>
        <div className="card-icon"> {/* Ícone aqui */} </div>
      </div>

      <div className="card_kpi green-card">
        <p className="card-title font-secundaria">Qtde de velas vendidas na semana</p>
        <h3 className="card-content font-padrao h3-nine">{qtd} velas</h3>
        <div className="card-icon"> {/* Ícone aqui */} </div>
      </div>

      <div className="card_kpi yellow-card">
        <p className="card-title font-secundaria">Maior pedido</p>
        <h3 className="card-content font-padrao h3-nine">Ramona Flowers</h3>
      </div>

      <div className="card_kpi red-card">
        <p className="card-title font-secundaria">Vela com menor quantidade</p>
        <h3 className="card-content font-padrao h3-nine">Gran Café</h3>
      </div>
    </div>
  );
}

export default Cardkpi