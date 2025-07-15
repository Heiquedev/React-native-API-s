import React, { useEffect, useState } from "react";
import { FlatList, View, Text, ActivityIndicator, StyleSheet } from "react-native";
// Importando o componente que renderiza o card
import PokemonCard from "./PokemonCard";
// E a função que faz a busca de pokemons
import { findPokemons } from '../services/pokeAPI';

// Define o tipo dos dados
type Pokemon = {
    name: string,
    image: string
}

// Componente da lista
export default function PokemonList() {
    // Estado para armazenar a lista de pokemons retornadas da API
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    // Estado booleano que indica se os dados ainda estão sendo carregados
    const [loading, setLoading] = useState<boolean>(true);
    // useEffect é chamado uma vez quando o componente é montado
    useEffect(() => {
        // Função assícrona para buscar os dados da API
        const load = async () => {
            try {
                // Busca a lista de pokemons limitado a 10 (no caso desta aplicação)
                const list = await findPokemons(10);
                setPokemons(list);

            } catch (error) {
                // Caso ocorrer algum erro, exibe no console
                console.error(`Erro ao carregar pokémons`, error);

            } finally {
                // Finaliza o carregamento (independente do resultado seja sucesso ou falha)
                setLoading(false);
            }
        }

        // Chama a função de carregamento
        load()
    }, [])
    // Array vazio  = executa apenas na primeira renderização enquanto os dados estão sendo 
    // carregados , exibe um indicador de progresso

    //Após o carregamento, renderiza a lista
    if (loading) {
        return (
            <FlatList data={pokemons}
                keyExtractor={(_, index) => index.toString()} // Gera um id para cada item
                renderItem={({ item }) => (
                    <PokemonCard name={item.name} image={item.image} />
            )}
            />

        )
    }
}