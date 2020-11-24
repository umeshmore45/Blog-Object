import { findBlogById } from "./findBlogById.js";
import { blogImage } from "../components/blogimage.js";
import { blogContent } from "../components/blogcontent.js";
import { blogLinks } from "../components/bloglinks.js";

export const renderNewBlog = (blogId) => {
  const blogObject = findBlogById(blogId)[0];
  const rootDiv = document.getElementById("root");
  rootDiv.innerHTML = "";
  rootDiv.appendChild(blogImage(blogObject.imageUrl));
  rootDiv.appendChild(blogContent(blogObject.title, blogObject.content));
  const asideDiv = document.getElementById("root1");
  asideDiv.innerHTML = "";
  asideDiv.appendChild(blogLinks(blogObject.links));
};
