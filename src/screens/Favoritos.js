import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import SafeContainer from "../components/SafeContainer";

export default function Favoritos() {
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
