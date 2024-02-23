import React, { useEffect, useState } from 'react'
import News_items from './News_items'
import axios from 'axios'
const News = (props) => {
    const [news, setNews] = useState([]);
    const [category, setCategory] = useState(props.category)

    const getNews = async () => {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=9bc603a4643a4f3aa5844343c35c5558&category=${category}`);

        setNews(response.data.articles)
    }

    useEffect(() => {
        getNews()
        
    }, [])
    console.log(news)
    return (
        <div className='news_container'>
            <div className="row">
                {news.map((element) => (
                    <div className="col-md-4" key={element.url}>
                        <News_items author={element.author} content={element.content} description={element.description} publishedAt={element.publishedAt} title={element.title} url={element.url} urlToImage={element.urlToImage} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default News