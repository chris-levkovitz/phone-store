import styled from 'styled-components'


export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 22px;
font-family: sans-serif;
background: var(--main);
border: 1px solid lightblue;
border-color:${props => props.cart ? "var(--mainYellow)": "lightblue"};
color:${prop => prop.cart ? "var(--mainYello)" : "lightblue"};
color: whitesmoke;
border-radius: 5px;
cursor: pointer;
padding: 8px;
margin: 5px;
transition: all 0.5s ease-in-out;
&:hover{
    background-color: whitesmoke;
    color: var(--lightBlue);
    /* background:${prop => prop.cart ? "var(--mainYellow)": "lightblue"};
    color: var(--lightBlue); */
}
&:focus{
    outline: none;
}
`

