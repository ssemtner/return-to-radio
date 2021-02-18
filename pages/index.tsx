import { Card, Col, Divider, Row, Typography } from 'antd'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import { getAllPlayTitlesAndPaths } from '../lib/files'
import Link from 'next/link'

const { Text, Title } = Typography

export default function Home(props) {
    return (
        <>
            <Head>
                <title>Return to Radio</title>
            </Head>

            <Title>Project Name</Title>

            <Title level={3}>Subtitle</Title>

            <Text>Project description</Text>

            <Divider />

            <Row gutter={[16, 16]}>
                {props.plays.map((play) => (
                    <Col xs={24} lg={12}>
                        <Link href={`/plays/${play.path}`}>
                            <Card hoverable>
                                <Text>{play.title}</Text>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: { plays: getAllPlayTitlesAndPaths() },
    }
}
