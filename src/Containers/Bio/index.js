import React, { Component } from 'react'
import styled from 'styled-components'
import '../../index.css'
import motorcycle from '../../images/adventure-bike.jpg'
import professional from '../../images/professional.jpg'
import professionalImage from '../../Components/Elements/proImage'
import Content from '../../Components/Elements/Content'
import BioDiv from '../../Components/Elements/BioDiv'

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
                        I grew up in a small tourist town in Michigan. One of my first jobs was at at a boat rental, 
                        where I spent seven summers and eventually became the manager. During my time at the boat 
                        rental I learned what anyone who’s own a boat figures out, they break, and often. But, when 
                        you rent those boats for a living it’s not really feasible to take a boat to a mechanic every 
                        time an issue arises, so you learn to fix things. During my time at the boat rental I also got 
                        interested in motorcycles, and quickly discovered that just like boats, they required a 
                        considerable amount of maintenance, and seeing as how I didn’t have much by the way of finances, 
                        if I wanted to keep riding I would need to teach myself how to fix them. During this time I learn 
                        that I probably like working on motorcycles just as much as I liked riding them.                                
                        </p>
                        <p>
                        Knowing that I was good at math and that I enjoyed wrenching I decided to pursue a degree in 
                        Mechanical Engineering at Michigan Technological University. During my time at MTU I discovered 
                        that I liked writing code, and would take every opportunity in my schoolwork I could to do so. 
                        In my last semester I got to enroll in an autonomous systems class. The class was based around a 
                        semester long project where we programmed small robots to navigate a small town. My robot had to 
                        be able to stay in its lane, stop at stop signs and lights, and of course, avoid running into the 
                        town's residents, rubber ducks. During this class I got to see how I could write code and have that 
                        code control other objects. I could use this code to obtain information from sensors and make 
                        decisions about how to turn the motors. I liked this experience so much I began to look into careers 
                        in software development and quickly found that the principles of object oriented programming were very 
                        similar to what I was doing with the robot, but instead of interacting with physical objects like 
                        sensors and motors, you could interact with objects in your own software, that you get to design!                        
                        </p>
                        <p>
                        In my investigation of software development I quickly learn that there were many concepts and technologies 
                        that I didn’t have knowledge of, and that’s when I found Cook System’s and their FastTrack’D developer 
                        bootcamp. At FastTrack’D I had the opportunity to learn not only languages like Java and JavaScript but also 
                        the Spring framework,  React, and Redux.
                        </p>
                    </BioDiv>

                </Content>
            </Container>
        )
    }
}

export default Bio 