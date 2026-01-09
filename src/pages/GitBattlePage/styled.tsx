import colors from "consts/colors";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Content = styled.div`
height: auto;
width: 800px;
display: flex;
justify-content: space-around;
margin-top: 25px;
`


export const Button = styled.button`
margin-top: 15px;
background-color: ${colors.primary};
height: 20px;
border: none;
color: ${colors.white}
`

export const StyledLink = styled(Link)`
background-color:${colors.primary};
boeder: none;
padding: 10px 15px;
margin-top: 50px;
color: ${colors.white};
font-ewight: bold;
font-size: 24px;
display:flex;
align-items:center;
`


export const FightImg = styled.img`
width:20px;
height:20px;
margin:0 10px;
`