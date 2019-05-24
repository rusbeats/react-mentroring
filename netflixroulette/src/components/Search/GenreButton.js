/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';

// Homework 8: chose Styled Components
const Button = styled.button`
  color:white;
  background-color: darkgrey;
  font-size:25px;
  margin-left: 5%;
  text-transform: uppercase;
`;

const GenreButton = () => (
  <Button>genre</Button>
);
export default GenreButton;
