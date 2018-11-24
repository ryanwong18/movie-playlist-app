import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

class FavoriteMovies extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header location={this.props.match.path}/>
                <div className="displayFavorites">
                    {this.props.favoriteMovies.length === 0 ? <h2>No Favorites Selected</h2> :
                        this.props.favoriteMovies.map(movie => {
                            return (
                                <div key={movie.id} className="favoriteCard">

                                    <h3>{movie.title}</h3>
                                    <Link to={`/movie/${movie.id}`}>
                                        <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title}/>
                                    </Link>
                                    <button onClick={() => this.props.removeFavorite(movie)}>Remove from Favorites</button>
                                </div>
                            )
                    })}
                </div>
            </React.Fragment>
        )
    }
}

export default FavoriteMovies;