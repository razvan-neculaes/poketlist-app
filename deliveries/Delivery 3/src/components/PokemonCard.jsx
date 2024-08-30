import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Box, Image, Text, VStack } from '@chakra-ui/react';

const PokemonCard = ({ id, name, image }) => {
  return (
    <Link to={`/pokemon/${id}`} style={{ textDecoration: 'none' }}>
      <Box
        boxShadow="md"
        transition="0.3s"
        borderRadius="md"
        margin="3"
        width="200px"
        border="0.125rem solid"
        borderColor="blue.500"
        _hover={{ boxShadow: 'lg', transform: 'scale(1.05)' }}
        overflow="hidden"
        backgroundColor="white"
      >
        <Image
          src={image}
          alt={name}
          width="100%"
          borderRadius="md"
          objectFit="cover"
        />
        <VStack padding="4" textAlign="center" color="blue.500" spacing="2">
          <Text fontWeight="bold" fontSize="lg">
            {name}
          </Text>
        </VStack>
      </Box>
    </Link>
  );
};

PokemonCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default PokemonCard;
