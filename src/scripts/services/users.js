import { url } from "../variables.js"

async function getUser(userSearch) {
    const response = await fetch(`${url}/${userSearch}`)
    return await response.json()
}

export { getUser }