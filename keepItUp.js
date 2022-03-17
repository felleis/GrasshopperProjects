
const svg = d3.select("#keepItUpBox");

//creates balloon at random x position, falls on click

let balloon = svg.append('circle').attr('fill', 'red').attr('r', 35).attr('cx', pickRandom(position)).attr('cy', 35);
balloon.on('click', () => {
  balloon.transition().attr('cy', 165).duration(2000);
});