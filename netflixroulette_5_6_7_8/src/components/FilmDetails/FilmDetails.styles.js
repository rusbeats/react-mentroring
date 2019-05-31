import constants from '../../utils/constants';
import styled from 'styled-components';

const { colors } = constants;

export const StyledDetails = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/static/header-background.png');
    background-repeat: no-repeat;
    background-size: cover;
    height: 600px;
    padding: 20px 125px;
`;

export const FilmDetailsHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const FilmDetailsWrapper = styled.div`
    display: flex;
`;

export const FilmDetailsHeaderText = styled.div`
    color: ${colors.lightPink};
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 50px;
    margin: 0 0 70px 80px;
`;

export const FilmDetailsSearchButton = styled.button`
    color: ${colors.lightPink};
    background-color: ${colors.white};
    border: none;
    padding: 10px 25px;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
    border-radius: 3px;
`;

export const FilmInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    width: 66%;
`;

export const FilmTitleAndRating = styled.div`
    display: flex;
`;

export const FilmTitle = styled.div`
    color: ${colors.lightPink};
    height: 60px;
    font-size: 50px;
    font-weight: bold;
    max-width: 500px;
`;

export const FilmRating = styled.div`
    border: 1px solid;
    border-radius: 40px;
    color: ${colors.lighterGrey};
    margin-left: 10px;
    height: 60px;
    width: 70px;
    font-size: 40px;
    text-align: center;
    padding-top: 10px;
`;

export const FilmYearAndDuration = styled.div`
    display: flex;
    color: ${colors.white};
    font-size: 25px;
    font-weight: bold;
    margin-top: 50px;
`;

export const FilmYear = styled.div`
    margin-right: 80px;
`;

export const FilmOverview = styled.div`
    margin-top: 80px;
    font-size: 20px;
    color: ${colors.lightGrey};
`;

export const FilmsByGenre = styled.div`
    padding: 20px 0 20px 125px;
    background-color: ${colors.lightGrey};
    font-weight: bold;
    font-size: 20px;
`;
