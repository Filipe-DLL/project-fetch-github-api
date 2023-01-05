import { getUser } from "./src/scripts/services/users.js"
import { getRepositories } from "./src/scripts/services/repos.js"
import { getRecentEvents } from "./src/scripts/services/recent-events.js"

import { user } from "./src/scripts/objects/user.js"
import { screen } from "./src/scripts/objects/screen.js"

document.querySelector("#btn-search").addEventListener("click", () => {
    const userSearch = document.querySelector("#input-search").value
    if (validadeEmptyInput(userSearch)) return
    showUserProfile(userSearch)
})

document.querySelector("#input-search").addEventListener("keyup", (e) => {
    const userSearch = e.target.value
    const key = e.which || e.keyCode
    const enterKeyPressed = key === 13

    if (enterKeyPressed) {
        if (validadeEmptyInput(userSearch)) return
        showUserProfile(userSearch)
    }
})

function validadeEmptyInput(userSearch) {
    if (userSearch.length === 0) {
        alert("preencha o campo com o nome do usuário do GitHub")
        return true
    }
}

async function showUserProfile(userSearch) {

    let userResponse = await getUser(userSearch)
    
    if (userResponse.message === "Not Found") {
        screen.renderNotFound()
        return
    }
    
    let repositories = await getRepositories(userSearch)
    let recentEvents = await getRecentEvents(userSearch)

    user.setInfo(userResponse)
    user.setRepositories(repositories)
    user.setRecentEvents(recentEvents)

    screen.renderUser(user)

}