import { Menu } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import Route from '../types/route'

export default function Navbar() {
    const router = useRouter()

    const routes: Route[] = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'The Case of the Dead Adventures',
            path: '/plays/the-case-of-the-dead-adventuress',
        },
        {
            name: 'Test',
            path: '/plays/test',
        },
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
