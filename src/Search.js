import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
 
class Search extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        e.currentTarget.reset();
    }
    handleChange = (e) => {
        const value = e.currentTarget.value;
        this.props.getUserInput(value);
    }
    handleClick = () => {
        axios({
            url:'https://api.themoviedb.org/3/movie/top_rated',
            method: 'GET',
            params: {
                api_key: '82c575785cfffa185f5ac39b1f007d50',
                language:"en-US",
                page:1
            }
        }).then(res => {
            console.log(res.data.results);
            this.props.getMovies(res.data.results);
        })
    }
    render() {
        return (
            <div className="selection">
                <form action="" onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Search Movies by Title</label>
                    <input type="text" id="title" onChange={this.handleChange} value={this.props.UserInput}/>

                    <input type="submit"/>
        
                </form>
    
                <button onClick={this.handleClick}>Top Rated Movies</button>

                <Link to={`/favorites`}>
                    <button>Go to Favorites</button>
                </Link>
    
                {/* <label htmlFor="action">Action</label>
                <input type="radio" value="action" id="action" name="genre"/> */}
            </div>
        )
    }
}

export default Search;

