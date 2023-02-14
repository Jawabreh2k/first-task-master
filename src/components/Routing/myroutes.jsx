import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import blogs from "../BlogsData/blogs";
import BlogList from "../BlogList/BlogList";
import CreateBlog from "../CreateBlog/CreateBlog";
import NavigationBar from "../NavigationBar/NavigationBar";

const MyRoutes = () => {
  const [blogData, setBlogData] = useState(blogs);

  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<BlogList blogData={blogData} />} />
        <Route
          path="/create"
          element={<CreateBlog setBlogData={setBlogData} blogData={blogData} />}
        />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
