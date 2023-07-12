scoreleftwr=0;
song1_status="";
song2_status="";
song1="";
song2="";
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;

function preload(){
    song1=loadSound("song 1.mp3");
    song2=loadSound("Song 2.mp3");
}

function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video, modelLoaded)
    posenet.on("pose", gotPoses)
}

function modelLoaded(){
    console.log("Posenet is initialized");
}

function gotPoses(result){
    if(result.length>0){
        console.log(result);
        leftwristx=result[0].pose.leftWrist.x;
        leftwristy=result[0].pose.leftWrist.y;
        rightwristx=result[0].pose.rightWrist.x;
        rightwristy=result[0].pose.rightWrist.y;
        console.log("leftwristx="+leftwristx+" leftwristy="+leftwristy);     
        console.log("rightwristx="+rightwristx+" rightwristy="+rightwristy);     
        scoreleftwr=results[0].pose.keypoints[9].score;
        console.log("Score left wrist= "+scoreleftwr);
    }
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function draw(){
    image(video,0,0,600,400);
    fill("#FF0000");
    stroke("#FF0000");
    song1_staus.isPlaying();
    if(scoreleftwr>0.2){
        circle(leftwristx,leftwristy,20);
        song2.stop();
        if(song1_status==false){
            song1.play();
            document.getElementById("song").innerHTML="Song name is: People 👩👨 "
        }
    }
}