import React from 'react';

function BlogTopPost(props) {
    return (
        <>
            Blog Top Post
            <section data-template="blog-Top-Post" data-view="default" className="c-blog-Top-Post">
                <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="c-blog-top-post relative | flex flex-col md:flex-row gap-6 md:gap-y-3 | bg-[#8c8a8a] hover:bg-[#414141]">
                        <div className='c-blog-top-post-img relative | md:w-1/2'>
                            {/* <div className='mask | absolute w-full h-full bg-amber-900 opacity-30'></div> */}
                            <img class="min-w-full " src="https://placehold.co/400x300" alt="Sunset in the mountains" />
                        </div>
                        <div className='c-blog-top-post-content | px-4 py-6 | flex flex-col gap-4 | md:w-1/2'>
                            <h2 class="font-bold text-5xl mb-2">Blog Top Post Title</h2>
                            <ul className='flex flex-row justify-between'>
                                <li>Date and Time</li>
                                <li>Category</li>
                            </ul>
                            <p className='hidden md:block'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur commodi sint quas rerum qui repudiandae similique eum veritatis est totam!</p>
                            <ul className='flex flex-row justify-between md:mt-auto'>
                                <li>Authour</li>
                                <li >Read More</li>
                            </ul>
                            {/* <p className='md:mt-auto'>Author</p> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogTopPost;