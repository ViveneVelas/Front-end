import React from "react";
import classNames from "classnames";

const Card = ({opportunity, isSimple}) => {

    const className = classNames({"simple-opportunity": isSimple, "opportunity": !isSimple});

    return (
        <section className={className}>
            <div>
                <div id="aboutOpportunity"> Sobre a Vaga </div>
                <div id="aboutEnterprise"> Sobre a Empresa </div>
            </div>

            <div id="opportunityInformationCard">
                <div>
                    <div>
                        <div>
                            <h1>{opportunity.title}</h1>
                            <p>stars will be here</p>
                        </div>
                        <div>
                            <p>Data de publicação: {opportunity.date}</p>
                        </div>
                    </div>
                </div>
                
                <div>
                    <p>{opportunity.address}</p>
                    <p>{opportunity.location}</p>
                    <p>{opportunity.wage}</p>
                </div>
                
                <div>
                    <p>{opportunity.about}</p>
                </div>

                <div>
                    <div id="requirements">
                        <p>
                            
                        </p>
                    </div>
                    
                    <div id="benefits">
                        <p>

                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
