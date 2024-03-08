import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Separador() {
  return (
    <View style={estilos.viewSeparador}>
      <AntDesign name="zhihu" size={24} color="white" />
      <AntDesign name="zhihu" size={24} color="white" />
      <AntDesign name="zhihu" size={24} color="white" />
    </View>
  );
}

const estilos = StyleSheet.create({
  viewSeparador: {
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
