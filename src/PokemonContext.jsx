import React, { createContext, useContext, useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';

// Create a context
const PokemonContext = createContext();

// Define initial state
const initialState = {
  pokemons: [],
  nextUrl: 'https://pokeapi.co/api/v2/pokemon?limit=20',
};

// Define a reducer to manage state updates
const pokemonReducer = (state, action) => {
  if (action.type === 'ADD_POKEMONS') {
    return {
      ...state,
      pokemons: [...state.pokemons, ...action.payload.pokemons],
      nextUrl: action.payload.nextUrl,
    };
  } else {
    return state;
  }
};

// Create a provider component
export const PokemonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  // Memoize the context value
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <PokemonContext.Provider value={contextValue}>
      {children}
    </PokemonContext.Provider>
  );
};

// Prop validation for PokemonProvider
PokemonProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom hook to use the Pokemon context
export const usePokemon = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error('usePokemon must be used within a PokemonProvider');
  }
  return context;
};
