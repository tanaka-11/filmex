import { Image, StyleSheet, Text, View } from "react-native";
import fotoAlternativa from "../../assets/images/foto-alternativa.jpg";

export default function CardFilme() {
  return (
    <View style={estilos.card}>
      <Image style={estilos.imagem} source={fotoAlternativa} />
    </View>
  );
}

const estilos = StyleSheet.create({});
