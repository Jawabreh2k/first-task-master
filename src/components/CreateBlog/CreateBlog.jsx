import React from "react";
import "./CreateBlog.css";

import { useState } from "react";

function CreateBlog({ setBlogData, blogData }) {
  const [title, setTitle] = useState("");
  const [blogBody, setBlogBody] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBlog = {
      id: blogData.length + 1,
      title,
      content: blogBody,
      author,
    };
    setBlogData([...blogData, newBlog]);
  };

  const titleChangeHandler = (event) => {
    const titleName = event.target.value;
    setTitle(titleName);
  };

  const bodyChangeHandler = (event) => {
    const bodyText = event.target.value;
    setBlogBody(bodyText);
  };

  const authorChangeHandler = (event) => {
    const authorName = event.target.value;
    console.log(authorName);
    setAuthor(authorName);
  };

  return (
    <div className="create-blog-main">
      <h1>Add a New Blog</h1>

      <form className="create-blog" onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input type="text" onChange={titleChangeHandler} />
        <label>Blog Body:</label>
        <textarea rows="4" onChange={bodyChangeHandler} />
        <label>Blog Author:</label>
        <input type="text" onChange={authorChangeHandler} />
        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default CreateBlog;
