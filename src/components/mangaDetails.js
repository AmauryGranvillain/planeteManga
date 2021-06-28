import React from 'react';
import '../style/mangaDetails.css'
import { Link } from 'react-router-dom';
import Img from 'react-image';
import Loader from 'react-loader-spinner';
import ListTome from './listTome';

import { object } from "prop-types";

const MangaDetails = ({ manga }) => {

    const checkAuthor = () => {
        if (manga.authors || manga.authors === 0) {
            return <span>Pas d'auteur</span>
        }
        return manga.authors.map((author, index) => {
            return <span key={index}>{author.name}</span>
        })
    }

    return (
        <div className="manga-details">
            <Link className="backHome" to="/">{"< HOME"}</Link>
            <div>
                <div className="container-cover">
                    <Img className="cover-image" src={"/" + manga.japan.logo} alt={"cover " + manga.name}
                        loader={<Loader type="RevolvingDot"
                            color="#ef323a"
                            height={50}
                            width={50}
                            timeout={3000}
                        />}
                    />
                </div>
                <h1>{manga.name}</h1>
                <div className="infosup">
                    <span className="authors">Auteur : <b>{checkAuthor()}</b></span>
                    <span>Date de publication : <b>{manga.japan.publicationStart}</b></span>
                    <span>Genre : <b>{manga.type}</b></span>
                </div>
                <p>{manga.description}</p>
            </div>
            <ListTome manga={manga} />
        </div>
    )
}

MangaDetails.propTypes = {
    manga: object.isRequired
}

export default MangaDetails;