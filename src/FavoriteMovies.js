import React from 'react';
import Header from './Header';

class FavoriteMovies extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header location={this.props.match.path}/>
                <div>
                    {this.props.favoriteMovies.length === 0 ? "No Favorites Selected" :
                        this.props.favoriteMovies.map(movie => {
                            return (
                                <React.Fragment key={movie.id}>

                                    <h2>{movie.title}</h2>
                                    <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title}/>
                                    <button onClick={() => this.props.removeFavorite(movie)}>Remove from Favorites</button>
                                </React.Fragment>
                            )
                    })}
                </div>
            </React.Fragment>
        )
    }
}

export default FavoriteMovies;