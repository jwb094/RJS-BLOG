import React from 'react';

function AuthorCard(props) {
    return (
        <>
            Author CArd
            <section data-template="author-card" data-view="default" className='c-author-card'>
                <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div class="flex flex-col md:flex-row flex-wrap gap-6 ">
                        <div className=''>
                            <img class="h-auto w-auto object-cover ..." src="https://placehold.co/160x160" />
                        </div>
                        <div className=''>Author Info</div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AuthorCard;