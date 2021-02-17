import { Menu } from 'antd'
import { route } from 'next/dist/next-server/server/router'
import { useRouter } from 'next/router'
import React from 'react'

interface route {
    name: string
    path: string
}

export default function Navbar() {
    const router = useRouter()

    const routes: route[] = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'Test',
            path: '/test',
        },
        {
            name: 'The Case of the Dead Adventures',
            path: '/plays/the-case-of-the-dead-adventures'
        }
    ]

    return (
        <Menu
            theme='dark'
            mode='horizontal'
            defaultSelectedKeys={[router.pathname]}
            onClick={(e) => router.push(e.key.toString())}
        >
            {routes.map((e) => (
                <Menu.Item key={e.path}>{e.name}</Menu.Item>
            ))}
        </Menu>
    )
}
