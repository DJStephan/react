import React, { Component } from 'react'
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import styled from 'styled-components'
import '../../index.css'
// import './index.css'
//import Container from '../../Components/Elements/WholePageContainer'
import lake from '../../images/astronomy-constellation.jpg'

const Container =  styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100vw;
  height: 100vh;
  background-size: 100% 100%;
  background-image: url(${lake});
`

const Content = styled.div`
    display: flex;
    justify-content: center;
    overflow: hidden;
    color: white;
    flex-direction: column;
    font-size: 40px;
    align-items: baseline;
    height: 100%;
    width: 66%;
    position: absolute;
    right: 0px;
    font-family: 'Jura', sans-serif;
`


class Home extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Zoom delay='1000'>
                        <p>
                            Developing
                    </p>
                    </Zoom>
                    <Zoom delay='2000'>
                        <p>
                            And
                    </p>
                    </Zoom>
                    <Zoom delay='3000'>
                        <p>
                            Visualizing
                    </p>
                    </Zoom>
                    <Zoom delay='4000'>
                        <p>
                            Embedded Solutions
                    </p>
                    </Zoom>
                </Content>
            </Container>
        )
    }
}

export default Home

