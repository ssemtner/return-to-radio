import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import BaseLayout from '../components/baseLayout'
import { getRoutes } from '../lib/files'
import Route from '../types/route'

interface ProjectProps {
    routes: Route[]
}

export default function Project(props: ProjectProps) {
    return (
        <BaseLayout routes={props.routes}>
            <Head>
                <title>Our Project</title>
            </Head>
            <p>Test</p>
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
