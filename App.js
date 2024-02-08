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

      <SafeAreaView>
        <View>
          <Text>FilmeX</Text>
        </View>

        <View>
          <Button title="Buscar Filmes" />
          <Button title="Favoritos" />
        </View>

        <View>
          <Button title="Privacidade" />
          <Button title="Sobre o App" />
        </View>
      </SafeAreaView>
    </>
  );
}

const estilos = StyleSheet.create({});
