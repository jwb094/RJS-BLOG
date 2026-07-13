import React from 'react';
import BlogCard from './BlogCard';
// import { mostRecentPost } from '../utils/functions';
import "../assets/styles/BlogCard-hover.scss"
function BlogGrid({ content }) {
    return (
        <>
            <section data-template="blogGrid" data-view="default" className='c-blog-grid'>
                <div className="flex justify-center mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 | cards-container">
                        {content.map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogGrid;