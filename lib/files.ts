import fs from 'fs'
import { cwd } from 'process'

export function getAllPlays() {
    return fs
        .readdirSync(`${cwd()}/_plays/`)
        .map((item) => item.split('.json')[0])
}

export function getRoutes() {
    return getAllPlays().map((item) => {
        return {
            name: require(`../_plays/${item}.json`).title,
            path: `/plays/${item}`,
        }
    })
}
