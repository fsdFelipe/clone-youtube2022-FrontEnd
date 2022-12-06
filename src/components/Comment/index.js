import React from "react";
import styled from "styled-components";

const Container = styled.div`
display: flex;
gap: 10px;
margin: 30px 0px;
`
const Avatar = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`
const Details = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
color: ${({theme}) => theme.text};
`
const Name = styled.span`
font-size: 13px;
font-weight: 500;
`
const Date = styled.span`
font-size: 12px;
font-weight: 400;
color: ${({theme}) => theme.soft};
margin-left: 5px;
`
const Text = styled.span`
font-size: 14px;
`

const Comment = () => {
    return(
        <Container>
         <Avatar src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Black-Magic-Big-Boy.jpg"/>
         <Details>
            <Name>Felipe <Date>1 day ago</Date></Name>
            <Text>
                Comentario  exemplo, teste para ver se o componente esta funcionando corretamente
            </Text>
         </Details>
        </Container>
    )
}

export default Comment