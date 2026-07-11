import React from 'react';
import {
    TwitterIcon, LinkedInIcon, FacebookIcon, InstagramIcon
} from '../assets/icons';
function AuthorCard({ author }) {
    return (
        <>
            <section data-template="author-card" data-view="default" className='c-author-card'>
                <div class="mx-auto max-w-7xl px-0 py-4 sm:px-6 lg:px-8">

                    <div class="flex flex-col md:flex-row flex-wrap   ">
                        {/* <div class="border-4 border-top border-indigo-500 ..."></div> */}
                        {/* <div className='border-t-4 border-solid border-black'></div> */}
                        <div className='author-block flex flex-row justify-start | gap-4'>
                            <div className="author-img w-auto">

                                <img className="w-32 h-32  md:h-48 md:w-48 object-cover ..." src={author.avatar} />
                            </div>
                            <div className='w-3/6 flex flex-col justify-between'>
                                <h2 className='text-lg'>{author.name}
                                </h2>
                                <p>{author.description}</p>
                                <ul className='social flex flex-row md:flex-row justify-between  mt-3 gap-3'>
                                    <li>
                                        <a href={author.social.facebook}><FacebookIcon width={20} height={20} />
                                        </a>
                                    </li>
                                    <li><a href={author.social.instagram}><InstagramIcon width={20} height={20} /></a></li>
                                    <li><a href={author.social.linkedin}><LinkedInIcon width={20} height={20} /></a></li>
                                    <li><a href={author.social.x}><TwitterIcon width={20} height={20} /></a></li>
                                </ul>
                                {!window.location.pathname.includes("author") && (
                                    <a href={`/blog/author/${author.id}/${author.slug}`}> Go To Profile</a>
                                )}

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