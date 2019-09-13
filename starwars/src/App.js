import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [People, setPeople] = useState([]);
  
  useEffect(() => {
    axios
    .get("https://swapi.co/api/people/")
    .then(response  => {
      for (let key in response.data.results) {
        setPeople(response.data.results[key])
        console.log(response.data.results[key])

    }
    }, [])
  
    
    .catch(error => {
        console.log("Oops - Star Wars Broke!", error);
    })
  }, []);

  return (
    <div className="App">
    <h1 className="Header">React Wars with</h1>
    </div>
  );


export default App;
