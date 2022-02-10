import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default function News(props) {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async (pageNumber) => {
    props.setProgress(10)
    setLoading(true)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${pageNumber}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30)
    let parsedData = await data.json();
    props.setProgress(70)
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
  }

  useEffect(() => {
    updateNews(page)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchMoreData = async () => {
    updateNews(page + 1)
    setPage(page + 1);
  }

  //  const handleNextClick = async () => {
  //   updateNews(page + 1)
  //   setPage(page + 1);
  // }

  // const handlePrevClick = async () => {
  //   updateNews(page - 1)
  //   setPage(page - 1);
  // }

  return (
    <>
      <h1 className='text-center'>NewsMonkey - Top {props.category} headlines</h1>
      {loading && <Loading/>}
      
      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={page<=Math.ceil(totalResults/props.pageSize)}
          loader={<Loading/>}
        >
        <div className="container my-3">
          <div className="row">
            {articles.map((element)=>{
                return  <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
      
      {/* <div className="container d-flex justify-content-between">
        <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
        <button disabled={page>=Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
      </div> */}
    </>
  )
}

News.defaultProps = {
  country: 'in',
  category: 'general',
  pageSize: 12
}

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number
}
