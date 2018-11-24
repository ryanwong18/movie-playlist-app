import React from 'react';
import { timeConversion, convertMoney } from './Helpers';
import Header from './Header';

const DisplayMovieDetails = (props) => {
    let counter = 1;
    return (
        <React.Fragment>
            <Header />
            <div className="movieDetails">
                <h2>{props.movieDetails.title}</h2>
                <div className="quickFacts">
                    <img src={`https://image.tmdb.org/t/p/w500/${props.movieDetails.backdrop_path}`} alt={props.movieDetails.title}/>
                    <div className="quickInfo">
                        <h3>Reviews: <span className="unbold">{props.movieDetails.vote_average} / 10</span></h3>
                        <h3>Released: <span className="unbold">{props.movieDetails.release_date}</span></h3>
                        <h3>Genre: {props.movieDetails.genres ? props.movieDetails.genres.map(genre => {
                            counter++;
                            return (
                                <span className="unbold" key={genre.id}> {genre.name}{counter < props.movieDetails.genres.length + 1? "," : ""}</span>
                                )
                        }) : null}</h3>
                        <h3>Runtime: <span className="unbold">{timeConversion(props.movieDetails.runtime)}</span></h3>
                        <h3>Budget: <span className="unbold">${props.movieDetails.budget ? convertMoney(props.movieDetails.budget) : null}</span></h3>
                    </div>
                </div>
                <p className="overview">{props.movieDetails.overview}</p>
                <div className="userTitle">
                    <p>User Reviews</p>
                </div>
                <div className="userReviews"> {props.movieReviews.length === 0 ? "No User Reviews": props.movieReviews.map(review => {
                    return (
                        <React.Fragment key={review.id}>
                            <p>Author: {review.author}</p>
                            <p>Content: {review.content}</p>
                        </React.Fragment>
                    )
                })}</div>
            </div>
        </React.Fragment>
    )
}

export default DisplayMovieDetails;