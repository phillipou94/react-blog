import React from 'react'
import styled from 'styled-components'

const Metadata = styled.div`
    font-size:0.8em;
    font-family: 'Raleway', sans-serif;
    color:#969696;
`



export const CardMetadata = ({ date, time }) => (
    <Metadata>
        <p>{date} | {time} min</p>
    </Metadata>
)


