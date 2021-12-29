import React from 'react'
import styled from 'styled-components'

const Metadata = styled.div`
    font-size:0.8em;
    font-family: 'Raleway', sans-serif;
`



export const CardMetadata = ({ date, time }) => (
    <Metadata>
        <p>{date} | {time} min</p>
    </Metadata>
)


