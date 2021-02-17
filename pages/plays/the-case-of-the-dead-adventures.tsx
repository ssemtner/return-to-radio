import { Typography } from 'antd'
import React from 'react'
import Casting from '../../components/casting'
import Video from '../../components/video'
import cast from '../../types/cast'

const { Text, Title } = Typography

export default function Home({ post }: { post: string }) {
    const cast: cast = {
        assistantDirectors: ['Easha A', 'Stella M'],
        foleyArtists: ['Foley C', 'Foley D'],
        actors: [
            {
                role: 'Sherlock Holmes',
                actor: 'Jesse R',
            },
            {
                role: 'Dr. Watson',
                actor: 'Markus H',
            },
            {
                role: 'Henri',
                actor: 'Markus H',
            },
            {
                role: 'Duc',
                actor: 'Jesse R',
            },
            {
                role: 'Announcer',
                actor: 'Annalisa T',
            },
            {
                role: 'Prefect',
                actor: 'Annalisa T',
            },
            {
                role: 'Yvette Corvey',
                actor: 'Zaria G',
            },
            {
                role: 'Inspector Charel',
                actor: 'Jonah S-W',
            },
            {
                role: 'Reginald Shipton',
                actor: 'Adam S',
            },
            {
                role: 'Officer',
                actor: 'Adam S',
            },
        ],
    }

    return (
        <>
            <Title>The Case of the Dead Adventures</Title>
            <Title level={2}>Team Lemon</Title>

            <Casting cast={cast} />

            <Text>Some info about the play</Text>
        </>
    )
}
