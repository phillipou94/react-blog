import styled from 'styled-components'
import React from 'react'


const SubscribeButtonStyle = styled.button`
    text-align: center;
    width:150px;
    padding: 8px;
    border: 2px solid;
    border-color: #6F92ED;
    background-color: white;
    font-family: 'Raleway', sans-serif;
    color: #6F92ED;

    :hover {
        cursor:pointer;
        color: white;
        background-color:#6F92ED;
    }
`
const openBlog = (category) => {
    var url = "https://bookie.substack.com/subscribe?"
    window.location.href=url;
  }

export const SubscribeButton = ({ category }) => {

    return (
        <SubscribeButtonStyle onClick={() => openBlog(category)}>Subscribe</SubscribeButtonStyle>
    )
    
}

