import React from 'react'
import 'styled-components'
import styled from 'styled-components'
import config from '../config'

const Foot = styled.div`
    width: 100%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height:10vh;
`;
const MoreFooter = styled.div`
    width: 75%;
    height: 100%;
    display: flex;
    align-items: center;
`;

const UL = styled.ul`
list-style: none;
flex-direction: row;
display: flex;
margin: 0 auto;`;

const LI = styled.li`
font-size: 0.5em;
display:flex;
align-items: center;
margin:0 10px`;

// const I = styled.div``;

export function Footer() {
    return (
        <Foot>
            <MoreFooter>
                <UL>
                    <LI>
                        <a href={config.social.github}>
                            <i className="fab fa-github fa-2x"></i>
                        </a>
                    </LI>
                    <LI>
                        <a href={config.social.linkedin}>
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                    </LI>
                    <LI>
                        <a href={config.social.facebook}>
                            <i className="fab fa-facebook fa-2x"></i>
                        </a>
                    </LI>
                    <LI>
                        <a href={config.social.instagam}>
                            <i className="fab fa-instagram fa-2x"></i>
                        </a>
                    </LI>
                    <LI>
                        <a href={config.social.twitter}>
                            <i className="fab fa-twitter fa-2x"></i>
                        </a>
                    </LI>
                </UL>
            </MoreFooter>
        </Foot>
    )
}

export default Footer
