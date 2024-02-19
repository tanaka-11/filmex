import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import logo from "./assets/images/logo.png";

import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

// Configuração para manter a tela splash visível
SplashScreen.preventAutoHideAsync();

export default function App() {
  // Configuração do hook useFonts
  const [fontsLoaded, fontError] = useFonts({
    "Oswald-Medium": require("./assets/fonts/Oswald-Medium.ttf"), // Nome da font com o caminho
    Outfit: require("./assets/fonts/Outfit-Regular.ttf"),
  });

  // Função hook useCallback(armazenada na memoria apenas 1 vez) de validação e carregamento da font
  const aoAtualizarLayout = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync(); // Configuração para esconder tela splash
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="default" />
      {/* Passado evento onLayout com a função callback das fontes */}
      <SafeAreaView style={estilos.container} onLayout={aoAtualizarLayout}>
        <View style={estilos.viewLogo}>
          <Image source={logo} style={estilos.logo} />
          <Text style={estilos.titulo}>Filme-X</Text>
        </View>

        <View style={estilos.viewBotoes}>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="search" size={14} color="white" />
              Buscar Filmes
            </Text>
          </Pressable>

          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="star" size={14} color="gold" />
              Favoritos
            </Text>
          </Pressable>
        </View>

        <View style={estilos.viewRodape}>
          <Button title="Privacidade" />
          <Button title="Sobre o App" />
        </View>
      </SafeAreaView>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#C7B7A3",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

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
    fontSize: 30,
    color: "#561C24",
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
    backgroundColor: "#6D2932",
    padding: 12,
    borderRadius: 10,
    borderWidth: 2,
    margin: 10,
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "Outfit",
  },

  viewRodape: {
    width: "80%",
    backgroundColor: "red",
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
