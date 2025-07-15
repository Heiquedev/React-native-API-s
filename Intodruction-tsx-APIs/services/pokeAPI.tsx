// Função que busca uma lista de Pokemons da API
export async function findPokemons(limit: number = 10) {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);

    // Convertendo a resposta da aquisição para JSON 
    const data = await response.json();
    // Para cada pokemon da lista básica, busca o detalhes individuais (nome e imagem)
    const details = await Promise.all(
        // Mapeia o array do resultado
        data.results.map(async (pokemon: { name: string, image: string, url: string }) => {
            // Faz uma nova resquisição para onter os detalhes de cada pokemon individual
            const resp = await fetch(pokemon.url);
            // Converte os detalhes em JSON
            const detailsPokemon = await resp.json();
            // Retorna um objeto com o nome e a imagem
            return {
                name: detailsPokemon.name,
                image: detailsPokemon.sprites.front_default //URL da imagem frontal do pokemon
            }


        })
    )
    return details
}