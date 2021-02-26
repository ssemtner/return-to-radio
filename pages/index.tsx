import { Card, Col, Divider, Row, Typography } from 'antd'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import BaseLayout from '../components/baseLayout'
import { getRoutes } from '../lib/files'
import Route from '../types/route'

const { Text, Title } = Typography

interface HomeProps {
    routes: Route[]
}

export default function Home(props: HomeProps) {
    return (
        <BaseLayout
            routes={props.routes}
            noMargin={
                <div
                    style={{
                        height: '80vh',
                        width: '100%',
                        backgroundColor: 'blue',
                    }}
                >
                    <Title>Return to the Radio with Sherlock Holmes</Title>
                </div>
            }
        >
            <Head>
                <title>Return to Radio</title>
            </Head>

            <Row>
                <Col span={8}>
                    <img src='/sherlock.png' height={300} />
                </Col>
                <Col span={8}>
                    <img src='/logo.png' height={300} />
                </Col>
                <Col span={8}>
                    <img src='/magnifying-glass.png' height={300} />
                </Col>
            </Row>

            <Divider />

            <Title level={3}>Subtitle</Title>

            <div style={{ textAlign: 'left', margin: '0 5vw' }}>
                <Text>
                    Before TicTok and Youtube, Television and Film, families
                    used to gather around the radio in the evenings to listen to
                    plays performed live on air. In this project we will
                    consider the purpose of entertainment and how different
                    forms of entertainment can bring people together.
                </Text>
            </div>

            <Divider />

            <Row gutter={[16, 16]}>
                {props.routes.map((play) => (
                    <Col key={play.path} xs={24} lg={12}>
                        <Link href={play.path}>
                            <Card hoverable>
                                <Title level={4}>{play.name}</Title>
                                <Text>{play.description}</Text>
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
