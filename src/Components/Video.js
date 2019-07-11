import React from 'react'

 const Video = props => {
    return (
        <div className="video">
           {props.media_type === "image" ? <img src={props.url} className=
           'image-video' alt='Video or Pic of the Day'  / > : <iframe src={props.url} height="450" width="450" allowFullScreen></iframe>} 
            <p>{props.explanation}</p>   
        </div>
    )
}
export default Video;