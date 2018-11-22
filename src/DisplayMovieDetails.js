import React from 'react';
import { timeConversion, convertMoney } from './Helpers';

const DisplayMovieDetails = (props) => {
    let counter = 1;
    return (
        <div>
            <h1>{props.movieDetails.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500/${props.movieDetails.backdrop_path}`} alt={props.movieDetails.title}/>
            <h2>Reviews: {props.movieDetails.vote_average} / 10</h2>
            <h2>Released: {props.movieDetails.release_date}</h2>
            <h2>Genre: {props.movieDetails.genres ? props.movieDetails.genres.map(genre => {
                counter++;
                return (
                    <span key={genre.id}> {genre.name}{counter < props.movieDetails.genres.length + 1? "," : ""}</span>
                    )
            }) : null}</h2>
            <h2>Runtime: {timeConversion(props.movieDetails.runtime)}</h2>
            <h2>Budget: ${props.movieDetails.budget ? convertMoney(props.movieDetails.budget) : null}</h2>
            <h2>Overview: {props.movieDetails.overview}</h2>
            <div>Reviews: {props.movieReviews.length === 0 ? "No Reviews": props.movieReviews.map(review => {
                return (
                    <React.Fragment key={review.id}>
                        <p>Author: {review.author}</p>
                        <p>Content: {review.content}</p>
                    </React.Fragment>
                )
            })}</div>
        </div>
    )
}

export default DisplayMovieDetails;