import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SafeContainer from "../components/SafeContainer";
import fotoAlternativa from "../../assets/images/foto-alternativa.jpg";

export default function Detalhes({ route }) {
  // Extraindo dados com desestruturação
  const { filme } = route.params;
  const {
    title,
    release_date,
    overview,
    vote_average: avaliacao,
    backdrop_path,
  } = filme;

  // Formatando data
  const formataData = () => {
    return new Date(release_date).toLocaleDateString("pt-BR");
  };

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <ImageBackground
          style={estilos.imagemFundo}
          source={
            backdrop_path
              ? { uri: `https://image.tmdb.org/t/p/original/${backdrop_path}` }
              : fotoAlternativa
          }
        >
          <Text style={estilos.titulo}>{title}</Text>
        </ImageBackground>

        <View style={estilos.conteudo}>
          <ScrollView>
            <Text style={estilos.textoDestaque}>
              Avaliação:
              <Text style={estilos.texto}>{avaliacao.toFixed(1)}</Text>
            </Text>
            <Text style={[estilos.textoDestaque, estilos.lancamento]}>
              Lançamento:
              <Text style={estilos.texto}>{formataData(release_date)}</Text>
            </Text>
            <Text style={estilos.textoDestaque}>
              Sinopse: <Text style={estilos.texto}>{overview}</Text>
            </Text>
          </ScrollView>
        </View>

        <View style={estilos.rodape}>
          <Text style={estilos.textoRodape}>FILMEX &copy; 2024</Text>
        </View>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  titulo: {
    color: "#db0000",
    fontSize: 16,
    padding: 14,
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "rgba(0,0,0,0.75)",
    fontFamily: "Oswald-Medium",
  },

  textoRodape: {
    color: "#db0000",
    textAlign: "center",
    fontWeight: "bold",
  },

  textoDestaque: {
    color: "#db0000",
    fontFamily: "Outfit",
    paddingVertical: 6,
  },

  texto: {
    color: "#fff",
    fontFamily: "Outfit",
    paddingVertical: 6,
  },

  lancamento: {},

  subContainer: {
    flex: 1,
    width: "100%",
  },

  imagemFundo: {
    height: 250,
    justifyContent: "center",
  },

  conteudo: {
    padding: 14,
    flex: 1,
  },

  rodape: {},
});
