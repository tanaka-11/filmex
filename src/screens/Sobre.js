import { StyleSheet, Text, View } from "react-native";
import SafeContainer from "../components/SafeContainer";

export default function Sobre() {
  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <Text style={estilos.subTitulo}>Sobre o app FILMEX</Text>

        <Text style={estilos.texto}>
          O <Text style={estilos.nomeApp}>FILMEX</Text> é um aplicativo com a
          finalidade de permitir a busca por informações sobre filmes existentes
          na base de dados pública disponibilizada pelo site The Movie Database
          (TMDb).
        </Text>

        <Text style={estilos.texto}>
          Ao localizar um filme, o usuário pode visualizar informações como
          título, data de lançamento, nota média de avaliação e uma breve
          descrição sobre o filme e, caso queira, salvar estas informações em
          uma lista no próprio aplicativo para visualização posterior.
        </Text>

        <Text style={estilos.texto}>
          O aplicativo poderá receber novos recursos conforme o feedback e
          demanda dos usuários.
        </Text>

        <Text style={estilos.nomeApp}>FILMEX &copy; 2024</Text>
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
  },

  nomeApp: {
    color: "#db0000",
    fontWeight: "bold",
  },
});
