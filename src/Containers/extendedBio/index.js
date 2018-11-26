import React, { Component } from 'react'
import styled from 'styled-components'
import '../../index.css'
import boat from '../../images/boat.jpg'
import professional from '../../images/professional.jpg'
import professionalImage from '../../Components/Elements/proImage'
import Content from '../../Components/Elements/Content'
import BioDiv from '../../Components/Elements/BioDiv'
import background from '../../images/project-background.jpg'


const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  min-height: 0;
  background-size: cover;
  background: linear-gradient(
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)), 
      url(${boat}); 
    background-size: 100% 100%;
`

class ExtendedBio extends Component {
    render() {
        return (
            <Container>
                    <BioDiv style={{overflowY : 'auto'}}>
                        <h1>About Me</h1>
                        <p>
                            
                        I was born and raised in a small Northern Michigan town, Traverse City. My father is an 
                        accountant and my mother is a nurse, although she has worked with my father for my entire 
                        life. I have two older sisters, Linda and LeeAnn. Linda is the oldest and is a reverend in 
                        the United Methodist Church, while LeeAnn is an elementary school Principal.                               
                        </p>
                        <p>
                        I attended Traverse City Central High School where I played football and learned that I was 
                        pretty good at math. In the summers I would mow lawns to make money and try to spend as much 
                        time outdoors enjoying the best the Northern Michigan has to offer. Many days were spent 
                        exploring the Sleeping Bear Dunes National Lakeshore, floating down a river in a tube, or at 
                        the beach playing volleyball.                       
                        </p>
                        <p>
                        One of my first jobs was at at a boat rental, where I spent seven summers and eventually became 
                        the manager. During my time at the boat rental I learned what anyone who’s own a boat figures out, 
                        they break, and often. But, when you rent those boats for a living it’s not really feasible to take 
                        a boat to a mechanic every time an issue arises, so you learn to fix things.
                        </p>
                        <p>
                        During my time at the boat rental I also got interested in motorcycles, and quickly discovered that 
                        just like boats, they required a considerable amount of maintenance, and seeing as how I didn’t have 
                        much by the way of finances, if I wanted to keep riding I would need to teach myself how to fix them.
                        During this time I learn that I probably like working on motorcycles just as much as I liked riding them.
                        </p>
                        <p>
                        Knowing that I was good at math and that I enjoyed wrenching I decided to pursue a degree in Mechanical 
                        Engineering at Michigan Technological University. Chasing a degree in Mechanical Engineering was a 
                        rewarding experience. Not only did I find the subject matter interesting but allowed me the opportunity 
                        to meet some really awesome people and to even take a trip to Russia as part of a Russian language class. 
                        I had the pleasure of visiting cities like Volgograd (formerly known as Stalingrad) where we visited Mamayev 
                        Kurgan and the Alley of Heros 
                        </p>
                        <p>
                        During my time at MTU I discovered that I liked writing code, and would take every opportunity in my schoolwork 
                        I could to do so. In my last semester I got to enroll in an autonomous systems class. The class was based around 
                        a semester long project where we programmed small robots to navigate a small town. My robot had to be able to stay 
                        in its lane, stop at stop signs and lights, and of course, avoid running into the town's residents, rubber ducks. 
                        During this class I got to see how I could write code and have that code control other objects. I could use this 
                        code to obtain information from sensors and make decisions about how to turn the motors. I liked this experience 
                        so much I began to look into careers in software development and quickly found that the principles of object oriented 
                        programming were very similar to what I was doing with the robot, but instead of interacting with physical objects 
                        like sensors and motors, you could interact with objects in your own software, that you get to design!
                        </p>
                    </BioDiv>
            </Container>
        )
    }
}

export default ExtendedBio 