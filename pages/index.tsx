import {
    Button,
    Card,
    Col,
    Collapse,
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

            <br />
            <br />

            <Collapse bordered={false}>
                <Collapse.Panel key='' header='About Our Project'>
                    <div style={{ textAlign: 'left' }}>
                        <Text>
                            Team Lemonaide brings you Return to the Radio with
                            Sherlock Holmes! In this project, the different
                            teams in Team Lemonaide worked to adapt and perform
                            four different episodes of the 1945 Sherlock Holmes
                            radio drama written by Denis Greene and Bruce
                            Taylor. Each team was assigned four different jobs,
                            those jobs consisted of assistant directors, foley
                            artists, marketing, and actors. As the name suggests
                            the assistant directors worked in assisting our main
                            director, Damon J. Shearer, in helping the marketing
                            team, the foley artists, and the actors. Foley
                            artists were in charge of the curation of the sound
                            effects and music for each of the plays. Actors took
                            on the roles that the original plays provided and
                            the marketing team was responsible for the making of
                            this very website, the posters, our social media,
                            and getting the word out about our plays. After
                            several weeks of hard work and dedication, we now
                            share with you our adaptations of Adventure of the
                            Tolling Bell, A Scandal in Bohemia, Murder in the
                            Casbah, and Case of the Dead Adventures!
                        </Text>
                    </div>
                </Collapse.Panel>
            </Collapse>

            <Divider />

            <Title level={2}>
                Watch our performances live on March 15th and 16th
            </Title>

            <Row gutter={[16, 16]}>
                {['Monday, March 15th', 'Tuesday, March 16th'].map((date) => (
                    <Col key={date} xs={24} lg={12}>
                        <Card>
                            <Title level={3}>{date}, 2021</Title>
                            <br />
                            <Row>
                                {props.routes
                                    .filter((i) => {
                                        return (
                                            i.date.indexOf(
                                                date.split(' ')[2]
                                            ) !== -1
                                        )
                                    })
                                    .map((play) => (
                                        <Col flex='1'>
                                            <Title level={5}>{play.name}</Title>
                                            <Title level={5}>
                                                {play.date.split(' ')[2]} PM PST
                                            </Title>

                                            <br />

                                            <Space>
                                                <Button
                                                    href={play.url}
                                                    target='_blank'
                                                    type='primary'
                                                    size='large'
                                                >
                                                    Watch Live
                                                </Button>
                                                <Link href={play.path}>
                                                    <Button size='large'>
                                                        Read More
                                                    </Button>
                                                </Link>
                                            </Space>
                                        </Col>
                                    ))}
                            </Row>
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
