import React, { useEffect } from 'react';
import { Box, Button, Flex, Spinner, Text } from '@chakra-ui/react';
import PokemonCard from './PokemonCard';
import { usePokemon } from '../PokemonContext';

const PokemonList = () => {
  const { state, dispatch } = usePokemon();

  const fetchPokemonDetails = async url => {
    const response = await fetch(url);
    return await response.json();
  };

  const fetchPokemonList = async () => {
    try {
      const response = await fetch(state.nextUrl);
      const data = await response.json();

      // Fetch detailed data for each Pokémon to get the id
      const detailedPokemons = await Promise.all(
        data.results.map(pokemon => fetchPokemonDetails(pokemon.url))
      );

      dispatch({
        type: 'ADD_POKEMONS',
        payload: { pokemons: detailedPokemons, nextUrl: data.next },
      });
    } catch (error) {
      console.error('Failed to fetch Pokémon:', error);
    }
  };

  useEffect(() => {
    if (state.pokemons.length === 0) {
      fetchPokemonList();
    }
  }, [state.pokemons.length]);

  if (state.pokemons.length === 0) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" color="blue.500" />
        <Text ml="4" fontSize="xl" color="blue.500">
          Loading Pokémon...
        </Text>
      </Flex>
    );
  }

  return (
    <Box>
      <Flex wrap="wrap" justifyContent="center">
        {state.pokemons.map((pokemon, index) => (
          <PokemonCard
            key={pokemon.id || index} // Use id if available, fallback to index
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites?.front_default || 'default-image-url'}
          />
        ))}
      </Flex>
      {state.nextUrl && (
        <Flex justifyContent="center" mt="4">
          <Button
            onClick={fetchPokemonList}
            colorScheme="blue"
            isLoading={false}
            loadingText="Loading"
          >
            Load More Pokémon
          </Button>
        </Flex>
      )}
    </Box>
  );
};

export default PokemonList;
