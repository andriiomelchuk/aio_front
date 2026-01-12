import styled from "styled-components";

export const LanguageItems = styled.div`
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
        background-color: #076aebff;      
        color: white;
        cursor: pointer;
}
    ul {
        list-style-type: none;
        padding: 0;
        display: flex;
        justify-content: center;
    }   
    li {
        margin: 0 5px;  
        display: flex;
        align-items: center;
        position: relative;
    }
        li.adding{
            input {
                padding: 10px;  
                border: 1px solid #ccc;
                border-radius: 5px;
            }
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

export const DeleteButton = styled.div`
border: none;
background-color: orange;
color: white;
cursor: pointer;
position: absolute;
right: 0;
top: 0;
line-height: 5px;
height: 10px;
width: 10px;
display: flex;
align-items: center;
justify-content: center;
font-size: 8px;
vertical-align: middle;
border-radius: 50%;`


// export const PopularStars = styled.div`
// margin-top: 10px;
// font-weight: bold;
// `
