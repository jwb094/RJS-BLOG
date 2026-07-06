import React from 'react';

function Tags(props) {
    return (
        <>
            <h1>Tags</h1>
            <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="flex flex-wrap gap-6 ">
                    <a href='' class="py-3 px-3 bg-amber-400 rounded-3xl  md:w-auto">Internet Of Things</a>
                    <a href='' class="py-3 px-3  bg-amber-400 rounded-3xl md:w-auto">Economic</a>
                    <a href='' class="py-3 px-3  bg-amber-400 rounded-3xl md:w-auto">Finance</a>
                    <a href='' class="py-3 px-3  bg-amber-400 rounded-3xl md:w-auto">Politics</a>
                    <a href='' class="py-3 px-3  bg-amber-400 rounded-3xl md:w-auto">Basketball</a>
                    <a href='' class="py-3 px-3  bg-amber-400 rounded-3xl md:w-auto">Socioliogy</a>
                </div>
            </div>

        </>
    );
}

export default Tags;