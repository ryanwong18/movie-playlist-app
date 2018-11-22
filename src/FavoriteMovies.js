import React from 'react';

class FavoriteMovies extends React.Component {
    render() {
        return (
            <div>
                {this.props.favoriteMovies.map(movie => {
                    return (
                        <React.Fragment key={movie.id}>
                            <h2>{movie.title}</h2>
                            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title}/>
                            <button onClick={() => this.props.removeFavorite(movie)}>Remove from Favorites</button>
                        </React.Fragment>
                    )
                })}
            </div>
        )
    }
}

export default FavoriteMovies;