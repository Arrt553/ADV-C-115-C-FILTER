function preload(){

}
function setup(){
   var canvas = createCanvas(300,300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(300,300);
   video.hide();

   posenet = ml5.poseNet(video,modelLoaded);
   posenet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("PoseNet Model Loaded!");
}

function draw(){
image(video,0,0,300,300);
}
function takeSnapshot(){
    save("myfilterimg.png");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x=" + results[0].pose.nose.x);
        console.log("nose y=" + results[0].pose.nose.y);

    }
}
