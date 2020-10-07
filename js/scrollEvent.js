/**
 * option of the instersectionObserver
 * change of name fire when element is at 50% of root (viewport)
 */
const scrolledElementOptions = {
  root: null,
  rootMargin: "0px",
  threshold: [0, 0.5, 1],
};

/**
 * get all elememnt scrolled__element (header + main__section)
 */
const scrolledElements = document.querySelectorAll(".scrolled__element");

/**
 * get the item scroll in order to replace text
 */
const scroll = document.querySelector(".scroll__item");

/**
 *
 */
const navbar = document.querySelector(".main-navbar");

/**
 * get the data-name replace textContent scroll when element 50% root
 */
const scrolledElementObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (
      entry.isIntersecting === true &&
      entry.intersectionRatio > 0.5 &&
      entry.intersectionRatio < 1
    ) {
      scroll.textContent = entry.target.dataset.scroll;
    }
  });
}, scrolledElementOptions);
