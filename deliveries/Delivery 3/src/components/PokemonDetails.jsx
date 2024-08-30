import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, Text, VStack, HStack, Badge } from '@chakra-ui/react';
import BackButton from './BackButton';
import pokemons from '../data/pokemonData';

const PokemonDetails = () => {
  const { id } = useParams();

  const pokemon = pokemons.find(pokemon => pokemon.id === parseInt(id));

  if (!pokemon) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding="2rem"
        color="blue.500"
      >
        <Text fontSize="xl" mb="4">
          Pokémon not found!
        </Text>
        <BackButton />
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding="2rem"
      color="blue.500"
      backgroundColor="gray.50"
      borderRadius="md"
      boxShadow="md"
      maxWidth={{ base: '90%', md: '600px' }}
      margin="auto"
      mt="4"
    >
      <Image
        src={pokemon.image}
        alt={pokemon.name}
        width="200px"
        borderRadius="full"
        marginBottom="1.5rem"
        border="0.125rem solid"
        borderColor="blue.500"
        boxShadow="lg"
      />
      <VStack spacing="4" textAlign="center" maxWidth="100%">
        <Text fontSize="3xl" fontWeight="bold">
          {pokemon.name}
        </Text>
        <HStack spacing="4" wrap="wrap" justifyContent="center">
          <Badge colorScheme="blue" fontSize="lg">
            Location: {pokemon.location}
          </Badge>
          <Badge colorScheme="green" fontSize="lg">
            Rarity: {pokemon.rarity}
          </Badge>
        </HStack>
        <Text fontSize="md" color="gray.700">
          {pokemon.description}
        </Text>
        <BackButton />
      </VStack>
    </Box>
  );
};

export default PokemonDetails;
