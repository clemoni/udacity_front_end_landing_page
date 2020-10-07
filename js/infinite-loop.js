// get element from document
const infiniteLoopRight = document.querySelector(".infite-loop--right");
const infiniteLoopLeft = document.querySelector(".infite-loop--left");

// title list
const titleList = [
  "How You Like That",
  "Ice Cream",
  "Pretty Savage",
  "Bet You Wanna",
  "Lovesick Girls",
  "Crazy Over You",
  "Love to Hate Me",
  "You Never Know",
];

/**
 * create node li for each title of titleList
 * @returns {Array}
 */
const tilteNodeRight = titleList.map((title) => {
  const newLi = document.createElement("li");
  newLi.classList.add("infinite-loop__title");
  newLi.textContent = title;
  return newLi;
});

/**
 * Append list to element infiniteLoopRight
 * @param  {Array} tilteNodeRight
 */
const appendTitleNodeRight = () => {
  const tilteNodeRight = titleList.map((title) => {
    const newLi = document.createElement("li");
    newLi.classList.add("infinite-loop__title");
    newLi.textContent = title;
    return newLi;
  });

  tilteNodeRight.forEach((title) => {
    infiniteLoopRight.append(title);
  });
};

/**
 * create node li for each title of titleList
 * @returns {Array}
 */
const tilteNodeLeft = titleList.map((title) => {
  const newLi = document.createElement("li");
  newLi.classList.add("infinite-loop__title");
  newLi.textContent = title;
  return newLi;
});

/**
 * Prepend list to element infiniteLoopRight
 * @param  {Array} tilteNodeRight
 */
const prependTitleNodeLeft = () => {
  const tilteNodeLeft = titleList.map((title) => {
    const newLi = document.createElement("li");
    newLi.classList.add("infinite-loop__title");
    newLi.textContent = title;
    return newLi;
  });
  tilteNodeLeft.forEach((title) => {
    infiniteLoopLeft.prepend(title);
  });
};

/**
 * Function remove the first element (first titles liste)
 * of infiniteLoopLeft
 * Since element infiniteLoopLeft preped element, remove the
 */
const removefirst8Left = () => {
  for (i = 0; i < 8; i++) {
    // infiniteLoopLeft.removeChild(infiniteLoopLeft.lastChild);
    infiniteLoopLeft.removeChild(infiniteLoopLeft.children[0]);
  }
};

const removeLast8ChildRight = () => {
  for (i = 0; i < 8; i++) {
    infiniteLoopRight.removeChild(infiniteLoopRight.lastChild);
    // infiniteLoopRight.removeChild(infiniteLoopRight.children[0]);
  }
};

let positionX = 0;
// fake infinite loop - after when stack is full
function animateInfiniteLoop() {
  // function that add the list 0f 8 titles
  appendTitleNodeRight();
  prependTitleNodeLeft();

  //   position increment of 1
  positionX = positionX + 1;
  //   move element with transfrom
  infiniteLoopRight.style.transform = `translate3D(-${positionX}px, 0, 0)`;

  infiniteLoopLeft.style.transform = `translate3D(${positionX}px, 0, 0)`;

  //   it's an infinite loop, no stop
  requestAnimationFrame(animateInfiniteLoop);

  if (infiniteLoopLeft.childElementCount > 88) {
    removefirst8Left();
    removeLast8ChildRight();
  }
}
