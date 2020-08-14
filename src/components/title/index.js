import React from 'react'
import styled from 'styled-components'
import config from '../config'
import { MainImage } from '../mainImage'

const TitleHead = styled.div`
    width: 100%;
    display: flex;
    flex-direction: rows;
    margin: 0 0 0 0;
    align-items:center;
    justify-content: ;
`;

const Image = styled.div`
padding:15px;
width:45%`;

const Text = styled.div`
font-size:1.5em;
padding:25px;
width:55%`;

const getText = (text) => {
    var item = []
    text.forEach(element => {
        item.push(element);
        item.push(<br key={element[0]}/>)
    });
    return item;
}

export function Title() {
    return (
        <TitleHead>
            <Text className="animate__animated animate__fadeInLeft">
                <span style={{'fontSize':'2em', 'color':'red'}}>{config.intro}</span> {config.name}
                <br/>
                <span style={{'fontSize':'0.56em', 'maxWidth':'50px'}}>{getText(config.extraInfo)}</span>
            </Text>
            <Image className="animate__animated animate__fadeInRight">
                <MainImage/>
            </Image>
        </TitleHead>
    )
}

export default Title
