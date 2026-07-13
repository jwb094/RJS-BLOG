import React from 'react';
import AuthorCard from '../components/AuthorCard'
import BlogGrid from '../components/BlogGrid';
import BlogCard from '../components/BlogCard';
import { useParams } from "react-router";
import { getAuthorById, getAuthorTopViewPosts, getPostsByAuthors, getPosts, contentPagination } from '../utils/functions';
import PageNotFound from './PageNotFound';
import Pagination from "../components/Pagination";
import { useState } from 'react';
import { useMemo } from 'react';
function Author(props) {
    const { author_id, author_slug } = useParams();
    const author = getAuthorById(author_id);
    if (!author) {
        return <PageNotFound />;
    }
    //Pagination logic
    const [page, setPage] = useState(1);
    const limit = 9;



    let authorTopViewPosts = getAuthorTopViewPosts(Number(author_id));
    let authorPosts = useMemo(() => getPostsByAuthors(Number(author_id), [author_id]));


    const PaginationData = contentPagination(page, limit, authorPosts);


    const content = useMemo(() => getPosts(page, limit, authorPosts), [page, author_id]);



    function handlePageChange(value) {
        setPage(value);
    }

    return (
        <>
            <AuthorCard author={author} />
            {/* Top Viewed Post  */}
            <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-0">
                <h2 className='text-3xl'>Top View</h2>
            </div>
            <section data-template="blogGrid" data-view="default" className='c-blog-grid'>
                <div className="flex flex-col items-center md:justify-center md:flex-row p-4 gap-4 ">
                    {authorTopViewPosts.map((post) => (
                        // <div class=" px-10 ">
                        <BlogCard key={post.id} post={post} />
                        // </div>
                    ))}
                </div>
            </section>

            <BlogGrid content={content} />
            <Pagination
                totalPages={PaginationData.totalPages}
                page={PaginationData.currentPage}
                onPageChange={handlePageChange} />
        </>
    );
}

export default Author;