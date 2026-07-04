import React from 'react';
import BlogCard from './BlogCard';
function RelatedPosts(props) {
    const RelatedPostsCards = [];
    for (let index = 1; index <= 3; index++) {
        RelatedPostsCards.push(
            <BlogCard index={index} />
        )
    }
    return (
        <>
            <h5>Related Posts</h5>
            <section data-template="related-posts" data-view="default" className='c-related-posts'>
                <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <h5>Related Posts</h5>
                </div>
                <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center md:justify-center md:flex-row gap-4">
                        {RelatedPostsCards}
                    </div>
                </div>
            </section>


        </>
    );
}

export default RelatedPosts;