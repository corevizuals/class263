window.onload = setup
function setup(){
    console.log("running setup");
    //Get by ID
    console.log(document.getElementById("one"));
    //Get by query selector
    console.log(document.querySelector("#one"));

    //Get by Tag name
    console.log(document.getElementsByTagName("div"));
    console.log(document.getElementsByTagName("div").length);
    console.log(document.getElementsByTagName("div")[0]);

    //Get by Query selector all
    console.log(document.querySelector("div"));
    console.log(document.querySelectorAll("div"));
    console.log(document.querySelectorAll("div").length);
    console.log(document.querySelectorAll("div")[0]);

    //Get by class name
    console.log(document.getElementsByClassName("square_shape"));
    console.log(document.getElementsByClassName("square_shape").length);
    console.log(document.getElementsByClassName("square_shape")[0]);

    console.log(document.querySelector(".square_shape"));
    
    //Get by class name with query selector all
    console.log(document.querySelectorAll(".square_shape"));
    console.log(document.querySelectorAll(".square_shape").length);
    console.log(document.querySelectorAll(".square_shape")[0]);


}