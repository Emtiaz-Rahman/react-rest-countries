import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Loadcountries></Loadcountries>
    </div>
  );
}

function Loadcountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then(res => res.json())
      .then(data => setCountries(data))

  }, [])
  return (
    <div>
      <h3>Visiting new country all over the world!!</h3>
      <p>Country:{countries.length}</p>
    </div>
  )
}




export default App;
