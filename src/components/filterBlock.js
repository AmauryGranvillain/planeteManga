import React, { Component } from 'react';
import { AutoComplete, Input, Select } from 'antd'
import '../style/filterBlock.css';
import { Link } from 'react-router-dom';

const { Option } = Select;

class FilterBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [],
        }
        this.handleSearch = this.handleSearch.bind(this)
        this.handleCategory = this.handleCategory.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSearch = value => {
        if (value) {
            this.setState({ currentSearch: value })
        }
        (value === "") ? this.setState({ options: [{ value: "No results", label: <span>Pas de résultats</span> }] }) : this.handleNewListName(value)
    }
    handleChange(manga) {
        this.props.changeCurrentManga(manga)
    }
    handleNewListName = name => {
        let mangaList = this.props.mangaHits
        name = name.toLowerCase()
        mangaList = mangaList.filter(u => u.manga.name.toLowerCase().includes(name)).map((item) => {
            return {
                value: item.manga.name,
                label: (
                    <Link to={"/manga/" + item.manga.name.toLowerCase()} onClick={() => this.handleChange(item.manga)}>
                        <div className="option-search" key={item.manga.name}>
                            <img src={"/" + item.manga.japan.logo} alt={"cover " + item.manga.name} />
                            <p className="title">{item.manga.name}</p>
                            {(item.manga.isFinished)
                                ? <p className="status" style={{ color: "#37B357" }}>Terminé</p>
                                : <p className="status" style={{ color: "#ef323a" }}>En cours</p>}
                        </div>
                    </Link>
                )
            }
        })
        this.setState({ options: mangaList })
    }
    handleCategory(value) {
        this.props.changeCurrentCategory(value)
    }
    render() {
        const options = [
            {
                label: 'Manga',
                options: (this.state.options.length === 0) ? [{ value: 'pas de résultats', label: <span>Pas de résultats</span> }] : this.state.options
            },
        ];
        return (
            <div className="panel-filter">
                <AutoComplete
                    dropdownClassName="certain-category-search-dropdown"
                    dropdownMatchSelectWidth={500}
                    style={{ width: 250 }}
                    onSearch={this.handleSearch}
                    options={options}
                >
                    <Input.Search size="large" placeholder="chercher un manga" />
                </AutoComplete>
                <Select defaultValue={this.props.currentCategory} style={{ width: 90 }} onChange={this.handleCategory}>
                    <Option value="Tous">Tous</Option>
                    <Option value="Shonen">Shonen</Option>
                    <Option value="Seinen">Seinen</Option>
                </Select>
            </div>
        )
    }
}

export default FilterBlock;