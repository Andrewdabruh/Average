var marks=[71,83,94,68,100]

function average(){
    var sum = marks[0]+marks[1]+marks[2]+marks[3]+marks[4]
    var avg = sum/marks.length
    console.log(avg);
}





function setup() {
  createCanvas(400, 400);
  average();
}

function draw() {
  background(220);
}