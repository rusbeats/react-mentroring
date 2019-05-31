import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error) {
        console.log(error);
    }

    render() {
        const { t } = this.props;

        if (this.state.hasError) {
            return <h1>{t('generalError')}</h1>;
        }

        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
    t: PropTypes.func
};

export default withTranslation()(ErrorBoundary);
