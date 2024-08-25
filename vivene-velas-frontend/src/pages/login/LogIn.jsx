import React from 'react';

const Login = () => {
    return (
        <>
            <div class="content">
                <div class="image-side"></div>
                <div class="form-side">
                    <h2>Cadastre-se</h2>
                    <input type="text" class="form-control" placeholder="Nome" />
                    <input type="email" class="form-control" placeholder="E-mail" />
                    <input type="password" class="form-control" placeholder="Senha" />
                    <input type="tel" class="form-control" placeholder="Número de telefone" />
                    <button class="btn btn-primary w-100">Cadastrar</button>
                    <div class="login-link">
                        <p>Já se cadastrou? <a href="#">Clique para realizar o login</a></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
