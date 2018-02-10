var logo;
var blog;
var me;
var steem;
var themouse;
var top_left;
var top_right;
var bottom_left;
var bottom_right;
var in_middle;
var myCanvas;

function setup() {
  // put setup code here
    myCanvas = createCanvas(windowWidth-30, windowHeight-150, WEBGL);
    myCanvas.parent("myContainer")
    logo = loadImage("assets/logo.png");
    blog = loadImage("assets/blogpost.jpg");
    me = loadImage("assets/DA.png");
    steem = loadImage("assets/steem.png");
    themouse = loadImage("assets/mousemat.png");
}

function draw(){
    background(0);
    ambientLight(250, 250, 250)
    locX = mouseX;
    locY = mouseY;

    top_left = frameCount * 0.02;
    top_right = frameCount * 0.02;
    bottom_left = frameCount * 0.02;
    bottom_right = frameCount * 0.02;
    in_middle = frameCount * 0.02;

    if (locX > windowWidth/3 && locX < 2*windowWidth/3 && locY > windowHeight/3 && locY < 2*windowHeight/3)
    {
        in_middle = frameCount * 0.05;
    }
    if (locX < windowWidth/3 && locY < windowHeight/3)
    {
        top_left = frameCount * 0.05;
    }
    if (locX > 2*windowWidth/3 && locY < windowHeight/3)
    {
        top_right = frameCount * 0.05;
    }
    if (locX < windowWidth/3 && locY > 2*windowHeight/3)
    {
        bottom_left = frameCount * 0.05;
    }
    if (locX > 2*windowWidth/3 && locY > 2*windowHeight/3)
    {
        bottom_right = frameCount * 0.05;
    }


    push();
    rotateZ(in_middle);
    rotateX(in_middle);
    rotateY(in_middle);
    texture(me);
    box(160);
    pop();

    translate(-300, -200, 0);
    push();
    rotateZ(-top_left);
    rotateX(top_left);
    rotateY(top_left);
    texture(logo);
    box(160);
    pop();

    translate(600, 0, 0);
    push();
    rotateZ(top_right);
    rotateX(-top_right);
    rotateY(top_right);
    texture(blog);
    box(160);
    pop();


    translate(0, 400, 0);
    push();
    rotateZ(bottom_right);
    rotateX(bottom_right);
    rotateY(-bottom_right);
    texture(themouse);
    box(160);
    pop();

    translate(-600, 0, 0);
    push();
    rotateZ(bottom_left);
    rotateX(-bottom_left);
    rotateY(-bottom_left);
    texture(steem);
    box(160);
    pop();
}