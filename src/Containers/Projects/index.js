import React, { Component } from 'react'
import styled from 'styled-components'
import background from '../../images/project-background.jpg'
import Div from '../../Components/Elements/BioDiv'
import Link from '../../Components/Elements/link'

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
      url(${background}); 
    background-size: 100% 100%;
`

class Projects extends Component {
    
    render() {
        return (
            <Container>
                <Div style={{overflowY : 'auto'}}>
                    <h1>
                        Java Assessment - SmartShare
                    </h1>
                    <p>
                    For this assessment, a command-line interface application 
                    for 'securely' storing files was created. Files are uploaded with a 'password'. If 
                    another user wants to download the file, they must provide the file name and password 
                    in order to download it. The application is split into two parts - the client and 
                    the server. It has support for concurrency using the Java library's concurrency 
                    API and stores files and related information in a relational database.
                    </p>
                    <Link href = 'https://github.com/cooksystemsinc/java-assessment-smart-share-DJStephan#java-assessment---smartshare'>See it on Github!</Link>
                
                    <h1>Spring Assessment - Social Media Clone</h1>
                    <p>
                    For this assessment, a RESTful API was implemented using Spring Boot, 
                    JPA, and Postgresql. Specifically, an API was implemented that exposes 
                    operations for social media data that resembles the conceptual model of Twitter.
                    </p>
                    <p>
                    This API was implemented from scratch, working from a series of endpoint specifications 
                    to develop a mental model of the data. A suitable database schema as well as  
                    Spring services, and controllers to handle requests were developed to perform validation and business 
                    logic, and to transform data between the API and database models.
                    </p>
                    <Link href = 'https://github.com/cooksystemsinc/social-media-assessment-DJStephan'>See it on Github!</Link>

                    <h1>JavaScript Assessment - Dev Duel</h1>
                    <p>
                    For this assessment, a small full-stack application that interfaces with 
                    GitHub's API in order to aggregate, transform, and display a given user's 
                    profile and repository data was developed.
                    </p>
                    <p>
                    A web application along with a supporting API to get 
                    data for a given user's GitHub profile was implemented. The backend was 
                    implemented as a Node API using Express that calls GitHub's API to fetch 
                    data necessary to derive/display the data specified. Users can see a home 
                    page where they can choose between two options: inspect or duel.
                    </p>
                    <Link href = 'https://github.com/cooksystemsinc/js-assessment-dev-duel-DJStephan'>See it on Github!</Link>

                    <h1>React Assessment - Personal Portfolio Website (This Site!!!)</h1>
                    <p>
                    This assessment served as the capstone of the interpersonal and technical 
                    lecture modules by combining the "Tell Your Story" module and the React 
                    front-end development module. This portfolio page contains my biography, story, 
                    resume, descriptions of the assignments and assessments I've completed, 
                    and professional images. 
                    </p>
                    <Link href = 'https://github.com/cooksystemsinc/react-assessment-DJStephan'>See it on Github!</Link>

                </Div>
            </Container>
        )
    }
}

export default Projects