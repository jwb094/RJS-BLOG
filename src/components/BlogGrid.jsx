import React from 'react';
import BlogCard from './BlogCard';
function BlogGrid(props) {

    const BlogPostsCards = [];
    for (let index = 1; index <= 12; index++) {
        BlogPostsCards.push(
            <div class="w-full ">
                <BlogCard index={index} />
            </div>
        )
    }

    return (
        <>
            grid
            <section data-template="blogGrid" data-view="default" className='c-blog-grid'>
                <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {BlogPostsCards}
                        {/* <div class="w-full md:w-1/3">01</div>
                        <div class="w-full md:w-1/3">02</div>
                        <div class="w-full md:w-1/3">03</div> */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogGrid;