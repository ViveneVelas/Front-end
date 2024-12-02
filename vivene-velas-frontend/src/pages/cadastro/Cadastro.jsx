import React, { useState } from 'react';
import axios from 'axios';
import Img from '../../img/login.png';
import wave from '../../img/wave.svg';
import LogoMini from '../../img/logoMini.png';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleCadastro = async () => {
    try {
      const response = await axios.post('http://98.84.38.39:8080/usuarios', {
        nome: nome,
        telefone: telefone,
        login: {
          email: email,
          senha: senha
        }
      });

      // Sucesso: exibe uma mensagem e pode redirecionar para login
      setSuccess('Cadastro realizado com sucesso! Você será redirecionado para o login.');
      setTimeout(() => {
        window.location.href = '/login';
      }, 2000); // redireciona após 2 segundos
    } catch (error) {
      setError('Ocorreu um erro ao realizar o cadastro. Tente novamente.');
    }
  };

  return (
    <>
      <div id="wave">
        <img src={wave} alt="Vela" />
      </div>

      <div className="login-container">
        <div className="login-card reverse">
          <div className="login-image">
            <img src={Img} alt="Vela" />
          </div>
          <div className="login-form">
            <h2 className='titulo-form'>Cadastre-se</h2>
            <input 
              type="text" 
              placeholder="Nome" 
              value={nome} 
              onChange={(e) => setNome(e.target.value)} 
            />
            <input 
              type="text" 
              placeholder="Número de Telefone" 
              value={telefone} 
              onChange={(e) => setTelefone(e.target.value)} 
            />
            <input 
              type="email" 
              placeholder="E-mail" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
              type="password" 
              placeholder="Senha" 
              value={senha} 
              onChange={(e) => setSenha(e.target.value)} 
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <label htmlFor="">
              <p className='font-padrao mini-p'>
                Já tem cadastro? <a href="/login">Clique para se logar</a>
              </p>
            </label>
            <button onClick={handleCadastro}>Cadastrar</button>
          </div>
        </div>
        <div className="header">
          {/* <img src={LogoMini} alt="" /> */}
          <button className="signup-btn font-padrao">Login</button>
        </div>
      </div>
      <footer>Todos os direitos reservados</footer>
    </>
  );
}

export default Cadastro;