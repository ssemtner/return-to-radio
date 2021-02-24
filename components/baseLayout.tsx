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
        <div>
            <Layout style={{ textAlign: 'center', minHeight: '98vh' }}>
                <Layout.Header
                    style={{ position: 'fixed', width: '100%', zIndex: 2 }}
                >
                    <Navbar
                        routes={[{ name: 'Home', path: '/' }, ...props.routes]}
                    />
                </Layout.Header>
                <Layout.Content style={{ margin: '100px 10vw', zIndex: 1 }}>
                    {props.children}
                </Layout.Content>
            </Layout>
        </div>
    )
}
