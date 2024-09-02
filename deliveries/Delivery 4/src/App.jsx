import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';

const App = () => {
  return (
    <Flex direction="column" minHeight="100vh">
      <Router>
        <Header />
        <Box flex="1" marginBottom="6rem">
          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/pokemon/:id" element={<PokemonDetails />} />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </Flex>
  );
};

export default App;
