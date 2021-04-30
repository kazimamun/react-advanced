import React from 'react';

function getDateTimeString (dateTimeStr){
    return new Date(dateTimeStr).toDateString();
}

const NewsItem = ({news}) => {
    return (
        <div className="card mb-4">
            {
                news.urlToImg && (
                    <img 
                        className="card-img-top"
                        src = {news.urlToImg}
                        alt = {news.title}
                    />
                )
            }
            <div className="card-body">
                <a href={news.url} target="_blank" rel="noreferrer" style={{color:'#424242'}}>
                    <h5 className='card-title'>{news.title}</h5>
                </a>
                <div className="mt-2 d-flex align-item-center">
                    <small>
                        <strong>
                            Published at {getDateTimeString(news.publishedAt)}
                        </strong>
                    </small>
                </div>
                <div
                    style={{
                        padding: '0.25rem 0.5rem',
                        background: '#ededed',
                        color:'#424242',
                        borderRadius: '0.25rem',
                        display: 'inline-block'
                    }}
                    className="ml-auto"
                >
                    <small>
                        {news.source.name}
                    </small>
                </div>
            </div>
        </div>
    );
};

export default NewsItem;