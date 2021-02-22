import { Typography } from 'antd'
import { GetStaticProps } from 'next'
import React from 'react'
import BaseLayout from '../components/baseLayout'
import { getRoutes } from '../lib/files'
import Route from '../types/route'

const { Title, Text } = Typography

export default function Posters({ routes }: { routes: Route[] }) {
    return (
        <BaseLayout routes={routes}>
            <Title>Posters</Title>
        </BaseLayout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            routes: getRoutes(),
        },
    }
}
