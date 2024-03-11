import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function Loading() {
  return (
    <View style={estilos.viewLoading}>
      <ActivityIndicator size="large" color={"#fff"} />
    </View>
  );
}

const estilos = StyleSheet.create({
  viewLoading: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
