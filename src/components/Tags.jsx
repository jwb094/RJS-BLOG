import React from 'react';
import {

    TagsIcon
} from '../assets/icons';
function Tags(props) {
    return (
        <>
            <h1>Tags</h1>
            <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="flex flex-wrap gap-6 ">
                    <a href='' class="py-3 px-3 bg-amber-400 rounded-3xl  md:w-auto flex"> <TagsIcon width={24} height={24} /> Internet Of Things</a>
                    <a href='' class="py-3 px-3  bg-amber-400 rounded-3xl md:w-auto flex"><TagsIcon width={24} height={24} />  Economic</a>
                    <a href='' class="py-3 px-3  bg-amber-400 rounded-3xl md:w-auto flex"><TagsIcon width={24} height={24} />  Finance</a>
                    <a href='' class="py-3 px-3  bg-amber-400 rounded-3xl md:w-auto flex"><TagsIcon width={24} height={24} />  Politics</a>
                    <a href='' class="py-3 px-3  bg-amber-400 rounded-3xl md:w-auto flex"><TagsIcon width={24} height={24} />  Basketball</a>
                    <a href='' class="py-3 px-3  bg-amber-400 rounded-3xl md:w-auto flex"><TagsIcon width={24} height={24} />  Socioliogy</a>
                </div>
            </div>

        </>
    );
}

export default Tags;