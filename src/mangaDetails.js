import React from 'react';
import './mangaDetails.css'
import { Link } from 'react-router-dom';
import Img from 'react-image';
import Loader from 'react-loader-spinner';

const MangaDetails = ({manga}) => {
    return(
        <div>
            <Link className="backHome" to="/">{"< HOME"}</Link>
            <div className="manga-details">
                <div className="container-cover">
                    <Img className="cover-image" src={"/" + manga.japan.logo} alt={"cover " + manga.name} 
                        loader={<Loader type="Puff"
                                        color="#00BFFF"
                                        height={100}
                                        width={100}
                                        timeout={200}
                        />}
                    />
                </div>
                <h1>{manga.name}</h1>
                <div className="infosup">
                    <span >Auteur : {manga.authors[0].name}</span>
                    <span>Date de publication : {manga.japan.publicationStart}</span>  
                    <span>Genre : {manga.type}</span>
                </div>
                <p>{manga.description}</p>
            </div>
        </div>
    )
}
    


export default MangaDetails;