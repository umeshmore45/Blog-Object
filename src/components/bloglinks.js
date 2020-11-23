export const blogLinks = (links1, links2) => {
  const ul = document.createElement("ul");
  ul.classList.add("blog-ul");
  const li1 = document.createElement("li");
  li1.classList.add("blog-li");
  const a1 = document.createElement("a");
  a1.innerHTML = links1;
  a1.href = "#";
  //---------------------------------
  const li2 = document.createElement("li");
  li2.classList.add("blog-li");
  const a2 = document.createElement("a");
  a2.innerHTML = links2;
  a2.href = "#";
  //----------------------------
  ul.appendChild(li1);
  ul.appendChild(li2);
  //-------------------------
  li1.appendChild(a1);
  li2.appendChild(a2);
  //----------------------------
  return ul;
};
