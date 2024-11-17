import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box
      as="header"
      textAlign="center"
      marginBottom="2rem"
      backgroundColor="blue.500"
      color="white"
      padding="1.5rem"
      boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
      width="100%"
      boxSizing="border-box"
    >
      <Heading as="h1" size="xl" margin="0">
        Pokemon Gallery
      </Heading>
      <Text as="h2" size="md" margin="0.5rem 0 0" fontWeight="normal">
        Helping this young fellow to explore the city of pokemons.
      </Text>
    </Box>
  );
};

export default Header;
