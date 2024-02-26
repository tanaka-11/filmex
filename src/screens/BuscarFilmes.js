import { Button, StyleSheet, Text, View, TextInput, Alert } from "react-native";
import React from "react";
import { useState } from "react";
import SafeContainer from "../components/SafeContainer";

export default function BuscarFilmes() {
  // State para a busca
  const [filmeDigitado, setFilmeDigitado] = useState("");

  // Botão com Alert
  const aoPressionarProcurar = () => {
    Alert.alert(filmeDigitado);
  };

  return (
    <SafeContainer>
      <View>
        <Text>O poderoso Chefão? Percy Jackson? Harry Potter?</Text>
        <Text>Localize um filme que você viu ou gostaria de ver!</Text>
        <TextInput
          style={estilos.input}
          placeholder="Digite o filme"
          onChangeText={(text) => setFilmeDigitado(text)}
        />
      </View>

      <View>
        <Button title="Procurar" onPress={aoPressionarProcurar} />
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  input: {
    color: "white",
  },
});
