import React from 'react';
import App from './App';
import MovieDetails from './MovieDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Routing extends React.Component {
    constructor() {
        super();
        this.state = {
            movies:[],
            userInput:{},
            movieDetails:{},
            topRated:[],
            reviews:[]
        }
    }
    getUserInput = (value) => {
        const newInput = {...this.state.userInput};
        newInput.movieTitle = value;
        //if the user clears the searchbar, then don't display anything
        if (value === "") {
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
            movies: newMovies
        })
    }
    getMovieDetails = (value) => {
        const newMovieDetails = {...value};
        this.setState({
            movieDetails:newMovieDetails
        })
    }
    getReviews = (value) => {
        const newReviews = [...value]
        this.setState({
            reviews:newReviews
        })
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={(routeProps) => (<App {...routeProps} getUserInput={this.getUserInput} getMovies={this.getMovies} userInput={this.state.userInput} movies={this.state.movies} />)} />
                    <Route path="/movie/:movieid" render={(routeProps) => (<MovieDetails {...routeProps} getMovieDetails={this.getMovieDetails} movieDetails={this.state.movieDetails} getReviews={this.getReviews} movieReviews={this.state.reviews}/>)}/>
                </Switch>
            </Router>
        )
    }
}

export default Routing;