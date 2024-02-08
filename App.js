import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  return (
    <>
      <StatusBar barStyle="default" />

      <SafeAreaView style={estilos.container}>
        <View style={estilos.viewLogo}>
          <Text>FilmeX</Text>
        </View>

        <View style={estilos.viewBotoes}>
          <Button title="Buscar Filmes" />
          <Button title="Favoritos" />
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
  container: {},

  viewLogo: {},

  viewBotoes: {},

  viewRodape: {},
});
