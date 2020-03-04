import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import MangaDetails from './components/mangaDetails';
import MangaItem from './components/mangaItem';
import { getManga } from "./actions/manga";
import FilterBlock from "./components/filterBlock";

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentManga: [],
            mangaHits: [],
            currentCategory: "Tous",
            currentSearch: "",
        }
        this.handleManga = this.handleManga.bind(this)
    }
    componentDidMount() {
        if (this.state.currentCategory === "" || this.state.currentCategory === "Tous") {
            getManga().then(data => this.setState({
                mangaHits: data
            }))
        }
    }

    handleManga = manga => {
        if (manga) {
            this.setState({ currentManga: manga })
        }
    }

    handleCategory = value => {
        if (value) {
            this.setState({ currentCategory: value })
        }
    }
    handleNewListCategory = category => {
        let mangaList = this.state.mangaHits
        if (category !== "Tous") {
            mangaList = this.state.mangaHits.filter(u => u.manga.type === category)
        }
        return mangaList.map(({ manga }) => (
            <MangaItem key={manga.name} manga={manga} changeCurrentManga={() => this.handleManga(manga)} />
        ))
    }

    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <FilterBlock currentCategory={this.state.currentCategory}
                        mangaHits={this.state.mangaHits}
                        changeCurrentCategory={(value) => this.handleCategory(value)}
                        changeCurrentManga={this.handleManga} />
                    <div className="manga-list">
                        {
                            this.handleNewListCategory(this.state.currentCategory)
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