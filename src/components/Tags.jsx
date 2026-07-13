import React from 'react';
import {
    TagsIcon
} from '../assets/icons';
function Tags({ topics }) {
    return (
        <>
            <h1 className='mt-12'>Tags</h1>
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <ul className='flex flex-row  flex-wrap   gap-6  md:gap-x-5 w-full'>
                    {topics.map((topic) => (
                        <a key={topic.id} href={`/blog/tag/${topic.slug}`} class=" bg-amber-400 rounded-3xl max-w-max   md:w-auto  h-max ">
                            <li className="flex flex-row py-3 px-3 bg-amber-400 rounded-3xl  md:w-auto  gap-x-4">
                                <TagsIcon width={24} height={24} />{topic.name}
                            </li>
                        </a>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Tags;