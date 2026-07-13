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
import "../assets/styles/blogArticle.scss"
function BlogArticle({ article }) {
    return (
        <>

            <article data-template="blog-post" data-view="default" className='c-blog-post'>
                <div className="mx-auto max-w-7xl px-6 py-8 md:py-16 sm:px-6 lg:px-8">
                    <h1 className='text-2xl md:text-6xl'>{article.title}</h1>
                    <p className='md:text-3xl | py-4'>{article.subHeading}</p>
                    <ul className='flex flex-row justify-baseline gap-x-12 | hidden md:flex'>
                        <li className='flex gap-x-2'> <DateTimeIcon width={20} height={20} /> {article.publishedDate.split("-").reverse().join(".")}</li>
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
                    {/* AuthorCard */}

                    <AuthorCard author={article.author} />

                    {/* blog main img and caption */}
                    <figure className='c-blog-post-main-img | py-6 '>
                        <img class="  object-cover ..." height="450" src={article.featuredImage} alt={article.featuredImageAlt} />
                        <figcaption className=' mt-2 '>{article.imageCaption}</figcaption>
                    </figure>

                    {/* mobile title and intro */}
                    <ul className='flex flex-row flex-wrap justify-between | gap-y-4 |  h-auto md:hidden '>
                        <li className='flex gap-x-2'> <DateTimeIcon width={20} height={20} /> {article.publishedDate.split("-").reverse().join(".")}</li>
                        <li className='flex gap-x-2'> <ThumbsUpIcon width={20} height={20} /> {article.likes}</li>
                        <li className='flex gap-x-2'> <CommentsIcon width={20} height={20} /> {article.comments}</li>
                        <li className='flex gap-x-2'> <ReadingTimeIcon width={20} height={20} /> {article.readingTime}&nbsp;mins</li>
                        <li className='flex gap-x-2'> <CatgeoriesIcon width={20} height={20} />
                            <a href={`/blog/category/${article.cat_slug}`}>
                                {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                            </a>
                        </li>
                    </ul>
                    {/* content */}
                    <section className="c-blog-post-main-content  flex flex-col  gap-y-3 | mt-5"
                        dangerouslySetInnerHTML={{
                            __html: article.content
                        }}
                    />
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
            </article >
        </>
    );
}

export default BlogArticle;