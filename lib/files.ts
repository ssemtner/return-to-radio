import fs from 'fs'
import { cwd } from 'process'

export function getAllPlays() {
    return fs
        .readdirSync(`${cwd()}/_plays/`)
        .map((item) => item.split('.json')[0])
}

export function getRoutes() {
    return getAllPlays().map((item) => {
        const data = require(`../_plays/${item}.json`)

        return {
            name: data.title,
            description: data.description,
            path: `/plays/${item}`,
        }
    })
}
