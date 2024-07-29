import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
gap:10px;
margin:30px 0px;
`

const Avatar = styled.img`
    width:50px;
    height:50px;
    border-radius:50%;

`

const Details = styled.div`
    color: ${({ theme }) => theme.text};

    display: flex;
    flex-direction:column;
    gap:10px;
`

const Name = styled.span`
font-size: 13px;
font-weight: 500;

`
const Date = styled.span`
font-size:12px;
font-weight:400;
color: ${({ theme }) => theme.textSoft};
margin-left:5px;
`
const Text = styled.span` 
 font-size:14px; 
`


const Comment = () => {
  return (
    <Container  >
        <Avatar src="https://i.pravatar.cc/300" />
        <Details>
            <Name>John Doe

            <Date>1 hour ago</Date> 
            </Name>
            <Text>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla a</Text>
        </Details>
    </Container>
  )
}

export default Comment