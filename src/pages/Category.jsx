import React, { useMemo, useState, useTransition } from 'react';
import BlogTopPost from '../components/BlogTopPost';
import BlogGrid from '../components/BlogGrid';
import Pagination from '../components/Pagination'
import SearchLoading from '../components/SearchLoading';
import { useParams } from 'react-router';
import { getPosts, getPostsByCategory, contentPagination } from '../utils/functions';

function Category(props) {
    const { category_slug } = useParams();
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [isPending, startTransition] = useTransition();
    const limit = 9;
    let totalPages, currentPage;
    const articles = getPostsByCategory(category_slug);
    if (!articles) {
        return <PageNotFound />;
    }


    const TopStory = articles.shift();


    const PaginationData = contentPagination(page, limit, articles);


    const catgeoryPaginationContent = useMemo(() => getPosts(page, limit, articles), [page, articles]);



    function handlePageChange(value) {
        setPage(value);
    }

    return (
        <>
            <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <h1 className='text-5xl'>
                    {category_slug.charAt(0).toUpperCase() + category_slug.slice(1)}
                </h1>
            </div>
            <BlogTopPost content={TopStory} />
            <BlogGrid content={catgeoryPaginationContent} />
            <Pagination
                totalPages={PaginationData.totalPages}
                page={PaginationData.currentPage}
                onPageChange={handlePageChange} />
        </>
    );
}

export default Category;