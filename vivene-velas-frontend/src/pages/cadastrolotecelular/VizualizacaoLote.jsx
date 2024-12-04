import React, { useEffect, useState } from 'react';
import axios from 'axios'; import Sidebar from '../../components/sidebar/Sidebar';
import { useNavigate } from 'react-router-dom'
import Input from '../../components/input/habilitado/Input'
import InputDesabilitado from '../../components/input/desabilitado/InputDesabilitado';
import CheckBox from '../../components/checkbox/CheckBox';
import TextAreaDesabilitada from '../../components/textarea/desabilitado/TextAreaDesabilitado';
import style from './CadastroLote.module.css'
import imagemCarregando from '../../img/imagem-carregando.png'
import Notificacao from '../../components/notificacao/Notificacao';
import { useParams } from "react-router-dom";

const CadastroLotes = () => {
    const { id } = useParams();
    const [lote, setLote] = useState(null);
  
  
    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    const [showAlertError, setShowAlertError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [velas, setVelas] = useState([]);
    const [selectedCheckbox, setSelectedCheckbox] = useState(null);
    const [detalhesVela, setDetalhesVela] = useState({ tamanho: '', valor: '', descricao: '', imagem: imagemCarregando });

    const [velaEscolhida, setVelaEscolhida] = useState(0);
    const [qtdEscolhida, setQtdEscolhida] = useState(0);
    const [localizacaoEscolhida, setLocalizacaoEscolhida] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8080/lotes/${id}`)
          .then(response => setLote(response.data))
          .catch(error => console.error("Erro ao buscar o lote:", error));
      }, [id]);
    
      if (!lote) {
        return <p>Carregando...</p>;
      }


    const handleCheckboxChange = (valor) => {
        setSelectedCheckbox(valor === selectedCheckbox ? null : valor);
        if (valor == 'Casa') {
            setLocalizacaoEscolhida(0)
        } else {
            setLocalizacaoEscolhida(1)
        }
    };

    return (
        <>
            <div className={style["div-pagina"]}>

                <div className={style["div-info-pagina"]}>

                    <div className={style["div-titulo-lote"]}>
                        <h4>Vizualização de Lote</h4>
                    </div>

                    <div className={style["div-cad-lote"]}>


                        <div className={`form-group ${style['image-upload-lote']}`}>
                            <img src={`data:image/jpeg;base64,${lote.vela.imagem}`} alt="Preview" className="uploaded-image" />
                        </div>


                        <div className={style["div-inputs-form"]}>

                            <div className={style["div-inputs"]}>

                            <InputDesabilitado nome={"Quantidade: "+lote.quantidade} />

                                <div className={style["div-check-box"]}>

                                    <CheckBox valor="Casa" isChecked={selectedCheckbox === 'Casa'} onChange={() => handleCheckboxChange('Casa')} />
                                    <CheckBox valor="Estúdio" isChecked={selectedCheckbox === 'Estúdio'} onChange={() => handleCheckboxChange('Estúdio')} />
                                </div>

                                <InputDesabilitado nome={"Tamanho: "+lote.vela.tamanho} />
                                <InputDesabilitado nome={"Preço: R$"+lote.vela.preco} />
                                <TextAreaDesabilitada nome={"Descrição: "+lote.vela.descricao} />
                            </div>

                        </div>

                    </div>


                </div>
            </div>

            {showAlertSuccess && (
                <Notificacao
                    message=" Lote Cadastrado com Sucesso!"
                    duration={5000}
                    type="success"
                    icon="bi bi-check2-circle"
                    onClose={() => setShowAlertSuccess(false)}
                />
            )}

            {showAlertError && (
                <Notificacao
                    message=" Erro ao cadastrar um Lote!"
                    duration={5000}
                    type="error"
                    icon="bi bi-x-circle"
                    onClose={() => setShowAlertSuccess(false)}
                />
            )}

            {isLoading && (
                <div className="carregando-icone">
                    <div className="spinner-border all-sp" role="status">
                        <span className="visually-hidden">Carregando...</span>
                    </div>
                </div>
            )}
        </>

    );
};

export default CadastroLotes;