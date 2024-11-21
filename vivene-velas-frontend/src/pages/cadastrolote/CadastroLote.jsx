import React, { useEffect, useState } from 'react';
import axios from 'axios'; import Sidebar from '../../components/sidebar/Sidebar';
import { useNavigate } from 'react-router-dom'
import Input from '../../components/input/habilitado/Input'
import InputDesabilitado from '../../components/input/desabilitado/InputDesabilitado';
import CheckBox from '../../components/checkbox/CheckBox';
import TextAreaDesabilitada from '../../components/textarea/desabilitado/TextAreaDesabilitado';
import style from './CadastroLote.module.css'
import imagemCarregando from '../../img/imagem-carregando.png'

const CadastroLotes = () => {

    const [velas, setVelas] = useState([]);
    const [selectedCheckbox, setSelectedCheckbox] = useState(null);
    const [detalhesVela, setDetalhesVela] = useState({ tamanho: '', valor: '', descricao: '', imagem: imagemCarregando });

    const [velaEscolhida, setVelaEscolhida] = useState(0);
    const [qtdEscolhida, setQtdEscolhida] = useState(0);
    const [localizacaoEscolhida, setLocalizacaoEscolhida] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        setDetalhesVela({
            tamanho: 'Tamanho da Vela',
            valor: 'Valor',
            descricao: 'Descrição',
            imagem: imagemCarregando
        });

        const fetchData = async () => {
            try {
                const [velaResponse] = await Promise.all([
                    axios.get('http://localhost:8080/velas/buscar-nomes-velas', {
                        headers: {
                            'accept': '*/*',
                        },
                    })
                ]);

                setVelas(velaResponse.data || []);
            } catch (error) {
                console.error('Erro ao buasascar os dados:', error);
            }
        };

        fetchData();
    }, []);

    const velaNavigate = () => {
        navigate('/vela');
    };

    const escolherVela = (event) => {
        const selectedVela = velas.find(v => v.id === parseInt(event.target.value));

        const fetchData = async () => {
            try {
                const [velaResponse] = await Promise.all([
                    axios.get(`http://localhost:8080/velas/${selectedVela.id}`, {
                        headers: {
                            'accept': '*/*',
                        },
                    })
                ]);

                console.log(velaResponse.data);

                // Verifica se a imagem é Base64 ou uma URL
                const imagemCarregada = velaResponse.data.imagem?.startsWith('data:image')
                    ? velaResponse.data.imagem
                    : `data:image/jpeg;base64,${velaResponse.data.imagem}`;

                setDetalhesVela({
                    tamanho: velaResponse.data.tamanho || '',
                    valor: velaResponse.data.preco || '',
                    descricao: velaResponse.data.descricao || '',
                    imagem: velaResponse.data.imagem ? imagemCarregada : imagemCarregando
                });

                setVelaEscolhida(selectedVela.id);
            } catch (error) {
                console.error('Erro ao buscar os dados AQUI:', error);
            }
        };

        fetchData();
    };


    const handleCheckboxChange = (valor) => {
        setSelectedCheckbox(valor === selectedCheckbox ? null : valor);
        if (valor == 'Casa') {
            setLocalizacaoEscolhida(0)
        } else {
            setLocalizacaoEscolhida(1)
        }
    };

    const handleSubmit = async () => {
        const localDate = new Date().toISOString().split('T')[0];

        try {
            const response = await axios.post('http://localhost:8080/lotes', {
                fkVela: velaEscolhida,
                quantidade: qtdEscolhida,
                dataFabricacao: localDate,
                localizacao: localizacaoEscolhida
            });

            console.log('Resposta:', response.data);
            navigate('/estoque');
        } catch (error) {
            console.error('Erro ao enviar:', error);
            alert('Erro ao adicionar a vela.');
        }
    };



    return (
        <>
            <Sidebar />

            <div className={style["div-pagina"]}>

                <div className={style["div-info-pagina"]}>

                    <div className={style["div-titulo-lote"]}>
                        <h4>Cadastro de Lote</h4>
                    </div>

                    <div className={style["div-cad-lote"]}>


                        <div className="form-group image-upload">
                            <img
                                className={style['img-vela-escolhida']}
                                src={detalhesVela.imagem}
                                alt="Imagem da vela"
                            />
                        </div>


                        <div className={style["div-inputs-form"]}>

                            <div className={style["div-inputs"]}>

                                <select className={style["select-optional"]} name="vela" id="vela" onChange={escolherVela}>
                                    <option disabled selected>Selecione uma vela</option>
                                    {velas.map((velaNow, index) => (
                                        <option key={index} value={velaNow.id}>{velaNow.nome}</option>
                                    ))}
                                </select>

                                <Input
                                    nome={"Quantidade de velas"}
                                    onChange={(e) => setQtdEscolhida(e.target.value)}
                                />

                                <div className={style["div-check-box"]}>

                                    <CheckBox valor="Casa" isChecked={selectedCheckbox === 'Casa'} onChange={() => handleCheckboxChange('Casa')} />
                                    <CheckBox valor="Estúdio" isChecked={selectedCheckbox === 'Estúdio'} onChange={() => handleCheckboxChange('Estúdio')} />
                                </div>

                                <InputDesabilitado nome={detalhesVela.tamanho} />
                                <InputDesabilitado nome={detalhesVela.valor} />
                                <TextAreaDesabilitada nome={detalhesVela.descricao} />
                            </div>

                            <div className='form-buttons'>

                                <button className='cancel-button' onClick={velaNavigate}>Cancelar</button>
                                <button className='confirm-button' onClick={handleSubmit}>Cadastrar</button>

                            </div>


                        </div>

                    </div>


                </div>
            </div>

        </>





    );
};

export default CadastroLotes;

/*
<!DOCTYPE html>

<html lang="pt-BR">
 <head>
 <meta charset="UTF-8" />
 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 <title>Lista de Pedidos</title>
 <link rel="stylesheet" href="styles.css" />
 </head>
 <style>
 
 </style>
 <body>
 
 </body>
</html>


*/