import React from 'react';
import App from './App';
import MovieDetails from './MovieDetails';
import FavoriteMovies from './FavoriteMovies';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Routing extends React.Component {
    constructor() {
        super();
        this.state = {
            movies:[],
            userInput:{},
            movieDetails:{},
            topRated:[],
            reviews:[],
            favoriteMovies:[]
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
        const newReviews = [...value];
        this.setState({
            reviews:newReviews
        })
    }
    getFavoriteMovie = (value) => {
        const newFavorites = Array.from(this.state.favoriteMovies);
        
        //checking to see if movie has been previously saved to array
        const duplicateMovies = newFavorites.find(movie => {
            return movie.id === value.id;
        })

        //if true, don't push to favoritesArray
        if(duplicateMovies) return;

        newFavorites.push(value);
        this.setState({
            favoriteMovies:newFavorites
        })
    }
    removeFavoriteMovies = (value) => {
        const removeFavorite = Array.from(this.state.favoriteMovies);

        const index = removeFavorite.findIndex(movie => {
            return movie.id === value.id;
        })

        removeFavorite.splice(index, 1);
        this.setState({
            favoriteMovies:removeFavorite
        })
    
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={(routeProps) => (<App {...routeProps} getUserInput={this.getUserInput} getMovies={this.getMovies} userInput={this.state.userInput} movies={this.state.movies} getFavoriteMovie={this.getFavoriteMovie}/>)} />
                    <Route path="/movie/:movieid" render={(routeProps) => (<MovieDetails {...routeProps} getMovieDetails={this.getMovieDetails} movieDetails={this.state.movieDetails} getReviews={this.getReviews} movieReviews={this.state.reviews}/>)}/>
                    <Route path="/favorites" render={(routeProps) => (<FavoriteMovies {...routeProps} favoriteMovies={this.state.favoriteMovies} removeFavorite={this.removeFavoriteMovies}/>)}/>
                </Switch>
            </Router>
        )
    }
}

export default Routing;