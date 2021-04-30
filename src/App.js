import React, { Component } from 'react';
import axios from 'axios';
import Loading from './Components/Main/Loading/Loading';
import NewsList from './Components/Main/NewsList/NewsList';
import PageNumber from './Components/Main/PageNumber/PageNumber';
import Pagination from './Components/Main/Pagination/Pagination';
import Header from './Components/Shared/Header/Header';
import { newsCategory } from './news';

const fakeNews = [
  {
    id : 1,
    title : "Title",
    Content : 'Content',
    url : 'http://posturl.com',
    urlToImg : 'http://urltoimg.com',
    publishedAt : 'date and time',
    source : {
      name : 'CNN'
    }
  },
  {
    id : 2,
    title : "Title",
    Content : 'Content',
    url : 'http://posturl.com',
    urlToImg : 'http://urltoimg.com',
    publishedAt : 'date and time',
    source : {
      name : 'CNN'
    }
  }
];

axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res=>console.log(res))

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header category={newsCategory.technology} />
        <PageNumber />
        <NewsList news={fakeNews} />
        <Pagination />
        <Loading />
      </div>
    );
  }
}

export default App;
