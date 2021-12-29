import React from 'react'
import styled from 'styled-components'

const Metadata = styled.div`
    font-family: 'Raleway', sans-serif;
    margin-top:-15px;
    margin-bottom:20px;
`



export const PostMetadata = ({ date, time }) => (
    <Metadata>
        <p>{date} | {time} min</p>
    </Metadata>
)


