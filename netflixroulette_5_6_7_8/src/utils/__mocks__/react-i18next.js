import React from 'react';

const useMock = [k => k, {}];
useMock.t = k => k;
useMock.i18n = {};

module.exports = {
    withTranslation: () => Component => {
        Component.defaultProps = { ...Component.defaultProps, t: () => '' };
        return Component;
    },
    useTranslation: () => useMock
};
