import React from 'react';
import PropTypes from 'prop-types';

/**
 * Styles object containing CSS-in-JS style definitions for the PokemonCard component.
 *
 * @property {Object} card - Styles for the card container.
 * @property {string} card.boxShadow - Box shadow for the card.
 * @property {string} card.transition - Transition effect for the card.
 * @property {string} card.borderRadius - Border radius for the card.
 * @property {string} card.margin - Margin around the card.
 * @property {string} card.width - Width of the card.
 *
 * @property {Object} image - Styles for the image inside the card.
 * @property {string} image.width - Width of the image.
 * @property {string} image.borderRadius - Border radius for the image.
 *
 * @property {Object} container - Styles for the container inside the card.
 * @property {string} container.padding - Padding inside the container.
 * @property {string} container.textAlign - Text alignment inside the container.
 */
const styles = {
  card: {
    boxShadow: '0 0.25rem 0.5rem 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    borderRadius: '0.25rem',
    margin: '0.75rem',
    width: '9.25rem',
  },
  image: {
    width: '100%',
    borderRadius: '0.25rem 0.25rem 0 0',
  },
  container: {
    padding: '1rem',
    textAlign: 'center',
  },
};

/**
 * A functional component that renders a card for a Pokémon, displaying its image and name.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.name - The name of the Pokémon.
 * @param {string} props.image - The URL of the Pokémon's image.
 * @returns {JSX.Element} A JSX element representing the Pokémon card.
 */
const PokemonCard = ({ name, image }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <div style={styles.container}>
        <h4>
          <b>{name}</b>
        </h4>
      </div>
    </div>
  );
};

// Define prop types for the component
PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default PokemonCard;
