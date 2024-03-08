import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import fotoAlternativa from "../../assets/images/foto-alternativa.jpg";

export default function CardFilme({ filme }) {
  // Extraindo dados
  const { title, poster_path } = filme;

  return (
    <View style={estilos.card}>
      <Image
        resizeMode="contain"
        style={estilos.imagem}
        source={{ uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }}
      />

      <View style={estilos.corpo}>
        <Text style={estilos.titulo}>{title}</Text>

        <View style={estilos.botoes}>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>Leia Mais</Text>
          </Pressable>

          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>Salvar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  titulo: {
    color: "#000",
    textAlign: "center",
    fontSize: 16,
    backgroundColor: "#db0000",
    fontWeight: "bold",
  },

  textoBotao: {
    color: "#fff",
    fontSize: 12,
    textTransform: "uppercase",
  },

  card: {
    borderColor: "#db0000",
    borderWidth: 2,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 6,
  },

  imagem: {
    height: 150,
    width: 150,
  },

  corpo: {
    width: 150,
  },

  botoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },

  botao: {
    borderColor: "#db0000",
    borderWidth: 1,
    borderRadius: 4,
    padding: 6,
    margin: 5,
  },
});
