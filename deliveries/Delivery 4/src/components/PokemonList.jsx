import React, { useEffect, useState } from 'react';
import { Box, Flex, Button, Text, Spinner } from '@chakra-ui/react';
import PokemonCard from './PokemonCard';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextUrl, setNextUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=20'
  );

  useEffect(() => {
    // Fetch the initial list of Pokémon when the component mounts
    fetchInitialPokemonList();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  const fetchInitialPokemonList = async () => {
    try {
      setLoading(true);
      const response = await fetch(nextUrl);
      const data = await response.json();
      setNextUrl(data.next);

      // Fetch details for each Pokémon
      const detailedPokemons = await Promise.all(
        data.results.map(async pokemon => {
          const res = await fetch(pokemon.url);
          return await res.json();
        })
      );

      // Set the initial Pokémon data
      setPokemons(detailedPokemons);
    } catch (error) {
      setError('Sorry, we could not load the Pokémon list.');
    } finally {
      setLoading(false);
    }
  };

  const fetchPokemonList = async () => {
    try {
      setLoading(true);
      const response = await fetch(nextUrl);
      const data = await response.json();
      setNextUrl(data.next);

      // Fetch details for each Pokémon
      const detailedPokemons = await Promise.all(
        data.results.map(async pokemon => {
          const res = await fetch(pokemon.url);
          return await res.json();
        })
      );

      // Append the new Pokémon data to the existing list
      setPokemons(prevPokemons => [...prevPokemons, ...detailedPokemons]);
    } catch (error) {
      setError('Sorry, we could not load the Pokémon list.');
    } finally {
      setLoading(false);
    }
  };

  if (loading && pokemons.length === 0) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" color="blue.500" />
        <Text ml="4" fontSize="xl" color="blue.500">
          Loading Pokémon...
        </Text>
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Text fontSize="xl" color="red.500">
          {error}
        </Text>
      </Flex>
    );
  }

  return (
    <Box>
      <Flex wrap="wrap" justifyContent="center">
        {pokemons.map(pokemon => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
          />
        ))}
      </Flex>
      {nextUrl && (
        <Flex justifyContent="center" mt="4">
          <Button
            onClick={fetchPokemonList}
            colorScheme="blue"
            isLoading={loading}
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
