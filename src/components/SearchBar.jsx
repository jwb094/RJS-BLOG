import React from 'react';
import { useState } from 'react';
import { topicsTags, cats } from '../utils/functions';
function SearchBar(props) {
    console.log(topicsTags);


    return (
        <section data-template='searchBar' data-view="default" className='c-searchbar' >
            <div class="mx-auto max-w-7xl px-4 py-16 sm:px-0 lg:px-0">
                <form method='' className='flex  flex-col md:flex-row justify-around gap-3 md:items-end' onSubmit={props.SearchDB}>
                    <div class="">
                        <label for="username" class=" text-sm/6 font-medium text-black">    {props.loading ? "Searching..." : "Search"}</label>
                        <div class="mt-2">
                            <div class="w-full  min-w-50">
                                <input class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here..."
                                    value={props.searchTerm}
                                    onChange={(e) => props.setSearchTerm(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:items-center md:flex-row gap-6">

                        <div className="w-full ">
                            <label
                                htmlFor="category"
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                Select Category
                            </label>

                            <select
                                value={props.searchCat}
                                onChange={(e) => props.setSearchCat(e.target.value)}
                                id="category"
                                name="category"
                                className="w-full rounded-lg border  border-gray-300  bg-white px-4 py-3  text-gray-900 shadow-sm transition duration-200  focus:border-blue-500 focus:ring-2  focus:ring-blue-500 focus:outline-none"
                                defaultValue="">
                                <option value="" disabled>
                                    Choose an option
                                </option>
                                {cats.map((cat) =>
                                    <option value={cat.slug}>{cat.title}</option >
                                )}
                            </select>
                        </div>
                        <div className="w-full ">
                            <label
                                htmlFor="category"
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                Select Topic
                            </label>

                            <select
                                value={props.searchTag}
                                onChange={(e) => props.setSearchTag(e.target.value)}
                                id="topics"
                                name="topics"
                                className="w-full rounded-lg border  border-gray-300  bg-white px-4 py-3  text-gray-900 shadow-sm transition duration-200  focus:border-blue-500 focus:ring-2  focus:ring-blue-500 focus:outline-none"
                                defaultValue="">

                                <option value="" disabled>
                                    Choose an option
                                </option>
                                {topicsTags.map((tag) =>
                                    <option value={tag.slug}>{tag.title}</option >
                                )}
                            </select>
                        </div>
                    </div>
                    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                        disabled={props.loading}>
                        {props.loading ? "Searching..." : "Search"}
                    </button>

                </form>
            </div>
        </section >
    );
}

export default SearchBar;