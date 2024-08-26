import React from "react"

function Cardkpi({titulo, conteudo}) {
    return (
        <div key={1} className="col-xxl-3 col-md-6">
            <div className="card info-card sales-card">
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <div className="d-flex align-items-center">
                        <div className="ps-3">
                            <h6>{conteudo}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cardkpi