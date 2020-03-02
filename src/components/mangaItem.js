import React, { Component } from 'react';
import '../style/mangaItem.css';

import { Link } from 'react-router-dom';

class MangaItem extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.checkAuthor = this.checkAuthor.bind(this);
    }
    handleChange(manga) {
        this.props.changeCurrentManga(manga)
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
        const manga = this.props.manga;
        const name = this.props.manga.name.replace(/ /g, "_").toLowerCase();
        return (
            <Link to={"/manga/" + name} onClick={this.handleChange}>
                <div className={`manga-item`}>
                    <h3>{manga.name}</h3>
                    <div className="infosup">
                        {this.checkAuthor()}
                        <span>{manga.japan.publicationStart}</span>
                        <span>{manga.type}</span>
                    </div>
                </div>
            </Link >
        )
    }
}

export default MangaItem;

