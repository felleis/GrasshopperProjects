
const svg = d3.select("#keepItUpBox");

//creates balloon at random x position, falls on click

function pickRandom(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

let score = 0 

let balloon = svg.append('circle').attr('fill', 'red').attr('r', 35).attr('cx', pickRandom(30, 240)).attr('cy', 35);
balloon.on('click', () => {
	balloon.interrupt().attr('cy', 35).attr('cx', pickRandom(30, 240))
  balloon.transition().ease(d3.easeQuadIn).attr('cy', 265).duration(2000).remove()
  score = score + 10  
  document.getElementById('score').textContent = score
});



// fix: show game over 
// if (balloon.attr('cy',265)) {
// 	console.log('Game over! Score:', score)
// };