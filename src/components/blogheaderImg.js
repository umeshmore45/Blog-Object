export const blogHeaderImg = () => {
  const div = document.createElement("div");
  div.classList.add("logo-image");
  const img = document.createElement("img");
  img.src = "../../img/logo header.svg";
  img.alt = "logo";
  div.appendChild(img);
  return div;
};
