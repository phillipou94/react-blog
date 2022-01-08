import styled from 'styled-components'
import { SocialIcon } from './SocialIcon';
import React from 'react'

import Facebook_SRC from '../../Assets/Facebook-black.svg'
import Substack_SRC from '../../Assets/substack.svg'
import Linkedin_SRC from '../../Assets/Linkedin-black.svg'





const FooterWrapper = styled.div`
    max-width: 100%;
    width: 100%;
    margin-top:100px;
    padding-top: 20px;
    padding-bottom: 20px;
    display:flex;
    justify-content: center;
    align-items: center;
`


export const Footer = () => {

    
    return (
        <FooterWrapper> 
            <SocialIcon href={"https://www.facebook.com/phillip.ou/"} image_url={Facebook_SRC} />
            <SocialIcon href={"https://bookie.substack.com/"} image_url={Substack_SRC} />
            <SocialIcon href={"https://www.linkedin.com/in/phillipou/"} image_url={Linkedin_SRC} />
        </FooterWrapper>

    );

};