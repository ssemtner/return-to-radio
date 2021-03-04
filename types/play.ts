import Cast from './cast'

type Play = {
    title: string
    team: string
    url: string
    liveUrl: string
    date: string
    complete: boolean
    live: boolean
    description: string
    cast: Cast
}

export default Play
