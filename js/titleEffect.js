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
  const sectionName = entries[0].target.dataset.name.toLowerCase();
  // target the element
  const targetElement = entries[0].target;

  // isIntersecting : true (element in) or out false (element out)
  const isIntersecting = entries[0].isIntersecting;
  const intersectionRatio = entries[0].intersectionRatio;
  // round radio to 1/1000
  const ratio = entries[0].intersectionRatio.toFixed(3);

  //   scale the all section if sup at 0.8 (influenced by css transition 1s)
  if (isIntersecting === true && intersectionRatio >= 0.5) {
    // console.log("in", intersectionRatio);
    targetElement.style.transform = `scale(${1})`;
  }
  if (isIntersecting === false) {
    targetElement.style.transform = `scale(${0.9})`;
  }

  //target the title
}, titleOptions);

sections.forEach((section) => {
  const sectionName = section.dataset.name.toLowerCase();
  const targetedSectionElement = document.querySelector(`.${sectionName}`);
  //   console.log(targetedSectionElement);
  sectionObserver.observe(targetedSectionElement);
});
