import React from 'react';

/**
 * An object containing style definitions for various components in the application.
 *
 * @property {Object} header - Styles for the header component.
 * @property {string} header.textAlign - Alignment of the text within the header.
 * @property {string} header.marginBottom - Bottom margin of the header.
 * @property {string} header.backgroundColor - Background color of the header.
 * @property {string} header.color - Text color within the header.
 * @property {string} header.padding - Padding around the header content.
 * @property {string} header.boxShadow - Box shadow effect for depth.
 */
const styles = {
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
    backgroundColor: '#007bff',
    color: '#ffffff',
    padding: '1.5rem',
    boxShadow: '0 0 0.625rem rgba(0, 0, 0, 0.2)',
    width: '100%',
    boxSizing: 'border-box',
  },
  title: {
    margin: 0,
    fontSize: '2rem',
  },
  subtitle: {
    margin: '0.5rem 0 0',
    fontSize: '1.25rem',
    fontWeight: 'normal',
  },
};

/**
 * Functional React component that renders the header for the Pokémon Gallery application.
 *
 * @returns {JSX.Element} The rendered component.
 */
const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Pokemon Gallery</h1>
      <h2 style={styles.subtitle}>
        Helping this young fellow to explore the city of pokemons.
      </h2>
    </header>
  );
};

export default Header;
