import React from 'react';
import {
    TwitterIcon, LinkedInIcon, FacebookIcon, InstagramIcon
} from '../assets/icons';
import "../assets/styles/blogCard.scss"
function AuthorCard({ author }) {
    console.log(window.location.pathname.includes("author"));
    return (
        <>
            <section data-template="author-card" data-view="default" className='c-author-card'>
                <div className="mx-auto max-w-7xl   md:py-4 sm:px-6 lg:px-0">

                    <div className="flex flex-col md:flex-row flex-wrap   ">
                        <div className='author-block flex flex-row justify-start | gap-4'>
                            <div className="author-img w-1/3">
                                <img className="w-auto h-auto md:w-32 md:h-32  md:h-48 md:w-48 object-cover" src={author.avatar} />
                            </div>
                            <div className='w-2/3 md:w-3/6 flex flex-col justify-between'>
                                {!window.location.pathname.includes("author") && (
                                    <h2 className='text-lg'>{author.name}
                                    </h2>
                                )}
                                <p>{author.description}</p>
                                {window.location.pathname.includes("author") !== false && (
                                    <ul className='social flex flex-row md:flex-row justify-between  mt-3 gap-3'>
                                        <li>
                                            <a href={author.social.facebook}><FacebookIcon width={20} height={20} />
                                            </a>
                                        </li>
                                        <li><a href={author.social.instagram}><InstagramIcon width={20} height={20} /></a></li>
                                        <li><a href={author.social.linkedin}><LinkedInIcon width={20} height={20} /></a></li>
                                        <li><a href={author.social.x}><TwitterIcon width={20} height={20} /></a></li>
                                    </ul>
                                )}
                                {!window.location.pathname.includes("author") && (
                                    <a href={`/blog/author/${author.id}/${author.slug}`}> Go To Profile</a>
                                )}

                            </div>
                        </div>
                    </div >
                </div >
            </section >
        </>
    );
}

export default AuthorCard;