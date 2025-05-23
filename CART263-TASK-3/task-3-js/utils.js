  /*** HELPER SCRIPT :: NO NEED TO CHANGE */
  let windowKeyDownRef = null;
  let windowKeyUpRef = null;

  /**************************************************** */
  /* global function to clear all animation refs */
  function cancelALlTimerrefs() {
   
  
    if(windowKeyDownRef!==null){
      window.removeEventListener("keydown",windowKeyDownRef);
    }

    if(windowKeyUpRef!==null){
      window.removeEventListener("keyup",windowKeyUpRef);
    }
 
    window.cancelRequestAnimFrame = (function () {
      return (
        window.cancelAnimationFrame ||
        window.webkitCancelRequestAnimationFrame ||
        window.mozCancelRequestAnimationFrame ||
        window.oCancelRequestAnimationFrame ||
        window.msCancelRequestAnimationFrame ||
        clearTimeout
      );
    })();

    for (let i = 1; i < 99999; i++) {
      window.clearInterval(i);
      window.cancelRequestAnimFrame(i);

     
    }
  }
  /**************************************************** */

  /* global function to reset canvases */
  function resetCanvases(teamCanvases) {
    let otherCanvases = document.querySelectorAll(teamCanvases);
    //clear
    for (canvas of otherCanvases) {
      //reset the canvas
      canvas.innerHTML = "";
      canvas.style.display = "none";
      canvas.replaceWith(canvas.cloneNode(true));
    }
    cancelALlTimerrefs();
  
  }


/**************************************************** */
function resetButtons(teamButtons,activeButton){
    for (let button of teamButtons) {
        button.classList.remove("active-button");
    }
    activeButton.classList.add("active-button");
}


//
let _interpolateHSL = function(color1, color2, factor) {
  if (arguments.length < 3) { factor = 0.5; }
  var hsl1 = rgb2hsl(color1);
  var hsl2 = rgb2hsl(color2);
  for (var i=0;i<3;i++) {
    hsl1[i] += factor*(hsl2[i]-hsl1[i]);
  }
  return hsl2rgb(hsl1);
};

// https://github.com/ondras/rot.js
let _interpolateColor = function(color1, color2, factor) {
  if (arguments.length < 3) { factor = 0.5; }
  var result = color1.slice();
  for (var i=0;i<3;i++) {
    result[i] = Math.round(result[i] + factor*(color2[i]-color1[i]));
  }
  return result;
};

let rgb2hsl = function(color) {
  var r = color[0]/255;
  var g = color[1]/255;
  var b = color[2]/255;

  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = (l > 0.5 ? d / (2 - max - min) : d / (max + min));
    switch(max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return [h, s, l];
};

let hsl2rgb = function(color) {
  var l = color[2];

  if (color[1] == 0) {
    l = Math.round(l*255);
    return [l, l, l];
  } else {
    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    }

    var s = color[1];
    var q = (l < 0.5 ? l * (1 + s) : l + s - l * s);
    var p = 2 * l - q;
    var r = hue2rgb(p, q, color[0] + 1/3);
    var g = hue2rgb(p, q, color[0]);
    var b = hue2rgb(p, q, color[0] - 1/3);
    return [Math.round(r*255), Math.round(g*255), Math.round(b*255)];
  }
};