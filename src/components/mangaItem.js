import React from 'react';
import '../style/mangaItem.css';

import { Link } from 'react-router-dom';
import { func, object } from "prop-types";
import FilterBlock from "./filterBlock";

const MangaItem = ({ manga, changeCurrentManga }) => {

    const name = manga.name.replace(/ /g, "_").toLowerCase();

    const checkAuthor = () => {
        if (!manga.authors || manga.authors === 0) {
            return <span>Pas d'auteur</span>
        }
        return manga.authors.map((author, index) => {
            return <span key={index}>{author.name}</span>
        })
    }
    return (
        <Link to={"/manga/" + name} onClick={changeCurrentManga}>
            <div className={`manga-item`}>
                <h3>{manga.name}</h3>
                <div className="infosup">
                    {checkAuthor()}
                    - <span>{manga.japan.publicationStart}</span>
                    - <span>{manga.type}</span>
                </div>
                {(manga.isFinished) ? <span className="status finished">Terminé</span> : <span className="status">En cours</span>}
            </div>
        </Link >
    )
}

FilterBlock.propTypes = {
    manga: object,
    changeCurrentManga: func.isRequired
};

export default MangaItem;

