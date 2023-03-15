video = "";
status = "";

function preload() {
    video = createVideo("video.mp4");
    video.hide();
}

function setup() {
    canvas = createCanvas(300,250);
    canvas.position(528,160);
}

function draw() {
    image(video,0,0,300,250);
}

function start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("MODEL LOADED");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}