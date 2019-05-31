import constants from '../../utils/constants';
import styled from 'styled-components';

const { colors } = constants;

export const MainHeader = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/static/header-background.png');
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;
    padding: 20px 125px;
`;

export const HeaderText = styled.div`
    color: ${colors.lightPink};
    font-weight: bold;
    margin-bottom: 50px;
`;

export const SearchHeader = styled.div`
    text-transform: uppercase;
    color: ${colors.white};
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 30px;
`;

export const SearchInput = styled.input.attrs({
    type: 'text',
    placeholder: 'e.g Transformers'
})`
    width: 100%;
    text-indent: 30px;
    padding: 20px 0;
    font-size: 20px;
    background-color: ${colors.black};
    color: ${colors.lightGrey};
    &::-webkit-input-placeholder {
        color: ${colors.lightGrey};
    }
    border: none;
    border-bottom: solid ${colors.lightPink} 2px;
    margin-bottom: 30px;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SearchByText = styled.div`
    text-transform: uppercase;
    font-weight: bold;
    color: ${colors.white};
    letter-spacing: 1px;
    margin-right: 20px;
`;

export const SearchByButtons = styled.div`
    display: flex;
    align-items: center;
`;

export const SubHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding-left: 125px;
    background-color: ${colors.lightGrey};
    font-weight: bold;
    font-size: 20px;
`;

export const Sorting = styled.div`
    display: flex;
    justify-content: space-around;
    width: 40%;
    margin-right: 40px;
`;
