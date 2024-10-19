import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

const url = 'http://localhost:8080'

export default class UserServices {
  constructor () {
    this.axios = axios.create({
      baseURL: url
    })
  }

  async login (dados) {
    try {
      const response = await this.axios.post('auth/login', dados);
      console.log("Resposta do login:", response);

      const data = response.data;
      if (data && data.token) {
          localStorage.setItem("token", data.token);
          return true; // Indica que o login foi bem-sucedido
      } else {
          return false; // Indica que houve um erro no login
      }
  } catch (error) {
      console.error("Erro ao fazer login:", error);
      return false; // Indica que houve um erro no login
  }
  }

  async cadastrar (dados) {
    return this.axios.post('auth/register', dados)
  }

  usuarioAutenticado() {
    const token = localStorage.getItem("token");

    if (token) {
        // Decodifica o token para obter a data de expiração
        const decodedToken = jwtDecode(token);
        // Obtém a data de expiração do token (em segundos)
        const tokenExpiration = decodedToken.exp;
        // Obtém o timestamp atual (em segundos)
        const currentTime = Math.floor(Date.now() / 1000);
        // Verifica se o token ainda não expirou
        return tokenExpiration > currentTime;
    } else {
        return false; // Se não houver token no localStorage, o usuário não está autenticado
    }
}


  /*usuarioAutenticado () {
    const token = localStorage.getItem("token");
    console.log("Valor do token:", token); // Adicione este log
    return token !== null && token !== "";
  }*/

  //Desafio ---> implemente um botão que chama essa função dentro da página Home
  async logout () {
    localStorage.removeItem("token")
    //localStorage.removeItem("nome")
    localStorage.removeItem("email")
  }
}