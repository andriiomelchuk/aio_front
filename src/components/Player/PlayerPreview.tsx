import { PlayerPreviewProps } from "types/Types";
import { PlayerContainer, PlayerMain, PlayerImg, PlayerName } from "./styled";





const PlayerPreview = ({avatar, userName, children}: PlayerPreviewProps) => {

    return (
        <PlayerContainer>
            <PlayerMain>
                <PlayerImg className='avatar' src={avatar} alt="Avatar"/>
                <PlayerName className='username'>{userName}</PlayerName>
            </PlayerMain>
            {children}
        </PlayerContainer>
    )

}

export default PlayerPreview;