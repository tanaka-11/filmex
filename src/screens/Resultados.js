import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SafeContainer from "../components/SafeContainer";
import { api, apiKey } from "../services/api-moviedb";
useEffect;

// Utilizando a props nativa "route" da biblioteca de navegação. Utilizada para acessar valores passados por meio de navegação entre telas.
export default function Resultados({ route }) {
  // State de gerenciamento da busca na API
  const [resultados, setResultados] = useState([]);

  // Capturando o parametro filme vindo da função "aoPressionarProcurar"
  const { filme } = route.params;

  // useEffect com a lista de dependencias vazia para funcionamento unico.
  useEffect(() => {
    async function buscarFilmes() {
      try {
        const resposta = await api.get(`/search/movie`, {
          params: {
            include_adult: false,
            language: "pt-BR",
            query: filme,
            api_key: apiKey,
          },
        }); // Endpoint com Parametros
        console.log(resposta.data.results);
      } catch (error) {
        console.error("ERRO: " + error.message);
      }
    }
    buscarFilmes();
  }, []);

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <Text style={estilos.texto}>
          Você buscou por: <Text style={estilos.nomeFilme}> {filme}</Text>
        </Text>

        <Text style={estilos.textoRodape}>FILMEX &copy; 2024</Text>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  subContainer: {
    flex: 1,
    padding: 16,
  },

  subTitulo: {
    color: "#db0000",
    fontFamily: "Outfit",
    fontWeight: "bold",
    marginVertical: 10,
    fontSize: 18,
  },

  texto: {
    color: "#FFF",
    padding: 10,
  },

  nomeFilme: {
    color: "#db0000",
    fontWeight: "bold",
    textTransform: "capitalize",
  },

  textoRodape: {
    color: "#db0000",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
});
