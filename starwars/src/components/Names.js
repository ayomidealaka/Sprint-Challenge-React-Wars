import React from 'react'
import styled from 'styled-components';

const NameSpan = styled.span`
font-size: 1.4em;
margin: 0 auto;
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

`

const Paragraph = styled.div`
font-size: 0.8em;
margin: 2em;
width: 15em;
padding: 1em;
background-color: #4C596C;
white-space: pre-wrap;
display: inline-block;
border: 2px #4C596C solid;
border-radius: 5px;
box-shadow: 1px 2px #888888;
color: white;
`



function Names(props) {
    return (
        <NameSpan>
        <Paragraph><b>{props.name}</b> {'\n'}Born {props.birth_year} {'\n'}{props.gender}</Paragraph>
        </NameSpan>
    )
}





export default Names