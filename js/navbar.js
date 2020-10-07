/**
 * parse sections (all section element)
 * to create an ul / li's fron each section information
 * @param  {object} sections
 * @return {object} ul
 */
const navbarCreator = (sections) => {
  // creare ul
  const ul = document.createElement("ul");
  ul.classList.add("main-navbar__container");
  // ul.classList.add("main-navbar--sticky");

  sections.forEach((section) => {
    const name = section.dataset.name;
    const nameKorean = section.dataset.korean;

    //create the link
    const link = document.createElement("a");
    link.classList.add("main-navbar__element");
    link.setAttribute("data-korean", nameKorean);
    link.setAttribute("data-master-section", name);
    link.textContent = name;

    const li = document.createElement("li");
    li.append(link);

    // insert each li to ul
    ul.appendChild(li);
  });
  return ul;
};

/**
 * EventListener click
 * on link go-top to go on top of the page
 */
document.querySelector(".go-top").addEventListener("click", (e) => {
  e.preventDefault;
  document.querySelector("header").scrollBy({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });
});
