import { Card, Col, Divider, Row, Typography } from 'antd'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
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
        <BaseLayout routes={props.routes}>
            <Head>
                <title>Return to Radio</title>
            </Head>

            <Title>Return to the Radio with Sherlock Holmes</Title>

            <Title level={3}>Subtitle</Title>

            <Text>Project description</Text>
            <Divider />

            <Image src='/logo.png' alt='Sherlock' width={300} height={300} />

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
