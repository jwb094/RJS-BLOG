import React from 'react';
import BlogArticle from '../components/BlogArticle';
import { useParams } from "react-router";
import { getArticleById } from '../utils/functions';
import PageNotFound from './PageNotFound';
function BlogPost(props) {
    const { id, slug } = useParams();

    const article = getArticleById(id);

    if (!article) {
        return <PageNotFound />;
    }


    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: article.title,
        description: article.description,
        image: [
            `https://example.com${article.featuredImage}`
        ],
        author: {
            "@type": "Person",
            name: article.author.name
        },
        publisher: {
            "@type": "Organization",
            name: "StoryPhrase",
            logo: {
                "@type": "ImageObject",
                url: "https://example.com/logo.png"
            }
        },
        datePublished: article.publishedDate,
        dateModified: article.modifiedDate,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `/blog/id/${article.slug}`
        }
    };
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schema),
                }}
            />
            <BlogArticle article={article} />
        </>
    );
}

export default BlogPost;