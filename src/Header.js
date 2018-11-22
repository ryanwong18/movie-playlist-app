import React from 'react';

const Header = (props) => {
    return (
        <React.Fragment>
            {props.location === "/favorites" ? 
                <header>
                    <h1>Your Favorite Movies</h1>
                </header>
                :
                <header>
                    <h1>Movie Generator</h1>
                    <h2>Surf movies and build your own favorites list!</h2>
                </header>
            }
        </React.Fragment>
    )
}

export default Header;