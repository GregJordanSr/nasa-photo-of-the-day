import React from 'react'
import { Image, Container, Segment } from 'semantic-ui-react';

 const Video = props => {

    console.log('Video component', props)
    return (
        <Container >
            <Segment centered>
            <Image size="large" align="center">
            {props.state.media_type === "image" ? <img src={props.state.url} className=
            'image-video' alt='Video or Pic of the Day'  / > : <iframe src={props.state.url} height="450" width="450" title="Video" allowFullScreen></iframe>} 
            </Image>
            
            <p  textAlign="justified" style={{ margin: "50px 50px" }} >
                {props.state.explanation} 
            </p>
            </Segment>
        </Container>
    )  
}
export default Video;