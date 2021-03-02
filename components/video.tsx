import React from 'react'

interface videoProps {
    url: string
    width?: number
    height?: number
}

export default function Video(props: videoProps) {
    let id: string
    props.url.split('?').forEach((element) => {
        if (element.slice(0, 2) === 'v=') {
            id = element.slice(2)
        }
    })

    return (
        <div
            dangerouslySetInnerHTML={{
                __html: `<iframe
                        width='${props.width || 520}'
                        height='${props.height || 315}'
                        src='https://www.youtube.com/embed/${id}'
                        frameborder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowfullscreen
                    />`,
            }}
        />
    )
}
