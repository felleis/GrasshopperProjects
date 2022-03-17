
const svg = d3.select("#snowmanBox");

let loc = 30;
let sizes = [
15,
20,
30,

];

var background = svg.append('rect').attr('width', 200).attr('height', 200).attr('y', 0).attr('fill', 'deepskyblue');

function buildSnowman() {
	d3.selectAll('circle').remove();

	setTimeout(function() {
		for (let element of sizes) {
			svg.append('circle').attr('r', element).attr('cx', 100).attr('cy', loc).attr('fill', 'white');
			loc += element * 2;
		}
		loc = 30;
	}, 800);

};

let button = svg.append('rect').attr('width',20).attr('height',20).attr('fill', 'red').attr('y',20).attr('x',30)
button.on('click', buildSnowman);
