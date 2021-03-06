import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Display extends React.Component {
    componentDidMount() {
        axios({
            url: 'https://api.themoviedb.org/3/movie/popular',
            method: 'GET',
            params: {
                api_key: '82c575785cfffa185f5ac39b1f007d50'
            }
        }).then(res => {
            this.props.getMovies(res.data.results);
        })
    }
    componentDidUpdate(prevProps) {
        if(this.props.userInput.movieTitle !== prevProps.userInput.movieTitle) {
            axios({
                url:'https://api.themoviedb.org/3/search/movie',
                method: 'GET',
                params: {
                    api_key:'82c575785cfffa185f5ac39b1f007d50',
                    query:`${this.props.userInput.movieTitle}`
                }
            }).then(res => {
                this.props.getMovies(res.data.results);
            })
        }
    }
    render() {
        return (
            <section className="display">
                {this.props.movies.map(movie => {
                    return (
                        <div key={movie.id} id={movie.id}>
                            <h2>{movie.title}</h2>
                            <Link to={`/movie/${movie.id}`}>    
                                <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title}/>
                            </Link>
                            <button className="addFavorite" onClick={() => this.props.getFavoriteMovie(movie)}>Add to Favorites</button>
                        </div>
                    )
                })}
            </section>
        )
    }
}

export default Display;