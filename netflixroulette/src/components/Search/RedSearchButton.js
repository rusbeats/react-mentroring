/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';

// Homework 8: chose Styled Components
const ButtonRedSearch = styled.button`
  flex: 0.5;
  color:white;
  background-color:#fb6e6e;
  font-size:25px;
  text-transform: uppercase;
  margin-left: auto;  
`;
// Goes under the Search Bar
const RedSearchButton = () => (
  <ButtonRedSearch>search</ButtonRedSearch>
);
export default RedSearchButton;
