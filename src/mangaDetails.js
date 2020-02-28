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
                    <span >Auteur : <b>{manga.authors[0].name}</b></span>
                    <span>Date de publication : <b>{manga.japan.publicationStart}</b></span>  
                    <span>Genre : <b>{manga.type}</b></span>
                </div>
                <p>{manga.description}</p>
            </div>
        </div>
    )
}
    


export default MangaDetails;