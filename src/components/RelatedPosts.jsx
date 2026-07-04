import React from 'react';

function RelatedPosts(props) {
    const RelatedPostsCards = [];
    for (let index = 1; index <= 3; index++) {
        RelatedPostsCards.push(
            <div class="related-post-card | md:max-w-auto rounded overflow-hidden shadow-lg">
                <div className="related-post-card-img">
                    <img class="min-w-full" src="https://placehold.co/400x300" alt="Sunset in the mountains" />
                </div>
                <div className="related-post-card-content">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Blog Post Title {index}</div>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href="">photography</a></span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href="">travel</a></span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href="">winter</a></span>
                    </div>
                </div>


            </div>
        )
    }
    return (
        <>
            <h5>related Posts</h5>
            <section data-template="related-posts" data-view="default" className='c-related-posts'>

                <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center md:justify-center md:flex-row gap-4">
                        {RelatedPostsCards}
                    </div>
                </div>
            </section>
        </>
    );
}

export default RelatedPosts;