import { Col, Divider, Row, Space, Typography } from 'antd'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import BaseLayout from '../../components/baseLayout'
import Casting from '../../components/casting'
import Video from '../../components/video'
import { getAllPlays, getRoutes } from '../../lib/files'
import Play from '../../types/play'
import Route from '../../types/route'

const { Text, Title } = Typography

interface PlayDetailsProps {
    play: Play
    routes: Route[]
}

export default function PlayDetails(props: PlayDetailsProps) {
    return (
        <BaseLayout routes={props.routes}>
            <Head>
                <title>{props.play.title}</title>
            </Head>
            <Space direction='vertical' size='middle'>
                <Title>{props.play.title}</Title>

                <Row align='middle'>
                    <Col span={8}>
                        <img src='/sherlock.png' height={200} />
                    </Col>
                    <Col span={8}>
                        <Title level={3}>Team {props.play.team}</Title>
                        {props.play.complete || (
                            <Title level={4}>
                                Come watch our performance on {props.play.date}
                            </Title>
                        )}
                        <div style={{ textAlign: 'left' }}>
                            <Text>{props.play.description}</Text>
                        </div>
                    </Col>
                    <Col span={8}>
                        <img src='/magnifying-glass.png' height={200} />
                    </Col>
                </Row>

                {!props.play.complete || <Video url={props.play.url} />}

                <br />
                <Divider />

                <Title level={5}>Directed By Damon J. Shearer</Title>

                <Casting cast={props.play.cast} />
            </Space>
        </BaseLayout>
    )
}

interface Params {
    params: {
        path: string
    }
}

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
    return {
        props: {
            play: require(`../../_plays/${params.path}.json`),
            routes: getRoutes(),
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const files = getAllPlays()
    return {
        paths: files.map((element) => {
            return {
                params: {
                    path: element,
                },
            }
        }),
        fallback: false,
    }
}
