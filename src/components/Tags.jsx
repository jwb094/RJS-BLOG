import React from 'react';
import {

    TagsIcon
} from '../assets/icons';
function Tags({ topics }) {
    return (
        <>
            <h1 className='mt-12'>Tags</h1>
            <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div class="flex flex-wrap gap-6 ">
                    <ul className='flex flex-row gap-x-5'>
                        {topics.map((topic) => (
                            <li class="py-3 px-3 bg-amber-400 rounded-3xl  md:w-auto flex gap-x-4">
                                {/* <a href='' class="py-3 px-3 bg-amber-400 rounded-3xl  md:w-auto flex">  */}
                                <TagsIcon width={24} height={24} />{topic}
                                {/* </a> */}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </>
    );
}

export default Tags;