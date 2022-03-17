let location = 30;
let sizes = [
  15,
  20,
  30,
  
];

var background = svg.append('rect').attr('width', 200).attr('height', 200).attr('y', 0).attr('fill', 'deepskyblue');


function buildSnowman() {
  for (let element of sizes) {
    svg.append('circle').attr('r', element).attr('cx', 100).attr('cy', location).attr('fill', 'white');
    location += element * 2;
  }
};

let button = svg.append('circle').attr('r',10).attr('fill', 'red').attr('cy',20).attr('cx',30)
button.on('click', buildSnowman);