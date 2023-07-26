import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Sidebar from '../src/layouts/Sidebar';

export default function Home() {
  return (
    <>

    <div className={styles.container}>
      <Head>
        <title>NextJs-Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
            <p>Hello</p>
      </main>
    </div>

    </>
  )
}
