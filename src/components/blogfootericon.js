export const blogFooterIcon = () => {
  const div = document.createElement("div");
  div.classList.add("footer-icons");
  const i1 = document.createElement("i");
  i1.classList.add("fab fa-twitter fa-lg");
  const i2 = document.createElement("i");
  i2.classList.add("fab fa-linkedin-in fa-lg");
  const i3 = document.createElement("i");
  i3.classList.add("fab fa-facebook-f fa-lg");
  const i4 = document.createElement("i");
  div.appendChild(i1);
  div.appendChild(i2);
  div.appendChild(i3);
  return div;
};
