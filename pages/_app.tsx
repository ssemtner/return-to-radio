import { Layout } from 'antd'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import '../styles/globals.css'
import * as gtag from '../utils/gtag'

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()

    React.useEffect(() => {
        const handleRouteChange = (url: URL) => {
            gtag.pageview(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return (
        <Layout style={{ textAlign: 'center', minHeight: '100vh' }}>
            <Layout.Header
                style={{ position: 'fixed', width: '100%', zIndex: 1 }}
            >
                <Navbar />
            </Layout.Header>
            <Layout.Content style={{ margin: '100px 0' }}>
                <Component {...pageProps} />
            </Layout.Content>
            <Layout.Footer
                style={{
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
