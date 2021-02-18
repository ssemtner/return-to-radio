import { Layout } from 'antd'
import { GetStaticProps } from 'next'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import '../styles/globals.css'
import Route from '../types/route'
import * as gtag from '../utils/gtag'

export default function MyApp({ Component, pageProps }: AppProps) {
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

    return <Component {...pageProps} />
}
