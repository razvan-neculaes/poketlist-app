import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import PokemonCard from './PokemonCard';
import AddPokemonForm from './AddPokemonForm';
import pokemonList from '../data/pokemonData';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState(pokemonList);

  const addPokemon = newPokemon => {
    setPokemons([newPokemon, ...pokemons]);
  };

  return (
    <Box>
      <Flex justifyContent="center" marginBottom="2rem">
        <AddPokemonForm addPokemon={addPokemon} />
      </Flex>
      <Flex wrap="wrap" justifyContent="center">
        {pokemons.map(pokemon => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default PokemonList;
