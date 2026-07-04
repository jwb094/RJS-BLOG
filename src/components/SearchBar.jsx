import React from 'react';
import CategoryFilter from './CategoryFilter';
function SearchBar(props) {
    return (
        <section data-template='searchBar' data-view="default" className='c-searchbar'>
            <div class="mx-auto max-w-7xl px-4 py-16 sm:px-0 lg:px-0">
                <form method='' className='flex  flex-col md:flex-row justify-around gap-3 md:items-end'>
                    <div class="">
                        <label for="username" class=" text-sm/6 font-medium text-black">Search</label>
                        <div class="mt-2">
                            <div class="w-full  min-w-50">
                                <input class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here..." />
                            </div>
                        </div>
                    </div>
                    <CategoryFilter />
                    <button type='submit' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                        Search
                    </button>

                </form>
            </div>
        </section >
    );
}

export default SearchBar;