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
          <Text style={estilos.viewTextoLogo}>FilmeX</Text>
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
  container: {
    backgroundColor: "yellow",
    flex: 1,
  },

  viewLogo: {
    backgroundColor: "green",
    textAlign: "center",
    flex: 5,
    marginHorizontal: 30,
    justifyContent: "flex-end",
  },

  viewTextoLogo: {
    textAlign: "center",
  },

  viewBotoes: {
    flex: 3,
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "orange",
    marginHorizontal: 30,
  },

  viewRodape: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 30,
    backgroundColor: "red",
  },
});
