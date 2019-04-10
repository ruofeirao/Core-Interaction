let bubbles = [];
// let bubble;

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 80; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(40, 70);
        let b = new Bubble(x, y, r);
        bubbles.push(b);
    }
}

function mousePressed() {
    for (let i = bubbles.length-1; i >= 0; i--) {
        if (bubbles[i].contains(mouseX, mouseY)) {
            bubbles.splice(i, 1);
        } 
        // else {
        //     bubbles.push(b);
        // }
    }
}

function mouseDragged() {
    // let x = random(width);
    // let y = random(height);
    let r = random(20, 100);
    // let r = 50;
    let b = new Bubble(mouseX, mouseY, r);
    bubbles.push(b);
}

function draw() {
    background(0);
    for (let i = 0; i < bubbles.length; i++) {
        if (bubbles[i].contains(mouseX, mouseY)) {
            bubbles[i].changeColor(255);
            cursor('pointer');
        } else {
            bubbles[i].changeColor(0);
            // cursor('default');
        }
        bubbles[i].move();
        bubbles[i].show();
    }
    // if (bubbles.length > 100) {
    //     bubbles.splice(0, 1);
    // }
}

class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        // fill(200, 0, 150, 255);
        this.brightness = 0;
    }

    changeColor(bright) {
        this.brightness = bright;
    }

    contains(px, py) {
        let d = dist(px, py, this.x, this.y);
        if (d < this.r) {
            return true;
            // console.log("HOVERED OVER BUBBLE");
        } else {
            return false;
        }
    }

    move() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
    }

    // show() {
    //     stroke(255, 0, 150, 255);
    //     strokeWeight(4);
    //     fill(this.brightness, 20, 180);
    //     ellipse(this.x, this.y, this.r * 2);
    // }

    show() {
        stroke(10, 200, 255, 255);
        strokeWeight(4);
        fill(this.brightness, 1, 255, 160, 0);
        ellipse(this.x, this.y, this.r * 2);
    }
}