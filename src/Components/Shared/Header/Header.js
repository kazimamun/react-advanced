import React, { Component } from 'react';
import {newsCategory} from '../../../news'

class Header extends Component {
    state = {
        searchTerm : ''
    }
    handleChange=e=>{
        this.setState({searchTerm : e.target.value})
    }
    handleKeyPress=e=>{

    }
    render() {
        const {category} = this.props;
        return (
            <div className="my-4">
                <h1 className="mb-4" style={{fontWeight:'300'}}>
                    Block Buster Heading
                </h1> 
                <input 
                    type="search"
                    className="form-control"
                    placeholder="type anything and press enter to search"
                    value={this.state.searchTerm}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />      
                <div className="my-4">
                    {newsCategory && Object.keys(newsCategory).map(item=>{
                        if(category === newsCategory[item]){
                            return (
                                <button className="btn btn-sm btn-warning mr-2 mb-2">
                                    {`#${newsCategory[item]}`}
                                </button>
                            )
                        }
                        return (
                            <button className="btn btn-sm btn-light mr-2 mb-2">
                                {`#${newsCategory[item]}`}
                            </button>
                        )
                    })}
                </div>         
            </div>
        );
    }
}

export default Header;