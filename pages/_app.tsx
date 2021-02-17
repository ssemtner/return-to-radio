import { Layout } from 'antd'
import type { AppProps } from 'next/app'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout style={{ textAlign: 'center', minHeight: '100vh' }}>
            <Layout.Header
                style={{ position: 'fixed', zIndex: 1, width: '100%' }}
            >
                <Navbar />
            </Layout.Header>
            <Layout.Content style={{ marginTop: '100px' }}>
                <Component {...pageProps} />
            </Layout.Content>
            <Layout.Footer
                style={{
                    marginTop: '150px',
                    position: 'fixed',
                    bottom: '0',
                    width: '100%',
                }}
            >
                <Footer />
            </Layout.Footer>
        </Layout>
    )
}

export default MyApp
