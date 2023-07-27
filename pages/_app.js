import 'bootstrap/dist/css/bootstrap.css';
import { CssBaseline } from '@mui/material';
import Head from 'next/head';
import Layout from '../src/layouts/Layout';
import { Provider } from 'react-redux';
import { store } from '../store';
import RequireAuth from '../utils/RequireAuth';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Provider store={store}>
        <CssBaseline />
        <Layout>
          <RequireAuth>
            <Component {...pageProps} />
          </RequireAuth>
        </Layout>
      </Provider>
    </>
  );
}
