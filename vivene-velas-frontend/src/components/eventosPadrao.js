// Lista dos eventos

const eventosPadrao = [

    {
        id: 1,
        title:"aaaa",   
        start: new Date(2024, 9, 19, 9, 0),
        end: new Date(2024, 9, 19, 9, 0),
        preco: 10.9,
        descricao: "string",
        tipoEntrega: "string",
        status: "string",
        clienteId: 1,
        clienteNome: "Maria Silva",
        listaDeVelas: [
            {
                idVela: 1,
                nomeVela: "Vela Aromática",
                qtdVela: 20
            },
            {
                idVela: 2,
                nomeVela: "Vela Aromática Lavanda",
                qtdVela: 20
            }
        ],
        tipo: 'Velas'
    },
    {
        id: 2,
        dtPedido: new Date(2024, 9, 19, 9, 0),
        preco: 10.9,
        descricao: "string",
        tipoEntrega: "string",
        status: "string",
        clienteId: 1,
        clienteNome: "Maria Silva",
        listaDeVelas: [
            {
                idVela: 1,
                nomeVela: "Vela Aromática",
                qtdVela: 20
            },
            {
                idVela: 2,
                nomeVela: "Vela Aromática Lavanda",
                qtdVela: 20
            }
        ],
        tipo: 'Velas'
    },
    {
        id: 3,
        dtPedido: new Date(2024, 9, 19, 9, 0),
        preco: 10.9,
        descricao: "string",
        tipoEntrega: "string",
        status: "string",
        clienteId: 1,
        clienteNome: "Maria Silva",
        listaDeVelas: [
            {
                idVela: 1,
                nomeVela: "Vela Aromática",
                qtdVela: 20
            },
            {
                idVela: 2,
                nomeVela: "Vela Aromática Lavanda",
                qtdVela: 20
            }
        ]
    }
    // {
    //     id: 1,
    //     title: 'Velas a Vencer',
    //     start: new Date(2024, 9, 19, 9, 0),
    //     end: new Date(2024, 9, 19, 11, 0),
    //     desc: 'Vela da Juliana sabor chocolate M',
    //     color: '#AE6DD6',
    //     tipo: 'Velas',
    // },
    // {
    //     id: 2,
    //     title: 'Entrega',
    //     start: new Date(2024, 9, 5, 18, 0),
    //     end: new Date(2024, 9, 5, 22, 0),
    //     desc: 'Lote: 10x Chocolate',
    //     color: '#7CC6D7',
    //     tipo: 'Entrega',
    // },
    // {
    //     id: 3,
    //     title: 'Entrega',
    //     start: new Date(2024, 9, 10, 14, 0),
    //     end: new Date(2024, 9, 10, 16, 0),
    //     desc: 'Vela da Juliana sabor chocolate M',
    //     color: '#7CC6D7',
    //     tipo: 'Entrega',
    // },
    // {
    //     id: 4,
    //     title: 'Velas a Vencer',
    //     start: new Date(2024, 9, 1, 10, 0),
    //     end: new Date(2024, 9, 1, 12, 0),
    //     desc: 'Lote: 10x Chocolate',
    //     color: '#AE6DD6',
    //     tipo: 'Velas',
    // },
    // {
    //     id: 5,
    //     title: 'Velas a Vencer',
    //     start: new Date(2024, 9, 20, 8, 0),
    //     end: new Date(2024, 9, 20, 10, 0),
    //     desc: 'Lote: 10x Chocolate',
    //     color: '#AE6DD6',
    //     tipo: 'Velas',
    // },
    // {
    //     id: 6,
    //     title: 'Velas a Vencer',
    //     start: new Date(2024, 9, 10, 14, 0),
    //     end: new Date(2024, 9, 10, 16, 0),
    //     desc: 'Lote: 10x Chocolate',
    //     color: '#AE6DD6',
    //     tipo: 'Velas',
    // }
]

export default eventosPadrao;