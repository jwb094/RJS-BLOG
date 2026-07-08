import { blogPosts } from '../data/posts';
import { authors } from '../data/author';
import { categories } from '../data/category'
import { tags } from '../data/topics'



let sortedPost = blogPosts.sort((a, b) => {
    return a.publishedDate > b.publishedDate ? 1 : -1; // asc
})

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
export const blogTopStory = sortedPost.shift();


//Get Recent Featured Stories

export const blogFeaturedStories = sortedPost
    .filter(post => post.featured && post.id !== blogTopStory.id)
    .slice(0, 3);


//Top View
/**
 * Sort the Array
 * Filter array
 */

export const postByViewDescending = blogPosts.sort((a, b) => {
    return a.views > b.views ? -1 : 1; // asc
}).filter(post => !blogFeaturedStories.some(item => item.id === post.id))
    .slice(0, 3)
// console.log(sortedPostByView);



//Get Recent Stories
export const mostRecent = sortedPost
    .filter(post => !blogFeaturedStories.some(item => item.id === post.id))
    .filter(post => !postByViewDescending.some(item => item.id === post.id))
    .slice(0, 9);




export const postsSorted = sortedPost;




