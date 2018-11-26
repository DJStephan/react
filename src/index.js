import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './hoc/layout'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'C:/Users/ftd-16/Desktop/code/aboutMe/node_modules/semantic-ui/dist/semantic.min.css';
import Home from './Containers/Home'
import '../src/index.css'
import Bio from './Containers/Bio'
import lake from '../src/images/astronomy-constellation.jpg'
import Resume from './Containers/resume'
import Projects from './Containers/Projects'







ReactDOM.render(
    <Router>
        <Layout>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/myStory' component={Bio} />
                <Route path='/resume' component={Resume}/>
                <Route path='/projects' component = {Projects}/>
            </Switch>
        </Layout>
    </Router>, 
    
    document.getElementById('root'));


