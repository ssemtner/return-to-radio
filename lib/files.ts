import fs from 'fs'
import { cwd } from 'process'
import { pathToFileURL } from 'url'
import Play from '../types/play'

export function getAllPlays() {
    return fs
        .readdirSync(`${cwd()}/_plays/`)
        .map((item) => item.split('.json')[0])
}

export function getRoutes() {
    return getAllPlays().map((item) => {
        const data: Play = require(`../_plays/${item}.json`)

        return {
            name: data.title,
            description: data.description,
            path: `/plays/${item}`,
            url: data.liveUrl,
            date: data.date,
        }
    })
}
