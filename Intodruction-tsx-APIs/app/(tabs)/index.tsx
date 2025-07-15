import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PokemonList from "@/components/PokemonList";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Lista de Pokemons</Text>
      <PokemonList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#ffe'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign:'center',
    color: '#cc0000'
  },

})