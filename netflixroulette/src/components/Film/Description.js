import React from 'react';
// Hardcoding the value only for homework #3
const filmDescription = 'The Matrix is a 1999 science fiction action'
                + ' film written and directed by The Wachowskis and'
                 + ' starring Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss,'
                  + ' Hugo Weaving, and Joe Pantoliano. It depicts a dystopian future'
                  + ' in which humanity is unknowingly trapped inside a simulated reality'
                   + ' called the Matrix, created by thought-capable machines (artificial beings)'
                    + ' to control humans while using their bodies as an energy source.';

const Description = () => (
  <div className="film-desc">
    {filmDescription}
  </div>
);
export default Description;
