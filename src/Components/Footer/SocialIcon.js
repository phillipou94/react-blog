import styled from 'styled-components'
import React from 'react'


const Icon = styled.a`
    text-decoration:none;
    img {
        max-width: 20px;
        max-height: 20px;
        margin:0px 10px;
    }
    
`

export const SocialIcon = ({href, image_url}) => {

    
    return (
        <Icon target="_blank" rel="noopener noreferrer" href={href}>
            <img src= {image_url} />
        </Icon>
    );

};
   

