import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App, { Pokemons } from './App';

// Mock the components
jest.mock('./components/Header', () => () => <div>Header</div>);
jest.mock('./components/Footer', () => () => <div>Footer</div>);
jest.mock('./components/PokemonList', () => () => <div>Pokemon List</div>);
jest.mock('./components/PokemonDetails', () => () => <div>Pokemon Details</div>);

describe('App component', () => {
  test('renders Header and Footer on all routes', () => {
    render(<App />);

    // Check if Header and Footer are rendered
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  test('renders PokemonList component on the home route ("/")', () => {
    render(<App />);

    // Check if the PokemonList component is rendered
    expect(screen.getByText('Pokemon List')).toBeInTheDocument();
  });

  test('renders PokemonDetails component on "/pokemon/:id" route', async () => {
    // Render App with MemoryRouter and set initial entry to /pokemon/1
    render(
      <MemoryRouter initialEntries={['/pokemon/1']}>
        <Pokemons />
      </MemoryRouter>
    );

    // Use waitFor to handle the asynchronous loading of the PokemonDetails component
    await waitFor(() => {
      expect(screen.getByText('Pokemon Details')).toBeInTheDocument();
    });
  });
});
