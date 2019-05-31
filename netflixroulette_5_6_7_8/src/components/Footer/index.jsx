import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledLink } from '../Link/Link.styles';
import { StyledFooter } from './Footer.styles';
import constants from '../../utils/constants';
import Link from 'next/link';

const { colors } = constants;

const Footer = () => {
    const { t } = useTranslation();
    return (
        <StyledFooter>
            <Link href="/">
                <StyledLink color={colors.lightPink}>{t('netflixRoulette')}</StyledLink>
            </Link>
        </StyledFooter>
    );
};

StyledFooter.displayName = 'Footer';

export default Footer;
