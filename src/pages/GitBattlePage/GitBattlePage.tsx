import { Helmet } from "react-helmet";
import { Button, Content, StyledLink,FightImg } from "./styled";
import { useCallback, useState } from "react";
import { PageWrapper, Wrapper } from "App.styled";
import PlayerInput from "components/Player/PlayerInput";
import PlayerPreview from "components/Player/PlayerPreview";
import { T_PlayerData } from "types/Types";
import fightIcon from "img/fight.png"



const GitBattlePage: React.FC = () => {

    const [playerData, setPlayerData] = useState<T_PlayerData>({
        playerOneName: '',
        playerTwoName: '',
        playerOneImage: null,
        playerTwoImage: null
    })

    const handleSubmit = useCallback((id: string, userName: string) => {
        setPlayerData((prevState) => ({
            ...prevState,
            [`${id}Name`]: userName,
            [`${id}Image`]: `https://github.com/${userName}.png?size200`
        }))

    }, [])

    const handleReset = (id: string) => {
        setPlayerData((prevState) => ({
            ...prevState,
            [`${id}Name`]: '',
            [`${id}Image`]: null
        }))
    }


    return <>
        <Helmet>
            <h1>Github users battle</h1>
        </Helmet>

        <PageWrapper>

            <Wrapper>
            
            <h1>Github Battle Page</h1>

            <Content>
                
                {playerData.playerOneImage ?
                    <PlayerPreview
                        avatar={playerData.playerOneImage}
                        userName={playerData.playerOneName}
                    >
                        <Button className='reset' onClick={() => handleReset('playerOne')}>Reset player</Button>
                    </PlayerPreview> :
                    <PlayerInput
                        label='Player 1'
                        id='playerOne'
                        onSubmit={handleSubmit}
                    />
                }
         
                {playerData.playerTwoImage ?
                    <PlayerPreview
                        avatar={playerData.playerTwoImage}
                        userName={playerData.playerTwoName}
                    >
                        <Button className='reset' onClick={() => handleReset('playerTwo')}>Reset player</Button>
                    </PlayerPreview> :
                    <PlayerInput
                        label='Player 2'
                        id='playerTwo'
                        onSubmit={handleSubmit}
                    />
                }
            </Content>

            {
                playerData.playerOneImage && playerData.playerTwoImage ?
                <StyledLink to={{
                    pathname: 'results',
                    search: `?playerOneName=${playerData.playerOneName}&playerTwoName=${playerData.playerTwoName}`
                }}
                      className='button'><FightImg src={fightIcon} alt="" /> Battle <FightImg src={fightIcon} alt="" /></StyledLink> :
                    null
            }

            </Wrapper>
        </PageWrapper>

    </>
}


export default GitBattlePage;