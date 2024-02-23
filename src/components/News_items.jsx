import React from 'react'

const News_items = (props) => {
    return (
        <div className='news_items'>
            <div className="card">
                <img src={props.urlToImage ? props.urlToImage: 'https://www.videogameschronicle.com/files/2022/08/FZtTYwsWYAIFD73.jpg'}  className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default News_items