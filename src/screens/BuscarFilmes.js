import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Pressable,
  Vibration,
} from "react-native";

import { useState } from "react";
import SafeContainer from "../components/SafeContainer";
import { Ionicons } from "@expo/vector-icons";

export default function BuscarFilmes({ navigation }) {
  // State para a busca
  const [filme, setFilme] = useState("");

  // Função que captura o texto digitado
  const filmeDigitado = (valorDigitado) => {
    setFilme(valorDigitado);
  };

  // Botão com Alert
  const aoPressionarProcurar = () => {
    if (!filme) {
      Vibration.vibrate(300);
      return Alert.alert(
        "Ops!",
        "Digite o nome de um filme antes de procurar."
      );
    }

    // Redirecionando para a tela de resultados com o filme que foi digitado atraves da props "navigation" e uso do state passado como um objeto onde o filme fica armazenado.
    navigation.navigate("Resultados", { filme });
  };

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <View style={estilos.background}>
          <Text style={estilos.texto}>
            O poderoso Chefão? Percy Jackson? Harry Potter?
          </Text>
          <Text style={estilos.texto}>
            Localize um filme que você viu ou gostaria de ver!
          </Text>
        </View>

        <View style={estilos.buscador}>
          {/* <Ionicons name="film" size={44} color="#db0000" /> */}
          <TextInput
            style={estilos.input}
            placeholder="Digite o filme"
            placeholderTextColor="white"
            maxLength={30}
            autoFocus
            returnKeyType="search"
            onChangeText={filmeDigitado}
            onSubmitEditing={aoPressionarProcurar}
          />

          <Pressable onPress={aoPressionarProcurar} style={estilos.botaoBuscar}>
            <Text style={estilos.textoBotao}>Procurar</Text>
          </Pressable>
        </View>

        <Text style={estilos.textoRodape}>FILMEX &copy; 2024</Text>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  background: {
    flex: 1,
  },

  input: {
    color: "#fff",
    fontWeight: "bold",
    borderColor: "#db0000",
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: 250,
    textAlign: "center",
  },

  buscador: {
    flex: 4,
    alignItems: "center",
  },

  texto: {
    color: "white",
  },

  textoBotao: {
    color: "white",
    textTransform: "uppercase",
    textAlign: "center",
    margin: 10,
  },

  botaoBuscar: {
    backgroundColor: "#db0000",
    width: 100,
    height: 40,
    borderRadius: 6,
  },

  textoRodape: {
    color: "#db0000",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
});
