import React from 'react'
import { Image } from 'semantic-ui-react';

 const Video = props => {

    console.log('Video component', props)
    return (
        <Image size="large">
           {props.state.media_type === "image" ? <img src={props.state.url} className=
           'image-video' alt='Video or Pic of the Day'  / > : <iframe src={props.state.url} height="450" width="450" title="Video" allowFullScreen></iframe>} 
            <p>{props.state.explanation}</p>   
        </Image>
    )
}
export default Video;