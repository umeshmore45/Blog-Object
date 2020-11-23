import { Blogs } from "./data.js";
import { blogImage } from "./components/blogimage.js";
import { blogContent } from "./components/blogcontent.js";
import { blogLinks } from "./components/bloglinks.js";

window.onload = () => {
  const blogDiv = document.getElementById("root");
  const blogDivImage = blogImage(Blogs[1].imageUrl);
  console.log(blogDivImage);
  blogDiv.appendChild(blogDivImage);
  //--------------------------------------------------------------------
  const blogDivContennt = blogContent(Blogs[1].title, Blogs[1].content);
  console.log(blogDivContennt);
  blogDiv.appendChild(blogDivContennt);
  // console.log(Blogs[0].links[0].title);
  //-------------------------------------------------------------------
  const blogAside = document.getElementById("root1");
  const blogcontent = blogLinks(
    Blogs[1].links[0].title,
    Blogs[1].links[1].title
  );
  console.log(blogcontent);
  blogAside.appendChild(blogcontent);
};
