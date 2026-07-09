import React from 'react';
import {
    DateTimeIcon
    , CatgeoriesIcon, PencilIcon

} from '../assets/icons';
function BlogTopPost(props) {
    const style = "flex flex-row gap-2";
    return (
        <>
            <section data-template="blog-Top-Post" data-view="default" className="c-blog-Top-Post">
                <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="c-blog-top-post relative | flex flex-col md:flex-row gap-6 md:gap-y-3 | bg-[#8c8a8a] hover:bg-[#414141]">
                        <div className='c-blog-top-post-img relative | md:w-1/2'>
                            {/* <div className='mask | absolute w-full h-full bg-amber-900 opacity-30'></div> */}
                            <img class="min-w-full " src={props.content.featuredImage} alt="Sunset in the mountains" />
                        </div>
                        <div className='c-blog-top-post-content | px-4 py-6 | flex flex-col gap-4 | md:w-1/2'>
                            <a className="h-full  flex flex-col " href={`/blog/${props.content.id}/${props.content.slug}`}>

                                <h2 class="font-bold text-5xl mb-2">{props.content.title}</h2>
                                <ul className='flex flex-row justify-between mt-7'>
                                    <li className={style}><DateTimeIcon width={24} height={24} />{props.content.publishedDate}</li>
                                    <li className={style}><CatgeoriesIcon width={24} height={24} />{props.content.category.charAt(0).toUpperCase() + props.content.category.slice(1)}</li>
                                </ul>
                                <p className='hidden md:block mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur commodi sint quas rerum qui repudiandae similique eum veritatis est totam!</p>
                                <ul className='flex flex-row justify-between mt-7 md:mt-auto'>
                                    <li className={style}><PencilIcon width={24} height={24} /> {props.content.title}</li>

                                </ul>
                            </a>
                            {/* <p className='md:mt-auto'>Author</p> */}
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}

export default BlogTopPost;