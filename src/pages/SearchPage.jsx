import React from 'react';
import SearchBar from '../components/SearchBar';
import BlogGrid from '../components/BlogGrid';
import Pagination from '../components/Pagination';
function SearchPage(props) {
    return (
        <>
            <SearchBar />
            <BlogGrid />
            <Pagination />
        </>
    );
}

export default SearchPage;