const cnv = document.getElementById("canvas");
const ctx = cnv.getContext("2d");
const FPS = 60;
var mouse, bob;

class Bob {
    constructor() {
        this.x = window.innerWidth / 2;
        this.y = window.innerHeight / 2;
        this.r = 20;
        this.color = "white";
    };

    updateBob() {
        this.x = lerp(this.x, mouse.x, 0.1);
        this.y = lerp(this.y, mouse.y, 0.1);
    };

    drawBob() {
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();

        ctx.strokeStyle = "red";
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(lerp(this.x, mouse.x, 0.1), lerp(this.y, mouse.y, 0.1), this.r, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();

        ctx.strokeStyle = "yellow";
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.arc(lerp(this.x, mouse.x, 0.2), lerp(this.y, mouse.y, 0.2), this.r, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();

        ctx.strokeStyle = "lime";
        ctx.fillStyle = "lime";
        ctx.beginPath();
        ctx.arc(lerp(this.x, mouse.x, 0.3), lerp(this.y, mouse.y, 0.3), this.r, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();

        ctx.strokeStyle = "cyan";
        ctx.fillStyle = "cyan";
        ctx.beginPath();
        ctx.arc(lerp(this.x, mouse.x, 0.4), lerp(this.y, mouse.y, 0.4), this.r, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();

        ctx.strokeStyle = "blue";
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(lerp(this.x, mouse.x, 0.5), lerp(this.y, mouse.y, 0.5), this.r, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();

        ctx.strokeStyle = "magenta";
        ctx.fillStyle = "magenta";
        ctx.beginPath();
        ctx.arc(lerp(this.x, mouse.x, 0.6), lerp(this.y, mouse.y, 0.6), this.r, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
    };
};

(function init() {
    bob = new Bob();
    addEventListener("mousemove", (e) => {mouse = {x: e.clientX, y: e.clientY};});
    setInterval(main, 1000 / FPS);
}());

function main() {
    cnv.width = window.innerWidth;
    cnv.height = window.innerHeight;
    bob.updateBob();
    bob.drawBob();
};

function lerp(a, b, t) {
    return a + (b - a) * t;
};