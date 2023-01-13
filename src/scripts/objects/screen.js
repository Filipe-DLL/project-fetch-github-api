const screen = {
    userProfile: document.querySelector(".profile-data"),

    renderScreen(user) {
        this.userProfile.innerHTML = ""
        this.renderUser(user)
        this.renderRepositories(user)
        this.renderEvent(user)
    },

    renderUser(user) {
        this.userProfile.innerHTML =
        `<div class="info">
            <img src="${user.avatarUrl}" alt="Foto do usuário"/><br>
            <div class="data">
                <h1>${user.name ?? "Não possui nome cadastrado"}</h1>
                <p>${user.login ?? "Não possui login"}</p>
                <p>${user.bio ?? "Não possui bio"}</p>
                <h3>Seguidores:${user.followers} &nbsp;&nbsp; Seguindo:${user.following}</h3>
            </div>
        </div>
        <hr>`
    },

    renderRepositories(user) {
        let repositoriesList = ""

        user.repositories.forEach(element => {
            repositoriesList += `   <li>
                                            <a href="${element.html_url}" target="_blank">
                                            <p>${element.name}</p>
                                            <div class="icons">🍴${element.forks_count}</div>
                                            <div class="icons">⭐${element.stargazers_count}</div>
                                            <div class="icons">👀${element.watchers_count}</div>
                                            <div class="icons">💻${element.language ?? "Não possui linguagem"}</div>
                                            </a>
                                        </li>`
        });

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += ` <div class="repositories section">
                                                        <h2>Repositórios</h2>
                                                        <ul>${repositoriesList}</ul>
                                                    </div>
                                                    <hr>`
        } else {
            this.userProfile.innerHTML += ` <div class="repositories section">
                                                       <h2>Não ha repositórios</h2>
                                                    </div>`
        }
    },

    renderEvent(user) {
        let recentEventsList = ""

        user.recentEvents.forEach(element => {
            if (element.type === "PushEvent") {
                recentEventsList += `<li><p> <span>${element.repo.name}</span> &nbsp;&nbsp; - &nbsp;&nbsp; ${element.payload.commits[0].message}</p></li>`
            } if (element.type === "CreateEvent") {
                recentEventsList += `<li><p> <span>${element.repo.name}</span> &nbsp;&nbsp; - &nbsp;&nbsp; Repositório criado</p></li>`
            }
        })

        if (recentEventsList.length > 0) {
            this.userProfile.innerHTML += ` <div class="events">
                                                            <h2>Eventos</h2>
                                                            <ul>${recentEventsList}</ul>
                                                        </div>`
        } else {
            this.userProfile.innerHTML += ` <div class="events">
                                                             <h2>Não ha Eventos recentes</h2>
                                                        </div>`
        }
    },

    renderNotFound() {
        this.userProfile.innerHTML = `  <div class="info">               
                                            <h1>Usuário nao encontrado</h1>
                                        </div>`
    }
}

export { screen }