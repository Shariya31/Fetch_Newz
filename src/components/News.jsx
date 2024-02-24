import React, { useEffect, useState } from 'react'
import News_items from './News_items'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'
import { v4 as uuidv4 } from 'uuid';

const News = (props) => {
    const [news, setNews] = useState([]);
    const [category, setCategory] = useState(props.category)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const getNews = async () => {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=9bc603a4643a4f3aa5844343c35c5558&category=${category}&pageSize=3`);
        setNews(response.data.articles);
        setTotalResults(response.data.totalResults);
    }


    const fetchMoreData = async ()=>{
        setPage(page + 1)
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=9bc603a4643a4f3aa5844343c35c5558&category=${category}&page=${page}&pageSize=3`);
        setNews(news.concat(response.data.articles))
        setTotalResults(response.data.totalResults)
    }

    useEffect(() => {
        getNews()

    }, [])
  
    return (
        <>
            <InfiniteScroll
                dataLength={news.length}
                next = {fetchMoreData}
                hasMore = {news.length !== totalResults}
            >

                <div className='news_container'>
                    <div className="row">
                        {news.map((element) => (
                            <div className="col-md-4" key={uuidv4()}>
                                <News_items author={element.author} content={element.content} description={element.description} publishedAt={element.publishedAt} title={element.title} url={element.url} urlToImage={element.urlToImage} />
                            </div>
                        ))}
                    </div>
                </div>

            </InfiniteScroll>
        </>
    )
}

export default News