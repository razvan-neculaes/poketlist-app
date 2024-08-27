import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PokemonList from './components/PokemonList';

/**
 * Main application component that renders the header and the list of Pokemon.
 * @returns {JSX.Element} The JSX code to render the application.
 */
const App = () => {
  const styles = {
    appContainer: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    content: {
      flex: 1,
      marginBottom: '6rem',
    },
  };

  return (
    <div style={styles.appContainer}>
      <Header />
      <div style={styles.content}>
        <PokemonList />
      </div>
      <Footer />
    </div>
  );
};

export default App;
