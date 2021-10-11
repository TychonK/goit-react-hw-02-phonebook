import { Component } from "react";

export class Filter extends Component {
    filterNew = (e) => {
        this.props.handleSearch(e)
    }
    
    render() {
        return (
            <input
                type="search"
                name="nameSearch"
                value={this.props.filter}
                placeholder="Enter name"
                onChange={this.filterNew}
            />
        )
    }
}