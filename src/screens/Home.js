import { Image, Pressable, Text, View, StyleSheet } from "react-native";

import logo from "../../assets/images/logo.png";

import { Ionicons } from "@expo/vector-icons";
import SafeContainer from "../components/SafeContainer";

export default function Home() {
  return (
    <SafeContainer>
      <View style={estilos.viewLogo}>
        <Text style={estilos.titulo}>FilmeX</Text>
        {/* <Image source={logo} style={estilos.logo} /> */}
      </View>

      <View style={estilos.viewBotoes}>
        <Pressable style={estilos.botao}>
          <Text style={estilos.textoBotao}>
            <Ionicons name="search" size={14} color="white" /> Buscar Filmes
          </Text>
        </Pressable>

        <Pressable style={estilos.botao}>
          <Text style={estilos.textoBotao}>
            <Ionicons name="star" size={14} color="gold" /> Favoritos
          </Text>
        </Pressable>
      </View>

      <View style={estilos.viewRodape}>
        <Pressable style={estilos.botaoRodape}>
          <Text style={estilos.textoBotao}>
            <Ionicons name="lock-closed" size={14} color="white" /> Privacidade
          </Text>
        </Pressable>

        <Pressable style={estilos.botaoRodape}>
          <Text style={estilos.textoBotao}>
            <Ionicons name="information-circle" size={14} color="white" /> Sobre
          </Text>
        </Pressable>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  viewLogo: {
    flex: 3,
    width: "80%",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  logo: {
    width: 128,
    height: 128,
  },

  titulo: {
    fontFamily: "Oswald-Medium",
    fontSize: 90,
    color: "#db0000",
    textTransform: "uppercase",
  },

  viewBotoes: {
    flex: 2,
    flexDirection: "row",
    alignItems: "flex-start",
    width: "80%",
    justifyContent: "space-evenly",
  },

  botao: {
    backgroundColor: "#db0000",
    padding: 16,
    borderRadius: 6,
    margin: 20,
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "Outfit",
  },

  viewRodape: {
    width: "80%",
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#db0000",
  },

  botaoRodape: {
    padding: 14,
  },
});
