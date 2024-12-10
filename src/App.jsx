import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, Flex, Spinner, Text } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import PokemonList from './components/PokemonList';
import { PokemonProvider } from './PokemonContext'; // Import the provider

// Lazy load the PokemonDetails component
const PokemonDetails = React.lazy(() => import('./components/PokemonDetails'));

export const Pokemons = () => {
  return (
    <Flex direction="column" minHeight="100vh">
      <Header />
      <Box flex="1" marginBottom="6rem">
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route
            path="/pokemon/:id"
            element={
              <Suspense
                fallback={
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    height="100vh"
                  >
                    <Spinner size="xl" color="blue.500" />
                    <Text ml="4" fontSize="xl" color="blue.500">
                      Loading Pokémon details...
                    </Text>
                  </Flex>
                }
              >
                <PokemonDetails />
              </Suspense>
            }
          />
        </Routes>
      </Box>
      <Footer />
    </Flex>
  );
};

const App = () => (
  <Router>
    <PokemonProvider>
      <Pokemons />
    </PokemonProvider>
  </Router>
);

export default App;
