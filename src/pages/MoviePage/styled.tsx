import colors from "consts/colors";
import styled from "styled-components";

export const Wrapper = styled.div`
height: auto;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding: 20px;
`


export const SearchMovie = styled.input`
    width: 300px;  
    height: 40px;
    border: 1px solid #ccc;
`

export const MovieImg = styled.img`
    width: 100%; 
    height: 300px;
    object-fit: cover;
    margin: 10px 0;
`

export const MovieItems = styled.div`
    display: flex;  
    margin: 20px;
    padding: 10px;
    flex-wrap: wrap;
    gap: 20px;
`

export const MovieList = styled.div`
    display: flex;  
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
`

export const MovieItem = styled.div`
    width: 250px;  
    display: flex;  
    flex-direction: column;
    align-items: center;
    margin: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

`

export const MovieTitle = styled.p`
    height: auto;
    min-height: 50px;
    text-align: center; 
    margin-top: 20px;
    color: #333;
    cursor: pointer;
    &:hover {
        color: #007BFF;
    }
        margin-bottom: 10px;
`

export const MovieInfo = styled.div`
    display: flex;  
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
    padding: 0 10px;
`

export const SearchContent = styled.div`
    display: flex;
    height: auto;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

export const SearchButton = styled.button`
    background-color: ${colors.primary};
    height: 40px;
    border: none;
    padding: 0 5px;
    color: ${colors.white};
    cursor: pointer;
`

export const MovieRadio = styled.input`
    margin-right: 5px;
`

export const RadioContainer = styled.div`
    display: flex; 
    gap: 10px;
    margin-left: 20px;
`