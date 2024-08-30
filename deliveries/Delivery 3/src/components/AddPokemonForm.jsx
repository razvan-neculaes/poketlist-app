import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Styles object containing CSS-in-JS styles for various elements in the AddPokemonForm component.
 *
 * @property {Object} fieldset - Styles for the fieldset element.
 * @property {string} fieldset.border - Border style for the fieldset.
 * @property {string} fieldset.padding - Padding inside the fieldset.
 * @property {string} fieldset.borderRadius - Border radius for the fieldset.
 * @property {string} fieldset.marginBottom - Margin bottom for the fieldset.
 *
 * @property {Object} input - Styles for the input elements.
 * @property {string} input.padding - Padding inside the input elements.
 * @property {string} input.width - Width of the input elements.
 * @property {string} input.marginBottom - Margin bottom for the input elements.
 *
 * @property {Object} button - Styles for the button element.
 * @property {string} button.padding - Padding inside the button.
 * @property {string} button.background - Background color of the button.
 * @property {string} button.color - Text color of the button.
 * @property {string} button.border - Border style of the button.
 * @property {string} button.borderRadius - Border radius of the button.
 *
 * @property {Object} error - Styles for the error message.
 * @property {string} error.color - Text color of the error message.
 * @property {string} error.marginBottom - Margin bottom for the error message.
 */
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem',
  },
  form: {
    backgroundColor: '#f8f9fa',
    borderRadius: '0.5rem',
    boxShadow: '0 0 0.625rem rgba(0, 0, 0, 0.1)',
    padding: '1.5rem',
    width: '18.75rem',
  },
  input: {
    padding: '0.75rem',
    width: '100%',
    marginBottom: '1rem',
    borderRadius: '0.25rem',
    border: '1px solid #ccc',
  },
  button: {
    padding: '0.75rem',
    background: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    width: '100%',
    fontSize: '1rem',
  },
  error: {
    color: 'red',
    marginBottom: '1rem',
    fontSize: '0.875rem',
  },
};

/**
 * Component for adding a new Pokémon to the list.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.addPokemon - Function to add a new Pokémon to the list.
 *
 * @returns {JSX.Element} The rendered component.
 *
 * @example
 * <AddPokemonForm addPokemon={addPokemonFunction} />
 *
 * @component
 *
 * @description
 * This component renders a form that allows users to add a new Pokémon by entering its name and optionally uploading an image.
 * If no image is provided, a default image is used. The form includes validation to ensure that a name is entered before submission.
 *
 * @state {string} name - The name of the Pokémon.
 * @state {string} image - The image URL of the Pokémon.
 * @state {string} error - The error message to display if the form validation fails.
 *
 * @function handleSubmit - Handles the form submission, validates the input, and calls the addPokemon function with the new Pokémon data.
 * @function handleImageUpload - Handles the image file upload and sets the image state with the uploaded file's data URL.
 */
const AddPokemonForm = ({ addPokemon }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState(''); // State for handling the error message

  /**
   * Handles the form submission for adding a new Pokémon.
   *
   * @param {Event} e - The form submission event.
   * @returns {void}
   *
   * This function prevents the default form submission behavior, validates the Pokémon name,
   * and creates a new Pokémon object with a unique ID, name, and image. If the name is invalid,
   * it sets an error message. Otherwise, it adds the new Pokémon, clears the form fields, and
   * resets the error message.
   */
  const handleSubmit = e => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter a Pokémon name.');
      return;
    }

    const newPokemon = {
      id: Date.now(),
      name: name.trim(),
      image: image || `${process.env.PUBLIC_URL}/images/Pokemon.png`, // Use a default image if none provided
    };

    addPokemon(newPokemon);
    setName('');
    setImage('');
    setError(''); // Clear the error message after successful submission
  };

  /**
   * Handles the image upload process, reads the selected file, and sets the image data.
   * @param {Event} e - The event object from the file input change event.
   * @returns {void}
   */
  const handleImageUpload = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        {error && <p style={styles.error}>{error}</p>}
        <input
          type="text"
          placeholder="Enter Pokémon name"
          value={name}
          onChange={e => setName(e.target.value)}
          style={styles.input}
        />
        <input type="file" onChange={handleImageUpload} style={styles.input} />
        <button type="submit" style={styles.button}>
          Add Pokémon
        </button>
      </form>
    </div>
  );
};

AddPokemonForm.propTypes = {
  addPokemon: PropTypes.func.isRequired,
};

export default AddPokemonForm;
