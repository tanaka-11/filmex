// Criado com o comando "rnfs".
import { SafeAreaView, StyleSheet } from "react-native";

// Passado a props "children" para componente funcionar como um container
export default function SafeContainer({ children }) {
  return <SafeAreaView style={estilos.container}>{children}</SafeAreaView>;
}

const estilos = StyleSheet.create({
  container: {},
});
