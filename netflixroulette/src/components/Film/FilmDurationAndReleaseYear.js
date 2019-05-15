import React from 'react';
// Hardcoding the value only for homework #3
const duration = '152 min';
const releaseYear = '2002';

const FilmDurationAndReleaseYear = () =>(
            <div className="film-duration-and-release-year">
                <span>{duration} &nbsp; {releaseYear}</span>
            </div>
    );
export default FilmDurationAndReleaseYear;

