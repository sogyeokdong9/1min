'use strict';

(function(){
  'use strict';
  
  console.log(`👇 Screen.width`);
  const screenHeight = screen.height;
  const screenWidth = screen.width;
  console.log(`screenWidth: ${screenWidth}, screenHeight: ${screenHeight} `);

  console.log(`👇 Screen.availHeight`);
  window.outerHeight = window.screen.availHeight;
  console.log(`availHeight: ${outerHeight}`)

  console.warn(`🚨 Screen.availLeft`);
  console.warn(`🚨 Screen.availTop`);
  let setX = window.screen.width - window.screen.availLeft;
  let setY = window.screen.height - window.screen.availTop;
  window.moveTo(setX, setY);
  console.warn(`window.screen.availLeft: ${window.screen.availLeft}, window.screen.availTop: ${window.screen.availTop}`);
  console.warn(`window.screen.width - window.screen.availLeft: ${setX}, window.screen.height - window.screen.availTop: ${setY}`);

  console.log(`👇 Screen.availWidth`);
  const screenAvailWidth = window.screen.availWidth;
  console.log(`screenAvailWidth ${screenAvailWidth}`);

  console.log(`👇 Screen.colorDepth`);
  // Check the color depth of the screen
  if (window.screen.colorDepth < 8) {
    // Use low-color version of page
    console.log(`Screen.colorDepth ${window.screen.colorDepth}`);
  } else {
    // Use regular, colorful page
    console.log(`Screen.colorDepth ${window.screen.colorDepth}`);
  }

  console.log(`👇 Screen.height`);
  // if (window.screen.availHeight !== window.screen.height) {
    // Something is occupying some screen real estate!
    // console.log(`Screen.height, ${screen.height}`);
  // }
  console.log(`Screen.height, ${screen.height}`);

  console.warn(`🚨 Screen.left`);
  console.warn(`screenLeft ${screen.left}`);

  console.error(`🚨🗑 Screen.mozBrightness`);
  console.error(`🚨🗑 Screen.mozEnabled`);

  console.log(`👇 Screen.orientation`);
  switch (screen.orientation.type) {
    case "landscape-primary":
      console.log("landscape-primary, That looks good.");
      break;
    case "landscape-secondary":
      console.log("landscape-secondary, Mmmh… the screen is upside down!");
      break;
    case "portrait-secondary":
    case "portrait-primary":
      console.log("portrait-secondary, Mmmh… you should rotate your device to landscape");
      break;
    default:
      console.log("default, The orientation API isn't supported in this browser :(");
  }

  console.log(`👇 Screen.pixelDepth`);
  // if there is not adequate bit depth
  // choose a simpler color
  // document.body.style.fontColor = window.screen.pixelDepth > 8 ? "#FAEBD7" : "#FFFFFF";
  console.log(`window.screen.pixelDepth, ${window.screen.pixelDepth}`);

  console.error(`🚨🗑 Screen.top`);

  console.log(`👇 Screen.width`);
  // Crude way to check that the screen is at least 1024x768
  if (window.screen.width >= 1024 && window.screen.height >= 768) {
    // Resolution is 1024x768 or above
    console.log(`window.screen.width, ${window.screen.width}`);
  }

})();