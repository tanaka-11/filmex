import { StatusBar } from "react-native"; // Barra de Status do celular
import { NavigationContainer } from "@react-navigation/native"; // Biblioteca de navegação
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Método de navegação

// Telas
import Home from "./src/screens/Home";
import Sobre from "./src/screens/Sobre";
import Privacidade from "./src/screens/Privacidade";

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
          // Estilizando o cabecalho criado de voltar
          screenOptions={{
            headerStyle: { backgroundColor: "#000" }, // Parametro
            headerTintColor: "#db0000",
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home} // Nome da tela
            options={{ headerShown: false }} // Escondendo o cabeçalho criado automaticamente pelo método Stack
          />

          {/* Restante das Telas */}
          <Stack.Screen name="Sobre" component={Sobre} />

          <Stack.Screen
            name="Privacidade"
            component={Privacidade}
            options={{ title: "Politica de Privacidade" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
