import React, { useState } from 'react';
import './Login.module.css';
import axios from 'axios';
import Img from '../../img/login.png';
import wave from '../../img/wave.svg';
import LogoMini from '../../img/logoMini.png';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/logins/logar', {
        email: email,
        senha: senha
      });

      localStorage.setItem('idLogin', JSON.stringify(response.data.id));
      localStorage.setItem('emailLogin', JSON.stringify(response.data.email));
      getIdUser()
      window.location.href = '/dashboard';
    } catch (error) {
      setError('Email ou senha inválidos. Tente novamente.');
    }
  };
  
  const getIdUser = async () => {
    try {
      var idLogin = localStorage.getItem('idLogin')
      const response = await axios.get(`http://localhost:8080/usuarios/fklogin/${idLogin}?loginId=${idLogin}`);
      localStorage.setItem('idUser', JSON.stringify(response.data.id));
      localStorage.setItem('nomeUser', JSON.stringify(response.data.nome));
      window.location.href = '/dashboard';
    } catch (error) {
      console.log("=========================================")
      console.log("DEU ERRO NA HORA DE PEGAR O ID DO USUARIO")
      console.log("=========================================")
    }
  }

  return (
    <>
      <div id="wave">
        <img src={wave} alt="Vela" />
      </div>

      <div className="login-container">
        <div className="login-card">
          <div className="login-image">
            <img src={Img} alt="Vela" />
          </div>
          <div className="login-form">
            <h2 className='font-padrao'>Login</h2>
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
            <label htmlFor="">
              <p className='font-padrao mini-p'>
                Não tem cadastro? <a href="/cadastro">Clique para se cadastrar</a>
              </p>
            </label>
            <button onClick={handleLogin}>Logar</button>
          </div>
        </div>
        <div className="header">
          {/* <img src={LogoMini} alt="" /> */}
          <button className="signup-btn font-padrao">Cadastro</button>
        </div>
      </div>
      <footer>Todos os direitos reservados</footer>
    </>
  );
}

export default Login;
