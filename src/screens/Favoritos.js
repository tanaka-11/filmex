import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import { useEffect, useState } from "react";
import SafeContainer from "../components/SafeContainer";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Favoritos() {
  // State para registrar os dados carregados no storage
  const [listaFavoritos, setlistaFavoritos] = useState([]);

  // useEffect é acionado assim que entrar na tela favoritos(uma unica vez por causa da lista de dependencias vazia)
  useEffect(() => {
    const carregarFavoritos = async () => {
      try {
        // Recuperando os dados no asyncstorage
        const dados = await AsyncStorage.getItem("@favoritosFilmex");

        // Convertendo dados em objeto e os guardando no state
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

  console.log(listaFavoritos);
  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <View style={estilos.viewFavoritos}>
          <Text style={estilos.texto}>Favoritos</Text>
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

  viewFavoritos: {},

  texto: {
    color: "#FFF",
    padding: 10,
  },

  textoDestaque: {},

  textoRodape: {
    color: "#db0000",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
});
