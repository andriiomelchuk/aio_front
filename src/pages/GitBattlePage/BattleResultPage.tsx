import { makeBattle } from "components/API/apis";
import Player from "components/Player/Player";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BattleResult } from "types/Types";
import { Content } from "./styled";
import { PageWrapper, Wrapper } from "App.styled";



const BattleResultPage = () => {

    const location = useLocation();

    const [winner, setWinner] = useState<BattleResult | null>(null);
    const [loser, setLoser] = useState<BattleResult | null>(null);



    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        makeBattle([searchParams.get("playerOneName"), searchParams.get("playerTwoName")])
            .then(([winner, loser]) => {
                setWinner(winner);
                setLoser(loser);
            })

    }, [])



    return (
        <PageWrapper>
            <Wrapper>
                <Content>
                    <Player
                        label='Winner'
                        score={winner?.score ?? 0}
                        profile={winner?.profile!}
                    />
                    <Player
                        label='Loser'
                        score={loser?.score ?? 0}
                        profile={loser?.profile!}
                    />
                </Content>
            </Wrapper>
        </PageWrapper>
    )
}

export default BattleResultPage;