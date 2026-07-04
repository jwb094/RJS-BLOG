import React from 'react';

function BlogCard(props) {
    return (
        <section data-template="blogCard" data-view="default" className='c-blog-card'>
            <div class=" md:max-w-auto rounded overflow-hidden shadow-lg">
                <div className="related-post-card-img">
                    <img class="min-w-full" src="https://placehold.co/400x300" alt="Sunset in the mountains" />
                </div>
                <div className="related-post-card-content">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Blog Post Title {props.index}</div>
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
        </section>
    );
}

export default BlogCard;