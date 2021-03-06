import { Button, Col, Divider, Row, Space, Typography } from 'antd'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import BaseLayout from '../../components/baseLayout'
import Casting from '../../components/casting'
import { getAllPlays, getRoutes } from '../../lib/files'
import Play from '../../types/play'
import Route from '../../types/route'

const { Text, Title } = Typography

interface PlayDetailsProps {
    play: Play
    routes: Route[]
}

export default function PlayDetails(props: PlayDetailsProps) {
    const datetime: string[] = props.play.date.split(' ')

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
                        {props.play.complete ? (
                            <>
                                <Title level={4}>
                                    Performed live on {datetime[0]}{' '}
                                    {datetime[1].split(',')[0]}
                                </Title>

                                <Button
                                    href={props.play.url}
                                    target='_blank'
                                    size='large'
                                    type='primary'
                                    style={{ margin: '10px' }}
                                >
                                    Watch Recording
                                </Button>
                            </>
                        ) : (
                            <>
                                <Title level={4}>
                                    Watch our performance live at {datetime[2]}{' '}
                                    {datetime[3]} on {datetime[0]}{' '}
                                    {datetime[1].split(',')[0]}
                                </Title>

                                <Button
                                    href={props.play.liveUrl}
                                    target='_blank'
                                    size='large'
                                    type='primary'
                                >
                                    Watch Live
                                </Button>
                            </>
                        )}
                    </Col>
                    <Col span={8}>
                        <img src='/magnifying-glass.png' height={200} />
                    </Col>
                </Row>

                <div style={{ textAlign: 'left', margin: '10px 10vw' }}>
                    <Text>{props.play.description}</Text>
                </div>

                <Divider />

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
