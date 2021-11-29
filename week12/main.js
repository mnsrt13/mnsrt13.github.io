function setup() {
    createCanvas(displayWidth, displayHeight);
}
function draw() {
    let x = mouseX;
    let y = mouseY;
    let ix = width - mouseX;  // Inverse X
    let iy = height - mouseY; // Inverse Y

    let jx = width - mouseX - width/2;  // Inverse X
    let jy = height - mouseY; // Inverse Y

    let zx = width - mouseX - width/4;  // Inverse X
    let zy = height - mouseY; // Inverse Y
    

    background(126);

    fill(255, 150);
    ellipse(x, height/2, y, y);

    fill(0, 200);
    ellipse(ix, height/2, iy, iy);

    fill(0, 150);
    ellipse(zx, height/2, zy, zy);

    fill(0, 100)
    ellipse(jx, height/2, jy, jy)
}