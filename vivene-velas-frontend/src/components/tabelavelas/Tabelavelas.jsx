import React from 'react';

const Tabelavelas = () => {
    const dados = [
        { nome: 'Carlos Andrade', vendas: 20 },
        { nome: 'Carlos Andrade', vendas: 20 },
        { nome: 'Carlos Andrade', vendas: 20 },
        { nome: 'Carlos Andrade', vendas: 20 },
        { nome: 'Carlos Andrade', vendas: 20 },
        { nome: 'Carlos Andrade', vendas: 20 },
        { nome: 'Carlos Andrade', vendas: 20 }
    ];

    return (
        <>
            <div className="table-container card">
                <h5 className="">Velas em Vencimento</h5>
                <table className="tabela-vendas">
                    <thead>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Quantidade</th>
                            <th scope="col">Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Vela de Morango</td>
                            <td>8</td>
                            <td>2016-05-25</td>
                        </tr>
                        <tr>
                            <td>Vela de Chocolate</td>
                            <td>3</td>
                            <td>2014-12-05</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Tabelavelas;
