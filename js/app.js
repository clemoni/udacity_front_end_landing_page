window.onload = () => {
  console.log("page is fully loaded");

  // creation of the navbar
  const navbar = document.querySelector(".main-navbar");
  navbar.append(navbarCreator(sections));

  // launch scroll Element (see script scroll-event.js)
  scrolledElements.forEach((scrolledElement) => {
    scrolledElementObserver.observe(scrolledElement);
  });

  // launch animation Infinite Loop (see script infinite-loop.js)
  window.requestAnimationFrame(animateInfiniteLoop);

  /**
   * EventListener click
   * on each link from navber
   * go to related  section
   */
  const navbarLinks = document.querySelectorAll(".main-navbar__element");
  navbarLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault;
      const linkName = e.target.textContent.toLowerCase();
      const section = document.querySelector(`.${linkName}`);
      section.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    });
  });
};
