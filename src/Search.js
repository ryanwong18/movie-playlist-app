import React from 'react';

class Search extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        e.currentTarget.reset();
    }
    handleChange = (e) => {
        const value = e.currentTarget.value;
        this.props.getUserInput(value);
    }
    render() {
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <label htmlFor="title">Search Movies by Title</label>
                <input type="text" id="title" onChange={this.handleChange} value={this.props.UserInput}/>

                <input type="submit"/>
    
                {/* <button>Latest Movies</button>
                <button>Most Popular Movies</button>
    
                <label htmlFor="action">Action</label>
                <input type="radio" value="action" id="action" name="genre"/> */}
            </form>
        )
    }
}

export default Search;

