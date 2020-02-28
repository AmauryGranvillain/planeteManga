import React from 'react';

import { Link } from 'react-router-dom';

const MangaDetails = ({manga}) => (
        <div>
            <Link to="/">Home</Link>
            <h1>{manga.name}</h1>
            <div className="infosup">
                {
                    manga.authors.map(({author, index}) => (
                        <span key={index}>{author}</span>
                    ))
                }
                <span>{manga.japan.publicationStart}</span>  
                <span>{manga.type}</span>
            <p>{manga.description}</p>
            </div>
        </div>
)
    


export default MangaDetails;