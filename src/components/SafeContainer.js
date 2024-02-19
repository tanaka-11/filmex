// Criado com o comando "rnfs".
import { SafeAreaView, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

// Configuração para manter a tela splash visível
SplashScreen.preventAutoHideAsync();

// Passado a props "children" para componente funcionar como um container
export default function SafeContainer({ children }) {
  // Configuração do hook useFonts
  const [fontsLoaded, fontError] = useFonts({
    "Oswald-Medium": require("../../assets/fonts/Oswald-Medium.ttf"), // Nome da font com o caminho
    Outfit: require("../../assets/fonts/Outfit-Regular.ttf"),
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

  // Passado evento onLayout com a função callback das fontes
  return (
    <SafeAreaView style={estilos.container} onLayout={aoAtualizarLayout}>
      {children}
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
