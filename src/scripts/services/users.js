import { url } from "/src/scripts/variables.js"

async function getUser(userSearch) {
    const response = await fetch(`${url}/${userSearch}`)
    return await response.json()
}

export { getUser }