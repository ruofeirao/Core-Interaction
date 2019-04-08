let bubbles = [];
// let bubble;

function setup() {
    createCanvas(windowWidth, windowHeight);

}

function mouseDragged() {
    // let x = random(width);
    // let y = random(height);
    // let r = random(30, 60);
    let r = 50;
    let b = new Bubble(mouseX, mouseY, r);
    bubbles.push(b);
}

function draw() {
    background(0);
    for (let i = 0; i < bubbles.length; i++) {
        if (bubbles[i].contains(mouseX, mouseY)) {
            bubbles[i].changeColor(255);
        } else {
            bubbles[i].changeColor(0);
        }
        bubbles[i].move();
        bubbles[i].show();
    }

    if (bubbles.length > 150) {
        bubbles.splice(0, 1);
    }

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

    show() {
        stroke(10, 10, 200, 255);
        strokeWeight(2);
        fill(this.brightness, 1, 20, 100);
        ellipse(this.x, this.y, this.r * 2);
    }
}