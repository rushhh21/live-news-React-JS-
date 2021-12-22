import React, { Component } from 'react'

export default class NewsBox extends Component {
    render(props) {
        let { title, description, urlToImage, newsurl, time, author , source} = this.props;
        return (
            <div className="card">
                <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                   {source}
                </span>
                <img src={urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(time).toGMTString()}</small></p>
                    <a href={newsurl} target="_blank" className="btn text-primary">Read more...</a>
                </div>
            </div>
        )
    }
}
