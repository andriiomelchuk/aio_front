import { T_PlayerResult } from "types/Types";
import PlayerPreview from "./PlayerPreview";
import { PlayerH1, PlayerH3, PlayerLi, PlayerUl } from "./styled";



const Player = ({label, score, profile}: T_PlayerResult) => {
     if(!profile) return null;
    return (
        <div>
            <PlayerH1 className='header'>{label}</PlayerH1>
            <PlayerH3 style={{textAlign: "center"}}>Score: {score}</PlayerH3>
            <PlayerPreview userName={profile.login!} avatar={profile.avatar_url}>
                <PlayerUl className='space-list-items'>
                    {profile.name ? <PlayerLi>Name: {profile.name}</PlayerLi> : null }
                    {profile.location ? <PlayerLi>Location: {profile.location}</PlayerLi> : null }
                    {profile.company ? <PlayerLi>{profile.company}</PlayerLi> : null }
                    <PlayerLi>Followers: {profile.followers}</PlayerLi>
                    <PlayerLi>Following: {profile.following}</PlayerLi>
                    <PlayerLi>Public repos: {profile.public_repos}</PlayerLi>
                    {profile.blog ? <PlayerLi><a href={profile.blog} target='_blank'>{profile.blog}</a></PlayerLi> : null }
                </PlayerUl>
            </PlayerPreview>
        </div>
    )
}

export default Player