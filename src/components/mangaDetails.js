import React, { Component } from 'react';
import '../style/mangaDetails.css'
import { Link } from 'react-router-dom';
import Img from 'react-image';
import Loader from 'react-loader-spinner';
import ListTome from './listTome';

class MangaDetails extends Component {
    constructor(props) {
        super(props);
        this.checkAuthor = this.checkAuthor.bind(this);
    }

    checkAuthor() {
        if (!this.props.manga.authors || this.props.manga.authors === 0) {
            return <span>Pas d'auteur</span>
        }
        return this.props.manga.authors.map((author, index) => {
            return <span key={index}>{author.name}</span>
        })
    }

    render() {
        return (
            <div className="manga-details">
                <Link className="backHome" to="/">{"< HOME"}</Link>
                <div>
                    <div className="container-cover">
                        <Img className="cover-image" src={"/" + this.props.manga.japan.logo} alt={"cover " + this.props.manga.name}
                            loader={<Loader type="RevolvingDot"
                                color="#ef323a"
                                height={50}
                                width={50}
                                timeout={3000}
                            />}
                        />
                    </div>
                    <h1>{this.props.manga.name}</h1>
                    <div className="infosup">
                        <span className="authors">Auteur : <b>{this.checkAuthor()}</b></span>
                        <span>Date de publication : <b>{this.props.manga.japan.publicationStart}</b></span>
                        <span>Genre : <b>{this.props.manga.type}</b></span>
                    </div>
                    <p>{this.props.manga.description}</p>
                </div>
                <ListTome manga={this.props.manga} />
            </div>
        )
    }
}



export default MangaDetails;