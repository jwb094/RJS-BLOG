import React from 'react';
import {
    TwitterIcon,
    LinkedInIcon,
    FacebookIcon,
    InstagramIcon,
    DateTimeIcon,
    CatgeoriesIcon,
    ThumbsUpIcon,
    CommentsIcon, ReadingTimeIcon
} from '../assets/icons';
import Tags from '../components/Tags'
import AuthorCard from '../components/AuthorCard'
function BlogArticle({ article }) {
    return (
        <>

            <section data-template="blog-post" data-view="default" className='c-blog-post'>
                <div className="mx-auto max-w-7xl px-6 py-16 sm:px-6 lg:px-8">
                    {/* mobile blog tite and intro */}
                    <div className=' h-auto hidden md:block'>
                        <h1 className='text-6xl'>{article.title}</h1>
                        <p className='text-3xl | py-4'>{article.subHeading}</p>
                        <ul className='flex flex-row justify-baseline gap-x-12'>
                            <li className='flex gap-x-2'> <DateTimeIcon width={20} height={20} /> {article.publishedDate}</li>
                            <li className='flex gap-x-2'> <ThumbsUpIcon width={20} height={20} /> {article.likes}</li>
                            <li className='flex gap-x-2'> <CommentsIcon width={20} height={20} /> {article.comments}</li>
                            <li className='flex gap-x-2'> <ReadingTimeIcon width={20} height={20} /> {article.readingTime}&nbsp;mins</li>
                            <li className='flex gap-x-2'>
                                <CatgeoriesIcon width={20} height={20} />
                                <a href={`/blog/category/${article.cat_slug}`}>
                                    {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* AuthorCard */}
                    <div className=' h-auto hidden md:block'>
                        {/* <a href={`/blog/author/${article.author.id}/${article.author.slug}`}> */}
                        <AuthorCard author={article.author} />
                        {/* </a> */}
                    </div>
                    {/* blog main img and caption */}
                    <div className='c-blog-post-main-img | flex flex-row justify-center | py-6 '>
                        <figure>
                            <img class="  md:h-auto md:w-auto object-cover ..." src={article.featuredImage} alt={article.featuredImageAlt} />
                            <figcaption className=' mt-2 '>{article.imageCaption}</figcaption>
                        </figure>
                    </div>
                    {/* author - mobile */}
                    <div className=' h-auto md:hidden | mt-5 flex flex-col gap-y-5'>
                        {/* <a href={`/blog/author/${article.author.id}/${article.author.slug}`}> */}
                        <AuthorCard author={article.author} />
                        {/* </a> */}
                    </div>
                    {/* mobile title and intro */}
                    <div className=' h-auto md:hidden | mt-5 flex flex-col gap-y-5'>
                        <h1>{article.title}</h1>
                        <p>{article.subHeading}</p>

                        <ul className='flex flex-row justify-between'>
                            <li className='flex gap-x-2'> <DateTimeIcon width={20} height={20} /> {article.publishedDate}</li>
                            <li className='flex gap-x-2'> <ThumbsUpIcon width={20} height={20} /> {article.likes}</li>
                            <li className='flex gap-x-2'> <CommentsIcon width={20} height={20} /> {article.comments}</li>
                            <li className='flex gap-x-2'> <ReadingTimeIcon width={20} height={20} /> {article.readingTime}&nbsp;mins</li>
                            <li className='flex gap-x-2'> <CatgeoriesIcon width={20} height={20} />
                                <a href={`/blog/category/${article.cat_slug}`}>
                                    {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* content */}
                    <div className="c-blog-post-main-content  flex flex-col  gap-y-3 | mt-5">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: article.content
                            }}
                        />
                    </div>
                    {/* Tags */}
                    <Tags topics={article.topicsTags} />
                    {/* Share */}
                    <p>Share this story</p>
                    <div className="col-xs-12 col-md-12 | flex flex-row mt-6 gap-16">

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