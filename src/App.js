import React, { useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import Header from "./Components/Title";
import Title from "./Components/Title";

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
    .get('https://api.nasa.gov/planetary/apod?api_key=gMsZfkpVIl4FWwGE0XSzk3NtyMt3ZZrM0gxmpBEd')
    .then( res => {
      console.log(res.data)
      setState(res.data)
    })
    .catch(err => console.log("You know you messed up, right?", err))
  }, [])

  return (
    <div className="App">
        <Title  title={state.title} />
      <div className="pic-of-the-day">
        {state.date}
      </div>
    </div>
  );
}

export default App;
// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY