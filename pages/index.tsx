import Head from 'next/head'

const TITLE = 'Cocoa barks “hello”'

export default function Home() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
      </Head>

      <main className="p-6">
        <h1 className="text-6xl">{TITLE}</h1>
      </main>
    </>
  )
}
