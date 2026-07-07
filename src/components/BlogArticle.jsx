import React from 'react';
import {
    TwitterIcon,
    LinkedInIcon,
    FacebookIcon,
    InstagramIcon,
    DateTimeIcon,
    CatgeoriesIcon,
} from '../assets/icons';
function BlogArticle(props) {
    return (
        <>
            <h1>blog Post</h1>
            <section data-template="blog-post" data-view="default" className='c-blog-post'>
                <div class="mx-auto max-w-7xl px-6 py-16 sm:px-6 lg:px-8">
                    {/* mobile blog tite and intro */}
                    <div className='bg-amber-200 h-auto hidden md:block'>
                        <h1>Title</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna...</p>
                        <ul className='flex flex-row justify-between'>
                            <li className='flex gap-x-2'> <DateTimeIcon width={20} height={20} /> Date</li>
                            <li className='flex gap-x-2'> <CatgeoriesIcon width={20} height={20} />Category</li>
                        </ul>
                    </div>
                    {/* blog main img and caption */}
                    <div className='c-blog-post-main-img | flex flex-row justify-center '>
                        <figure>
                            <img class="  md:h-auto md:w-auto object-cover ..." src="https://placehold.co/736x479" />
                            <figcaption className=' mt-2'>Image caption</figcaption>
                        </figure>
                    </div>
                    {/* mobile title and intro */}
                    <div className='bg-amber-200 h-auto md:hidden | mt-5 flex flex-col gap-y-5'>
                        <h1>Title</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna...</p>

                        <ul className='flex flex-row justify-between'>
                            <li className='flex gap-x-2'> <DateTimeIcon width={20} height={20} /> Date</li>
                            <li className='flex gap-x-2'> <CatgeoriesIcon width={20} height={20} />Category</li>
                        </ul>
                    </div>
                    {/* content */}
                    <div class="c-blog-post-main-content  flex flex-col  gap-y-3 | mt-5">
                        <h2>Heading lorum ipsum dolor</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea *commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt *mollit anim id est laborum.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu

                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <h2>Heading lorum ipsum dolor</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <ul>
                            <li>lorem ispum</li>
                            <li>lorem ispum</li>
                            <li>lorem ispum</li>
                            <li>lorem ispum</li>
                            <li>lorem ispum</li>
                        </ul>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    {/* Tags */}
                    <p>Share this story</p>
                    <div class="col-xs-12 col-md-12 | flex flex-row mt-6 gap-16">

                        <ul className='c-blog-post-social-share flex flex-row  mt-3 gap-8'>
                            <li><a href=""><FacebookIcon width={20} height={20} /></a></li>
                            <li><a href=""><InstagramIcon width={20} height={20} /></a></li>
                            <li><a href=""><LinkedInIcon width={20} height={20} /></a></li>
                            <li><a href=""><TwitterIcon width={20} height={20} /></a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogArticle;