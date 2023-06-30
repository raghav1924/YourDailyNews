import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category:'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string,
    }


    constructor(props) {
        super(props);
        // console.log('this is a constructor from news Component to call news API');
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResult:0
        }
        document.title = `${props.heading} | YourDailyNews`
    }
    async componentDidMount() {
        // console.log('cdm');
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e6343d2df57e4fe79bbe57ccec4f14ea&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true})
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({ articles: parsedData.articles ,totalResult:parsedData.totalResults,loading:false});
        this.updateNews();
        // console.log((new Date()).toISOString());
        console.log(this.state);
    }
    async updateNews() {
        this.props.setProgress(5);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.props.setProgress(30);
        
        this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(50);
        let parsedData = await data.json();
        this.props.setProgress(70);
        // console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResult: parsedData.totalResults, loading: false });
        this.props.setProgress(100);
    }
    handlePrevClick = async () => {
        // console.log("previous");
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e6343d2df57e4fe79bbe57ccec4f14ea&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true})
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({
        //     page:this.state.page-1,
        //     articles: parsedData.articles,
        //     loading:false
        // })
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }

    handleNextClick = async () => {
        // console.log("Next");
        // if(!(this.state.page+1>Math.ceil(this.state.totalResult/this.props.pageSize))){
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e6343d2df57e4fe79bbe57ccec4f14ea&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true})
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({
        //     page:this.state.page+1,
        //     articles: parsedData.articles,
        //     loading:false
        // })
        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    }
    fetchMoreData = async() => {
     
        console.log("fetchMoreData")
        this.setState({ page: this.state.page+1 });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResult: parsedData.totalResults, loading: false });
     
        
      };


    render() {
        const defaultImage = 'data:image/png;base64,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';
        // console.log('render');
        return (
            <div className='container'>
                <h1 className=' text-center' style={{ margin: '40px 0px' }}>YourDailyNews | {(this.props.heading).toUpperCase()}</h1>
                <hr />
                {this.state.loading && <Spinner/>}
                <div className="row">
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length!==this.state.totalResult}
                        loader={<Spinner/>}
                        className="row"
                    >
                        {this.state.articles.map((e) => {
                            // console.log(e);
                            // console.log('~~~~~~~~~~~~~~~~~~');
                            // console.log(this.state.articles);
                            return <div className="col-md-4" key={e.url}>
                                <NewsItem title={e.title ? e.title : ''} discription={e.description ? e.description : ''} imageUrl={e.urlToImage ? e.urlToImage : defaultImage} newsUrl={e.url} author={e.author} date={e.publishedAt} source={e.source.name} />
                            </div>
                        })}
                    </InfiniteScroll>

                </div>
                {/* <div className="container d-inline-flex justify-content-between my-3">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button type="button" disabled={(this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.pageSize))} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
            </div>
        )
    }
}

export default News
