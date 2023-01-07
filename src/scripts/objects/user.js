const user = {
    avatarUrl: "",
    name: "",
    login: "",
    bio: "",
    followers: "0",
    following: "0",
    repositories: [],
    recentEvents: [],
    setInfo(userResponse){
        this.avatarUrl = userResponse.avatar_url
        this.name = userResponse.name
        this.login = userResponse.login
        this.bio = userResponse.bio
        this.followers = userResponse.followers
        this.following = userResponse.following
    },
    setRepositories(repositories){
        this.repositories = repositories
    },
    setRecentEvents(recentEvents){
        this.recentEvents = recentEvents
    }
}

export { user }