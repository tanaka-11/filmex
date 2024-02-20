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
            <Ionicons name="search" size={10} color="white" /> Buscar Filmes
          </Text>
        </Pressable>

        <Pressable style={estilos.botao}>
          <Text style={estilos.textoBotao}>
            <Ionicons name="star" size={10} color="gold" /> Favoritos
          </Text>
        </Pressable>
      </View>

      <View style={estilos.viewRodape}>
        <Pressable style={estilos.botaoRodape}>
          <Text style={estilos.textoBotao}>
            <Ionicons name="lock-closed" size={10} color="white" /> Privacidade
          </Text>
        </Pressable>

        <Pressable style={estilos.botaoRodape}>
          <Text style={estilos.textoBotao}>
            <Ionicons name="information-circle" size={10} color="white" /> Sobre
          </Text>
        </Pressable>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  viewLogo: {
    flex: 2.5,
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
    color: "#e42233",
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
    backgroundColor: "#e42233",
    padding: 14,
    borderRadius: 6,
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "Outfit",
    textAlign: "center",
  },

  viewRodape: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#e42233",
  },

  botaoRodape: {
    padding: 20,
  },
});
