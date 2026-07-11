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
    return (
        <>
            <BlogArticle article={article} />
        </>
    );
}

export default BlogPost;