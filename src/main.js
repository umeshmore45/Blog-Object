import { Blogs } from "./data.js";
import { blogImage } from "./components/blogimage.js";
import { blogContent } from "./components/blogcontent.js";
import { blogLinks } from "./components/bloglinks.js";
//------------header---------
import { blogHeaderImg } from "./components/blogheaderImg.js";
import { blogHeaderLinks } from "./components/blogheaderlink.js";
import { hamContainer } from "./components/blogham.js";
//-------------footer-----------
import { blogFooterIcon } from "./components/blogfootericon.js";
import { blogFooterCopy } from "./components/blogfootercopy.js";

window.onload = () => {
  const blogDiv = document.getElementById("root");
  const blogDivImage = blogImage(Blogs[0].imageUrl);
  blogDiv.appendChild(blogDivImage);
  //--------------------------------------------------------------------
  const blogDivContennt = blogContent(Blogs[0].title, Blogs[0].content);
  blogDiv.appendChild(blogDivContennt);

  //-------------------------------------------------------------------
  const blogAside = document.getElementById("root1");
  const blogcontent = blogLinks(Blogs[0].links);
  blogAside.appendChild(blogcontent);
  //-------------------------Header---------------------------------------------
  const blogHeaderdiv = document.getElementById("header-container");
  const headerimg = blogHeaderImg();
  blogHeaderdiv.appendChild(headerimg);
  const headerlink = blogHeaderLinks();
  blogHeaderdiv.appendChild(headerlink);
  blogHeaderdiv.appendChild(hamContainer());
  //------------------Footer----------------------------------------------------
  const blogFooterdiv = document.getElementById("footer-container");
  const footericon = blogFooterIcon();
  blogFooterdiv.appendChild(footericon);
  const footertext = blogFooterCopy();
  console.log(footertext);
  blogFooterdiv.appendChild(footertext);
};
