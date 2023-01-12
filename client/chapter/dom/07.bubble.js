/* ---------------------------------------------------------------------- */
/* Event bubbling & capturing                                             */
/* ---------------------------------------------------------------------- */

/* 버블링 ----------------------------------------------------------------- */

const visual = getNode('.visual');
const news = getNode('.news');
const desc = getNode('.desc');

visual.addEventListener('click', (e) => {
  // console.log(e.target);
  // console.log(e.currentTarget);
  console.log(e.target);

  console.log('%c visual', 'background:dodgerblue');
});

// news.addEventListener('click', () => {
//   console.log('%c news', 'background:orange');
// });

// desc.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('%c desc', 'background:hotpink');
// });

/* 캡처링 ----------------------------------------------------------------- */
