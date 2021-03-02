import Image from 'next/image'
import React from 'react'
import { Typography } from 'antd'

const { Title } = Typography

export default function Home() {
    return (
        <div style={{ textAlign: 'center' }}>
            <Title>More Information Coming Soon!</Title>
            <img
                src='/poster.png'
                style={{
                    maxWidth: '90%',
                    maxHeight: '90%',
                    bottom: '0',
                    left: '0',
                    margin: 'auto',
                    overflow: 'auto',
                    position: 'fixed',
                    right: '0',
                    top: '0',
                    objectFit: 'contain',
                }}
            />
        </div>
    )
}
