import { url, numberRepositories } from "/src/scripts/variables.js"

async function getRepositories(userSearch) {
    const response = await fetch(`${url}/${userSearch}/repos?per_page=${numberRepositories}`)
    return await response.json()
}

export { getRepositories }