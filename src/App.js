import React from "react";
// import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostDetails from "./Posts/PostDetails";
import NotFound from "./Pages/NotFound";
import PostIndex from "./Posts/PostIndex";
import Nav from "./Nav/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<PostIndex />} />
          <Route path="posts" element={<PostIndex />} />
          <Route path="posts/:postId" element={<PostDetails />} />
          {/* <Route path="albums" element={<AlbumIndex />} /> */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
