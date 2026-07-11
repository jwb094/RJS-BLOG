import React from 'react';
import {

    TagsIcon
} from '../assets/icons';
function Tags({ topics }) {
    return (
        <>
            <h1 className='mt-12'>Tags</h1>
            <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div class="flex flex-wrap gap-6 w-full">
                    <ul className='flex flex-col md:flex-row gap-y-4  md:gap-x-5'>
                        {topics.map((topic) => (
                            <a href={`/blog/tag/${topic.slug}`} class=" bg-amber-400 rounded-3xl  md:w-auto  h-max ">
                                <li class="flex flex-row py-3 px-3 bg-amber-400 rounded-3xl  md:w-auto  gap-x-4">
                                    <TagsIcon width={24} height={24} />{topic.name}
                                </li>
                            </a>
                        ))}
                    </ul>
                </div>
            </div>

        </>
    );
}

export default Tags;