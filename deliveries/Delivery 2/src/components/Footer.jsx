import React from 'react';

/**
 * An object containing style definitions for the footer component.
 *
 * @property {Object} footer - Styles for the footer element.
 * @property {string} footer.backgroundColor - Background color for the footer.
 * @property {string} footer.color - Text color for the footer.
 * @property {string} footer.padding - Padding inside the footer.
 * @property {string} footer.textAlign - Text alignment inside the footer.
 * @property {string} footer.position - Positioning of the footer.
 * @property {string} footer.bottom - Distance from the bottom of the viewport.
 * @property {string} footer.left - Distance from the left of the viewport.
 * @property {string} footer.width - Width of the footer.
 */
const styles = {
  footer: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
  },
};

/**
 * Functional React component that renders a footer for the Pokémon Gallery application.
 *
 * @returns {JSX.Element} The rendered component.
 */
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 Pokémon Gallery. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
