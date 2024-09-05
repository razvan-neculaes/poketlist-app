import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import PokemonDetails from './PokemonDetails';

describe('PokemonDetails', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          const data = {
            name: 'pikachu',
            sprites: { front_default: 'pikachu.png' },
            types: [{ slot: 1, type: { name: 'electric' } }],
            height: 4,
            weight: 60,
          };
          return Promise.resolve(data);
        },
      });
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('displays loading spinner initially', async () => {
    render(
      <MemoryRouter initialEntries={['/pokemon/1']}>
        <Routes>
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
        </Routes>
      </MemoryRouter>
    );

    // Use waitFor to ensure all state updates are processed
    await waitFor(() => {
      expect(
        screen.getByText(/Loading Pokémon details.../i)
      ).toBeInTheDocument();
    });
  });

  test('displays Pokémon details after loading', async () => {
    render(
      <MemoryRouter initialEntries={['/pokemon/1']}>
        <Routes>
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
        </Routes>
      </MemoryRouter>
    );

    // Wait for the component to finish loading and check for the Pokémon details
    await waitFor(() => {
      expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
      expect(screen.getByAltText(/pikachu/i)).toHaveAttribute(
        'src',
        'pikachu.png'
      );
      expect(screen.getByText(/electric/i)).toBeInTheDocument();
      expect(screen.getByText(/Height: 4 decimetres/i)).toBeInTheDocument();
      expect(screen.getByText(/Weight: 60 hectograms/i)).toBeInTheDocument();
    });
  });

  test('displays error message on fetch failure', async () => {
    // Simulate a fetch failure
    fetch.mockImplementationOnce(() => Promise.reject('API is down'));

    render(
      <MemoryRouter initialEntries={['/pokemon/1']}>
        <Routes>
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
        </Routes>
      </MemoryRouter>
    );

    expect(
      await screen.findByText(/Sorry, we could not load the Pokémon details./i)
    ).toBeInTheDocument();
  });
});
