import React from 'react';
import { DateTimeIcon, CatgeoriesIcon, PencilIcon } from '../assets/icons';
function BlogCard({ post }) {
    return (
        <>
            {/* <section data-template="blogCard" data-view="default" className='c-blog-card'>*/}
            <div class=" md:max-w-auto rounded  shadow-lg |  max-w-96 mx-10">
                <div className="related-post-card-img">
                    <img class="h-full" src={post.featuredImage} alt="Sunset in the mountains" />
                </div>
                <div className="related-post-card-content">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">{post.title}</div>
                        <p class="text-gray-700 text-base">
                            {post.excerpt}
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2 flex flex-row flex-wrap justify-between">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            <a class="flex flex-row gap-2" href=""><CatgeoriesIcon width={20} height={20} /> {post.category}</a>
                        </span>
                        <span class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            <a href={`/blog/${post.id}/${post.slug}`}>Read More</a>
                        </span>
                    </div>
                </div>
            </div>
            {/* </section > */}
        </>
    );
}

export default BlogCard;