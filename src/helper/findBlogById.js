import { Blogs } from "../data.js";

export const findBlogById = (blogId) => {
  return Blogs.filter((element) => {
    return element.id == blogId;
  });
};
