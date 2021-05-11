import Head from 'next/head'

export default function Home({data}) {
  return (
    <div>
      <Head>
        <title>Henri potier | livres Best Promo</title>
        <meta name="description" content="Henry potier, le hero formidable" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="container mx-auto">

        <h1 className="text-5xl">New Collection</h1>

      </header>

      <main className="">

      </main>

      <footer>
        
      </footer>
    </div>
  )
}

export async function getStaticProps(context) {

  const res = await fetch('http://localhost:3000/api/fetchBooks')
  const data = await res.json()


  return {
    props: {
      data,
    }, // will be passed to the page component as props
  }
}
