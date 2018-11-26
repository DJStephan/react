import React, { Component } from 'react'
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import styled from 'styled-components'
import '../../index.css'
import Reveal from '../../Components/Elements/reveal'
import FileViewer from 'react-file-viewer';
import resume from '../../images/Resume.docx'
// import { CustomErrorComponent } from 'custom-error';



const file = resume
const type = 'docx'

class Resume extends Component {
    render(){
        return (
            
            <FileViewer
            fileType={type}
            filePath={file}
            />
                
            
            

        )
    }
}

export default Resume