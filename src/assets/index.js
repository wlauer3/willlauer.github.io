import logo from "./logo.svg";
import backend from "./backend.png";
import creator from "./creator.png";
import mobile from "./mobile.png";
import web from "./web.png";
import github from "./github.png";
import menu from "./menu.svg";
import close from "./close.svg";

import css from "./tech/css.png";
import docker from "./tech/docker.png";
import figma from "./tech/figma.png";
import git from "./tech/git.png";
import html from "./tech/html.png";
import javascript from "./tech/javascript.png";
import mongodb from "./tech/mongodb.png";
import nodejs from "./tech/nodejs.png";
import reactjs from "./tech/reactjs.png";
import redux from "./tech/redux.png";
import tailwind from "./tech/tailwind.png";
import typescript from "./tech/typescript.png";
import threejs from "./tech/threejs.svg";

import meta from "./company/meta.png";
import shopify from "./company/shopify.png";
import starbucks from "./company/starbucks.png";
import tesla from "./company/tesla.png";

import carrent from "./carrent.png";
import jobit from "./jobit.png";
import tripguide from "./tripguide.png";
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#25a820",
  "#25a820",
  "#25a820",
  "#25a820",
  "#25a820",
  "#25a820",
  "#25a820",
  "#25a820",
  "#25a820",
  "#25a820",
  "#25a820",
  "#25a820",
  "#25a820",
  "#25a820",
  "#25a820",
  "#25a820",
  "#25a820",
  "#25a820",
  "#25a820",
  "#25a820",
  "#25a820",
  "#25a820"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  
  circles.forEach(function (circle, index) {
  
    circle.style.left = x - 8 + "px";
    circle.style.top = y - 8 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.4;
    y += (nextCircle.y - y) * 0.4;
  });
 
  requestAnimationFrame(animateCircles);
}
animateCircles();

export {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  threejs,
  meta,
  shopify,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
};

