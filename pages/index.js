import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home({list}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Filmes em destaque
        </h1>

      <Link href='/busca'> Ir para a Busca</Link>

      <ul>
        {list.map(item => (
          <li key={item.id.toString()}>
            <a href={`/movie/${item.id}`}>
              <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width="150" />
              <span>{item.title}</span>
            </a>
          </li>
        ))}
      </ul>

      </main>

      <footer className={styles.footer}>
        <p>Luci Lua</p>
      </footer>
    </div>

  )
}

export async function getServerSideProps(){ // quando cria essse funcao automaticamente esse pagina vira SSR


  // pegando dados de uma API externa.... por isso usa funcao assincrona

  // essa consulta foi feita no servidor, e nao no navegador
  const res = await fetch('https://themoviesdb.vercel.app/api/trending')
  const json = await res.json()


  return {
    props: {
      list: json.list
    } 
  }
}
