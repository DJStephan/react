import React, { Component } from 'react'
import styled from 'styled-components'
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';


const RevealContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    width: 66%;
    position: absolute;
    right: 0px;

`


class Reveal extends Component{
    constructor () {
        super()
        this.state = {
          isHidden: true
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(state => ({
            isHidden : !state.isHidden
        }))
    }

    render(){
        return (
            <RevealContent>

                <button onClick={this.handleClick}>
                    show section
                </button>
                
                {!this.state.isHidden &&
                    <Zoom>
                        <p>
                            hello world!
                </p>
                    </Zoom>}
                
            </RevealContent>
        )
    }
    
}

export default Reveal