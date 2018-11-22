import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Search from './Search';
import Display from './Display';
import MovieDetails from './MovieDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Search getMovies={this.props.getMovies} userInput={this.props.userInput} getUserInput={this.props.getUserInput}/>
          <Display userInput={this.props.userInput} getMovies={this.props.getMovies} movies={this.props.movies}/>
        </main>
      </div>
    );
  }
}

export default App;
