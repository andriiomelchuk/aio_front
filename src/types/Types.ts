export type I_User = {
    id: number,
    avatar_url: string,
    login: string,
    name: string
}

export type PlayerInputProps = {
    label: string,
    id: string,
    onSubmit: (id: string, value: string) => void
}


export type PlayerPreviewProps = {
    avatar: any,
    userName: any,
    children: any
}

export type PlayerData = {
    playerOneName: string,
    playerTwoName: string,
    playerOneImage: null,
    playerTwoImage: null
}

export type BattleResult = {
    score: number;
    profile: Profile;
}

export interface PlayerResult {
    label: string;
    score: number;
    profile: Profile
}


export type Profile = {
    login: string;
    avatar_url: string;
    name?: string;
    location?: string;
    company?: string;
    followers: number;
    following: number;
    public_repos: number;
    blog?: string;
}