import React from 'react';
import axios from 'axios';
import DisplayMovieDetails from './DisplayMovieDetails';

class MovieDetails extends React.Component {
    componentDidMount() {
        if(this.props.match === undefined) return;
        axios({
            url:`https://api.themoviedb.org/3/movie/${this.props.match.params.movieid}`,
            method: 'GET',
            params: {
                api_key: '82c575785cfffa185f5ac39b1f007d50'
            }
        }).then(res => {
            const newData = res.data;
            this.props.getMovieDetails(newData);
        })
    }
    render() {
        return (
            <div className="details">
                <DisplayMovieDetails movieDetails={this.props.movieDetails}/>
            </div>
        )
    }
}

export default MovieDetails;