import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Alert,
  Vibration,
} from "react-native";
import { useEffect, useState } from "react";
import SafeContainer from "../components/SafeContainer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

export default function Favoritos({ navigation }) {
  // State para registrar os dados carregados no storage
  const [listaFavoritos, setlistaFavoritos] = useState([]);

  // useEffect é acionado assim que entrar na tela favoritos(uma unica vez por causa da lista de dependencias vazia)
  useEffect(() => {
    const carregarFavoritos = async () => {
      try {
        // Recuperando os dados em formato string do asyncstorage atraves do "getItem"
        const dados = await AsyncStorage.getItem("@favoritosFilmex");

        // Convertendo dados em objeto com JSON.parse e os guardando no state
        if (dados) {
          setlistaFavoritos(JSON.parse(dados));
        }
      } catch (error) {
        console.error("Erro ao carregar os dados: " + error);
        Alert.alert("Erro", "Erro ao carregar dados.");
      }
    };
    carregarFavoritos();
  }, []);

  // Função assincrona de excluir todos os favoritos
  const excluirTodosFavoritos = async () => {
    Alert.alert(
      "Excluir TODOS?",
      "Quer mesmo excluir TODOS filmes favoritados?",
      [
        {
          text: "Excluir",
          style: "destructive", // propriedade style somente IOS
          onPress: async () => {
            await AsyncStorage.removeItem("@favoritosFilmex");
            setlistaFavoritos([]);
            Vibration.vibrate();
          }, // removendo itens e atualizando o state
        },
        {
          text: "Cancelar",
          style: "cancel",
        },
      ]
    ); // Passado 3º parametro como um array com um objeto para texto do alert
  };

  // Função para excluir UM favorito
  const excluirUmFavorito = async () => {};

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <View style={estilos.viewFavoritos}>
          <Text style={estilos.texto}>
            <Text style={estilos.textoDestaque}>Quantidade: </Text>
            {listaFavoritos.length}
          </Text>

          {listaFavoritos.length ? (
            <Pressable
              onPress={excluirTodosFavoritos}
              style={estilos.botaoExcluirFavorito}
            >
              <Text style={estilos.textoBotao}>
                <Ionicons name="trash" size={10} /> Excluir Favoritos
              </Text>
            </Pressable>
          ) : null}
        </View>

        <ScrollView>
          {listaFavoritos.map((filme) => {
            return (
              <View key={filme.id} style={estilos.item}>
                <Pressable
                  onPress={() => {
                    navigation.navigate("Detalhes", { filme });
                  }}
                  style={estilos.botaoFilme}
                >
                  <Text style={estilos.titulo}>{filme.title}</Text>
                </Pressable>

                <Pressable
                  onPress={excluirUmFavorito}
                  style={estilos.botaoExcluir}
                >
                  <Text style={estilos.textoDestaque}>
                    <Ionicons name="trash" size={20} />
                  </Text>
                </Pressable>
              </View>
            );
          })}
        </ScrollView>

        <View style={estilos.rodape}>
          <Text style={estilos.textoRodape}>FILMEX &copy; 2024</Text>
        </View>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  subContainer: {
    flex: 1,
    padding: 16,
    width: "100%",
  },

  viewFavoritos: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    marginBottom: 20,
    borderRadius: 3,
    borderColor: "#db0000",
    borderWidth: 0.85,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    margin: 10,
    backgroundColor: "#242424",
    borderRadius: 6,
  },

  titulo: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  texto: {
    color: "#FFF",
    padding: 10,
    fontSize: 16,
  },

  textoDestaque: {
    color: "#db0000",
  },

  textoRodape: {
    color: "#db0000",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },

  textoBotao: {
    color: "#FFF",
  },

  botaoExcluirFavorito: {
    backgroundColor: "#db0000",
    padding: 10,
    borderRadius: 6,
  },
});
