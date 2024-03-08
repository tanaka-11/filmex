import { StyleSheet, Text, View } from "react-native";
import SafeContainer from "./SafeContainer";
import { MaterialIcons } from "@expo/vector-icons";

export default function ListaVazia() {
  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <Text style={estilos.texto}>Filme Não Encontrado !</Text>
        <MaterialIcons name="report-gmailerrorred" size={160} color="#db0000" />
      </View>

      <View style={estilos.rodape}>
        <Text style={estilos.textoRodape}>FILMEX &copy; 2024</Text>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  texto: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 22,
  },

  textoRodape: {
    color: "#db0000",
    fontWeight: "bold",
    textAlign: "center",
  },

  rodape: {
    justifyContent: "flex-end",
    marginTop: 160,
  },

  subContainer: {
    alignItems: "center",
    margin: 20,
    borderColor: "#db0000",
    borderWidth: 10,
    padding: 10,
    flex: 1,
    width: 400,
  },
});
