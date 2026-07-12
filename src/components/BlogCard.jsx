import React from 'react';
import { DateTimeIcon, CatgeoriesIcon, PencilIcon } from '../assets/icons';
import "../assets/styles/blogCard.scss"
function BlogCard({ post }) {
    return (
        <>
            {/* <section data-template="blogCard" data-view="default" className='c-blog-card'>*/}
            <a href={`/blog/${post.id}/${post.slug}`}>

                <div className="c-blog-card | md:max-w-auto rounded  shadow-lg |  max-w-96 " key={post.id}>
                    <div className="related-post-card-img | relative">
                        <img className="h-full" src={post.featuredImage} alt="Sunset in the mountains" />
                        <span className="flex flew-row gap-2 bg-sky-600 text-white rounded-full px-3 py-1 text-sm 
                            font-semibold text-gray-700 mr-2 mb-2 | absolute right-0 bottom-0">
                            <CatgeoriesIcon width={20} height={20} /> {post.category}
                        </span>
                    </div>
                    <div className="related-post-card-content | flex flex-col gap-2 px-6 py-4 ">
                        {/* <div className="flex flex-col gap-2 px-6 py-4 "> */}
                        <h3 className="font-bold text-xl mb-2">{post.title}</h3>
                        <p className="text-gray-700 text-base">
                            {post.excerpt}
                        </p>

                        {/* <ul className='flex flex-row justify-between mt-6'>
                        {/* <li>
                            <span className="flex flew-row gap-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                <CatgeoriesIcon width={20} height={20} /> {post.category}
                            </span>
                        </li>
                    <li>
                        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            <a href={`/blog/${post.id}/${post.slug}`}>Read More</a>
                        </span>
                    </li>
                </ul>*/}


                        {/* </div> */}
                    </div>
                </div >
            </a>
            {/* </section > */}
        </>
    );
}

export default BlogCard;