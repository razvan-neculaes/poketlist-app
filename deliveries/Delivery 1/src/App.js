import React from 'react';
import PokemonCard from './components/PokemonCard';
import pokemons from './data/pokemonData';

/**
 * Functional React component that renders the main application layout for the Pokemon Gallery.
 * It includes a header with a title and subtitle, and a gallery of Pokemon cards.
 *
 * @returns {JSX.Element} The rendered component.
 */
const App = () => {
  return (
    <div>
      <header style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
        <h1>Pokemon Gallery</h1>
        <h2>Helping this young fellow to explore the city of pokemons.</h2>
      </header>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {pokemons.map(pokemon => (
          <PokemonCard
            key={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
