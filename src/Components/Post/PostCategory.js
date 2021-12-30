import React from 'react'
import styled from 'styled-components'

const StyledCategory = styled.div`
    color:#6F92ED;
    text-decoration: none;
    :hover {
      text-decoration: underline;
      cursor:pointer;
    }
`

export const PostCategory = ({category}) => (
  <StyledCategory>
    {category}
  </StyledCategory>
)