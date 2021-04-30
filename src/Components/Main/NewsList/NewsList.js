import React from 'react';
import NewsItem from '../NewsItem/NewsItem';

const NewsList = ({news}) => {
    return (
        <div>
            {news && news.length === 0 && <h4>There are no news</h4>}
            {news && news.map(item=><NewsItem key={item.id} news={item} />)}
        </div>
    );
};

export default NewsList;