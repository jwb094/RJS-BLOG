import React from 'react';
import { getCategory } from '../utils/functions';
import { categoryHub_seo } from '../data/page_seo';
import MetaTags from '../components/MetaTags';
function Categories(props) {
    return (
        <>
            <MetaTags
                title={categoryHub_seo.metaTitle}
                description={categoryHub_seo.metaDescription}
                image={window.location.origin+categoryHub_seo.ogImage}
                name={categoryHub_seo.twitterName}
            />
            <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-4">
                <h1 className=' md:text-6xl'>Categories</h1>
                <p className='text-lg mt-4'>
                    Finding content that interests you should be simple. Browse our collection of carefully curated categories to discover articles tailored to your interests, whether you're looking for the latest technology trends, business insights, lifestyle inspiration, travel guides, health and wellness advice, or practical tutorials.
                </p>
            </div>

            <section data-template="categoryGrid" data-view="default" className='c-category-grid'>
                <div className="flex flex-col flex-wrap items-center md:justify-center md:flex-row gap-4">
                    {getCategory.map((category) =>
                        <div key={category.id} class=" px-10 md:px-0 md:w-1/4  " style={{ height: "21rem" }}>
                            <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg max-w-96 ">
                                <div class="p-4 flex flex-col gap-y-3">
                                    <h5 class="mb-2 text-slate-800 text-xl font-semibold">
                                        {category.title}
                                    </h5>
                                    <p class="text-slate-600 leading-normal font-light">
                                        {category.desc}
                                    </p>
                                    <span>No. of Stories :{category.no_of_stories}</span>
                                    <a href={category.slug} class="rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                                        Go To   {category.title}
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </section>
        </>
    );
}

export default Categories;