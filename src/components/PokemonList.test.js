import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import PokemonList from './PokemonList';
import { MemoryRouter } from 'react-router-dom';

describe('PokemonList', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockImplementation(url => {
      if (url.includes('limit=20')) {
        // Mock the initial list fetch
        return Promise.resolve({
          json: () =>
            Promise.resolve({
              next: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
              results: [
                {
                  name: 'bulbasaur',
                  url: 'https://pokeapi.co/api/v2/pokemon/1/',
                },
                {
                  name: 'ivysaur',
                  url: 'https://pokeapi.co/api/v2/pokemon/2/',
                },
              ],
            }),
        });
      } else {
        // Mock individual Pokémon details fetch
        const id = url.match(/\/(\d+)\//)[1];
        return Promise.resolve({
          json: () =>
            Promise.resolve({
              id,
              name: id === '1' ? 'bulbasaur' : 'ivysaur',
              sprites: { front_default: `${id}.png` },
            }),
        });
      }
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('displays loading spinner initially', async () => {
    render(
      <MemoryRouter>
        <PokemonList />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/Loading Pokémon.../i)).toBeInTheDocument();
    });
  });

  test('displays Pokémon list after loading', async () => {
    render(
      <MemoryRouter>
        <PokemonList />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
      expect(screen.getByText(/ivysaur/i)).toBeInTheDocument();
    });

    expect(screen.getByAltText(/bulbasaur/i)).toHaveAttribute('src', '1.png');
    expect(screen.getByAltText(/ivysaur/i)).toHaveAttribute('src', '2.png');
  });

  test('displays error message on fetch failure', async () => {
    fetch.mockImplementationOnce(() => Promise.reject('API is down'));

    render(
      <MemoryRouter>
        <PokemonList />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(
        screen.getByText(/Sorry, we could not load the Pokémon list./i)
      ).toBeInTheDocument();
    });
  });

  test('loads more Pokémon when "Load More Pokémon" button is clicked', async () => {
    render(
      <MemoryRouter>
        <PokemonList />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText(/Load More Pokémon/i));

    await waitFor(() => {
      expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
      expect(screen.getByText(/ivysaur/i)).toBeInTheDocument();
    });
  });
});
