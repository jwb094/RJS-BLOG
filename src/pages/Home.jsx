import React from 'react';
import BlogTopPost from '../components/BlogTopPost';
import BlogGrid from '../components/BlogGrid';
import BlogCard from '../components/BlogCard';
function Home(props) {
    const BlogPostsCards = [];
    for (let index = 1; index <= 3; index++) {
        BlogPostsCards.push(
            <div class="w-1/4 ">
                <BlogCard index={index} />
            </div>
        )
    }
    return (
        <>
            <BlogTopPost />
            {/* featured Post  */}
            <section data-template="blogGrid" data-view="default" className='c-blog-grid'>
                <div className="flex flex-col items-center md:justify-center md:flex-row gap-4">
                    {BlogPostsCards}
                </div>
            </section>
            <BlogGrid />
        </>
    );
}

export default Home;