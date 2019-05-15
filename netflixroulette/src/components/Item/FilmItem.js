import React from 'react';
import ItemTitle from './ItemTitle';
import ItemImage from './ItemImage';
import ItemGenre from './ItemGenre';
import ItemReleaseDate from './ItemReleaseDate';

// This is the structure for a single Film Item/ Film Card instance
const FilmItem = props => (
        <div className="film-item" imageURL={props.imageURL}>
                <ItemImage {...props} />
            <div className="item-info">
                <ItemTitle {...props}/>
                <ItemReleaseDate {...props}/>
            </div>
                <ItemGenre {...props} />
         </div>
);
export default FilmItem;
