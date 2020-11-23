export const blogImage = (imageUrl) => {
  const div = document.createElement("div");
  div.classList.add("blog-image");

  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = "some";
  img.classList.add("img-blog");
  div.appendChild(img);

  return div;
};
