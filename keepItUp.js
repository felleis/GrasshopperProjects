
const svg = d3.select("#keepItUpBox");

//creates balloon at random x position, falls on click

function pickRandom(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

let balloon = svg.append('circle').attr('fill', 'red').attr('r', 35).attr('cx', pickRandom(30, 240)).attr('cy', 35);
balloon.on('click', () => {
  balloon.transition().ease(d3.easeQuadIn).attr('cy', 165).duration(2000).remove();
});
