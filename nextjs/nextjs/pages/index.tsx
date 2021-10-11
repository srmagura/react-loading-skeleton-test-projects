import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import '../node_modules/@srmagura/react-loading-skeleton/dist/skeleton.css'
import { Skeleton } from '../node_modules/@srmagura/react-loading-skeleton/dist/Skeleton'

const Home: NextPage = () => {
    return (
        <div className="react-loading-skeleton">
            <Head>
                <title>React Loading Skeleton Test</title>
                <meta name="description" content="Tests RLS with Next JS" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>React Loading Skeleton</h1>
            </main>
        </div>
    )
}

export default Home
