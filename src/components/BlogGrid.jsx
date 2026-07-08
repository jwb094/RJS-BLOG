import React from 'react';
import BlogCard from './BlogCard';
// import { mostRecentPost } from '../utils/functions';

function BlogGrid({ content }) {
    return (
        <>
            <section data-template="blogGrid" data-view="default" className='c-blog-grid'>
                <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {content.map((post) => (
                            <div class="w-full ">
                                <BlogCard key={post.id} post={post} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogGrid;