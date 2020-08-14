import React, { Component } from 'react'
import { Main } from '../main'
import styled from 'styled-components'

const Box = styled.div`
display:flex;
align-items: center;
justify-content: center;
height:90vh`;

export class Portfolio extends Component {

    constructor(){
        super();
        this.state = {
            curr : 0,
            states : ["animate__fadeInLeft", "animate__fadeInLeft", "animate__fadeInLeft"]
        }
    }

    handleLeftClick = () => {
        var temp = this.state.curr;
        var tempstate=this.state.states;
        for(var i=0; i<tempstate.length; i++){
            if(i===temp){
                tempstate[temp] = "animate__fadeOutLeft";
            }else{
                tempstate[i] = "animate__fadeInRight";
            }
        }
        this.setState({states:tempstate})
        setTimeout(() => {
            this.setState({curr:(tempstate.length+temp-1)%tempstate.length})
        }, 250);
    }

    handleRightClick = () => {
        var temp = this.state.curr;
        var tempstate=this.state.states;
        for(var i=0; i<tempstate.length; i++){
            if(i===temp){
                tempstate[temp] = "animate__fadeOutRight";
            }else{
                tempstate[i] = "animate__fadeInLeft";
            }
        }
        this.setState({states:tempstate})
        setTimeout(() => {
            this.setState({curr:(temp+1)%tempstate.length})
        }, 250);
    }

    render() {
        return (
            <Box>
                <div style={{'height': 'auto'}}>
                    <svg style={{'fontSize':'3em','stroke': 'white', 'fill': 'white', 'cursor':'pointer', 'margin':'0 -48px 0 0' }} 
                        onClick={this.handleLeftClick}
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/>
                    </svg>
                </div>
                <Main 
                    curr={this.state.curr}
                    states={this.state.states}
                />
                <div>
                    <svg style={{'fontSize':'3em','stroke': 'white', 'fill': 'white', 'cursor':'pointer','margin':'0 0 0 -48px' }}
                        onClick={this.handleRightClick} 
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
                    </svg>
                </div>
            </Box>
        )
    }
}

export default Portfolio
