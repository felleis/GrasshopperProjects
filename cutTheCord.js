
const svg = d3.select("#cordBox");


function randomColor (min, max) {
	let randomRedValue = Math.floor(Math.random() * (max - min + 1) + min)
	let randomGreenValue = Math.floor(Math.random() * (max - min + 1) + min)
	let randomBlueValue = Math.floor(Math.random() * (max - min + 1) + min)
//	let randomResult = toString(randomBlueValue) && toString(randomGreenValue) && toString(randomRedValue)
	return ["rgb(", randomRedValue,",", randomGreenValue, ",", randomBlueValue,"9"].join(""); 
};



console.log(randomColor(0, 255))


var water = svg.append('rect').attr('width', 500).attr('height', 500).attr('y', 50).attr('fill', 'deepskyblue');
var line = svg.append('rect').attr('width', 7).attr('height', 250).attr('x', 145).attr('y', 250).attr('fill', 'grey');
var buoy = svg.append('circle').attr('r', 30).attr('cx', 150).attr('cy', 250).attr('fill', randomColor(0, 255));
function cutLine() {
  line.remove();
  buoy.transition().attr('cy', 70).duration(4000).ease(d3.easeElastic);
};

line.on('click', cutLine);

