import React, { useState, useEffect} from "react";
import axios from 'axios';
import Title from "./Components/Title";
import Information from "./Components/Information";
import Video from "./Components/Video";

import "./App.css";

const App = () => {
  const [state, setState] = useState({
    
    // date: '',
    // explanation: "",
    // media_type: "",
    // service_version: "",
    // title:"",
    // url:""
  })

  useEffect( () => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=qyd35keQiktzxrfaHvbGgfuR9fdC1yNH49lr5QLs')
    .then( res => {
      console.log( "My data", res.data)
      setState(res.data)
    })
    .catch(err => console.log("You know you messed up, right?", err))
  }, [])

  console.log('My state', state);

  return (
    <div className="App">
        <Title  state={state} />
        <div className="pic-of-the-day">
          <Information state={state}  />
        </div>
        <div>
          <Video state={state}  />
        </div>
    </div>
  );
}
export default App;
