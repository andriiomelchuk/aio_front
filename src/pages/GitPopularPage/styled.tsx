import styled from "styled-components";

export const Landuages = styled.div`
height: auto;
display: flex;
justify-content: center;
margin-top: 20px;
width: 500px;
button {
    margin: 5px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;      
    color: white;
    cursor: pointer;
}
`

export const Items = styled.div`
margin-top: 30px;
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 20px;
`

export const PopularUser = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 200px;   
border: 1px solid #ddd;
border-radius: 5px;
padding: 10px;
text-align: center;
img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
    align-self: center;
}
    div {
        margin-top: 5px;
        font-size: .6rem;
    }
`
// export const PopularStars = styled.div`
// margin-top: 10px;
// font-weight: bold;
// `
