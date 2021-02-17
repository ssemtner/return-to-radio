import { Collapse, List, Typography } from 'antd'
import React from 'react'
import cast from '../types/cast'

const { Text } = Typography

interface panel {
    key: string
    header: string
}

export default function Casting({ cast }: { cast: cast }) {
    const generatePanel = (props) => {
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
        <Collapse bordered={false} style={{ margin: '0 10vw' }}>
            {generatePanel({
                key: 'actors',
                header: 'Actors',
                body: cast.actors.map((e) => e.role + ': ' + e.actor).sort(),
            })}
            {generatePanel({
                key: 'assistantDirectors',
                header: 'Assistant Directors',
                body: cast.assistantDirectors.sort(),
            })}
            {generatePanel({
                key: 'foleyArtists',
                header: 'Foley Artists',
                body: cast.foleyArtists.sort(),
            })}
        </Collapse>
    )
}
