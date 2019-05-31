import styled from 'styled-components';

export const Image = styled.img.attrs(props => ({ alt: '', src: props.poster_path }))`
    height: 500px;
    width: 350px;
`;
