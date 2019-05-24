/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';

// Homework 8: chose Styled Components
const ButtonTitle = styled.button`
  color:white;
  background-color:#fb6e6e;
  font-size:25px;
  text-transform: uppercase;
`;
const TitleButton = () => (
  <ButtonTitle>title</ButtonTitle>
);
export default TitleButton;
