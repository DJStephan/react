import React, { Component } from 'react'
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import styled from 'styled-components'
import '../../index.css'
//import Container from '../../Components/Elements/WholePageContainer'
import motorcycle from '../../images/adventure-bike.jpg'
import professional from '../../images/professional.jpg'
import professionalImage from '../../Components/Elements/proImage'
import Content from '../../Components/Elements/Content'
import lake from '../../images/astronomy-constellation.jpg'
import BioDiv from '../../Components/Elements/BioDiv'

const style = {

    opacity: '1'
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)), 
      url(${motorcycle}); 
    background-size: 100% 100%;
`

class Bio extends Component {
    render() {
        return (

            <Container>
                <Content>

                    <BioDiv>
                        <h1>My story</h1>
                        <p><img src={professional} style={professionalImage} />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit libero at velit fermentum, quis varius magna faucibus. Nullam placerat tempor quam, at pellentesque nisi rutrum a. Cras ut eros mollis, accumsan dui et, aliquet nunc. Ut porttitor nec quam eget dignissim. Maecenas vulputate in neque at consectetur. Nullam dignissim ut neque sit amet accumsan. Donec sodales velit vel erat iaculis, nec dictum mi commodo. Fusce malesuada ullamcorper turpis vitae sollicitudin. Sed rhoncus justo eu risus convallis pulvinar. Vestibulum at arcu ac metus facilisis efficitur. Curabitur malesuada sit amet purus eu sollicitudin. Donec viverra massa eget enim efficitur, in bibendum felis tincidunt. Nunc feugiat arcu id dolor scelerisque blandit sed quis sapien. Donec rutrum velit id turpis tristique tincidunt vulputate ut felis. Donec in nibh ac neque egestas bibendum vitae cursus turpis. Fusce ornare lacus at lobortis posuere.
                                </p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit libero at velit fermentum, quis varius magna faucibus. Nullam placerat tempor quam, at pellentesque nisi rutrum a. Cras ut eros mollis, accumsan dui et, aliquet nunc. Ut porttitor nec quam eget dignissim. Maecenas vulputate in neque at consectetur. Nullam dignissim ut neque sit amet accumsan. Donec sodales velit vel erat iaculis, nec dictum mi commodo. Fusce malesuada ullamcorper turpis vitae sollicitudin. Sed rhoncus justo eu risus convallis pulvinar. Vestibulum at arcu ac metus facilisis efficitur. Curabitur malesuada sit amet purus eu sollicitudin. Donec viverra massa eget enim efficitur, in bibendum felis tincidunt. Nunc feugiat arcu id dolor scelerisque blandit sed quis sapien. Donec rutrum velit id turpis tristique tincidunt vulputate ut felis. Donec in nibh ac neque egestas bibendum vitae cursus turpis. Fusce ornare lacus at lobortis posuere.
                        </p>
                    </BioDiv>

                </Content>
            </Container>
        )
    }
}

export default Bio 