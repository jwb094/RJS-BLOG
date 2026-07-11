import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router';

import './App.css'
import Default from './components/layout/Default';
import Home from './pages/Home';
// import BlogList from '../../../react-learning-projects/56.Layouts/src/pages/BlogList';
import Author from './pages/Author';
import BlogPost from './pages/BlogPost';
import Category from './pages/Category';
import Contact from './pages/Contact';
import SearchPage from './pages/SearchPage';
import PageNotFound from './pages/PageNotFound';
import Categories from './pages/Categories';
import Tags from './pages/Tags';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route index element={<Home />} />
          {/* <Route path="blogs" element={<BlogList />} /> */}
          <Route path="blog/:id/:slug" element={<BlogPost />} />
          <Route path="/blog/category/:category_slug" element={<Category />} />
          <Route path="/blog/tag/:tag_slug" element={<Tags />} />
          <Route path="/blog/categories" element={<Categories />} />
          <Route path="/blog/author/:author_id/:author" element={<Author />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
