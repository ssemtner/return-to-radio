import { Menu } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import Route from '../types/route'

interface NavbarProps {
    routes: Route[]
}

export default function Navbar(props: NavbarProps) {
    const router = useRouter()

    return (
        <Menu
            theme='dark'
            mode='horizontal'
            defaultSelectedKeys={[router.pathname]}
            onClick={(e) => router.push(e.key.toString())}
        >
            {props.routes.map((e) => (
                <Menu.Item key={e.path}>{e.name}</Menu.Item>
            ))}
        </Menu>
    )
}
