import {
  Image,
  Pressable,
  Text,
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";

import logo from "../../assets/images/logo.png";
import background from "../../assets/images/Tela-Home.jpeg";

import { Ionicons } from "@expo/vector-icons";
import SafeContainer from "../components/SafeContainer";

// Passado props da biblioteca de navegação dentro do componente
export default function Home({ navigation }) {
  return (
    <SafeContainer>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={estilos.image}
      >
        <View style={estilos.viewLogo}>
          {/* <Text style={estilos.titulo}>FilmeX</Text> */}
          {/* <Image source={logo} style={estilos.logo} /> */}
        </View>

        <View style={estilos.viewBotoes}>
          <Pressable
            onPress={() => navigation.navigate("BuscarFilmes")}
            style={estilos.botao}
          >
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
          {/* Passando uma arrow function com a props.navigate e o nome da tela */}
          <Pressable
            onPress={() => navigation.navigate("Privacidade")}
            style={estilos.botaoRodape}
          >
            <Text style={estilos.textoBotao}>
              <Ionicons name="lock-closed" size={10} color="red" /> Privacidade
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("Sobre")}
            style={estilos.botaoRodape}
          >
            <Text style={estilos.textoBotao}>
              <Ionicons name="information-circle" size={10} color="red" /> Sobre
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
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
    color: "#db0000",
    textTransform: "uppercase",
  },

  viewBotoes: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    justifyContent: "space-evenly",
  },

  botao: {
    backgroundColor: "#db0000",
    padding: 16,
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
    flex: 0.4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#000000",
  },

  botaoRodape: {
    padding: 20,
  },
});
