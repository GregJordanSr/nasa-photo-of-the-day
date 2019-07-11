import React from 'react'

 const Video = props => {

    console.log('Video component', props)
    return (
        <div className="video">
           {props.state.media_type === "image" ? <img src={props.state.url} className=
           'image-video' alt='Video or Pic of the Day'  / > : <iframe src={props.state.hdurl} height="450" width="450" allowFullScreen></iframe>} 
            <p>{props.state.explanation}</p>   
        </div>
    )
}
export default Video;