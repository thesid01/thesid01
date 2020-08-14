import React, { Component } from 'react'
import styled from 'styled-components'
import config from  '../config'
import './index.css'

const Card = styled.div`
width:75%;
max-width:1000px;
height: auto;
overflow: hidden;
padding: 32px;
margin: 48px auto 0;
font-family: Quicksand, arial, sans-serif;
box-shadow: 0 0 20px rgba(255, 255, 255, .05), 0 0px 40px rgba(255, 255, 255, .08);
border-radius: 5px;
background: #BFACC8;
`;

const ExtraInfo = styled.div`
font-size:0.8em`;

const UL = styled.ul`
flex-direction: column;
display: flex;`;

// const ULROW = styled.ul`
// display: flex;;
// flex-direction: row;
// list-style-type:none;
// color:#282c34;`;

const LI = styled.li`
font-size:0.75em;
margin-bottom:10px;
align-items: center;`;

// const LISkills= styled.li`
// font-size:1em;
// margin:10px;
// align-items: center;`;


const Location = styled.div`
float:right;
`;

const Description = styled.div`
list-style-type:none;
`;

export class Main extends Component {

    generateEdu = () => {
        var items = []
        var i=0;
        config.education.forEach(element => {
        items.push(<LI key={"edu"+i}>{element.college}
                        <ExtraInfo>
                            {element.degree} - {element.course}
                            <Location>{element.location}</Location>
                        </ExtraInfo>
                    </LI>);
            i++;
        });
        return items
    }

    generateExp = () => {
        var i=0;
        const getDescription = (elem)=>{
            var des = []
            elem.forEach(element => {
            des.push(<li key={"exp-des"+i}>
                {element}
                </li>);
                i++;
            });
            return des;
        };
        var items = []
        i=0;
        config.experience.forEach(element => {
        items.push(<LI key={"exp"+i}>
                        {element.title} - 
                        <b><em>{element.company}</em></b>
                        <Location style={{'fontSize':'0.8em'}}>{element.location}</Location>
                        <ExtraInfo>
                            <Description><ul>{getDescription(element.description)}</ul></Description>
                        </ExtraInfo>
                    </LI>);
            i++;
        });
        return items
    }
    
    generateSkils = () => {
        var items = []
        var i=0;
        config.skills.forEach(element => {
        items.push(<LI key={"exp-skills"+i}>
                        {element}
                    </LI>);
            i++;
        });
        return items
    }

    render() {
        var curr = this.props.curr,
            states = this.props.states

        if(curr===0){
            return (
                <>
                    <Card className={"animate__animated "+states[0]}>
                        <div className="div-heading">
                            <div style={{'width':'fit-content','margin':'0 auto'}} >Education</div>
                        </div>
                        <UL className="list-item">
                            {this.generateEdu()}
                        </UL>
                    </Card>
                </>
            )
        }else if(curr===1){
            return (
                <>
                    <Card className={"animate__animated "+states[1]}>
                        <div className="div-heading">
                            <div style={{'width':'fit-content','margin':'0 auto'}} >Experience</div>
                        </div>
                        <UL className="list-item">
                            {this.generateExp()}
                        </UL>
                    </Card>
                </>
            )
        }else if(curr===2){
            return (
                <>
                    <Card className={"animate__animated "+states[2]}>
                        <div className="div-heading">
                            <div style={{'width':'fit-content','margin':'0 auto'}} >Skills</div>
                        </div>
                        <UL className="list-item">
                            {this.generateSkils()}
                        </UL>
                    </Card>
                </>
            )
        }
    }
}

export default Main
