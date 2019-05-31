import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { getYear, isEmptyObject } from '../../utils/helpers';
import { StyledLink } from '../Link/Link.styles';
import { Image } from '../Image/Image.styles';
import NotFound from '../NotFound';
import Link from 'next/link';
import { getFilmDetailsState } from '../../selectors';
import {
    StyledDetails,
    FilmDetailsHeaderWrapper,
    FilmDetailsHeaderText,
    FilmDetailsSearchButton,
    FilmDetailsWrapper,
    FilmInfo,
    FilmTitleAndRating,
    FilmTitle,
    FilmRating,
    FilmYearAndDuration,
    FilmYear,
    FilmOverview,
    FilmsByGenre
} from './FilmDetails.styles';

export const FilmDetails = ({ filmFromState, notFound }) => {
    if (isEmptyObject(filmFromState) || notFound) {
        return <NotFound />;
    }

    const { t } = useTranslation();
    const genre = filmFromState.genres[0];
    const releaseYear = getYear(filmFromState.release_date);

    return (
        <div>
            <StyledDetails>
                <FilmDetailsHeaderWrapper>
                    <FilmDetailsHeaderText>{t('netflixRoulette')}</FilmDetailsHeaderText>
                    <Link href="/">
                        <StyledLink>
                            <FilmDetailsSearchButton>{t('search')}</FilmDetailsSearchButton>
                        </StyledLink>
                    </Link>
                </FilmDetailsHeaderWrapper>
                <FilmDetailsWrapper>
                    <Image src={filmFromState.poster_path} />
                    <FilmInfo>
                        <FilmTitleAndRating>
                            <FilmTitle>{filmFromState.title}</FilmTitle>
                            <FilmRating>{filmFromState.vote_average}</FilmRating>
                        </FilmTitleAndRating>
                        <FilmYearAndDuration>
                            <FilmYear>{releaseYear}</FilmYear>
                            {filmFromState.runtime && (
                                <div>
                                    {filmFromState.runtime} {t('filmsDetails.minuteAbbr')}
                                </div>
                            )}
                        </FilmYearAndDuration>
                        <FilmOverview>{filmFromState.overview}</FilmOverview>
                    </FilmInfo>
                </FilmDetailsWrapper>
            </StyledDetails>
            <FilmsByGenre>{t('filmsDetails.filmsByGenre', { genre })}</FilmsByGenre>
        </div>
    );
};

FilmDetails.propTypes = {
    filmFromState: PropTypes.object,
    notFound: PropTypes.bool
};

const mapStateToProps = state => getFilmDetailsState(state);

export default connect(mapStateToProps)(FilmDetails);
