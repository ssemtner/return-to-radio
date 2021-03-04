import {
    Button,
    Card,
    Carousel,
    Col,
    Divider,
    Row,
    Space,
    Typography,
} from 'antd'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import BaseLayout from '../components/baseLayout'
import { getRoutes } from '../lib/files'
import Route from '../types/route'

const { Title, Text } = Typography

interface HomeProps {
    routes: Route[]
}

export default function Home(props: HomeProps) {
    return (
        <BaseLayout routes={props.routes}>
            <Head>
                <title>Return to the Radio</title>
            </Head>

            <Title>Return to the Radio with Sherlock Holmes</Title>
            <Title level={3} style={{ fontWeight: 'lighter' }}>
                Directed and Produced by Damon J. Shearer
            </Title>

            <br />

            <Row>
                <Col span={0} md={8}>
                    <img src='/sherlock.png' height={200} />
                </Col>
                <Col span={24} md={8}>
                    <img src='/logo.png' height={200} />
                </Col>
                <Col span={0} md={8}>
                    <img src='/magnifying-glass.png' height={200} />
                </Col>
            </Row>

            <Divider />

            <Title level={2}>
                Watch our performances live on March 15th and 16th
            </Title>

            {/* <Carousel autoplay arrows>
                {props.routes.map((play) => (
                    <Card hoverable style={{ padding: '200px' }}>
                        <Title level={4}>{play.name}</Title>
                        <Title level={5}>{play.date}</Title>
                        <Text>{play.description}</Text>

                        <br />
                        <br />

                        <Space>
                            <Button
                                href={play.url}
                                target='_blank'
                                type='primary'
                            >
                                Watch Live
                            </Button>
                            <Link href={play.path}>
                                <Button>Read More</Button>
                            </Link>
                        </Space>
                    </Card>
                ))}
            </Carousel> */}

            <Row gutter={[16, 16]}>
                {props.routes.map((play) => (
                    <Col key={play.path} xs={24} lg={12}>
                        <Card hoverable>
                            <Title level={4}>{play.name}</Title>
                            <Title level={5}>{play.date}</Title>
                            <Text>{play.description}</Text>

                            <br />
                            <br />

                            <Space>
                                <Button
                                    href={play.url}
                                    target='_blank'
                                    type='primary'
                                >
                                    Watch Live
                                </Button>
                                <Link href={play.path}>
                                    <Button>Read More</Button>
                                </Link>
                            </Space>
                        </Card>
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
