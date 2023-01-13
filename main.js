img ="";

objects = [];

status = "";

function preload() {
   img = loadImage("dog-and-cat.png")
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Detectiong objects";
}

function modelLoaded() {
    console.log("model Loaded");
    status = true;
    objectDetector.detect(img, gotresults);
}

function gotresults(error, results) {
    if (error) {
        console.log(error);
    }
     console.log(results);
     objects = results;
}

function draw() {

    if(status != "") {

    }

    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("dog",45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 450);
    
    fill("#FF0000");
    text("cat",320, 120);
    noFill();
    stroke("#FF0000");
    rect(300,90,270,320);
}