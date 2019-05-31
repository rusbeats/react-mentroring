import React from 'react';
import { makeStore } from '../src/store';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import Head from 'next/head';
import { StyledApp } from '../src/components/App/App.styles';
import '../src/utils/i18n';
import ErrorBoundary from '../src/components/ErrorBoundary';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        return { pageProps };
    }

    render() {
        const { Component, pageProps, store } = this.props;
        return (
            <Container>
                <Head>
                    <title>My react App</title>
                </Head>

                <Provider store={store}>
                    <ErrorBoundary>
                        <StyledApp>
                            <Component {...pageProps} />
                        </StyledApp>
                    </ErrorBoundary>
                </Provider>
            </Container>
        );
    }
}

export default withRedux(makeStore)(MyApp);
