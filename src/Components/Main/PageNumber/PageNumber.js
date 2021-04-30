import React, { Component } from 'react';

class PageNumber extends Component {
    render() {
        const {number} = this.props;
        return (
            <div className="d-flex">
                <p className='text-black-50'>About {0} results found</p>
                <p className='text-black-50 ml-auto'>{1} page of {100}</p>
            </div>
        );
    }
}

export default PageNumber;