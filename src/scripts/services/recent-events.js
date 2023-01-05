import { url, numberEvents } from "/src/scripts/variables.js"

async function getRecentEvents(userSearch) {
    const response = await fetch(`${url}/${userSearch}/events?per_page=${numberEvents}`)
    return await response.json()
}

export { getRecentEvents }