import React, {useState} from 'react'
import './list-page.scss'
import ProductCard from '../product-card/product-card'
import Search from '../search-bar/search-bar.js'
import Recommendations from '../recommendation-card/recommendation-card'
import Products from '../../data/products'

export const ListPage = () => {
    const [products, setProducts] = useState(Products);
    const [searchHistory, setSearchHistory] = useState(JSON.parse(localStorage.getItem('searchHistory')||'[]'));
    const [searchKeyword, setSearchKeyword] = useState('');

    function addToSearchHistory(searchKeyword) {
        if(searchHistory.indexOf(searchKeyword.toLowerCase()) === -1) {
            if(searchHistory.length === 10)
            {
                const slicedKeywords = searchHistory.slice(1,10);
                setSearchHistory([...slicedKeywords, searchKeyword])
                localStorage.setItem('searchHistory',JSON.stringify([...slicedKeywords, searchKeyword]))
            }
            else{
                setSearchHistory([...searchHistory, searchKeyword])
                localStorage.setItem('searchHistory',JSON.stringify([...searchHistory, searchKeyword]))
            }
        }
    }

    function executeSearch(searchKeyword) {
        setSearchKeyword(searchKeyword)
        if(searchKeyword === '')
            setProducts(Products);
        else {
            addToSearchHistory(searchKeyword.toLowerCase())
            setProducts(Products.filter(product => product.title.toLowerCase().indexOf(searchKeyword.toLowerCase())>-1))
        }
    }

    return (
        <div className="pc-list-page">
            <Search executeSearch={executeSearch} />
            {searchHistory.length>0 && <Recommendations searchHistory={searchHistory} executeSearch={executeSearch} searchKeyword={searchKeyword}/>}
            <div className='pc-list-page__products-container'>
                {products.map(product => <ProductCard product={product} key={product.id}/>)}
            </div>
        </div>
    )
}

export default ListPage;