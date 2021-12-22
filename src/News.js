import React, { Component } from 'react'
import NewsBox from './compo/NewsBox'
import PropTypes from 'prop-types'

export default class News extends Component {

	static defaultProps = {
		country: 'in',
		pageSize: 5,
		category: 'general',
	}

	static propTypes = {
		country: PropTypes.string,
		pageSize: PropTypes.number,
		category: PropTypes.string,
	}

	constructor() {
		super();
		this.state = {
			data: [],
			loading: false,
			currentPage: 1,
			pageSize: 9,
			totaldata: 0,
		}
	}

	async componentDidMount() {
		document.getElementById('spinner').classList.add('d-flex');
		let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=131363d2ac02427d8c99084131b1f228&pageSize=${this.state.pageSize}&page=${this.state.currentPage}&category=${this.props.category}`;
		let data = await fetch(url);
		let dataparsed = await data.json();
		document.getElementById('spinner').classList.add('d-none');
		this.setState({
			data: dataparsed.articles,
			totaldata: dataparsed.totalResults
		})
	}

	handlePrevious = async () => {
		document.getElementById('spinner').classList.add('d-flex');
		let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=131363d2ac02427d8c99084131b1f228&pageSize=${this.state.pageSize}&page=${this.state.currentPage - 1}&category=${this.props.category}`;
		let data = await fetch(url);
		let dataparsed = await data.json();
		document.getElementById('spinner').classList.add('d-none');
		this.setState({
			data: dataparsed.articles,
			currentPage: this.state.currentPage - 1,
		})
	}

	handleNext = async () => {
		document.getElementById('spinner').classList.add('d-flex');
		let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=131363d2ac02427d8c99084131b1f228&pageSize=${this.state.pageSize}&page=${this.state.currentPage + 1}&category=${this.props.category}`;
		let data = await fetch(url);
		let dataparsed = await data.json();
		document.getElementById('spinner').classList.add('d-none');
		this.setState({
			data: dataparsed.articles,
			currentPage: this.state.currentPage + 1,
		})
	}


	render() {
		return (
			<div>
				<div className="container mt-4">
					<h2 className="mb-3">Daily News : {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}</h2>
					<div className="d-flex justify-content-center align-items-center" id="spinner">
						<div class="spinner-grow m-1" style={{width: "2rem",height: "2rem"}} role="status">
						</div>
						<div class="spinner-grow" style={{width: "3rem",height: "3rem"}} role="status">
						</div>
						<div class="spinner-grow m-1" style={{width: "2rem",height: "2rem"}} role="status">
						</div>
					</div>
					<div className="row">
						{this.state.data.map((element) => {
							return <div className="col-md-4 mt-2 mb-2" key={element.url}>
								<NewsBox title={element.title} description={element.description} urlToImage={element.urlToImage ? element.urlToImage : "https://www.eacj.org/wp-content/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg"} newsurl={element.url} time={element.publishedAt} author={element.author} source={element.source.name} />
							</div>
						})}
					</div>
				</div>
				<div className="container d-flex justify-content-between mb-4">
					<button type="button" disabled={this.state.currentPage <= 1} className="btn btn-dark" onClick={this.handlePrevious}>&larr; Previous</button>
					<button type="button" disabled={this.state.currentPage + 1 > Math.ceil(this.state.totaldata / this.state.pageSize)} className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
				</div>
			</div>
		)
	}
}
