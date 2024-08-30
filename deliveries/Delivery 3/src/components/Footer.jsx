import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      as="footer"
      backgroundColor="blue.500"
      color="white"
      padding="1rem"
      textAlign="center"
      width="100%"
      position="fixed"
      bottom="0"
      left="0"
    >
      <Text>&copy; 2024 Pokémon Gallery. All Rights Reserved.</Text>
    </Box>
  );
};

export default Footer;
