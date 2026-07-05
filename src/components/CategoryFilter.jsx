import React from 'react';

function CategoryFilter(props) {

    const tags = [];
    const Categories = [];
    for (let index = 1; index <= 8; index++) {
        Categories.push(
            <option value={`cat ${index}`}> Cat {index}</option >
        )
        tags.push(
            <option value={`tag ${index}`}> Tag {index}</option >
        )
    }
    return (
        <>        {/*  <section data-template="category-filter" data-view="default" className='category'>
             <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">*/}
            <div className="flex flex-col sm:items-center md:flex-row gap-6">

                <div className="w-full ">
                    <label
                        htmlFor="category"
                        className="mb-2 block text-sm font-medium text-gray-700"
                    >
                        Select Category
                    </label>

                    <select
                        id="category"
                        name="category"
                        className="
                            w-full
                            rounded-lg
                            border
                            border-gray-300
                            bg-white
                            px-4
                            py-3
                            text-gray-900
                            shadow-sm
                            transition
                            duration-200
                            focus:border-blue-500
                            focus:ring-2
                            focus:ring-blue-500
                            focus:outline-none
                            "
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Choose an option
                        </option>

                        {Categories}
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
                        id="category"
                        name="category"
                        className="
                            w-full
                            rounded-lg
                            border
                            border-gray-300
                            bg-white
                            px-4
                            py-3
                            text-gray-900
                            shadow-sm
                            transition
                            duration-200
                            focus:border-blue-500
                            focus:ring-2
                            focus:ring-blue-500
                            focus:outline-none
                            "
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Choose an option
                        </option>
                        {tags}
                    </select>
                </div>
            </div>
            {/* </div>
        </section> */}
        </>

    );
}

export default CategoryFilter;