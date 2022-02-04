let canvas;
let pajaro;

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');
    pajaro = new Pajaro();

}

function draw() {
    //background(0, 50);
    background(0);
    newCursor();

    pajaro.pintarPajaro();
    pajaro.movimientoPajaro();
}

function mouseClicked(){
    //bird.flyUpward();
}

function keyPressed() {
    if (key === ' ') {
        /* console.log('se presionó la tecla espacio'); */
        pajaro.saltoPajaro();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}