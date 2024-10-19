// import React, { useState } from "react"
// import { Container, Form, SubContainerSign  } from "./styles"
// import { validarEmail, validarSenha } from "../../Utils/validadores"
// import Logo from "../../imagens/logo_igreja.png"
// import UserService from "../../services/UserService"
// import { NavLink, useNavigate } from 'react-router-dom'
// import Botao from "../../components/botao/index"
// import { Input } from "@mui/material"

// const userService = new UserService()

// const Login = () => {
//     const [loading, setLoading] = useState()
//     const [form, setFrom] = useState([])
//     const navigate = useNavigate()

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             setLoading(true)
//             console.log('Formulário enviado:', form); // Adicionando este log
//             const response = await userService.login(form)            
//             console.log('response do Login', response)
//             if (response === true) {
//                 // alert('usuário Logado com Sucesso')
//                 navigate('/dashbord')
//             }
//             setLoading(false)
//         }
//         catch (err) {
//             alert('Algo deu errado com o Login' + err)
//         }
//     }

//     const handleChange = (event) => {
//         const{name, value} = event.target;
//        setFrom({ ...form, [name]: value })
//     }
//     const validadorInput = () => {
//         return validarEmail(form.email) && validarSenha(form.password)
//     }

//     return (
//         <Container>            
//             <Form>
//                 <img src={Logo} alt="Logotipo da minha empresa" style={{ width: '195px', height: '250px' }} />
//                 <Input
//                     name='email'
//                     placeholder='Digite o seu e-mail'
//                     onChange={handleChange}
//                     type='email'
//                 />
//                 <Input
//                     name='password'
//                     placeholder='Digite sua senha'
//                     onChange={handleChange}
//                     type='password'
//                 />
//                 <Botao
//                     type='submit'
//                     text='Entrar'
//                     onClick={handleSubmit}
//                     disabled={loading === true || !validadorInput()}
//                 />
//                 <SubContainerSign>
//                     <p>Não possui conta?</p>
//                     <NavLink to="cadastrar">Cadastrar</NavLink>
//                 </SubContainerSign>
//             </Form>
//         </Container>
//     )
// }

// export default Login;

import React, { useState } from "react";
import { Container, Form, SubContainerSign } from "./styles";
import { validarEmail, validarSenha } from "../../Utils/validadores";
import Logo from "../../imagens/logo_igreja.png";
import UserService from "../../services/UserService";
import { NavLink, useNavigate } from 'react-router-dom';
import Botao from "../../components/botao/index";
import Input from "../../components/input/index";
// import { ColorModeContext } from "../../theme"; // Importar apenas o contexto

const userService = new UserService();

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({});
    const navigate = useNavigate();
    // const colorMode = useContext(ColorModeContext); // Usar o contexto

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true);
            console.log('Formulário enviado:', form);
            const response = await userService.login(form);
            console.log('response do Login', response);
            if (response === true) {
                navigate('/dashbord');
            }
            setLoading(false);
        } catch (err) {
            alert('Algo deu errado com o Login: ' + err);
            setLoading(false); // Garantir que o loading seja desativado
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const validadorInput = () => {
        return validarEmail(form.email) && validarSenha(form.password);
    };

    return (
        <Container>
            {/* <Button onClick={colorMode.toggleColorMode}>Trocar Tema</Button> Botão para trocar tema */}
            <Form onSubmit={handleSubmit}>
                <img src={Logo} tabIndex={-1} alt="Logotipo" style={{ width: '195px', height: '250px' }} />
                <Input
                    name='email'
                    placeholder='Digite o seu e-mail'
                    onChange={handleChange}
                    type='email'
                    fullWidth
                    margin="normal"
                />
                <Input
                    name='password'
                    placeholder='Digite sua senha'
                    onChange={handleChange}
                    type='password'
                    fullWidth
                    margin="normal"
                />
                <Botao
                    type='submit'
                    text='Entrar'
                    disabled={loading || !validadorInput()}
                />
                <SubContainerSign>
                    <p>Não possui conta?</p>
                    <NavLink to="cadastrar">Cadastrar</NavLink>
                </SubContainerSign>
            </Form>
        </Container>
    );
};

export default Login;

