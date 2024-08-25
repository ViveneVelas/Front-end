import React from "react"

function Cardkpi() {
    return (
        <div key={1} className="col-xxl-4 col-md-6">
            <div className="card info-card sales-card">
                <div className="card-body">
                    <h5 className="card-title">Cardkpi 1</h5>
                    <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-currency-dollar"></i>
                        </div>
                        <div className="ps-3">
                            <h6>50%</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cardkpi