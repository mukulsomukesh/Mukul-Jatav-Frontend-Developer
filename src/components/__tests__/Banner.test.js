// Importing React and necessary dependencies
import React from 'react';
import { render } from '@testing-library/react';
import Banner from '../Banner';

// Test to check if heading and image are rendered correctly
test('renders heading and image', () => {
  // Render the Banner component
  const { getByText, getByAltText } = render(<Banner />);

  // Check if the heading is rendered with the correct text
  const heading = getByText(/Making Life Multiplanetary/i);
  expect(heading).toBeInTheDocument();

  // Check if the paragraph is rendered with the correct text
  const paragraph = getByText(
    /SpaceX has gained worldwide attention for a series of historic milestones./i
  );
  expect(paragraph).toBeInTheDocument();

  // Check if the image is rendered with the correct alt text
  const image = getByAltText(/SpaceX Banner/i);
  expect(image).toBeInTheDocument();
});
