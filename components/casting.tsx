import { Collapse, List, Typography } from 'antd'
import React from 'react'
import Cast from '../types/cast'

const { Text } = Typography

interface panel {
    key: string
    header: string
    body: string[]
}

export default function Casting({ cast }: { cast: Cast }) {
    const generatePanel = (props: panel) => {
        return (
            <Collapse.Panel
                key={props.key}
                header={props.header}
                style={{ textAlign: 'left' }}
            >
                <List
                    bordered
                    dataSource={props.body}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                />
            </Collapse.Panel>
        )
    }

    return (
        <Collapse bordered={false} style={{ margin: '0 5vw' }}>
            {generatePanel({
                key: 'assistantDirectors',
                header: 'Assistant Directors',
                body: cast.assistantDirectors.sort(),
            })}
            {generatePanel({
                key: 'actors',
                header: 'Cast',
                body: cast.actors.map((e) => e.role + ': ' + e.actor).sort(),
            })}
            {generatePanel({
                key: 'foleyArtists',
                header: 'Foley Artists',
                body: cast.foleyArtists.sort(),
            })}
        </Collapse>
    )
}
