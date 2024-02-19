import {
  Image,
  StyleSheet,
  Text,
  View,
  Linking,
  Pressable,
  ScrollView,
} from "react-native";
import SafeContainer from "../components/SafeContainer";
import logoTmdb from "../../assets/images/logo-tmdb.png";

export default function Sobre() {
  const aoClicarLink = () => {
    Linking.openURL("https://www.themoviedb.org/?language=pt-BR");
  };

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        {/* View que permite a rolagem de página */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={estilos.subTitulo}>Sobre o app FILMEX</Text>

          <Text style={estilos.texto}>
            O <Text style={estilos.nomeApp}>FILMEX</Text> é um aplicativo com a
            finalidade de permitir a busca por informações sobre filmes
            existentes na base de dados pública disponibilizada pelo site The
            Movie Database (TMDb).
          </Text>

          <View style={estilos.viewLogoTmdb}>
            {/* Utilizado um Pressable com a função "Linking"  */}
            <Pressable onPress={aoClicarLink}>
              <Image
                resizeMode="contain"
                source={logoTmdb}
                style={estilos.logoTmdb}
              />
            </Pressable>
          </View>

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

          <Text style={estilos.textoRodape}>FILMEX &copy; 2024</Text>
        </ScrollView>
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

  textoRodape: {
    color: "#db0000",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },

  nomeApp: {
    color: "#db0000",
    fontWeight: "bold",
  },

  logoTmdb: {
    width: 150,
    height: 130,
    marginBottom: 10,
  },

  viewLogoTmdb: {
    alignItems: "center",
  },
});
