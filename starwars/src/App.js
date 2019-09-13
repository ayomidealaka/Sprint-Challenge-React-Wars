import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Names from './components/Names'

const App = () => {
  const [People, setPeople] = useState([]);
  
  useEffect(() => {
    axios
    .get("https://swapi.co/api/people/")
    .then(response  => {
    //   for (let key in response.data.results) {
    //     setPeople(response.data.results[key])
    //     console.log(key)

    // }
    setPeople(response.data.results)
    }, [])
  
    
    .catch(error => {
        console.log("Oops - Star Wars Broke!", error);
    })
  }, []);

  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      

        
        {/* {console.log(People)} */}
      
    <h1 className="Header">React Wars with</h1>
    <h2>Name: {People.map(item=><p>{item.name}</p>)}</h2>
    </div>
  );
}

export default App;
