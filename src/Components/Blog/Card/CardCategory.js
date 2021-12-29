import React from 'react'
import styled from 'styled-components'

const StyledCategory = styled.a`
  font-size:0.8em;
  font-family: 'Raleway', sans-serif;
  color:#6F92ED;
  text-decoration: none;
  :visited {
    font-size:0.75em;
    font-family: 'Raleway', sans-serif;
    color:#6F92ED;
    text-decoration: none;
  }
  :hover {
    text-decoration:underline;
  }
`

export const CardCategory = ({ value }) => (
  <StyledCategory key={value.id} href="#">
    {value.name}
  </StyledCategory>
)