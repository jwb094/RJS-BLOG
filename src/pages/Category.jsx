import React from 'react';
import BlogTopPost from '../components/BlogTopPost';
import BlogGrid from '../components/BlogGrid';
import Pagination from '../components/Pagination'
function Category(props) {
    return (
        <>
            <BlogTopPost />
            <BlogGrid />
            <Pagination />
        </>
    );
}

export default Category;