import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import { LIST_MANGA } from './mangaList';
import MangaDetails from './components/mangaDetails';
import MangaItem from './components/mangaItem';
import { getManga } from "./actions/manga";

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentManga: [],
            mangaList: LIST_MANGA,
            mangaHits: [],
        }
        this.handleManga = this.handleManga.bind(this);
    }

    componentDidMount() {
        getManga().then(data => this.setState({
            mangaHits: data
        }))
    }

    handleManga = manga => {
        this.setState({ currentManga: manga })
    }

    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <div className="manga-list">
                        {
                            this.state.mangaHits.map(({ manga }) => (
                                <MangaItem key={manga.name} manga={manga} changeCurrentManga={() => this.handleManga(manga)} />
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