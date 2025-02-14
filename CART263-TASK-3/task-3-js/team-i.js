setup_I();
/** THEME: JOY  */
function setup_I() {
  console.log("in i");
  /**************************************************** */
  //get the buttons
  activateButtons_I(`#TEAM_I`, "ani_canvI");

  /**************************************************** */
  /* NO NEED TO MODIFY THIS FUNCTION :) */
  /*** helper function to activate buttons */
  /**************************************************** */
  function activateButtons_I(team, teamCanvas) {
    let teamButtons = document.querySelectorAll(`${team} .team-nav p`);
    //2:
    console.log(teamButtons);
    for (let button of teamButtons) {
      button.addEventListener("click", buttonCallBack);

      function buttonCallBack(e) {
        switch (this.textContent) {
          case "1": {
            console.log("A");
            //reset the canvases
            resetCanvases(`${team} .aniCanvas`);
            //reset buttons
            resetButtons(teamButtons, this);
            //activate canvas A
            document.getElementById(`${teamCanvas}_A`).style.display = "block";
            //run first
            aniA(document.getElementById(`${teamCanvas}_A`));

            break;
          }
          case "2": {
            console.log("B");
            resetCanvases(`${team} .aniCanvas`);
            //reset buttons
            resetButtons(teamButtons, this);
            //activate canvas B
            document.getElementById(`${teamCanvas}_B`).style.display = "block";
            //run second
            aniB(document.getElementById(`${teamCanvas}_B`));
            break;
          }
          case "3": {
            console.log("C");
            //reset the canvases
            resetCanvases(`${team} .aniCanvas`);
            //reset buttons
            resetButtons(teamButtons, this);
            //activate canvas C
            document.getElementById(`${teamCanvas}_C`).style.display = "block";
            //run third
            aniC(document.getElementById(`${teamCanvas}_C`));
            break;
          }
          case "4": {
            console.log("D");
            break;
          }
          case "5": {
            console.log("E");
            break;
          }
          case "6": {
            console.log("F");
            break;
          }
        }
      }
    } //for
  }
   /**************** ANI A ************************************ */
  /** PUT ALL YOUR CODE FOR ANIMATION A INSIDE  HERE */
  /**************** ANI A ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: use the function window.requestAnimationFrame() to create an animation
   * i.e. a reoccuring pattern - you can use simple shapes and colors, images etc...
   * 2: create a way to start and stop the animation using a
   * custom made button and add a mouse click event listener to either start/stop the animation
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  function aniA(parentCanvas) {
    let x = 0;
    let y = 0;
    let radius = 50;
    let speedX = 2;
    let speedY = 2;
  
    function draw() {
      let ctx = parentCanvas.getContext("2d");
      ctx.clearRect(0, 0, parentCanvas.width, parentCanvas.height); // clear canvas
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = "blue";
      ctx.fill();
  
      // Update position
      x += speedX;
      y += speedY;
  
      // Bounce off edges
      if (x + radius > parentCanvas.width || x - radius < 0) {
        speedX = -speedX;
      }
      if (y + radius > parentCanvas.height || y - radius < 0) {
        speedY = -speedY;
      }
  
      requestAnimationFrame(draw); // Loop the animation
    }
  
    draw(); // Start the animation
  }
  /**************** ANI B ************************************ */
  /** PUT ALL YOUR CODE FOR ANIMATION B INSIDE  HERE */
  /**************** ANI B ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: use the function window.setInterval() to create a pattern that changes over time
   * i.e. fading out/ in, growing bigger/smaller, appear/disappear, add, remove...
   *  - you can use simple shapes and colors, images etc...
   * 2: add in a / some mouse click event listener(s) somewhere to make the sketch interactive

   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  function aniB(parentCanvas) {
    let opacity = 1;
    let growing = false;
  
    function draw() {
      let ctx = parentCanvas.getContext("2d");
      ctx.clearRect(0, 0, parentCanvas.width, parentCanvas.height);
      
      ctx.beginPath();
      ctx.arc(parentCanvas.width / 2, parentCanvas.height / 2, 50, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 0, 255, ${opacity})`; // Using opacity for fading
      ctx.fill();
  
      // Fade effect
      if (growing) {
        opacity += 0.02;
        if (opacity >= 1) growing = false;
      } else {
        opacity -= 0.02;
        if (opacity <= 0) growing = true;
      }
    }
  
    setInterval(draw, 50); // Using setInterval instead of requestAnimationFrame
  }
  
  /**************** ANI C ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN C INSIDE  HERE */
  /**************** ANI C ************************************ */
 /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: use the PROVIDED keyup/down callbacks `windowKeyDownRef` and/or `windowKeyUpnRef` to handle keyboard events
   * 2: create an interactive pattern/sketch based on keyboard input. Anything goes.
   * do not use  requestAnimationFrame(), setInterval() nor setTimeout() -> meaning keep it simple ;)
   * 
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/


 function aniC(parentCanvas) {
  let x = parentCanvas.width / 2;
  let y = parentCanvas.height / 2;

  windowKeyDownRef = function (e) {
    let ctx = parentCanvas.getContext("2d");
    ctx.clearRect(0, 0, parentCanvas.width, parentCanvas.height); // clear canvas

    ctx.beginPath();
    ctx.arc(x, y, 50, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();

    // Arrow keys to move the circle
    if (e.code === "ArrowUp") y -= 5;
    if (e.code === "ArrowDown") y += 5;
    if (e.code === "ArrowLeft") x -= 5;
    if (e.code === "ArrowRight") x += 5;
  };

  // DO NOT REMOVE
  window.addEventListener("keydown", windowKeyDownRef);
  window.addEventListener("keyup", windowKeyUpRef);
}
}