import React from "react";
import BlogTopPost from "../components/BlogTopPost";
import BlogGrid from "../components/BlogGrid";
import BlogCard from "../components/BlogCard";
import {
  blogTopStory,
  blogFeaturedStories,
  postByViewDescending,
  mostRecent,
} from "../utils/functions";
import { home_seo } from "../data/page_seo";
import MetaTags from "../components/MetaTags";
function Home(props) {
  return (
    <>
      <MetaTags
        title={home_seo.metaTitle}
        description={home_seo.metaDescription}
        image={window.location.origin + home_seo.ogImage}
        name={home_seo.twitterName}
      />
      <BlogTopPost content={blogTopStory} />
      {/* featured Post  */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-12">
        <h2 className="text-3xl">Featured</h2>
      </div>
      <section
        data-template="blogGrid"
        data-view="default"
        className="c-blog-grid"
      >
        <div className="flex flex-col items-center md:justify-center md:flex-row gap-4 | cards-container">
          {blogFeaturedStories.map((post, index) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
      {/* Top Viewed Post  */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-12">
        <h2 className="text-3xl">Top View</h2>
      </div>
      <section
        data-template="blogGrid"
        data-view="default"
        className="c-blog-grid"
      >
        <div className="flex flex-col items-center md:justify-center md:flex-row gap-4 | cards-container">
          {postByViewDescending.map((post, index) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
      {/*Most Recently Published  */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-12">
        <h2 className="text-3xl">Recently Published</h2>
      </div>
      <BlogGrid content={mostRecent} />
    </>
  );
}

export default Home;
