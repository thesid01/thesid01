import React from 'react'
import s from './IMG.JPG'
import styled from 'styled-components'
import config from '../config'

const IMG = styled.div`
width: 75%`;

export function MainImage() {
    return (
        <IMG>
            <img src={s} style={{'width':'100%', 'filter': 'grayscale(100%)', 'borderRadius':'10px'}} alt={config.imgAlt}>
            </img>
        </IMG>
    )
}

export default MainImage
