import React from 'react'

const News_items = (props) => {
    return (
        <div className='news_items'>
            <div className="card">
                <img src={props.urlToImage ? props.urlToImage: 'https://www.videogameschronicle.com/files/2022/08/FZtTYwsWYAIFD73.jpg'}  className="card-img-top" alt="..." />
                <div className="card-body">
                    <a href={props.url} className='card-title'>{props.title}</a>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default News_items