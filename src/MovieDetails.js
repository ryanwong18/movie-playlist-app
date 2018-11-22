import React from 'react';
import axios from 'axios';
import DisplayMovieDetails from './DisplayMovieDetails';

class MovieDetails extends React.Component {
    componentDidMount() {
        if(this.props.match === undefined) return;

        //call for movie details
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

        //call for movie reviews
        axios({
            url: `https://api.themoviedb.org/3/movie/${this.props.match.params.movieid}/reviews`,
            method: 'GET',
            params: {
                api_key: '82c575785cfffa185f5ac39b1f007d50'
            }
        }).then(res => {
            this.props.getReviews(res.data.results);
        })
    }
    render() {
        return (
            <div className="details">
                <DisplayMovieDetails movieDetails={this.props.movieDetails} movieReviews={this.props.movieReviews}/>
            </div>
        )
    }
}

export default MovieDetails;