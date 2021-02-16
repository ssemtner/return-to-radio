import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from 'antd'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Layout.Header>
                <Navbar />
            </Layout.Header>
            <Layout.Content>
                <Component {...pageProps} />
            </Layout.Content>
            <Layout.Footer style={{ textAlign: 'center' }}>
                <Footer />
            </Layout.Footer>
        </Layout>
    )
}

export default MyApp
