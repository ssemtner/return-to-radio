import { Card, Col, Divider, Layout, Row, Typography } from 'antd'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import { getRoutes } from '../lib/files'
import Link from 'next/link'
import Navbar from '../components/navbar'
import BaseLayout from '../components/baseLayout'
import Route from '../types/route'
import PlayDetails from './plays/[path]'

const { Text, Title } = Typography

interface HomeProps {
    routes: Route[]
}

export default function Home(props: HomeProps) {
    return (
        <BaseLayout routes={props.routes}>
            <Head>
                <title>Return to Radio</title>
            </Head>

            <Title>Project Name</Title>

            <Title level={3}>Subtitle</Title>

            <Text>Project description</Text>

            <Divider />

            <Row gutter={[16, 16]}>
                {props.routes.map((play) => (
                    <Col xs={24} lg={12}>
                        <Link href={play.path}>
                            <Card hoverable>
                                <Text>{play.name}</Text>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </BaseLayout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: { routes: getRoutes() },
    }
}
