import React from 'react';
import {
    DateTimeIcon
    , CatgeoriesIcon, PencilIcon, ThumbsUpIcon, CommentsIcon

} from '../assets/icons';
function BlogTopPost(props) {
    const style = "flex flex-row gap-2";
    return (
        <>
            <section data-template="blog-Top-Post" data-view="default" className="c-blog-Top-Post text-white">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="c-blog-top-post relative | flex flex-col md:flex-row gap-6 md:gap-y-3 | bg-[#454545] hover:bg-[#656565]">
                        <div className='c-blog-top-post-img relative | md:w-1/2'>
                            <img className="min-w-full h-full" src={props.content.featuredImage} alt="Sunset in the mountains" />
                        </div>
                        <div className='c-blog-top-post-content | px-4 py-6 | flex flex-col gap-4 | md:w-1/2'>
                            <a className="h-full  flex flex-col gap-4" href={`/blog/${props.content.id}/${props.content.slug}`}>
                                <h2 className="font-bold text-5xl mb-2">{props.content.title}</h2>
                                <ul className='flex flex-row justify-between mt-7'>
                                    <li className={style}><DateTimeIcon width={24} height={24} />{props.content.publishedDate.split("-").reverse().join(".")}</li>
                                    <li className={style}><CatgeoriesIcon width={24} height={24} />{props.content.category.charAt(0).toUpperCase() + props.content.category.slice(1)}</li>
                                </ul>
                                <p className='hidden md:block mt-5'> {props.content.excerpt}</p>
                                <ul className='flex flex-row justify-baseline gap-4 mt-7 md:mt-auto'>
                                    <li className={style}><PencilIcon width={24} height={24} /> {props.content.author.name}</li>
                                    <li className={style}><ThumbsUpIcon width={24} height={24} /> {props.content.likes}</li>
                                    <li className={style}><CommentsIcon width={24} height={24} /> {props.content.comments}</li>
                                </ul>
                            </a>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}

export default BlogTopPost;