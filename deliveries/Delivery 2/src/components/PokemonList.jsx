import React, { useState } from 'react';
import PokemonCard from './PokemonCard';
import AddPokemonForm from './AddPokemonForm';
import pokemonList from '../data/pokemonData';

/**
 * An object containing style definitions for various components in the application.
 *
 * @property {Object} formContainer - Styles for the form container component.
 * @property {string} formContainer.display - CSS display property for the form container.
 * @property {string} formContainer.justifyContent - CSS justify-content property for the form container.
 * @property {string} formContainer.marginBottom - Bottom margin of the form container.
 *
 * @property {Object} gallery - Styles for the gallery component.
 * @property {string} gallery.display - CSS display property for the gallery.
 * @property {string} gallery.flexWrap - CSS flex-wrap property for the gallery.
 * @property {string} gallery.justifyContent - CSS justify-content property for the gallery.
 */
const styles = {
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem',
  },
  gallery: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};

/**
 * Functional React component that manages and displays a list of Pokémon.
 *
 * @returns {JSX.Element} The rendered component.
 */
const PokemonList = () => {
  const [pokemons, setPokemons] = useState(pokemonList);

  /**
   * Adds a new Pokémon to the list of existing Pokémon.
   * @param {Object} newPokemon - The new Pokémon object to be added.
   * @returns {void}
   */
  const addPokemon = newPokemon => {
    setPokemons([newPokemon, ...pokemons]);
  };

  return (
    <div>
      <div style={styles.formContainer}>
        <AddPokemonForm addPokemon={addPokemon} />
      </div>
      <div style={styles.gallery}>
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

export default PokemonList;
