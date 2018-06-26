import React from 'react';

const Card = ({name,email,id}) => {
    return (
        
        <div className="bg-light-green tc dib br3 pa2 ma2 grow bw1 shadow-5">
        
           <img  alt="robots" src = 'https://robohash.org/{id}/?200x200' />
            <div>
               <h2>{name}</h2>
               <p>{email}</p>
            </div>
        
        </div>
    );
}

export default Card;