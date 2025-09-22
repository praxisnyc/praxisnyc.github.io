let gridX;
let gridY;
let radius = 200;
let startAngle = 45;
let startDelay = 10;
let frame = 0;
let cellWidth = 25;
let cellHeight = 25;
let field;
let shape;
let shapeVertexNumber = 4;

// todo: easing no radius (testar)
// todo: return on pause
// test: ver no no-touch

function easeInOutQuad(x) {
    return x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2;
}

function setupField() {
  gridX = width/cellWidth;
  gridY = height/cellHeight;
    field = []; // start the flow field
    for (let i = 0; i < gridX; i++) {
        field[i] = [];
        for (let j = 0; j < gridY; j++) {
            field[i][j] = radians(startAngle);
        }
    }
    shape = []; // generative shape
    for (let i = 0; i < shapeVertexNumber; i++) {
        shape.push(createVector(random(cellWidth),random(cellHeight)));
    }
}

function setup() {
    createCanvas(windowWidth,windowHeight);
   setupField();

}

function draw() {
    background(255);
    noFill();
    for (let i = 0; i < gridX; i++) {
        for (let j = 0; j < gridY; j++) {
            push();
            let pos = createVector(i*cellWidth,j*cellHeight);
            let ref = rotationReference();
            let abs = createVector(pos.x + ref.x, pos.y + ref.y);
            let distance = abs.dist(createVector(mouseX,mouseY));
            if (distance < radius && frame > startDelay) {
                let d = map(distance, 0, radius, 1, 0);
                let angle = atan2(mouseY - (abs.y), mouseX - (abs.x));
                console.log(field[i][j] + ' - ' + angle);
                field[i][j] = map(d, 0, 1, angle/2, angle);
            }
            translate(abs.x,abs.y);
            rotate(field[i][j]);
            translate(-ref.x,-ref.y);
            drawShape();
            pop();
        }    
    }   
    frame++;
}

function rotationReference() {
    return createVector(cellWidth/2, cellHeight/2); // sets the rotation reference point
}

function drawShape() {
    stroke(204);
    strokeWeight(2);
    line(cellWidth*0.1,cellHeight/2,cellWidth*0.9,cellHeight/2);
    //rect(cellWidth*0.1,cellHeight*.4,cellWidth*.8,cellHeight*.1); 
    // beginShape();
    // for (let i = 0; i < shape.length; i++) {
    //     vertex(shape[i].x,shape[i].y);
    // }
    // endShape(CLOSE);
}
    function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setupField();
}

