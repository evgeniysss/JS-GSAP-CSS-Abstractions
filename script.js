let svg = document.querySelector('#SVG');
let rect = document.querySelector('.rect');

let y = 0;
let height = 11;
let width = 11;
let spacing = 150;
let x = spacing;
let radius = 210;
let hue = 40;
let hueSpread = 1.6;

let size = radius * 2;
let start = -1 * radius;

let svgWidth = spacing * width + radius + spacing / 2 + radius;
let svgHeight = spacing * height + radius + spacing / 2 + radius;

svg.setAttribute("viewBox", `${start} ${start} ${svgWidth} ${svgHeight}`);

function makeLine() {
  console.log('doing')
  for (a = 0; a < height; a++) {
    var circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    circle.style.fill = `hsla(${hue += hueSpread},49%,75%)`; //Set fill
    circle.setAttribute("cx",x);
    circle.setAttribute("cy",y += spacing);
    circle.setAttribute("r",radius);
    svg.appendChild(circle);
  }
}

for (i = 0; i < width; i++) {
  makeLine()
  y = 0
  x += spacing
}

gsap.set('circle',{
	transformOrigin: "50% 50%"
})


gsap.from('circle', {
  duration: 1.5,
  scale: 0,
  ease: "sine.inOut",
  fill: "hsla(+=140, +=0%, +=0%)",
  stagger: {
     yoyo: true,
     repeat: -1,
     grid: [width,height],
     from: "edges",
     amount: 3.2
  }
})