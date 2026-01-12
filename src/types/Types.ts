

export interface I_User {
    id: number,
    avatar_url: string,
    login: string,
    name: string
};

export type T_PlayerInputProps = {
    label: string,
    id: string,
    onSubmit: (id: string, value: string) => void
};


export type T_PlayerPreviewProps = {
    avatar: any,
    userName: any,
    children: any
};

export type T_PlayerData = {
    playerOneName: string,
    playerTwoName: string,
    playerOneImage: null,
    playerTwoImage: null
};

export type T_BattleResult = {
    score: number;
    profile: T_Profile;
};

export interface T_PlayerResult {
    label: string;
    score: number;
    profile: T_Profile
};


export type T_Profile = {
    login: string;
    avatar_url: string;
    name?: string;
    location?: string;
    company?: string;
    followers: number;
    following: number;
    public_repos: number;
    blog?: string;
};

export type T_GithubRepo = {
    id: number
    name: string
    full_name: string
    html_url: string
    stargazers_count: number
    owner: {
        login: string
        avatar_url: string
    }
};

export type T_GithubSearchResponse<T> = {
    items: T[]
}
