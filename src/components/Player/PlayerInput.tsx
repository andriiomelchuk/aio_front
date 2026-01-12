import { useEffect, useState } from "react";
import { T_PlayerInputProps } from "types/Types";
import { PlayerButton, PlayerInputs, PlayerLabel } from "./styled";




const PlayerInput = ({label, id, onSubmit}: T_PlayerInputProps) => {

    
    // console.log("asdasdasd " + id)
    const [userName, setUserName] = useState<string>("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        onSubmit(id, userName);
        // console.log(id + " " + userName)
    }

    return (
        <form className='column' onSubmit={handleSubmit}>
            <PlayerLabel className='header' htmlFor={id}>{label}</PlayerLabel>
            <PlayerInputs
                type="text"
                id={id}
                placeholder='Github username'
                autoComplete='off'
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
            />
            <PlayerButton className='button' disabled={!userName.length}>Find User</PlayerButton>
        </form>
    )

}

export default PlayerInput;