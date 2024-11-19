import React from 'react';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

/**
 * A React component that renders a back button. When clicked, it navigates the user to the previous page.
 *
 * @component
 * @returns {JSX.Element} A button that navigates to the previous page when clicked.
 */
const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (window.history.length > 1) {
      navigate(-1); // Navigate to the previous page
    } else {
      navigate('/'); // Fallback to home or a default route if no history
    }
  };

  return (
    <Button
      onClick={handleBackClick}
      colorScheme="blue"
      size="lg"
      mt="4"
      aria-label="Go back to the previous page"
    >
      Back
    </Button>
  );
};

export default BackButton;
