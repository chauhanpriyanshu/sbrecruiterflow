import React from 'react';

function HomeStaticCard(props) {
  return (
    <div className='card'>
        <h2>{props.heading}</h2>
        <p>{props.byline}</p>
    </div>
  );
}

export default HomeStaticCard;
