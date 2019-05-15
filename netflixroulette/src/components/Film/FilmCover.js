import React from 'react';

const FilmCover = props => (
            <div className="film-cover">
                <img className="film-image" src={props.filmImage}/>
            </div>
    );
export default FilmCover;
