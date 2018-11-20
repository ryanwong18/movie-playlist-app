import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Search from './Search';
import Display from './Display';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      userInput: {}
    }
  }
  getUserInput = (value) => {
    const newInput = {...this.state.userInput};
    newInput.movieTitle = value;
    //if the user clears the searchbar, then don't display anything
    if(value === "") {
      this.setState({
        movies: []
      })
    }
    this.setState({
      userInput: newInput
    })
  }
  getMovies = (value) => {
    const newMovies = [...value];
    this.setState({
      movies:newMovies
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Search getUserInput={this.getUserInput} userInput={this.state.userInput}/>
          <Display userInput={this.state.userInput} getMovies={this.getMovies} movies={this.state.movies}/>
        </main>
      </div>
    );
  }
}

export default App;
