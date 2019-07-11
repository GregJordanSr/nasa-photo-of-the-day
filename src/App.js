import React, { useState, useEffect} from "react";
import axios from 'axios';
import Title from "./Components/Title";
import Information from "./Components/Information";
import Video from "./Components/Video";

import "./App.css";

const App = () => {
  const [state, setState] = useState({
    
    date: '',
    explanation: "",
    media_type: "",
    service_version: "",
    title:"",
    url:""
  })

  useEffect( () => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=L5UdZfYwkpmPnvUcXZ7FWc6LD8l96U0fqJ3VJ7xO')
    .then( res => {
      console.log( "My data", res.data)
      setState(res.data)
    })
    .catch(err => console.log("You know you messed up, right?", err))
  }, [])

  return (
    <div className="App">
        <Title  title={state.title} />
        <div className="pic-of-the-day">
          <Information date={state.date} service={state.service_version} media={state.media_type}  />
        </div>
        <div>
          <Video url={state.url} explanation={state.explanation} media={state.media_type} />
        </div>
    </div>
  );
}
export default App;
