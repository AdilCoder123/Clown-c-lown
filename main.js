nosey=0;
nosex=0;
function preload()
{
cn=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}
function setup()
{
canvas=createCanvas(500,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
video.size(500,500);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log("Pose net is activated");
}
function gotPoses(results)
{
   
    if(results.length>0)
    {
        console.log(results);
        nosey=results[0].pose.nose.y-10;
        nosex=results[0].pose.nose.x-10;
        console.log("x:"+results[0].pose.nose.x);
        console.log("y:"+results[0].pose.nose.y);
         
    
    }
       
}
function draw()
{
image(video,0,0,500,500);
fill(255,0,0);
stroke(0,0,0);
//circle(nosex,nosey,20);
image(cn,nosex,nosey,30,30);
}

function takephotofilter()
{
    save('Me-as-a-clown.png');
}