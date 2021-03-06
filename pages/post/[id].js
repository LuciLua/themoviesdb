import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function PostItem() {
    const router = useRouter();
    const {id} = router.query;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Post...
        </h1>
        <span></span>
      </main>

      <footer className={styles.footer}>
        <p>Luci Lua</p>
      </footer>
    </div>
  )
}
