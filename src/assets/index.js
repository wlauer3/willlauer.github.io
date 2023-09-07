import logo from "./me.png";
import github from "./github.png";
import menu from "./menu.svg";
import close from "./close.svg";
import css from "./tech/css.png";
import javascript from "./tech/javascript.png";
import reactjs from "./tech/reactjs.png";
import typescript from "./tech/typescript.png";
import Fusion360 from "./tech/Fusion360.png";
import VisualBasic from "./tech/VisualBasic.png";
import AutoCAD from "./tech/AutoCAD.png";
import Kicad from "./tech/Kicad.png";
import iFix from "./tech/iFix.png";
import sirnas from "./company/sirnas.png";
import troy from "./company/troy.png";
import rovisys from "./company/rovisys.png";
import chemical from "./chemical.png";
import frontend from "./frontend.png";
import threedmodel from "./threedmodel.png";
import pcb from "./pcb.png";
import Elevator from "./Elevator.png";
import precharge from "./precharge.png";
import saturn from "./tech/saturn.png";
import Accordionboard from "./Accordionboard.png";
import picpurge from "./picpurge.png";
import asm from "./tech/asm.png";
import c from "./tech/C.png";
import python from "./tech/python.png";

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
const colors = [
  "#7FFFF5",
  "#7FFFF5",
  "#7FFFF5",
  "#7FFFF5",
  "#7FFFF5",
  "#7FFFF5",
  "#7FFFF5",
  "#7FFFF5",
  "#7FFFF5",
  "#7FFFF5",
  "#7FFFF5",
  "#7FFFF5",
  "#7FFFF5",
  "#7FFFF5",
  "#7FFFF5",
  "#7FFFF5",
  "#7FFFF5",
  "#7FFFF5",
  "#7FFFF5",
  "#7FFFF5",
  "#7FFFF5",
  "#7FFFF5"
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
  github,
  menu,
  close,
  css,
  javascript,
  reactjs,
  typescript,
  AutoCAD,
  Fusion360,
  iFix,
  VisualBasic,
  Kicad,
  pcb,
  threedmodel,
  frontend,
  chemical,
  sirnas,
  troy,
  rovisys,
  Elevator,
  precharge,
  saturn,
  Accordionboard,
  picpurge,
  asm,
  c,
  python
};

