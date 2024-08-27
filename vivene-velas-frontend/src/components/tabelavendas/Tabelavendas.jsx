import React from 'react';

const Tabelavendas = () => {
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
            <h4>Clientes Mais Assíduos </h4>
            <div className="table-container card">
                <table className="tabela-vendas">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Quantidade de vendas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dados.map((item, index) => (
                            <tr key={index}>
                                <td>{item.nome}</td>
                                <td>{item.vendas}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Tabelavendas;
