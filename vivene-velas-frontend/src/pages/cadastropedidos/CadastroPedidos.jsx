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
    const [tipoEntrega, setTipoEntrega] = useState('');
    const [dataEntrega, setDataEntrega] = useState('');
    const [valorFrete, setValorFrete] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://54.82.254.93:8080/velas/buscar-nomes-velas', {
                    headers: { 'accept': '*/*' },
                });
                setVelas(response.data || []);
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
            }
        };
        fetchData();
    }, []);

    const formatarData = (value) => {
        // Remove tudo que não é número
        const cleanedValue = value.replace(/\D/g, '');

        // Adiciona as barras conforme necessário
        if (cleanedValue.length <= 2) return cleanedValue;
        if (cleanedValue.length <= 4) return `${cleanedValue.slice(0, 2)}/${cleanedValue.slice(2)}`;
        return `${cleanedValue.slice(0, 2)}/${cleanedValue.slice(2, 4)}/${cleanedValue.slice(4, 8)}`;
    };

    const handleChange = (event) => {
        const inputValue = event.target.value;
        const formattedValue = formatarData(inputValue) // Formata apenas se for tipo "text"
        setDataEntrega(formattedValue)
        // onChange({ ...event, target: { ...event.target, value: formattedValue } });
    };

    const escolherVela = async (event) => {
        const selectedVelaId = parseInt(event.target.value);
        setVelaEscolhida(selectedVelaId);

        try {
            const response = await axios.get(`http://44.204.200.174:8080/velas/${selectedVelaId}`, {
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
            img: detalhesVela.imagem,
            nomeVela: detalhesVela.nome,
            statusEstoque: "Em estoque",
            qtdeVelas: qtdEscolhida,
            valorVela: detalhesVela.valor,
            descricao: detalhesVela.descricao,
            valorPedido: (detalhesVela.valor * qtdEscolhida).toFixed(2)
        };

        setRegistroPedidos([...registroPedidos, novoPedido]);
    };

    const removerPedido = (index) => {
        setRegistroPedidos(registroPedidos.filter((_, i) => i !== index));
    };

    const salvarPedidos = async () => {
        const listaVelas = registroPedidos.map((pedido) => ({
            idVela: velaEscolhida,
            nomeVela: pedido.nomeVela,
            qtdVela: pedido.qtdeVelas
        }));
        const localDate = new Date().toISOString().split('T')[0];

        const dadosPedido = {
            dtPedido: localDate,
            preco: registroPedidos.reduce((total, pedido) => total + parseFloat(pedido.valorPedido), 0) + parseFloat(valorFrete),
            descricao: "Pedido de velas",
            tipoEntrega: "test",
            status: "Em andamento",
            clienteId: 1,
            listaVelas: listaVelas
        };

        console.log(dadosPedido);

        try {
            const response = await axios.post('http://44.204.200.174:8080/pedidos', dadosPedido, {
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

                {/* <div className={style['div-card-pedidos']}>
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
                </div> */}

                <Sidebar />
                <div class={style["div_dados_gerais"]}>

                    {/* <div class={style["div_dados_vela"]}>
                        <div>
                            <h2>Dados da Vela</h2>
                        </div>
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
                                id="ipt_nome"
                                className={style["form-input"]}
                                required
                                placeholder=""
                                onChange={(e) => setQtdEscolhida(parseInt(e.target.value) || 0)}
                            />
                            <label htmlFor="ipt_nome" className={style["form-label"]}>{"Quantidade de velas"}</label>
                        </div>
                        <div className={style["div_btn_pedido"]}>

                            <button type="button" className="btn btn-primary font-padrao" onClick={handleSubmit} >+ Adicionar Vela</button>

                        </div>
                    </div> */}

                    <div class={style["div_dados_vela"]}>
                        <div>
                            <h2>Dados do Cliente</h2>
                        </div>
                        <div className={style["form-group"]}>
                            <input
                                type="text"
                                id="ipt_nome_cliente"
                                className={style["form-input"]}
                                required
                                placeholder=""
                                onChange={(e) => setNomeCliente(e.target.value)}
                            />
                            <label htmlFor="ipt_nome_cliente" className={style["form-label"]}>{"Nome do cliente"}</label>
                        </div>

                        <input
                type={"text"}
                id="ipt_nome"
                className={style["form-input"]}
                required
                placeholder=""
                value={dataEntrega}
                onChange={handleChange}  // Aplica a formatação personalizada
            />
                        <div className={style["form-group"]}>
                            <input
                                type="number"
                                id="ipt_nome"
                                className={style["form-input"]}
                                required
                                placeholder=""
                                onChange={(e) => setQtdEscolhida(parseInt(e.target.value) || 0)}
                            />
                            <label htmlFor="ipt_nome" className={style["form-label"]}>{"Data de entrega"}</label>
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
                            <label htmlFor="ipt_nome" className={style["form-label"]}>{"Endereço (CEP) "}</label>
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
                            <label htmlFor="ipt_nome" className={style["form-label"]}>{"Endereço (Número) "}</label>
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
                            <label htmlFor="ipt_nome" className={style["form-label"]}>{"Valor do frete"}</label>
                        </div>
                        <div className={style["div_btn_pedido"]}>

                            <button type="button" className="btn btn-primary font-padrao" onClick={handleSubmit} >+ Adicionar Vela</button>

                        </div>
                    </div>

                    <div>
                        <div class={style["container"]}>
                            <h1>Lista de pedidos</h1>
                            <div class={style["div-tabela"]}>

                                <table>
                                    <thead>
                                        <tr>
                                            <th>VELA</th>
                                            <th>VALOR UNITÁRIO</th>
                                            <th>QUANTIDADE</th>
                                            <th>VALOR TOTAL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {registroPedidos.map((pedido, index) => (
                                            <tr>
                                                <td>
                                                    <div class={style["item"]}>
                                                        <button
                                                            className={style["delete-btn"]}
                                                            onClick={() => removerPedido(index)}
                                                        >
                                                            <i className="bi bi-x-circle"></i>
                                                        </button>
                                                        <img class={style["img-logo-vela"]}
                                                            src={`data:image/jpeg;base64,${pedido.img}`}
                                                        />
                                                        <div>
                                                            <p>{pedido.nomeVela}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>R$ {pedido.valorVela}</td>
                                                <td>
                                                    <div class={style["quantity-control"]}>
                                                        <button>-</button>
                                                        <span>{pedido.qtdeVelas}</span>
                                                        <button>+</button>
                                                    </div>
                                                </td>
                                                <td>R$ {pedido.valorPedido}</td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className={style["div_btn_pedido"]}>

                            <button type="button" onClick={salvarPedidos} className="btn btn-primary font-padrao" >Cadastrar Pedido</button>

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default CadastroPedidos;
