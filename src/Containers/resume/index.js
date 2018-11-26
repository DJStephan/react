import React, { Component } from 'react'
import '../../index.css'
import FileViewer from 'react-file-viewer';
import resume from '../../images/Resume.docx'




const file = resume
const type = 'docx'

class Resume extends Component {
    render(){
        return (
            <FileViewer
            fileType={type}
            filePath={file}/>
        )
    }
}

export default Resume