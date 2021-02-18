import { Layout } from 'antd'
import React from 'react'
import Route from '../types/route'
import Navbar from './navbar'

interface BaseLayoutProps {
    children: any
    routes: Route[]
}

export default function BaseLayout(props: BaseLayoutProps) {
    return (
        <>
            <Layout style={{ textAlign: 'center', minHeight: '100vh' }}>
                <Layout.Header
                    style={{ position: 'fixed', width: '100%', zIndex: 1 }}
                >
                    <Navbar
                        routes={[{ name: 'Home', path: '/' }, ...props.routes]}
                    />
                </Layout.Header>
                <Layout.Content style={{ margin: '100px 10vw' }}>
                    {props.children}
                </Layout.Content>
            </Layout>
        </>
    )
}
