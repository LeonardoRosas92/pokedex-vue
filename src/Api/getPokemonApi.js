import axios from 'axios'

export const getAllPokemon = async ( url ) => {
    try {
        const { data }  = await axios.get(url)
        return data;
    } catch (error) {
        console.log(error.response.data.message);
    }
}

export const getPokemonByUrl = async ( url ) => {
    try {
        const { data }  = await axios.get(url)
        return data;
    } catch (error) {
        console.log(error.response.data.message);
    }
}

export const getPokemonById = async ( idPokemon ) => {
    try {
        const { data }  = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
        return data;
    } catch (error) {
        console.log(error.response.data.message);
    }
}