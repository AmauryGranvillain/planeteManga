import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import { LIST_MANGA } from './mangaList';
import MangaDetails from './mangaDetails';
import MangaItem from './mangaItem';

class Container extends Component {
    constructor() {
        super();
        this.state = {
            currentManga: [],
            mangaList: LIST_MANGA,
            mangaHits: [],
        }
    }

    componentDidMount() {
        fetch('/mangas.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => this.setState({ mangaHits: data }))
    }

    handleManga = manga => {
        this.setState({ currentManga: manga })
        return
    }

    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <div className="manga-list">
                        {
                            this.state.mangaHits.map(({ manga, index }) => (
                                <MangaItem key={index} onClick={() => this.handleManga(manga)} manga={manga} />
                            ))
                        }
                    </div>
                </Route>
                <Route path="/manga">
                    <MangaDetails manga={this.state.currentManga} />
                </Route>
            </Switch>
        )
    }
}

export default Container;