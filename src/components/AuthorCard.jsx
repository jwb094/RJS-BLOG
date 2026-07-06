import React from 'react';
import {
    TwitterIcon, LinkedInIcon, FacebookIcon, InstagramIcon
} from '../assets/icons';
function AuthorCard(props) {
    return (
        <>
            Author Card
            <section data-template="author-card" data-view="default" className='c-author-card'>
                <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div class="flex flex-col md:flex-row flex-wrap   ">
                        {/* <div class="border-4 border-top border-indigo-500 ..."></div> */}
                        {/* <div className='border-t-4 border-solid border-black'></div> */}
                        <div className='author-block flex flex-row justify-start | gap-4'>
                            <div className="author-img w-auto">

                                <img class="w-auto  md:h-auto md:w-auto object-cover ..." src="https://placehold.co/160x160" />
                            </div>
                            <div className='w-2/6'>
                                <h2>Author Info
                                </h2>
                                <ul className='social flex flex-col  mt-3 gap-3'>
                                    <li><a href=""><FacebookIcon width={20} height={20} /></a></li>
                                    <li><a href=""><InstagramIcon width={20} height={20} /></a></li>
                                    <li><a href=""><LinkedInIcon width={20} height={20} /></a></li>
                                    <li><a href=""><TwitterIcon width={20} height={20} /></a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className='border-t-4 border-solid border-black'></div> */}
                    </div >
                </div >
            </section >
        </>
    );
}

export default AuthorCard;