export const hamContainer = () => {
  const div = document.createElement("div");
  div.classList.add("ham-contaner");
  const button = document.createElement("button");
  button.classList.add("ham");
  const nav = document.createElement("nav");
  nav.classList.add("navbar");
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.classList.add("menuLink");
  a.href = "#";
  a.innerHTML = "Home";
  div.appendChild(button);
  div.appendChild(nav);
  nav.appendChild(ul);
  ul.appendChild(li);
  li.appendChild(a);
  return div;
};

// {/* <div class="ham-contaner">
//   <button class="ham"></button>
//   <nav class="navbar">
//     <ul>
//       <li>
//         <a class="menuLink" href="#">
//           Home
//         </a>
//       </li>
//       <li>
//         <a class="menuLink" href="#">
//           About
//         </a>
//       </li>
//       <li>
//         <a class="menuLink" href="#">
//           Contacts
//         </a>
//       </li>
//     </ul>
//   </nav>
// </div> */
