import api from "../../api";
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { injectStyle } from "react-toastify/dist/inject-style";
import { Icon } from '@iconify/react';
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import imgSideLogin from "../../utils/imgs/woman-reading-login.svg";
import styles from "./Login.module.css"
import * as yup from 'yup'; 

const loginSchema = yup.object().shape({
  email: yup.string().email("Email deve ser válido").required("Email é obrigatório"),
  password: yup.string()
    .min(8, "Senha deve ter pelo menos 8 caracteres")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, 
      "Senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um dígito e um caractere especial")
    .required("Senha é obrigatória")
});



function Login() {

  injectStyle();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      await loginSchema.validate({ email, password });

      setIsLoading(true);

      api.post('/login', {
        email: email,
        senha: password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (response.status === 200 && response.data?.token) {
            sessionStorage.setItem('id', response.data.id);
            sessionStorage.setItem('email', response.data.email);

            toast.success('Login realizado com sucesso!');
            navigate('/dashboard');
          } else {
            throw new Error('Ops! Ocorreu um erro interno.');
          }
        })
        .catch(error => {
          toast.error('Erro ao fazer login: ' + error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });

    } catch (validationError) {
      // Handle validation errors
      toast.error(validationError.errors[0]);
    }
  };

  return (
    <>
      <NavBar />

      <div className={styles["login-container"]}>
          <div className={styles["login-img"]}>
              <img src={imgSideLogin} alt="Woman reading" />
          </div>
          <div className={styles["login-form"]}>
              <h2>Entrar</h2>
              <div className={styles["container-form"]}>
                <form onSubmit={handleSubmit}>
                  <div className={styles["login-input"]}>
                    <label>Email</label>
                    <div className={styles["input-text-icon"]}>
                      <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                      />
                      <Icon
                        aria-label="Arrow Icon from material icons"
                        icon="pepicons-pencil:letter" 
                        style={{
                            fontSize: "1.3rem",
                            color: "#94CAD2", 
                            display: "flex",
                            alignSelf: "center",
                            paddingRight: ".5rem"
                        }} 
                      />
                    </div>
                  </div>
                      
                  <div className={styles["login-input"]}>
                    <label>Senha</label>
                    <div className={styles["input-text-icon"]}>
                      <input
                          type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Senha"
                      />
                      <Icon
                        aria-label="Arrow Icon from material icons"
                        icon="octicon:lock-24" 
                        style={{
                            fontSize: "1.3rem",
                            color: "#94CAD2", 
                            display: "flex",
                            alignSelf: "center",
                            paddingRight: ".5rem",
                        }} 
                      />
                    </div>
                  </div>
                      
                  <div className={styles["login-checkbox"]}>
                    <label>
                      <input type="checkbox" /> Lembrar de mim
                    </label>
                  </div>
                      
                  <div className={styles["sign-up-link"]}>
                    <p> Não tem um cadastro? </p>
                    <a href="/signup">Clique aqui</a>
                  </div>
                      
                  <div className={styles["button"]}>
                    <button type="submit">Login</button>
                  </div>
                </form>
              </div>
          </div>
      </div>

      <Footer isSimple={false}/>
    </>
  )
}

export default Login
