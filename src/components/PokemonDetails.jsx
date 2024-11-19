import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Image,
  Text,
  VStack,
  HStack,
  Badge,
  Spinner,
  Flex,
} from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';
import BackButton from './BackButton';

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const controller = new AbortController();
      const signal = controller.signal;

      try {
        setError(null); // Reset error state before fetching
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${id}`,
          { signal }
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError('Sorry, we could not load the Pokémon details.');
        }
      } finally {
        setLoading(false);
      }

      return () => controller.abort(); // Cleanup function to abort fetch
    };

    fetchPokemonDetails();
  }, [id]);

  if (loading) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" color="blue.500" />
        <Text ml="4" fontSize="xl" color="blue.500">
          Loading Pokémon details...
        </Text>
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        height="100vh"
        flexDirection="column"
      >
        <WarningIcon boxSize="50px" color="red.500" mb="4" />
        <Text fontSize="xl" color="red.500" mb="4">
          {error}
        </Text>
        <BackButton mt="4" />
      </Flex>
    );
  }

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
        src={pokemon.sprites.front_default}
        alt={`Image of ${pokemon.name}`}
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
          {pokemon.types.map(typeInfo => (
            <Badge key={typeInfo.slot} colorScheme="blue" fontSize="lg">
              {typeInfo.type.name}
            </Badge>
          ))}
        </HStack>
        <Text fontSize="md" color="gray.700">
          Height: {pokemon.height} decimetres
        </Text>
        <Text fontSize="md" color="gray.700">
          Weight: {pokemon.weight} hectograms
        </Text>
        <BackButton />
      </VStack>
    </Box>
  );
};

export default PokemonDetails;
