// import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.css';
import { CssBaseline } from '@mui/material';
import Head from 'next/head';
import Layout from '../src/layouts/Layout';
import { Provider } from 'react-redux';
import { store } from '../store';

export default function MyApp({ Component, pageProps }) {
    <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>;
    return (
        <>
            <Provider store={store}>
                <CssBaseline />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        </>
    );
}
