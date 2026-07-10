import React, { useState, useTransition } from 'react';
import SearchBar from '../components/SearchBar';
import BlogGrid from '../components/BlogGrid';
import Pagination from '../components/Pagination';
import SearchLoading from '../components/SearchLoading';
import { SearchPostsDB, getPosts, getRandomPosts } from '../utils/functions';
import { useMemo } from 'react';
import { TailSpin } from 'react-loader-spinner'
function SearchPage(props) {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchCat, setSearchCat] = useState("");
    const [searchTag, setSearchTag] = useState("");
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const limit = 9;
    const [isPending, startTransition] = useTransition();
    const [content, setContent] = useState(getRandomPosts);
    let totalPages, currentPage;



    const handleSubmit = (event) => {
        event.preventDefault();

        setLoading(true);

        setTimeout(() => {

            const result = SearchPostsDB(searchTerm, searchCat, searchTag);


            startTransition(() => {
                setContent(result);
                setPage(1);
            })

            setLoading(false);

        }, 3000)


    }


    totalPages = Math.ceil(content.length / limit) || 1;


    currentPage = Math.min(page, totalPages);

    const searchContent = useMemo(() => getPosts(page, limit, content), [page, content]);


    function handlePageChange(value) {
        setPage(value);
    }

    return (
        <>
            <SearchBar
                search={searchTerm}
                setSearchTerm={setSearchTerm}
                searchCat={searchCat}
                setSearchCat={setSearchCat}
                searchTag={searchTag}
                setSearchTag={setSearchTag}
                SearchDB={handleSubmit}
                loading={loading} />

            {/* 
            if loading  OR isPending is TRUE
            else if - Content.Length === 0 (EMPTY) producing results
            else - there is Data display 
            */}
            {
                loading || isPending
                    ?
                    <>
                        <SearchLoading />
                    </>
                    :
                    content.length === 0
                        ?
                        <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-4 text-center">
                            <h2>No articles matched your search.</h2>
                            <p>    Try:</p>
                            <ul>
                                <li>another keyword</li>
                                <li>another category</li>
                                <li>removing filters</li>
                            </ul>
                        </div>
                        :
                        <>
                            <BlogGrid content={searchContent} />
                            <Pagination
                                totalPages={totalPages}
                                page={currentPage}
                                onPageChange={handlePageChange} />
                        </>
            }




        </>
    );
}

export default SearchPage;