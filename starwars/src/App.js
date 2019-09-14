import React, {useState, useEffect} from 'react';
// import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Heading from './components/Heading';
import Names from './components/Names';
import styled from 'styled-components';

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

  const Structure = styled.div`
  width: 80vw;
  margin: 0 auto;
  `


  
  return (
    <div>
    <Header/>
    <Heading/>
    {People.map((people) =>
            <Names
              name={people.name}
              birth_year={people.birth_year}
              gender={people.gender}
              />
            )}
    </div>
  );
}

export default App;
