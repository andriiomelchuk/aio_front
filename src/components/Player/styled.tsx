import colors from "consts/colors";
import styled from "styled-components";

export const PlayerContainer = styled.div`
height: auto;
width: 300px;
margin-top: 30px;
display: flex;
flex-direction: column;

`

export const PlayerMain = styled.div`
display:flex;
flex-direction: column;
align-items: center;
`

export const PlayerImg = styled.img`
width:auto;
height:auto;
`


export const PlayerName = styled.div`
font-size: 24px;
margin-top: 10px
`

export const PlayerButton = styled.button`
background-color: ${colors.primary};
border: none;
padding: 5px 10px;
border-radius: 5px;
margin-left: 5px;
color: ${colors.white}
`

export const PlayerInputs = styled.input`
padding: 5px 10px;
border-radius: 5px;
margin-left: 5px;
`

export const PlayerLabel = styled.label`
padding: 5px 10px;
border-radius: 5px;
margin-right: 5px;
font-size: 16px;
font-weight: bold;
`

export const PlayerUl = styled.ul`
list-style: none;
padding: 0;
margin-top: 20px;
`   

export const PlayerLi = styled.li`
margin-bottom: 10px;        
font-size: 14px;
`

export const PlayerH1 = styled.h1`
font-size: 26px;    
margin-bottom: 10px;
text-align: center;
`

export const PlayerH3 = styled.h3`
font-size: 18px;
margin-bottom: 10px;
text-align: center;
`