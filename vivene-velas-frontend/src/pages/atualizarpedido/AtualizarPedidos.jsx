import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../components/sidebar/Sidebar';
import style from './AtualizarPedidos.module.css';
import Notificacao from '../../components/notificacao/Notificacao';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

const CadastroPedidos = () => {
    const { id } = useParams();

    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    const [showAlertError, setShowAlertError] = useState(false);

    const [detalhesVela, setDetalhesVela] = useState({ tamanho: '', valor: '', nome: '', descricao: '', imagem: '' });
    const [velas, setVelas] = useState([]);

    const [velaEscolhida, setVelaEscolhida] = useState(0);
    const [qtdEscolhida, setQtdEscolhida] = useState(0);

    const [registroPedidos, setRegistroPedidos] = useState([]);

    const [nomeCliente, setNomeCliente] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [dataEntrega, setDataEntrega] = useState('');
    const [valorFrete, setValorFrete] = useState(0);

    const [etapa, setEtapa] = useState(1);

    const [sugestoes, setSugestao] = useState(["Maria", "Marcos", "Mariana", "Márcio"]);
    const [sugestaoAtiva, setSugestaoAtiva] = useState("");

    const navigate = useNavigate();


    // Função para buscar velas
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/host/velas/buscar-nomes-velas', {
                    headers: { 'accept': '*/*' },
                });
                setVelas(response.data || []);
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
            }

            try {
                const response = await axios.get('/host/clientes/nomes', {
                    headers: { 'accept': '*/*' },
                });
                setSugestao(response.data);
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
            }
        };
        fetchData();

    }, []);

    //Função para alterar de tela
    const mudarTela = () => {
        setEtapa((prev) => (prev === 1 ? 2 : 1));
    };

    //Função para formatar data para backend
    function formataDataBack(date) {
        const [day, month, year] = date.split("/");
        return `${year}-${month}-${day}`;
    }

    //Formatar data para frontend
    const formatarData = (value) => {
        const cleanedValue = value.replace(/\D/g, '');
        if (cleanedValue.length <= 2) return cleanedValue;
        if (cleanedValue.length <= 4) return `${cleanedValue.slice(0, 2)}/${cleanedValue.slice(2)}`;
        return `${cleanedValue.slice(0, 2)}/${cleanedValue.slice(2, 4)}/${cleanedValue.slice(4, 8)}`;
    };

    const handleChange = (event) => {
        const inputValue = event.target.value;
        const formattedValue = formatarData(inputValue)
        setDataEntrega(formattedValue)
    };

    //Função para escolher vela e adicionar no carrinho
    const escolherVela = async (event) => {

        const selectedVelaId = parseInt(event.target.value);
        console.log(selectedVelaId);

        setVelaEscolhida(selectedVelaId);

        try {
            const response = await axios.get(`/host/velas/${selectedVelaId}`, {
                headers: { 'accept': '*/*' },
            });
            setDetalhesVela({
                tamanho: response.data.tamanho || '',
                valor: response.data.preco || '',
                nome: response.data.nome || '',
                descricao: response.data.descricao || '',
                imagem: response.data.imagem || '',
                idVela: selectedVelaId || ''
            });
        } catch (error) {
            console.error('Erro ao buscar os dados da vela:', error);
        }
    };

    //Função para adicionar uma nova vela
    const handleSubmit = () => {
        const novoPedido = {
            img: detalhesVela.imagem,
            idVela: detalhesVela.idVela,
            nomeVela: detalhesVela.nome,
            statusEstoque: "Em estoque",
            qtdeVelas: qtdEscolhida,
            valorVela: detalhesVela.valor,
            descricao: detalhesVela.descricao,
            valorPedido: (detalhesVela.valor * qtdEscolhida).toFixed(2)
        };

        setRegistroPedidos([...registroPedidos, novoPedido]);
    };

    //Função para remover vela
    const removerPedido = (index) => {
        setRegistroPedidos(registroPedidos.filter((_, i) => i !== index));
    };

    //Função para salvar pedido e bater no back
    const salvarPedidos = async () => {
        const listaVelas = registroPedidos.map((pedido) => ({
            idVela: pedido.idVela,
            nomeVela: pedido.nomeVela,
            qtdVela: pedido.qtdeVelas
        }));

        const dadosPedido = {
            dtPedido: formataDataBack(dataEntrega),
            preco: registroPedidos.reduce((total, pedido) => total + parseFloat(pedido.valorPedido), 0) + parseFloat(valorFrete),
            descricao: "Pedido de velas",
            tipoEntrega: rua + ", N" + numero,
            status: "nao-iniciado",
            clienteId: 1,
            listaVelas: listaVelas
        };

        console.log(dadosPedido);

        try {
            console.log("Dados do pedido: " + dadosPedido);

            const response = await axios.post('/host/pedidos', dadosPedido, {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            setShowAlertSuccess(true)
            console.log('Resposta:', response.data);
            setTimeout(() => {
                navigate('/pedidos');
            }, 5000);
        } catch (error) {
            setShowAlertError(true)
            console.error('Erro ao enviar:', error);
            setTimeout(() => {
                setShowAlertError(false)
            }, 5000);
        }
    };

    const handleInputChange = (value) => {
        setNomeCliente(value);

        // Encontrar a primeira sugestão correspondente
        const sugestaoEncontrada = sugestoes.find((sugestao) =>
            sugestao.toLowerCase().startsWith(value.toLowerCase())
        );

        // Atualiza a sugestão ativa
        setSugestaoAtiva(sugestaoEncontrada || "");
    };
    return (
        <>
            <div>

                <Sidebar />
                <div class={style["div_dados_gerais"]}>

                    <div className={`${style["div_dados_vela"]} ${style["div_etapa_dois"]} ${etapa != 1 ? style["ativo"] : style["inativo"]}`}>
                        <div className={style["div_dados_mini"]}>
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
                        </div>
                        <div className={style["div_btn_pedido"]}>

                            <button className={style["btn_voltar"]} onClick={mudarTela}>
                                <i class="bi bi-arrow-return-left"></i>
                            </button>
                            <button type="button" className="btn btn-secondary font-padrao" onClick={handleSubmit} >+ Adicionar Vela</button>
                        </div>
                    </div>

                    <div className={`${style["div_dados_vela"]} ${style["div_etapa_um"]} ${etapa === 1 ? style["ativo"] : style["inativo"]}`}>
                        <div>
                            <h2>Dados do Cliente</h2>
                        </div>
                        {/* <div className={style["form-group"]}>
                            <input
                                type="text"
                                id="ipt_nome_cliente"
                                className={style["form-input"]}
                                required
                                placeholder=""
                                value={nomeCliente}
                                onChange={(e) => handleInputChange(e.target.value)}
                            />
                            <label htmlFor="ipt_nome_cliente" className={style["form-label"]}>{"Nome do cliente"}</label>
                            {sugestaoAtiva && nomeCliente && (
                                <div className={style["autocomplete-text"]}>
                                    {nomeCliente}
                                    <span>{sugestaoAtiva.slice(nomeCliente.length)}</span>
                                </div>
                            )}
                        </div> */}
                        <div className={style["input-container"]}>
                            <div className={style["input-wrapper"]}>
                                <input
                                    type="text"
                                    id="ipt_nome_cliente"
                                    className={style["form-input-now"]}
                                    value={nomeCliente}
                                    onChange={(e) => handleInputChange(e.target.value)}
                                />
                                <label htmlFor="ipt_nome_cliente" className={style["form-label"]}>
                                    Nome do cliente
                                </label>
                                {sugestaoAtiva && nomeCliente && (
                                    <div className={style["autocomplete-text"]}>
                                        {nomeCliente}
                                        <span>{sugestaoAtiva.slice(nomeCliente.length)}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className={style["form-group"]}>
                            <input
                                type={"text"}
                                id="ipt_data"
                                className={style["form-input"]}
                                required
                                placeholder=""
                                value={dataEntrega}
                                onChange={handleChange}  // Aplica a formatação personalizada
                            />
                            <label htmlFor="ipt_data_entrega" className={style["form-label"]}>{"Data de entrega"}</label>
                        </div>


                        <div className={style["form-group"]}>
                            <input
                                type="text"
                                id="ipt_rua"
                                className={style["form-input"]}
                                required
                                placeholder=""
                                onChange={(e) => setRua(e.target.value)}
                            />
                            <label htmlFor="ipt_rua" className={style["form-label"]}>{"Endereço (Rua) "}</label>
                        </div>
                        <div className={style["form-group"]}>
                            <input
                                type="number"
                                id="ipt_numero"
                                className={style["form-input"]}
                                required
                                placeholder=""
                                onChange={(e) => setNumero(parseInt(e.target.value) || 0)}
                            />
                            <label htmlFor="ipt_numero" className={style["form-label"]}>{"Endereço (Número) "}</label>
                        </div>
                        <div className={style["form-group"]}>
                            <input
                                type="number"
                                id="ipt_frete"
                                className={style["form-input"]}
                                required
                                placeholder=""
                                onChange={(e) => setValorFrete(parseFloat(e.target.value) || 0)}
                            />
                            <label htmlFor="ipt_frete" className={style["form-label"]}>{"Valor do frete"}</label>
                        </div>
                        <div className={style["div_btn_pedido_prosseguir"]}>
                            <button type="button" className="btn btn-secondary font-padrao" onClick={mudarTela} >Prosseguir</button>
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
                                                        <img class={style["img-logo-vela"]} src={`data:image/jpeg;base64,${pedido.img}`} />
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
                        <div className={style["div_btn_pedido_prosseguir"]}>
                            <button type="button" onClick={salvarPedidos} className="btn btn-primary font-padrao" >Cadastrar Pedido</button>
                        </div>
                    </div>
                </div>

            </div>
            {showAlertSuccess && (
                <Notificacao
                    message=" Pedido Cadastrado com Sucesso!"
                    duration={5000}
                    type="success"
                    icon="bi bi-check2-circle"
                    onClose={() => setShowAlertSuccess(false)}
                />
            )}

            {showAlertError && (
                <Notificacao
                    message=" Erro ao cadastrar um pedido!"
                    duration={5000}
                    type="error"
                    icon="bi bi-x-circle"
                    onClose={() => setShowAlertSuccess(false)}
                />
            )}
        </>
    );
};

export default CadastroPedidos;
