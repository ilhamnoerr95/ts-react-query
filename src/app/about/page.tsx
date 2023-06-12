import Layout from "Container/layout"
import styles from '@/app/page.module.css'

export default function About(){
    console.log("about")
    return (
        <Layout title="ABOUT">
            <main className={styles.main}>
                <div style={{color: "black"}}>About t1t1t Quda</div>
            </main>
        </Layout>
        )
}