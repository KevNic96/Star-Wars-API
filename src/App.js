// import logo from './logo.svg';
import './App.css';
// import Item from './MyItem';

import React from 'react';
import ReactDOM from 'react-dom';

const logo="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
const apiUrl = "https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id"

class StarWars extends React.Component {
  constructor() {
    super()
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      image: null,
      species: null,
      gender: null,
    }
  }
  getNewCharacter(){
    console.log("Click")
    const rand = Math.round( Math.random() * 88)
    const url = `${apiUrl}/${rand}.json`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
        name: data.name,
        height: data.height,
        homeworld: data.homeworld,
        image: data.image,
        species: data.species,
        gender: data.gender,
        loadedCharacter: true,
        })
      })
  }
  render(){

    return (
      <div>
        {
          this.state.loadedCharacter && (
            <div>
        
              <h1>{this.state.name}</h1>
              <img src={this.state.image} alt={this.state.name} height="300" />
              <p>Height: {this.state.height} m</p>
              <p>Species: {this.state.species} </p>
              <p>Gender: {this.state.gender} </p>
              {this.state.homeworld && <p>Homeworld: <span className="capitalize">{this.state.homeworld}</span></p>}
            </div>
          )}
        <button 
        type="button" 
        onClick={() => this.getNewCharacter()} 
        className="btn"
        >
          Randomize Character
        </button>
      </div>
    )
  }
}

class StarWarsTitle extends React.Component {
  render() {
    return (
      <>
        <img src={logo} className="App-logo" alt="StarWars" />
      </>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWarsTitle />
        <StarWars />
        {/* <img src={logo} className="App-logo" alt="logo" />
        <Item name="Gully"/>
        <Item name="Rhubarb"/>
        <Item name="Kalob"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a> */}
      </header>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
