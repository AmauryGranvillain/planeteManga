import React from 'react';
import './mangaItem.css';

import { Link } from 'react-router-dom';

const MangaItem = ({ manga, onClick }) => {
    return(
        <Link to={"/manga"} onClick={() => onClick(manga)}>
            <div className={`manga-item`}>
                <h3>{manga.name}</h3>
                <div className="infosup">
                    {
                        manga.authors.map(({author, index}) => (
                            <span key={index}>{author}</span>
                        ))
                    }
                    <span>{manga.japan.publicationStart}</span>  
                    <span>{manga.type}</span>
                </div>
            </div>
        </Link>
    )
}

export default MangaItem;

