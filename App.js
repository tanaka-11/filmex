import { Button, Pressable, StatusBar, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; // Biblioteca de navegação
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Método de navegação

// Telas
import Home from "./src/screens/Home";
import Sobre from "./src/screens/Sobre";
import Privacidade from "./src/screens/Privacidade";
import BuscarFilmes from "./src/screens/BuscarFilmes";
import Resultados from "./src/screens/Resultados";
import Detalhes from "./src/screens/Detalhes";
import Favoritos from "./src/screens/Favoritos";

// Programação de inicialização do método de navegação
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />

      {/*  Programação da biblioteca de navegação utilizando metodo Stack*/}
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          // Estilizando o cabecalho criado
          screenOptions={{
            headerStyle: { backgroundColor: "#000" }, // Parametros
            headerTintColor: "#db0000",
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home} // Nome da tela
            options={{ headerShown: false }} // Escondendo o cabeçalho criado automaticamente pelo método Stack
          />

          <Stack.Screen name="Sobre" component={Sobre} />

          <Stack.Screen
            name="Privacidade"
            component={Privacidade}
            options={{ title: "Política de Privacidade" }} // Mudando o nome no cabeçalho criado
          />

          <Stack.Screen
            name="BuscarFilmes"
            component={BuscarFilmes}
            options={{ title: "Qual filme deseja pesquisar?" }}
          />

          <Stack.Screen name="Resultados" component={Resultados} />

          <Stack.Screen
            name="Detalhes"
            component={Detalhes}
            options={({ navigation }) => {
              return {
                headerRight: () => (
                  <Pressable
                    style={estilos.botaoHome}
                    onPress={() => {
                      navigation.navigate("Home");
                    }}
                  >
                    <Text style={estilos.textoBotao}>Home</Text>
                  </Pressable>
                ),
              };
            }}
          />

          <Stack.Screen name="Favoritos" component={Favoritos} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const estilos = StyleSheet.create({
  botaoHome: {
    borderColor: "#db0000",
    borderWidth: 2,
    padding: 6,
    borderRadius: 6,
  },
  textoBotao: {
    color: "#db0000",
    fontWeight: "bold",
  },
});
