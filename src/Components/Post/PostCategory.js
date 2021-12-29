import React from 'react'
import styled from 'styled-components'

const StyledCategory = styled.a`
    color:#6F92ED;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
`

export const PostCategory = ({category}) => (
  <StyledCategory>
    {category}
  </StyledCategory>
)