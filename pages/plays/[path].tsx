import { Typography } from 'antd'
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

const complete: boolean = false

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

            <Title>{props.play.title}</Title>
            <Title level={3}>Team {props.play.team}</Title>

            {/* Show video or date depending complete variable */}
            {complete ? (
                <>
                    <br />
                    <Video url={props.play.url} />
                </>
            ) : (
                <Title level={4}>
                    Come watch our performance on {props.play.date}
                </Title>
            )}

            <br />

            <div style={{ textAlign: 'left', margin: '0 100px' }}>
                <Text>{props.play.description}</Text>
            </div>

            <br />

            <Casting cast={props.play.cast} />
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
            routes: getRoutes()
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
