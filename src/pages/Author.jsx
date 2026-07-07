import React from 'react';
import AuthorCard from '../components/AuthorCard'
import BlogGrid from '../components/BlogGrid';
import BlogCard from '../components/BlogCard';
function Author(props) {
    const TopViewPosts = [];
    for (let index = 1; index <= 3; index++) {
        TopViewPosts.push(
            <div class="w-1/4 ">
                <BlogCard index={index} />
            </div>
        )
    }
    return (
        <>
            <AuthorCard />
            {/* Top view posts  */}
            <section data-template="blogGrid" data-view="default" className='c-blog-grid'>
                <div className="flex flex-col items-center md:justify-center md:flex-row gap-4">
                    {TopViewPosts}
                </div>
            </section>
            <BlogGrid />
        </>
    );
}

export default Author;