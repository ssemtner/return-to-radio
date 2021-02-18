import { Typography } from 'antd'
import fs from 'fs'
import { GetStaticPaths, GetStaticProps } from 'next'
import { cwd } from 'process'
import React from 'react'
import Casting from '../../components/casting'
import Video from '../../components/video'
import Play from '../../types/play'
const { Text, Title } = Typography

const complete: boolean = false

export default function PlayDetails(play: Play) {
    return (
        <>
            <Title>{play.title}</Title>
            <Title level={3}>Team {play.team}</Title>

            {/* Show video or date depending complete variable */}
            {complete ? (
                <>
                    <br />
                    <Video url={play.url} />
                </>
            ) : (
                <Title level={4}>
                    Come watch our performance on {play.date}
                </Title>
            )}

            <br />

            <div style={{ textAlign: 'left', margin: '0 100px' }}>
                <Text>{play.description}</Text>
            </div>

            <br />

            <Casting cast={play.cast} />
        </>
    )
}

interface Params {
    params: {
        path: string
    }
}

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
    return {
        props: require(`../../_plays/${params.path}.json`),
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const files = fs.readdirSync(`${cwd()}/_plays/`)

    return {
        paths: files.map((element) => {
            return {
                params: {
                    path: element.split('.json')[0],
                },
            }
        }),
        fallback: false,
    }
}
