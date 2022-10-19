"use strict";

(function() {
  "use strict";

  let delay = 300;
  let timer = null;
  // meta information & change target
  const body = document.body.clientWidth;
  const mainWrapper = document.querySelector('#main-wrapper');
  // define function: watchingTarget
  function watchingTarget(elem) {
    "use strict";

    if ( elem <= 1400 ) {
      mainWrapper.className='sm';
    } else if ( elem < 1800) {
      mainWrapper.className='md';
    } else if ( elem < 1921 ) {
      mainWrapper.className='xl';
    } 
  }
  // call function: watchingTarget
  watchingTarget(body);
  // window resize
  window.addEventListener('resize', function(){
    "use strict";
    
    clearTimeout(timer);
    const root = document.getElementById('root').clientWidth;
    timer = setTimeout(function(){
      // console.log('resize event!');
      watchingTarget(root);
    }, delay);
  });
}());