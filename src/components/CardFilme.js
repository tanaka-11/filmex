import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  Vibration,
  View,
} from "react-native";
import fotoAlternativa from "../../assets/images/foto-alternativa.jpg";
import { useNavigation } from "@react-navigation/native"; // Hook para navegação entre (componentes e telas)
import AsyncStorage from "@react-native-async-storage/async-storage"; // Lib de armazenagem de dados offline

export default function CardFilme({ filme }) {
  // Extraindo dados da api
  const { title, poster_path } = filme;

  // Recursos de navegação
  const navigation = useNavigation();

  // Função de aoSalvarFavorito com a lib AsyncStorage
  const aoSalvarFavorito = async () => {
    //
    try {
      // Verficação de favoritos armazenados no AsyncStorage atraves do getItem guardando-os no "filmeFavoritos"
      const filmesFavoritos = await AsyncStorage.getItem("@favoritosFilmex");

      // Condicional que converte a string de dados em objeto atraves do JSON.parse
      const listaDeFilmes = filmesFavoritos ? JSON.parse(filmesFavoritos) : [];

      // Verificação se o filme já esta salvo atraves da função some() avaliando se o id do filmeNaLista é igual o id vindo da API
      const jaTemFilme = listaDeFilmes.some((filmeNaLista) => {
        return filmeNaLista.id == filme.id;
      });

      // Aviso para o usuario caso o filme ja esteja na lista
      if (jaTemFilme) {
        Alert.alert("Ops!", "Filme já esta salvo em sua lista");
        Vibration.vibrate(300);
        return;
      }

      // Adicionando filme na lista de favoritos
      listaDeFilmes.push(filme);

      // Convertendo o array listaDeFilmes em string
      await AsyncStorage.setItem(
        "@favoritosFilmex",
        JSON.stringify(listaDeFilmes)
      );

      // Alert de operação bem sucedida
      Alert.alert(`${title}`, "Filme favoritado com sucesso!");
    } catch (error) {
      console.log("Erro: " + error);
      Alert.alert("Erro ao favoritar filme", "Tente novamente");
    }
  };

  return (
    <View style={estilos.card}>
      <Image
        style={estilos.imagem}
        resizeMode="stretch"
        source={
          poster_path
            ? { uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }
            : fotoAlternativa
        } // Condicional da foto de poster
      />

      <View style={estilos.corpo}>
        <Text style={estilos.titulo}>{title}</Text>

        <View style={estilos.botoes}>
          <Pressable
            style={estilos.botao}
            onPress={() => navigation.navigate("Detalhes", { filme })}
          >
            <Text style={estilos.textoBotao}>Leia Mais</Text>
          </Pressable>

          <Pressable style={estilos.botao} onPress={aoSalvarFavorito}>
            <Text style={estilos.textoBotao}>Salvar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  titulo: {
    color: "#000",
    textAlign: "center",
    fontSize: 16,
    backgroundColor: "#db0000",
    fontWeight: "bold",
    padding: 6,
  },

  textoBotao: {
    color: "#fff",
    fontSize: 12,
    textTransform: "uppercase",
  },

  card: {
    borderColor: "#db0000",
    borderWidth: 2,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 6,
  },

  imagem: {
    height: 200,
    width: 150,
  },

  corpo: {
    width: 150,
  },

  botoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },

  botao: {
    borderColor: "#db0000",
    borderWidth: 1,
    borderRadius: 4,
    padding: 6,
    margin: 5,
  },
});
