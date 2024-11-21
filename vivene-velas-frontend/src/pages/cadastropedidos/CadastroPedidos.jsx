import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../components/sidebar/Sidebar';
import Input from '../../components/input/habilitado/Input';
import TextArea from '../../components/textarea/habilitado/TextArea';
import style from './CadastroPedidos.module.css';
import ScrollContainer from '../../components/scrollcontainer/ScrollContainer';
import Pedido from '../../components/pedido/Pedido';

const CadastroPedidos = () => {
    const [velas, setVelas] = useState([]);
    const [detalhesVela, setDetalhesVela] = useState({ tamanho: '', valor: '', nome: '', descricao: '', imagem: '' });
    const [velaEscolhida, setVelaEscolhida] = useState(0);
    const [qtdEscolhida, setQtdEscolhida] = useState(0);
    const [registroPedidos, setRegistroPedidos] = useState([]);
    const [nomeCliente, setNomeCliente] = useState('');
    const [tipoEntrega, setTipoEntrega] = useState(''); // Tipo de entrega (Endereço)
    const [dataEntrega, setDataEntrega] = useState('');
    const [valorFrete, setValorFrete] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/velas/buscar-nomes-velas', {
                    headers: { 'accept': '*/*' },
                });
                setVelas(response.data || []);
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
            }
        };
        fetchData();
    }, []);

    const escolherVela = async (event) => {
        const selectedVelaId = parseInt(event.target.value);
        setVelaEscolhida(selectedVelaId);

        try {
            const response = await axios.get(`http://localhost:8080/velas/${selectedVelaId}`, {
                headers: { 'accept': '*/*' },
            });
            setDetalhesVela({
                tamanho: response.data.tamanho || '',
                valor: response.data.preco || '',
                nome: response.data.nome || '',
                descricao: response.data.descricao || '',
                imagem: response.data.imagem || ''
            });
        } catch (error) {
            console.error('Erro ao buscar os dados da vela:', error);
        }
    };

    const handleSubmit = () => {
        const novoPedido = {
            nomeVela: detalhesVela.nome,
            statusEstoque: "Em estoque",
            qtdeVelas: qtdEscolhida,
            valorVela: detalhesVela.valor,
            descricao: detalhesVela.descricao,
            valorPedido: (detalhesVela.valor * qtdEscolhida).toFixed(2)
        };

        setRegistroPedidos([...registroPedidos, novoPedido]);
    };

    const salvarPedidos = async () => {
        const listaVelas = registroPedidos.map((pedido) => ({
            idVela: velaEscolhida,
            nomeVela: pedido.nomeVela,
            qtdVela: pedido.qtdeVelas
        }));

        const dadosPedido = {
            dtPedido: dataEntrega,
            preco: registroPedidos.reduce((total, pedido) => total + parseFloat(pedido.valorPedido), 0) + parseFloat(valorFrete),
            descricao: "Pedido de velas",
            tipoEntrega: "test",
            status: "Em andamento",
            clienteId: 1, // Substitua pelo ID do cliente
            listaVelas: listaVelas
        };

        try {
            const response = await axios.post('http://localhost:8080/pedidos', dadosPedido, {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            console.log("Pedido salvo com sucesso:", response.data);
            alert("Pedido salvo com sucesso!");
        } catch (error) {
            console.error('Erro ao salvar o pedido:', error);
            alert("Erro ao salvar o pedido.");
        }
    };

    return (
        <>
            <div>
                <Sidebar />
                {/*
                <div className={style['div-card-pedidos']}>
                    <div className={style['div-card-minimenu']}>
                        <select
                            className={style["select-optional"]}
                            onChange={escolherVela}
                            defaultValue=""
                        >
                            <option disabled value="">Selecione uma vela</option>
                            {velas.map((velaNow) => (
                                <option key={velaNow.id} value={velaNow.id}>{velaNow.nome}</option>
                            ))}
                        </select>

                        <div className={style["form-group"]}>
                            <input
                                type="number"
                                id="ipt_preco"
                                className={"form-input"}
                                placeholder=""
                                value={detalhesVela.valor}
                                readOnly
                            />
                            <label htmlFor="ipt_preco" className={"form-label"}>Preço</label>
                        </div>

                        <div className={style["form-group"]}>
                            <input
                                type="number"
                                id="ipt_nome"
                                className={style["form-input"]}
                                required
                                placeholder=""
                                onChange={(e) => setQtdEscolhida(parseInt(e.target.value) || 0)}
                            />
                            <label htmlFor="ipt_nome" className={style["form-label"]}>{"Quantidade de velas"}</label>
                        </div>

                        <TextArea nome="Descrição" value={detalhesVela.descricao} readOnly />

                        <button
                            className={style['botao-positivo']}
                            onClick={handleSubmit}
                        >
                            Adicionar Vela
                        </button>
                    </div>

                    <div className={style['div-info-pedidos']}>
                        <Input nome="Nome do cliente" onChange={(e) => setNomeCliente(e.target.value)} />
                        <Input nome="Data de entrega" onChange={(e) => setDataEntrega(e.target.value)} />
                        <Input nome="Endereço" onChange={(e) => setTipoEntrega(e.target.value)} />
                        <Input nome="Valor do frete" onChange={(e) => setValorFrete(parseFloat(e.target.value) || 0)} />

                        <button className={style['botao-positivo']} onClick={salvarPedidos}>Salvar Pedido</button>
                    </div>

                    <div className={style['div-registro-pedidos']}>
                        <span>Registro do pedido</span>

                        <ScrollContainer>
                            {registroPedidos.map((pedido, index) => (
                                <Pedido
                                    key={index}
                                    nomeVela={pedido.nomeVela}
                                    statusEstoque={pedido.statusEstoque}
                                    qtdeVelas={pedido.qtdeVelas}
                                    valorVela={pedido.valorVela}
                                    valorPedido={pedido.valorPedido}
                                />
                            ))}
                        </ScrollContainer>

                        <div className={style['div-botoes']}>
                            <button className={style['botao-negativo']}>Cancelar</button>
                        </div>
                    </div>
                </div>
                */}
                <div class="div_dados_vela">
                    <div>
                        <h2>Dados da Vela</h2>
                        <hr />
                    </div>
                    <select name="Nome da Vela" id="">
                        <option value="">Nome da Vela</option>
                        <option value="">Maçã</option>
                        <option value="">Café</option>
                        <option value="">Chocolate</option>
                    </select>
                    <input type="number" name="Quantidade de Velas" id="" />
                </div>
                <div>
                    <div class="container">
                        <h1>Lista de pedidos</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>Vela</th>
                                    <th>Valor Unitário</th>
                                    <th>Quantidade</th>
                                    <th>Valor Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="item">
                                            <button class="delete-btn">✖</button>
                                            <img
                                                src="https://via.placeholder.com/50"
                                                alt="Festa de aniversário"
                                            />
                                            <div>
                                                <p>Vela Brisa da Manhã</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>R$ 75,00</td>
                                    <td>
                                        <div class="quantity-control">
                                            <button>-</button>
                                            <span>03</span>
                                            <button>+</button>
                                        </div>
                                    </td>
                                    <td>R$ 225,00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="item">
                                            <button class="delete-btn">✖</button>

                                            <img
                                                src="https://via.placeholder.com/50"
                                                alt="Festa de aniversário"
                                            />
                                            <div>
                                                <p>Festa de aniversário</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>R$ 75,00</td>
                                    <td>
                                        <div class="quantity-control">
                                            <button>-</button>
                                            <span>03</span>
                                            <button>+</button>
                                        </div>
                                    </td>
                                    <td>R$ 225,00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="div_btn_pedido">
                        <button class="register-btn">Cadastrar Pedidos</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CadastroPedidos;
