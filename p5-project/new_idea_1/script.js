let bubbles = [];
// let bubble;

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 30; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(40, 60);
        let b = new Bubble(x, y, r);
        bubbles.push(b);
    }
}

function mousePressed() {
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].clicked(mouseX, mouseY);
    }
}

function draw() {
    background(0);
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
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

    clicked(px, py) {
        let d = dist(px, py, this.x, this.y);
        if (d < this.r) {
            this.brightness = 255;
            console.log("CLICKED ON BUBBLE");
        }
    }

    move() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
    }

    show() {
        stroke(255, 0, 150, 255);
        strokeWeight(5);
        fill(this.brightness, 200, 5, 200, 200);
        ellipse(this.x, this.y, this.r * 2);
    }
}