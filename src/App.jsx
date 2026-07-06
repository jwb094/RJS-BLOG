import { useState } from 'react'

import AuthorCard from './components/AuthorCard'
import BlogCard from './components/BlogCard'
import BlogGrid from './components/BlogGrid'
import BlogPost from './components/BlogPost'
import BlogTopPost from './components/BlogTopPost'
import CategoryFilter from './components/CategoryFilter'
import Footer from './components/Footer'
import Form from './components/Form'
import Header from './components/Header'
import Pagination from './components/Pagination'
import RelatedPosts from './components/RelatedPosts'
import SearchBar from './components/SearchBar'
import Tags from './components/Tags'

import './App.css'

function App() {

  return (
    <>
      <Header />
      <AuthorCard />
      {/* <BlogCard></BlogCard> */}
      <BlogGrid />
      <BlogPost />
      <BlogTopPost />
      <CategoryFilter />
      <Pagination />
      <Form />
      <RelatedPosts />
      <SearchBar />
      <Tags />
      <Footer />
    </>
  )
}

export default App
