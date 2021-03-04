import { Affix, Layout } from 'antd'
import React from 'react'
import Route from '../types/route'
import Navbar from './navbar'

interface BaseLayoutProps {
    children: any
    routes: Route[]
    noMargin?: any
}

export default function BaseLayout(props: BaseLayoutProps) {
    return (
        <Layout style={{ textAlign: 'center', minHeight: '98vh' }}>
            <Affix offsetTop={0}>
                <Layout.Header>
                    <Navbar
                        routes={[
                            { name: 'Home', path: '/' },
                            { name: 'Our Project', path: '/project' },
                            ...props.routes,
                        ]}
                    />
                </Layout.Header>
            </Affix>
            {props.noMargin || ''}
            <Layout.Content style={{ margin: '20px 10vw', zIndex: 1 }}>
                {props.children}
            </Layout.Content>
        </Layout>
    )
}
