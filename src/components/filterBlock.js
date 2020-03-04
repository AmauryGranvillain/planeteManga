import React, { Component } from 'react';
import { AutoComplete, Input, Select } from 'antd'
import '../style/filterBlock.css';

const { Option } = Select;

class FilterBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [],
        }
        this.handleSearch = this.handleSearch.bind(this)
        this.handleCategory = this.handleCategory.bind(this)
    }

    handleSearch = value => {
        if (value) {
            this.setState({ currentSearch: value })
        }
        this.handleNewListName(value)
    }
    handleNewListName = name => {
        let mangaList = this.props.mangaHits
        if (name !== "") {
            mangaList = mangaList.filter(u => u.manga.name.includes(name)).map((item) => {
                return {
                    value: item.manga.name,
                    label: (
                        <div key={item.manga.name}>
                            <span>{item.manga.name}</span>
                        </div>
                    )
                }
            })
        }
        this.setState({ options: mangaList })
    }
    handleCategory(value) {
        this.props.changeCurrentCategory(value)
    }
    render() {
        const options = [
            {
                label: 'Manga',
                options: this.state.options,
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