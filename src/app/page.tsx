import styles from './page.module.css'
import Layout from "Container/layout"

export async function generateMetadata(){
  return {
    title: "pler kuda"
  }
}

export default function Home() {
  return (
    <Layout title="HOME">
      <main className={styles.main}>
        5AO QIDA
      </main>
    </Layout>
  )
}
