import React, { Component } from 'react';
import { getChapter } from '../actions/manga';

import "../style/listTome.css"

class ListChapter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chapterHits: []
        }
    }

    componentDidMount() {
        getChapter().then(data => this.setState({
            chapterHits: data
        }))
    }

    getChaptertoTome(id) {
        let chapterList = this.state.chapterHits
        if (id !== null) {
            chapterList = this.state.chapterHits.filter(u => u.chapter.ref_tome === id)
            return chapterList.map(({ chapter }) => (
                <div className="chapter-item">
                    <h4>{chapter.title}</h4>
                    <span className="chapter">Chapitre n° {chapter.number}</span>
                </div>
            ))
        }
    }

    render() {
        return (
            <div>
                {
                    this.getChaptertoTome(this.props.tome.id)
                }
            </div>
        )
    }
}

export default ListChapter;