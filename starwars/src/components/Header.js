import React from 'react';
import styled from 'styled-components'
import Logo from "../starwars_data.png"

const greeting = "WELCOME TO LAMBDA";
const HeaderStyle = styled.div`
width: 100vw;
height:10vh;
background-color: #000;
display: flex;
flex-direction: row;
`
const H1Style = styled.h1`
font-size: 1.2em;
color: white;
display: inline-block;
padding: 0.6em;
padding-left: 3em;
`
const LogoStyle = styled.img`
padding: 2vh;
padding-left: 2em;
width: 6em;
display: flex;
`


const Header = ()=> {
    return (
        <HeaderStyle>
        <LogoStyle src={Logo} />
        <H1Style>{greeting}</H1Style>        
        </HeaderStyle>
    )
}

export default Header;