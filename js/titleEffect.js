// get all the title
const sections = document.querySelectorAll(".main__section");

/**
 * @description Create of list 1/100
 * @returns {array}
 */
const thresholdArray = () => {
  let thresholdArray = [];
  for (let i = 0; i < 1; i += 0.01) {
    thresholdArray.push(Math.round(i * 1000) / 1000);
  }
  thresholdArray.push(1);
  return thresholdArray;
};

// obvserver option
//margin bottom 30% to increase firing event
const titleOptions = {
  root: null,
  rootMargin: "0px 0px 30% 0px",
  threshold: thresholdArray(),
};

const sectionObserver = new IntersectionObserver((entries) => {
  // get section name
  const sectionName = entries[0].target.dataset.name;
  // target the element
  const targetElement = entries[0].target;

  const slaveNavBarElement = document.querySelector(
    `[data-master-section=${sectionName}]`
  );

  const navBarElement = document.querySelectorAll(".main-navbar__element");
  /**
   * remove all the active call for the navbar element
   */
  const clearNavBarElementClass = () => {
    navBarElement.forEach((element) => {
      element.classList.remove("main-navbar__element--active");
    });
  };

  // isIntersecting : true (element in) or out false (element out)
  const isIntersecting = entries[0].isIntersecting;
  const intersectionRatio = entries[0].intersectionRatio;
  // round radio to 1/1000
  const ratio = entries[0].intersectionRatio.toFixed(3);

  //   scale the all section if sup at 0.8 (influenced by css transition 1s)
  if (isIntersecting === true && intersectionRatio >= 0.5) {
    targetElement.classList.add("main__section--active");

    //  remove all class first then add it to navbar element related to active section
    if (slaveNavBarElement !== null) {
      clearNavBarElementClass();
      slaveNavBarElement.classList.add("main-navbar__element--active");
    }
  }
  if (isIntersecting === false) {
    clearNavBarElementClass();
    targetElement.classList.remove("main__section--active");
  }

  //target the title
}, titleOptions);

sections.forEach((section) => {
  const sectionName = section.dataset.name.toLowerCase();
  const targetedSectionElement = document.querySelector(`.${sectionName}`);
  //   console.log(targetedSectionElement);
  sectionObserver.observe(targetedSectionElement);
});
