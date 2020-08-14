import React from 'react'
import 'styled-components'
import styled from 'styled-components'
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css"

const Head = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0a1429;
    height:6vh;
`;

const Logo = styled.div`
    width: 25%;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const More = styled.div`
    width: 75%;
    height: 45px;
    display: flex;
    align-items: center;
`;

const UL = styled.ul`
list-style: none;
flex-direction: row;
display: flex;`;

const LI = styled.li`
font-size: 0.7em;
display:flex;
align-items: center;
margin-right:5px`;

export function Header() {
    return (
        <Head>
            <Logo>
            </Logo>
            <More>
                <UL>
                    <LI>
                        <i style={{margin:'0 5px'}} class="fas fa-university"></i>
                          Education
                    </LI>
                    <LI>
                        <i style={{margin:'0 5px'}} class="fas fa-briefcase "></i>
                          Experience
                    </LI>
                    <LI>
                        <i style={{margin:'0 5px'}} class="fas fa-toolbox "></i>
                          Skills
                    </LI>
                </UL>
            </More>
        </Head>
    )
}

export default Header
