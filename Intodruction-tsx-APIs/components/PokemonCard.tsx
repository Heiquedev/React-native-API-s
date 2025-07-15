import React from "react";
// Importando os componentes
import { View, Text, Image, StyleSheet } from "react-native";

// Definindo o tipo das propriedades (props) que o componente espera receber
type Props = {
    name: string,
    image: string, //URL da imagem
}

// Define o componente fucional ( receber as props desestruturadas ... nome e imagem)
export default function PokemonCard({ name, image }: Props) {

    return (
        // Container do 'card'

        <View style={styles.card}>
            {/* Exibe a imagem do Pokemon, com a URL recebida via props*/}
            <Image source={{ uri: image }} style={styles.image} />
            {/* Exibe o nome do Pokemon*/}
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#fff0f0',
        padding: 10,
        borderRadius: 10,
        marginBottom: 15,
        alignItems: 'center'
    },
    image:{
        width: 100,
        height: 100,
        marginBottom: 10
    },
    name:{
        fontSize: 18,
        textTransform: 'capitalize' // Capitaliza a primeira letra (primeira letra em maiúscula)
    },
    
})