import React from 'react';

const Login = () => {
    return (
        <>
            <header />
            <div className="content">
                <div className="image-side">

                </div>
                <div className="form-side">
                    <h2>Cadastre-se</h2>
                    <div className='div-inputs'>
                        <input type="text" className="form-control" placeholder="Nome" />
                        <input type="email" className="form-control" placeholder="E-mail" />
                        <input type="tel" className="form-control" placeholder="Número de telefone" />
                        <input type="password" className="form-control" placeholder="Senha" />
                        <button className="btn btn-primary w-100">Cadastrar</button>
                        <div className="login-link">
                            <p>Já se cadastrou? <a href="#">Clique para realizar o login</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
