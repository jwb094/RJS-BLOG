import React, { useMemo, useState } from "react";
import { useParams } from "react-router";
import {
  contentPagination,
  getPosts,
  getPostsByTags,
} from "../utils/functions";
import BlogTopPost from "../components/BlogTopPost";
import BlogGrid from "../components/BlogGrid";
import Pagination from "../components/Pagination";
import MetaTags from "../components/MetaTags";
import { tags_seo } from "../data/page_seo";
function Tags(props) {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const limit = 9;
  let totalPages, currentPage;
  const { tag_slug } = useParams();
  const articles = getPostsByTags(tag_slug);
  if (!articles) {
    return <PageNotFound />;
  }

  const TopStory = articles.shift();

  const PaginationData = contentPagination(page, limit, articles);

  const catgeoryPaginationContent = useMemo(
    () => getPosts(page, limit, articles),
    [page, articles],
  );

  function handlePageChange(value) {
    setPage(value);
  }

  return (
    <>
      <MetaTags
        title={tags_seo.seo.metaTitle}
        description={tags_seo.seo.metaDescription}
        image={window.location.origin + tags_seo.ogImage}
        name={tags_seo.twitterName}
      />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-5xl">
          {tag_slug.charAt(0).toUpperCase() + tag_slug.slice(1)}
        </h1>
      </div>
      <BlogTopPost content={TopStory} />
      <BlogGrid content={catgeoryPaginationContent} />
      <Pagination
        totalPages={PaginationData.totalPages}
        page={PaginationData.currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default Tags;
