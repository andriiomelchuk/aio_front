import axios from "axios";
import { I_User } from "types/Types";

const handleError = (error: any) => console.error(error)




export const getProfile = async (userName: string): Promise<I_User> => {
   const response = await axios.get<I_User>(`https://api.github.com/users/${userName}`)
    return response.data

}


const getRepos = (userName: string) => {
    return axios.get(`https://api.github.com/users/${userName}/repos`)
        .then(repos => repos.data)
        .catch(handleError)
}

// const getRepos = (userName: string) => {
//     return axios.get(`https://api.github.com/users/${userName}/repos`)
//         .then(repos => repos.data)
//         .catch(handleError)
// }

const getUserData = (userName: string) => {
    return Promise.all([
        getProfile(userName),
        getRepos(userName)
    ])
        .then(([profile, repos]) => {
            return {
                profile,
                score: calculateStore(profile, repos)
            }
        })
}

const calculateStore = (profile:any, repos:any) => {
    const followers = profile.followers;
    const totalStars = getStarCount(repos);
    return followers + totalStars;
}

const getStarCount = (repos:any) => {
    return repos.reduce((acc:any, repo:any) =>  acc + repo.stargazers_count, 0)
}

const sortPlayers = (players:any) => players.sort((a: any, b: any) => b.score - a.score);

export const makeBattle = (players: any) => {
    return Promise.all(players.map(getUserData))
           .then(sortPlayers)
           .catch(handleError)
}


