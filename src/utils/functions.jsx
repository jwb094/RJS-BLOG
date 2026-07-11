import { blogPosts } from '../data/posts';
import { authors } from '../data/author';
import { category } from '../data/category'
import { tags } from '../data/topics'


export const getCategory = category.map((item) => {

    return {
        "title": item.title,
        "slug": '/blog/category/' + item.slug,
        "no_of_stories": blogPosts.filter(post => post.category === item.title.toLowerCase()).length,
        "desc": item.description
    }

})
export const getRandomPosts = [...blogPosts]
    .sort(() => Math.random() - 0.5)
    .slice(0, 9);

export const topicsTags = tags.map((item) => {
    return { "title": item.title, "slug": item.slug }

});

export const cats = category.map((item) => {
    return { "title": item.title, "slug": item.slug }
});

let sortedPost = blogPosts.sort((a, b) => {
    return a.publishedDate > b.publishedDate ? 1 : -1; // asc
})


let postByViewDesc = blogPosts.sort((a, b) => {
    return a.views > b.views ? -1 : 1; // asc
});


export const getAuthorTopViewPosts = (authorId) => {
    return postByViewDesc.filter(post => post.author_id == authorId).slice(0, 3);
}



// export function getAuthor(sortedPost) => {
for (let index = 0; index < sortedPost.length; index++) {

    const author = authors.find((author) => author.id === sortedPost[index].author_id);
    if (author) {
        sortedPost[index].author = author;
    }

}


//Get the most Recent Blog Post after
export const mostRecentPost = sortedPost.slice(4, 13);



//Get REcent Story for Top Story
export const blogTopStory = sortedPost[0];


//Get Recent Featured Stories

export const blogFeaturedStories = sortedPost
    .filter(post => post.featured && post.id !== blogTopStory.id)
    .slice(0, 3);


//Top View
/**
 * Sort the Array
 * Filter array
 */

export const postByViewDescending =
    // blogPosts.sort((a, b) => {
    //     return a.views > b.views ? -1 : 1; // asc
    // })
    postByViewDesc.filter(post => !blogFeaturedStories.some(item => item.id === post.id))
        .slice(0, 3)
// console.log(sortedPostByView);



//Get Recent Stories
export const mostRecent = sortedPost
    .filter(post => !blogFeaturedStories.some(item => item.id === post.id))
    .filter(post => !postByViewDescending.some(item => item.id === post.id))
    .slice(0, 9);




export const postsSorted = sortedPost;


export const getAuthorById = (authorId) => {
    return authors.find((author) => author.id === Number(authorId));
}



export const SearchPostsDB = (search_term, search_category, search_tag) => {
    return blogPosts.filter(post => {
        const matchTitle =
            search_term &&
            post.title.toLowerCase().includes(search_term.toLowerCase());

        const matchCategory =
            search_category &&
            post.category === search_category;

        const matchTag =
            search_tag &&
            post.tags.includes(search_tag);

        return matchTitle || matchCategory || matchTag;
    }
    )
}
// export const SearchDB = (search_term, search_category, search_tags) => {

//     let searchResult = [];
//     let search_term_result, search_category_result, search_tags_result;

//     if (search_term !== "") {
//         search_term_result = blogPosts
//             .filter(post => post.title.includes(search_term));
//     }

//     search_category_result = blogPosts
//         .filter(post => post.category === search_category);

//     search_tags_result = blogPosts
//         .filter(post => post.tags.includes(search_tags));

//     console.log(search_term_result);
//     console.log(search_category_result);
//     console.log(search_tags_result);


//     searchResult = search_term_result?.concat(search_category_result, search_tags_result)
//     console.log(searchResult);

//     //let result = searchResult.filter((item, index) => searchResult.indexOf(item) === index);
//     //console.log(search_tags_result);
//     // const final = searchResult.filter((item, index) => searchResult.indexOf(item) === index);
//     // return final;
// }

export const getArticleById = (blogId) => {
    const post = blogPosts.find(
        (blog) => blog.id === Number(blogId)
    );
    const author = authors.find((author) => author.id === post.author_id);
    if (author) {
        post.author = author;
    }
    const postCategory = category.find((cat) => cat.title.toLowerCase() === post.category);
    if (postCategory) {
        post.cat_slug = postCategory.slug;
    }

    let topicAndTags = [];
    post.tags.forEach(element => {
        const tag = tags.find((tag) => tag.slug === element);
        topicAndTags.push({ "name": tag.title, "slug": tag.slug });
        //return { "tag_name": tag.title, "tag_slug": element };
    });
    //console.log(topicAndTags);
    post.topicsTags = topicAndTags;
    return post;
};


export const getPostsByCategory = (category) => {
    return blogPosts
        .filter(post => post.category === category)
        .filter((post, index, array) =>
            index === array.findIndex(item => item.id === post.id)
        )
        .sort((a, b) => new Date(a.publishedDate) - new Date(b.publishedDate));
}


export const getPostsByTags = (topicAndTag) => {
    return blogPosts
        .filter(post => post.tags.includes(topicAndTag))
        .filter((post, index, array) =>
            index === array.findIndex(item => item.id === post.id)
        )
        .sort((a, b) => new Date(a.publishedDate) - new Date(b.publishedDate));
}

export const getPostsByAuthors = (authorId) => {
    return sortedPost
        .filter(post => post.author_id == authorId)
        .filter(post => !blogFeaturedStories.some(item => item.id === post.id))
        ;
}
export const getPosts = function (page, limit, data) {
    return data.slice((page - 1) * limit, page * limit);
    /**
     * 
     * Page 1 = 0-9
     * Page 2 = 9-18
     * Page 3 = 18-27
     */
    // console.log(paginatedPosts);
    return paginatedPosts;

};


export const contentPagination = (page, limit, contentData) => {
    let totalPages = Math.ceil(contentData.length / limit) || 1;
    let currentPage = Math.min(page, totalPages);

    return { "totalPages": totalPages, "currentPage": currentPage };
} 