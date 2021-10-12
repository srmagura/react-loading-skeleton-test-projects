import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Skeleton, { SkeletonTheme } from '@srmagura/react-loading-skeleton'

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>React Loading Skeleton Test</title>
                <meta name="description" content="Tests RLS with Next JS" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>React Loading Skeleton</h1>
                <Skeleton
                    count={5}
                    width={500}
                    highlightColor="purple"
                    baseColor="blue"
                />
                <SkeletonTheme baseColor="purple" highlightColor="blue">
                    <Skeleton count={5} width={500} />
                </SkeletonTheme>
            </main>
        </div>
    )
}

// Comment out to view SSG version
// export const getServerSideProps = async () => {
//     return { props: { } }
// }

export default Home
