// Utilizando biblioteca axios para fetch
import axios from "axios";

// Chave da API com variavel de ambiente (localizada no arquivo .env) utilizando a sintaxe abaixo
const apiKey = process.env.EXPO_PUBLIC_API_KEY;

// Configuração de fetch da API com o axios
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export { api, apiKey };
