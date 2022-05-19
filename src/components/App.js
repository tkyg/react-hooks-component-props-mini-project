import React from "react";
import blogData from "../data/blog";
import ArticleList from "./ArticleList";
import Header from "./Header";
import About from "./About";


function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} /> 
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
