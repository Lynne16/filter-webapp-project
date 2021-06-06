function preload(){

}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', getPoses);
}

Nose_X=0;
Nose_Y=0;

function getPoses(results)
{
    if(results.length > 0){
        console.log(results);
        Nose_X=results[0].pose.nose.x;
        Nose_Y=results[0].pose.nose.y;
        console.log("Nose X = " + results[0].pose.nose.x);
        console.log("Nose Y = " + results[0].pose.nose.y);
    }
}

function modelLoaded(){
    console.log('PoseNet Loaded');
}

function draw(){
    image(video, 0,0,300,300);

}

function take_snapshot(){
    save('myFilterImage.png');
}